import { mutationGeneric, queryGeneric } from "convex/server";
import { v } from "convex/values";

async function currentUser(ctx: any) {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) return null;
  return await ctx.db
    .query("zr1Users")
    .withIndex("by_token", (q: any) => q.eq("tokenIdentifier", identity.tokenIdentifier))
    .unique();
}

export const list = queryGeneric({
  args: {},
  handler: async (ctx) => {
    const user = await currentUser(ctx);
    if (!user) return [];
    return await ctx.db
      .query("zr1Favorites")
      .withIndex("by_user", (q) => q.eq("userId", user._id))
      .order("desc")
      .collect();
  },
});

export const isSaved = queryGeneric({
  args: { path: v.string() },
  handler: async (ctx, { path }) => {
    const user = await currentUser(ctx);
    if (!user) return false;
    const row = await ctx.db
      .query("zr1Favorites")
      .withIndex("by_user_path", (q: any) => q.eq("userId", user._id).eq("path", path))
      .unique();
    return row !== null;
  },
});

export const toggle = mutationGeneric({
  args: { path: v.string(), title: v.optional(v.string()) },
  handler: async (ctx, { path, title }) => {
    const user = await currentUser(ctx);
    if (!user) throw new Error("Not authenticated");
    const row = await ctx.db
      .query("zr1Favorites")
      .withIndex("by_user_path", (q: any) => q.eq("userId", user._id).eq("path", path))
      .unique();
    if (row) {
      await ctx.db.delete(row._id);
      return false;
    }
    await ctx.db.insert("zr1Favorites", { userId: user._id, path, title, createdAt: Date.now() });
    return true;
  },
});

export const remove = mutationGeneric({
  args: { id: v.id("zr1Favorites") },
  handler: async (ctx, { id }) => {
    const user = await currentUser(ctx);
    const row = await ctx.db.get(id);
    if (!user || !row || row.userId !== user._id) throw new Error("Not found");
    await ctx.db.delete(id);
  },
});
