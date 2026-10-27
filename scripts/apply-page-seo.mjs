// One-off: give every converted page a unique description (taken from the
// legacy page's intro text) and switch its metadata to pageMeta().
import fs from "node:fs";
import path from "node:path";
import { load } from "cheerio";

const LEGACY = "legacy", APP = "app";
const files = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) { if (e.name !== "august_6_2026") walk(p); }
    else if (e.name.endsWith(".html")) files.push(p);
  }
})(LEGACY);

const clean = (s) => s.replace(/\s+/g, " ").trim();
function trunc(s, n = 158) {
  if (s.length <= n) return s;
  const cut = s.slice(0, n - 1);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:\-–—]$/, "") + "…";
}
const routeFile = (rel) => {
  let r = rel.replace(/\.html$/, "").replace(/\/?index$/, "");
  return path.join(APP, r, "page.tsx");
};

let done = 0;
for (const f of files) {
  const rel = path.relative(LEGACY, f).split(path.sep).join("/");
  if (["nav.html", "index copy.html", "sitemap.html"].includes(rel)) continue;
  const target = routeFile(rel);
  if (!fs.existsSync(target)) continue;
  let src = fs.readFileSync(target, "utf8");
  const m = src.match(/export const metadata: Metadata = \{[\s\S]*?\n?\};\n/);
  if (!m) continue;
  const block = m[0];
  const abs = /absolute:/.test(block);
  const t = block.match(/(?:absolute:|title:)\s*\n?\s*"((?:[^"\\]|\\.)*)"/);
  if (!t) { console.log("no title:", target); continue; }
  const title = JSON.parse(`"${t[1]}"`);
  const existing = block.match(/description:\s*\n?\s*"((?:[^"\\]|\\.)*)"/);
  let desc = existing ? JSON.parse(`"${existing[1]}"`) : "";
  if (!desc) {
    const $ = load(fs.readFileSync(f, "utf8"));
    const cand = [".hero-content p", ".home-hero p", ".page-hero p", ".section p", "main p", "p"];
    for (const sel of cand) {
      const txt = clean($(sel).filter((_, el) => clean($(el).text()).length > 50).first().text());
      if (txt) { desc = trunc(txt); break; }
    }
  }
  if (!desc) { console.log("no description:", target); continue; }
  const call = `export const metadata: Metadata = pageMeta(${JSON.stringify(title)}, ${JSON.stringify(desc)}${abs ? ", { absoluteTitle: true }" : ""});\n`;
  src = src.replace(block, call);
  if (!src.includes('from "@/lib/seo"')) src = src.replace('import type { Metadata } from "next";', 'import type { Metadata } from "next";\nimport { pageMeta } from "@/lib/seo";');
  fs.writeFileSync(target, src);
  done++;
}
console.log("updated", done, "pages");
