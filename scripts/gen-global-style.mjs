// One-off generator: legacy/shared.css -> styles/shared-css.ts (minus nav/footer rules,
// which are rebuilt as real styled-components in components/Nav.tsx & Footer.tsx).
import fs from "node:fs";
const css = fs.readFileSync("legacy/shared.css", "utf8");
const drop = /^\s*\.(site-nav|nav-|site-footer|footer-|copyright)/;
let out = css.replace(/(^|\n)((?:[^{}@\/\n][^{}]*)?)\{[^{}]*\}/g, (m, lead, sel) =>
  drop.test(sel) ? lead : m,
);
out = out.replace(/\n{3,}/g, "\n\n");
if (/`|\$\{/.test(out)) throw new Error("css contains template-literal chars");
fs.writeFileSync(
  "styles/shared-css.ts",
  `// Generated from legacy/shared.css by scripts/gen-global-style.mjs\nexport const sharedCss = \`${out}\`;\n`,
);
console.log("ok", out.length);
