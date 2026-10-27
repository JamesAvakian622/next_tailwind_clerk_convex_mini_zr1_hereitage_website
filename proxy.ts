import { clerkMiddleware } from "@clerk/nextjs/server";

// Provides Clerk auth context to pages and API routes. Access control is enforced
// where the data lives (see app/account/page.tsx and app/api/submissions/route.ts).
export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest|mp3|mp4|pdf)).*)",
    "/(api|trpc)(.*)",
  ],
};
