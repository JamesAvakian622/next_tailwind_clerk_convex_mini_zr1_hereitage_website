import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import {
  AUTHOR,
  COPYRIGHT,
  DEFAULT_OG_IMAGE,
  PUBLISHER,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  X_HANDLE,
} from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Corvette ZR1",
    "Corvette ZR1X",
    "C8 ZR1",
    "LT7",
    "Corvette ZR1 history",
    "Corvette owners gallery",
    "TheVetteWeb",
  ],
  authors: [{ name: AUTHOR.name, url: AUTHOR.url }],
  creator: PUBLISHER.name,
  publisher: PUBLISHER.name,
  category: "automotive",
  // Resolved per route against metadataBase, e.g. /engine/lt7 -> https://…/engine/lt7
  alternates: { canonical: "./" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    url: "./",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    site: X_HANDLE,
    creator: X_HANDLE,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url],
  },
  icons: { icon: "/favicon.ico", apple: "/logo192.png" },
  formatDetection: { telephone: false },
  other: { copyright: COPYRIGHT },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <JsonLd />
        <Providers>
          <Nav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
