// Clerk <-> Convex. Requires:
//   1. A Clerk JWT template named "convex" (Clerk Dashboard -> JWT templates -> Convex)
//   2. `npx convex env set CLERK_JWT_ISSUER_DOMAIN https://<your-clerk-frontend-api>`
export default {
  providers: [
    {
      domain: process.env.CLERK_JWT_ISSUER_DOMAIN,
      applicationID: "convex",
    },
  ],
};
