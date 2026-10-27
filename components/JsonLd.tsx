"use client";

import { usePathname } from "next/navigation";
import { breadcrumbs, jsonLdString, siteGraph } from "@/lib/jsonld";

/** Emits the site graph on every page, plus a BreadcrumbList for nested routes. */
export default function JsonLd() {
  const pathname = usePathname();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(siteGraph()) }}
      />
      {pathname !== "/" && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLdString(breadcrumbs(pathname)),
          }}
        />
      )}
    </>
  );
}
