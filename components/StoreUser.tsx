"use client";

import { useEffect } from "react";
import { useConvexAuth, useMutation } from "convex/react";
import { anyApi } from "convex/server";

/** Upserts the signed-in Clerk user into Convex once per session. */
export default function StoreUser() {
  const { isAuthenticated } = useConvexAuth();
  const store = useMutation(anyApi.users.store);

  useEffect(() => {
    if (isAuthenticated) store({}).catch(() => {});
  }, [isAuthenticated, store]);

  return null;
}
