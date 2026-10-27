import { mutationGeneric, queryGeneric } from "convex/server";

/** Create or refresh the Convex user row for the signed-in Clerk user. */
export const store = mutationGeneric({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Not authenticated");

    const existing = await ctx.db
      .query("zr1Users")
      .withIndex("by_token", (q) => q.eq("tokenIdentifier", identity.tokenIdentifier))
      .unique();

    const profile = {
      name: identity.name ?? identity.givenName ?? undefined,
      email: identity.email ?? undefined,
      imageUrl: identity.pictureUrl ?? undefined,
    };

    if (existing) {
      await ctx.db.patch(existing._id, profile);
      return existing._id;
    }
    return await ctx.db.insert("zr1Users", {
      tokenIdentifier: identity.tokenIdentifier,
      clerkId: identity.subject,
      createdAt: Date.now(),
      ...profile,
    });
  },
});

export const me = queryGeneric({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) return null;
    return await ctx.db
      .query("zr1Users")
      .withIndex("by_token", (q) => q.eq("tokenIdentifier", identity.tokenIdentifier))
      .unique();
  },
});
