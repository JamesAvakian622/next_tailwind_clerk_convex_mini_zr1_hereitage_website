import {
  AUTHOR,
  LOGO,
  PUBLISHER,
  RELATED_DOMAINS,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  SOCIAL_PROFILES,
  absolute,
} from "./site";

/** Site-wide graph: WebSite + Organization (publisher) + Person (author). */
export function siteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        alternateName: [SITE_TAGLINE, "MyZR1", "MyZR1X", "MyCorvette ZR1"],
        description: SITE_DESCRIPTION,
        inLanguage: "en-US",
        publisher: { "@id": `${SITE_URL}/#organization` },
        author: { "@id": `${SITE_URL}/#author` },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: PUBLISHER.name,
        legalName: PUBLISHER.name,
        brand: { "@type": "Brand", name: PUBLISHER.brand },
        url: PUBLISHER.url,
        email: PUBLISHER.email,
        logo: {
          "@type": "ImageObject",
          url: absolute(LOGO),
          width: 512,
          height: 512,
        },
        founder: { "@id": `${SITE_URL}/#author` },
        sameAs: [...RELATED_DOMAINS, ...SOCIAL_PROFILES],
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#author`,
        name: AUTHOR.name,
        alternateName: AUTHOR.alternateName,
        url: AUTHOR.url,
        worksFor: { "@id": `${SITE_URL}/#organization` },
        sameAs: SOCIAL_PROFILES,
      },
    ],
  };
}

const LABELS: Record<string, string> = {
  zr1: "ZR1",
  zr1x: "ZR1X",
  c3: "C3",
  c4: "C4",
  c6: "C6",
  c7: "C7",
  c8: "C8",
  lt7: "LT7",
  "body-care": "Body Care",
  "valve-timing": "Valve Timing",
  drivemodes: "Drive Modes",
  nurburgring: "Nürburgring",
  "content-policy": "Content Policy",
  "cookie-policy": "Cookie Policy",
  terms: "Terms of Use",
  privacy: "Privacy Policy",
};
const label = (seg: string) =>
  LABELS[seg] ??
  seg
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

/** BreadcrumbList derived from the URL path (Home › Engine › LT7 …). */
export function breadcrumbs(pathname: string) {
  const segs = pathname.split("/").filter(Boolean);
  const items = [{ name: "Home", path: "/" }];
  segs.forEach((seg, i) =>
    items.push({
      name: label(seg),
      path: "/" + segs.slice(0, i + 1).join("/"),
    }),
  );
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absolute(it.path),
    })),
  };
}

/** Safe to inline in a <script>: escapes "<" so content can't close the tag. */
export const jsonLdString = (data: unknown) =>
  JSON.stringify(data).replace(/</g, "\\u003c");
