"use client";

import { useConvexAuth, useMutation, useQuery } from "convex/react";
import { anyApi } from "convex/server";
import { usePathname } from "next/navigation";
import styled from "styled-components";

const Star = styled.button<{ $on: boolean }>`
  width: 34px;
  height: 34px;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: ${(p) => (p.$on ? "rgba(56, 189, 248, 0.18)" : "transparent")};
  color: ${(p) => (p.$on ? "var(--accent)" : "var(--muted)")};
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
`;

/** Bookmark the current page (stored in Convex, per user). */
export default function SavePageButton() {
  const { isAuthenticated } = useConvexAuth();
  const path = usePathname();
  const saved = useQuery(anyApi.favorites.isSaved, isAuthenticated ? { path } : "skip") as boolean | undefined;
  const toggle = useMutation(anyApi.favorites.toggle);

  if (!isAuthenticated) return null;
  return (
    <Star
      $on={!!saved}
      title={saved ? "Remove from saved pages" : "Save this page"}
      aria-label={saved ? "Remove from saved pages" : "Save this page"}
      onClick={() => toggle({ path, title: document.title })}
    >
      {saved ? "★" : "☆"}
    </Star>
  );
}
