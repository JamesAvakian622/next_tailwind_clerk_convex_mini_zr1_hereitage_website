import { clerkMiddleware } from "@clerk/nextjs/server";

/**
 * Site-wide gate: every page requires a signed-in Clerk user. Signed-out visitors
 * are redirected to /sign-in and returned to the page they asked for afterwards.
 *
 * Open on purpose:
 *  - /sign-in, /sign-up (and Clerk's nested callback routes) so people can log in
 *  - /robots.txt, /sitemap.xml so crawlers can read the rules (they still can't see pages)
 *  - /api/* handles its own auth and answers 401 JSON rather than redirecting
 *
 * Static files (images, css, js, …) are excluded by the matcher below.
 */
const OPEN_PATHS = [
  /^\/sign-in(\/.*)?$/,
  /^\/sign-up(\/.*)?$/,
  /^\/robots\.txt$/,
  /^\/sitemap\.xml$/,
  /^\/api(\/.*)?$/,
];

export default clerkMiddleware(async (auth, req) => {
  const { pathname } = req.nextUrl;
  if (OPEN_PATHS.some((re) => re.test(pathname))) return;
  await auth.protect();
});

export const config = {
  matcher: [
    // Skip Next.js internals and static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest|mp3|mp4|pdf)).*)",
    "/(api|trpc)(.*)",
  ],
};
