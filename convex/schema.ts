import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Mirror of the Clerk user, created on first sign-in (see users.store).
  zr1Users: defineTable({
    tokenIdentifier: v.string(),
    clerkId: v.string(),
    name: v.optional(v.string()),
    email: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
    createdAt: v.number(),
  }).index("by_token", ["tokenIdentifier"]),

  // Pages a signed-in user has bookmarked ("Save" button in the nav).
  zr1Favorites: defineTable({
    userId: v.id("zr1Users"),
    path: v.string(),
    title: v.optional(v.string()),
    createdAt: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_user_path", ["userId", "path"]),
});
