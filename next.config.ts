import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: { styledComponents: true },
  async redirects() {
    // Keep old static-site URLs (…/index.html, …/page.html) working.
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/:path*/index.html", destination: "/:path*", permanent: true },
      { source: "/:path*.html", destination: "/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
