import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";
import { SITE_URL } from "@/lib/site";

const PRIVATE = new Set(["account", "api", "sign-in", "sign-up"]);

/** Walk app/ for page.tsx files so new pages are picked up automatically. */
function routes(dir = path.join(process.cwd(), "app"), prefix = ""): string[] {
  const out: string[] = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (
      !e.isDirectory() ||
      e.name.startsWith("_") ||
      e.name.startsWith("[") ||
      PRIVATE.has(e.name)
    )
      continue;
    const route = `${prefix}/${e.name}`;
    if (fs.existsSync(path.join(dir, e.name, "page.tsx"))) out.push(route);
    out.push(...routes(path.join(dir, e.name), route));
  }
  return out;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ["", ...routes()].map((r) => ({
    url: `${SITE_URL}${r}`,
    lastModified: now,
    changeFrequency: r === "" ? "weekly" : "monthly",
    priority: r === "" ? 1 : r.split("/").length === 2 ? 0.8 : 0.6,
  }));
}
