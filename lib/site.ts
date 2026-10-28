/**
 * Single source of truth for site identity, used by metadata, JSON-LD,
 * robots.txt and sitemap.xml.
 *
 * Canonical domain: TheVetteWeb.com. Override per environment with
 * NEXT_PUBLIC_CANONICAL_URL (e.g. a Vercel preview or http://localhost:3000).
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_CANONICAL_URL || "https://thevetteweb.com"
).replace(/\/$/, "");

export const SITE_NAME = "MyZR1 - MyZR1X";
export const SITE_TAGLINE = "Corvette ZR1 Heritage & Collection";
export const SITE_DESCRIPTION =
  "From the legendary 1970 C3 to the electrified 2026 ZR1X Hypercar — photo galleries, rarity guides, engineering deep-dives, performance mods, and owner albums.";

export const DEFAULT_OG_IMAGE = {
  url: "/assets/c8-zr1-2026.png",
  width: 1911,
  height: 1073,
  alt: "Corvette C8 ZR1",
};
export const LOGO = "/logo512.png";

export const PUBLISHER = {
  name: "Optical Automation, LLC",
  brand: "Cool Jimmy Software",
  email: "software@OpticalAutomation.com",
  url: "http://www.opticalautomation.com",
};

export const AUTHOR = {
  name: "James Avakian",
  alternateName: "Cool Jimmy",
  url: "http://www.cooljimmy.com",
};

export const COPYRIGHT =
  "© Cool Jimmy, Optical Automation, LLC. All rights reserved.";

/** Other properties owned by the same publisher. */
export const RELATED_DOMAINS = [
  "http://www.cooljimmy.com",
  "http://www.opticalautomation.com",
];

export const SOCIAL_PROFILES = [
  "https://www.facebook.com/profile.php?id=100091998258369",
  "https://x.com/javakian2025",
  "https://github.com/JamesAvakian622",
];

export const X_HANDLE = "@javakian2025";

export const absolute = (path: string) =>
  /^https?:\/\//.test(path)
    ? path
    : `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
