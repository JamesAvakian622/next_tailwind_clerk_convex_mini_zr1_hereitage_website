import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "MyZR1 - MyZR1X — Corvette ZR1 Heritage & Collection",
    template: "%s — MyZR1 - MyZR1X",
  },
  description:
    "From the legendary 1970 C3 to the electrified 2026 ZR1X Hypercar — photo galleries, rarity guides, engineering deep-dives, performance mods, and owner albums.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Nav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
