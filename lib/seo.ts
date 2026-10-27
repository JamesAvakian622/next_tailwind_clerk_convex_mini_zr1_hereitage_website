import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, SITE_NAME, X_HANDLE } from "./site";

/**
 * Per-page metadata. Next.js replaces (not merges) `openGraph`/`twitter` set on
 * a page, so each page gets the full set here with its own title/description.
 * The title template ("… — MyZR1 - MyZR1X") is applied by the root layout.
 */
export function pageMeta(
  title: string,
  description: string,
  opts: { absoluteTitle?: boolean } = {},
): Metadata {
  const fullTitle = opts.absoluteTitle ? title : `${title} — ${SITE_NAME}`;
  return {
    title: opts.absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: "./" },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_US",
      title: fullTitle,
      description,
      url: "./",
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      site: X_HANDLE,
      creator: X_HANDLE,
      title: fullTitle,
      description,
      images: [DEFAULT_OG_IMAGE.url],
    },
  };
}
