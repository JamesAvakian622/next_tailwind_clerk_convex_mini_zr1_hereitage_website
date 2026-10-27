// Converts legacy/**/*.html -> app/**/page.tsx (one-off migration script).
//
//  - strips the duplicated <nav>/<footer>/<script> (now in the root layout)
//  - moves each page's <style> into a <PageScope styles={…}> (styled-components)
//  - rewrites links/asset paths to Next routes and /public URLs
//  - converts inline styles + onerror fallbacks to JSX / <Img>
//
// Run: node scripts/convert-pages.mjs
import fs from "node:fs";
import path from "node:path";
import { load } from "cheerio";

const ROOT = process.cwd();
const LEGACY = path.join(ROOT, "legacy");
const APP = path.join(ROOT, "app");

const SKIP = new Set(["nav.html", "index copy.html", "sitemap.html"]);
const stats = { unknownTags: new Set(), droppedAttrs: new Set(), missingAssets: new Set(), pages: 0 };

// ---------- file discovery ----------
function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) return e.name === "august_6_2026" ? [] : walk(p);
    return e.name.endsWith(".html") ? [p] : [];
  });
}

/** legacy file (relative, posix) -> route like "/engine/lt7" */
function routeForFile(rel) {
  let r = "/" + rel.replace(/\.html$/, "");
  r = r.replace(/\/index$/, "");
  return r === "" ? "/" : r;
}

// ---------- URL rewriting ----------
function resolveUrl(href, fromRel, kind /* "link" | "asset" */) {
  if (!href) return href;
  if (/^(https?:)?\/\//.test(href) || /^(mailto:|tel:|data:|javascript:)/.test(href)) return href;
  if (href.startsWith("#")) return href;
  const [pathPart, ...rest] = href.split(/(?=[#?])/);
  const suffix = rest.join("");
  const fromDir = path.posix.dirname(fromRel);
  let abs = pathPart.startsWith("/")
    ? path.posix.normalize(pathPart.slice(1))
    : path.posix.normalize(path.posix.join(fromDir, pathPart));
  if (abs.startsWith("public/")) {
    const p = "/" + abs.slice("public/".length);
    if (!fs.existsSync(path.join(ROOT, "public", decodeURIComponent(p.slice(1))))) stats.missingAssets.add(p);
    return encodeURI(decodeURI(p)) + suffix;
  }
  if (abs.endsWith(".html") || abs === "" || abs === "." || abs.endsWith("/")) {
    if (abs === "." || abs === "") abs = "index.html";
    if (abs.endsWith("/")) abs += "index.html";
    if (abs === "sitemap.html") abs = "sitemap/index.html";
    return routeForFile(abs) + suffix;
  }
  return "/" + abs + suffix;
}

function fixCssUrls(css, fromRel) {
  return css.replace(/url\(\s*(['"]?)([^'")]+)\1\s*\)/g, (m, q, u) => {
    if (/^(data:|https?:|\/\/)/.test(u)) return m;
    return `url(${q}${resolveUrl(u, fromRel, "asset")}${q})`;
  });
}

// ---------- JSX serialisation ----------
const VOID = new Set(["img", "br", "hr", "input", "source", "col", "wbr", "track", "area", "embed"]);
const INLINE = new Set(["a", "span", "strong", "b", "em", "i", "code", "small", "sup", "sub", "img", "button", "label", "abbr", "mark", "u", "kbd", "svg", "time", "br"]);
const ATTR_MAP = {
  class: "className", for: "htmlFor", tabindex: "tabIndex", colspan: "colSpan", rowspan: "rowSpan",
  maxlength: "maxLength", autocomplete: "autoComplete", srcset: "srcSet", frameborder: "frameBorder",
  allowfullscreen: "allowFullScreen", crossorigin: "crossOrigin", datetime: "dateTime", readonly: "readOnly",
  value: "defaultValue", checked: "defaultChecked", autoplay: "autoPlay", playsinline: "playsInline",
  referrerpolicy: "referrerPolicy", cellpadding: "cellPadding", cellspacing: "cellSpacing", novalidate: "noValidate",
};
const BOOL = new Set(["controls", "disabled", "checked", "autoplay", "loop", "muted", "playsinline", "allowfullscreen", "required", "readonly", "selected", "hidden", "open"]);

const camel = (s) => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
const isInlineNode = (n) => n && (n.type === "text" || (n.type === "tag" && INLINE.has(n.name)));

function styleObject(str, fromRel) {
  const decls = [];
  let buf = "", depth = 0, quote = null;
  for (const ch of str) {
    if (quote) { buf += ch; if (ch === quote) quote = null; continue; }
    if (ch === '"' || ch === "'") { quote = ch; buf += ch; continue; }
    if (ch === "(") depth++;
    if (ch === ")") depth--;
    if (ch === ";" && depth === 0) { decls.push(buf); buf = ""; continue; }
    buf += ch;
  }
  if (buf.trim()) decls.push(buf);
  const entries = [];
  for (const d of decls) {
    const i = d.indexOf(":");
    if (i < 0) continue;
    const prop = d.slice(0, i).trim();
    let val = fixCssUrls(d.slice(i + 1).trim(), fromRel).replace(/\s+/g, " ");
    if (!prop || !val) continue;
    const key = prop.startsWith("--") ? JSON.stringify(prop) : prop.startsWith("-") ? camel(prop.replace(/^-(ms)-/, "ms-").replace(/^-/, "")).replace(/^./, (c) => c.toUpperCase()) : camel(prop);
    entries.push(`${key}: ${JSON.stringify(val)}`);
  }
  return `{{ ${entries.join(", ")} }}`;
}

function attrValue(v) {
  return /["&\\\n{}<>]/.test(v) ? `{${JSON.stringify(v)}}` : `"${v}"`;
}

const escText = (t) =>
  t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\{/g, "&#123;").replace(/\}/g, "&#125;");

function convertNode(node, ctx, parentName) {
  if (node.type === "comment" || node.type === "script" || node.type === "style") return "";
  if (node.type === "text") {
    if (parentName === "pre") return escText(node.data);
    const raw = node.data;
    const collapsed = raw.replace(/\s+/g, " ");
    if (!collapsed.trim()) {
      // whitespace-only: significant only between inline neighbours
      return isInlineNode(node.prev) && isInlineNode(node.next) && !(node.prev.type === "tag" && node.prev.name === "br") ? '{" "}' : "";
    }
    let out = escText(collapsed.trim());
    if (/^\s/.test(collapsed) && isInlineNode(node.prev)) out = '{" "}' + out;
    if (/\s$/.test(collapsed) && isInlineNode(node.next)) out = out + '{" "}';
    return out;
  }
  if (node.type !== "tag") return "";

  let name = node.name;
  const attrs = { ...node.attribs };

  // Custom placeholder injected by page overrides
  if (name === "accountsection") { ctx.imports.add("AccountSection"); return "<AccountSection />"; }

  let component = name;
  const out = [];
  let fallback = null, hideOnError = false;

  if (attrs.onerror) {
    const m = attrs.onerror.match(/this\.src\s*=\s*['"]([^'"]+)['"]/);
    if (m) fallback = resolveUrl(m[1], ctx.rel, "asset");
    if (/display\s*=\s*['"]none['"]/.test(attrs.onerror)) hideOnError = true;
    delete attrs.onerror;
  }

  if (name === "img") { component = "Img"; ctx.imports.add("Img"); }
  if (name === "a") {
    const href = attrs.href ?? "";
    const internal = href && !/^(https?:)?\/\//.test(href) && !/^(mailto:|tel:|#|javascript:)/.test(href);
    if (internal) {
      const resolved = resolveUrl(href, ctx.rel, "link");
      const isPage = !/\.[a-z0-9]{2,5}($|[#?])/i.test(resolved.split("#")[0]) ;
      if (isPage) { component = "Link"; ctx.imports.add("Link"); }
      attrs.href = resolved;
    }
  }
  if (!component.match(/^[A-Z]/) && !["div","section","span","p","a","h1","h2","h3","h4","h5","h6","ul","ol","li","dl","dt","dd","table","thead","tbody","tfoot","tr","td","th","strong","em","b","i","br","hr","pre","code","small","sup","sub","blockquote","header","main","article","aside","figure","figcaption","button","input","label","form","select","option","textarea","video","audio","source","svg","path","circle","rect","line","polyline","polygon","g","defs","title","details","summary","iframe","abbr","mark","u","kbd","time","nav","footer","caption","colgroup","col","ellipse","text","tspan","use","clipPath","linearGradient","stop"].includes(name)) stats.unknownTags.add(name);

  if (fallback) out.push(`fallback=${attrValue(fallback)}`);
  if (hideOnError) out.push("hideOnError");

  for (const [k, v] of Object.entries(attrs)) {
    const lower = k.toLowerCase();
    if (lower.startsWith("on")) { stats.droppedAttrs.add(`${ctx.rel}:${k}`); continue; }
    if (lower === "style") { out.push(`style=${styleObject(v, ctx.rel)}`); continue; }
    if (k === "src" || k === "poster") { out.push(`${k}=${attrValue(resolveUrl(v, ctx.rel, "asset"))}`); continue; }
    let jsxName = ATTR_MAP[lower] ?? (lower.startsWith("data-") || lower.startsWith("aria-") ? k : name === "svg" || ctx.inSvg ? camel(k) : k);
    if (name === "input" && lower === "value") jsxName = "defaultValue";
    if (name !== "input" && lower === "value") jsxName = "value";
    if (BOOL.has(lower) && (v === "" || v === lower)) { out.push(jsxName); continue; }
    out.push(`${jsxName}=${attrValue(v)}`);
  }

  const openTag = `<${component}${out.length ? " " + out.join(" ") : ""}`;
  if (VOID.has(name)) return `${openTag} />`;

  const prevSvg = ctx.inSvg;
  if (name === "svg") ctx.inSvg = true;
  const children = node.children.map((c) => convertNode(c, ctx, name)).join("");
  ctx.inSvg = prevSvg;
  if (!children.trim()) return `${openTag}></${component}>`;
  return `${openTag}>${children}</${component}>`;
}

// ---------- per-page overrides ----------
function applyOverrides($, rel) {
  if (rel === "about/index.html") {
    // Replace the fake email/password forms with the real Clerk-backed section.
    $("#sign-in").replaceWith("<accountsection></accountsection>");
  }
}

// ---------- main ----------
function convertFile(file) {
  const rel = path.relative(LEGACY, file).split(path.sep).join("/");
  if (SKIP.has(rel)) return;

  const $ = load(fs.readFileSync(file, "utf8"));
  const title = $("title").first().text().replace(/\s+/g, " ").trim().replace(/\s+[—-]\s+MyZR1 - MyZR1X$/i, "");
  const description = $('meta[name="description"]').attr("content");

  let css = "";
  $("style").each((_, el) => { css += $(el).text() + "\n"; });
  css = fixCssUrls(css.trim(), rel);
  if (/[`]|\$\{/.test(css) || css.includes("\\")) css = css.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");

  $("nav.site-nav, footer.site-footer, script, style").remove();
  applyOverrides($, rel);

  const ctx = { rel, imports: new Set(), inSvg: false };
  const body = $("body")[0].children.map((c) => convertNode(c, ctx, "body")).join("\n");

  const lines = [];
  lines.push(`import type { Metadata } from "next";`);
  if (ctx.imports.has("Link")) lines.push(`import Link from "next/link";`);
  if (ctx.imports.has("Img")) lines.push(`import Img from "@/components/Img";`);
  if (ctx.imports.has("AccountSection")) lines.push(`import AccountSection from "@/components/AccountSection";`);
  if (css) lines.push(`import PageScope from "@/components/PageScope";`);
  lines.push("");
  const meta = [`title: ${JSON.stringify(title || "MyZR1 - MyZR1X")}`];
  if (description) meta.push(`description: ${JSON.stringify(description)}`);
  const isHome = rel === "index.html";
  lines.push(isHome
    ? `export const metadata: Metadata = { title: { absolute: ${JSON.stringify(title || "MyZR1 - MyZR1X")} }${description ? `, description: ${JSON.stringify(description)}` : ""} };`
    : `export const metadata: Metadata = { ${meta.join(", ")} };`);
  lines.push("");
  if (css) lines.push(`const css = \`\n${css}\n\`;\n`);
  const fnName = "Page";
  lines.push(`export default function ${fnName}() {`);
  lines.push(`  return (`);
  lines.push(css ? `    <PageScope styles={css}>${body}</PageScope>` : `    <>${body}</>`);
  lines.push(`  );`);
  lines.push(`}`);
  lines.push("");

  const route = routeForFile(rel);
  const outDir = path.join(APP, route === "/" ? "" : route);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "page.tsx"), lines.join("\n"));
  stats.pages++;
  console.log(`${rel.padEnd(28)} -> app${route === "/" ? "" : route}/page.tsx`);
}

for (const f of walk(LEGACY)) convertFile(f);

console.log("\npages:", stats.pages);
console.log("unknown tags:", [...stats.unknownTags]);
console.log("dropped attrs:", [...stats.droppedAttrs]);
console.log("missing assets:", [...stats.missingAssets]);
