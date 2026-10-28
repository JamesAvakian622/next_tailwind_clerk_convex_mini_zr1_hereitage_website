"use client";

import { Component, type ReactNode } from "react";

/**
 * Isolates optional, backend-dependent UI (Convex saved pages). If a child throws
 * (e.g. Convex functions aren't deployed), show `fallback` instead of letting the
 * error bubble up and replace the whole page with "This page couldn't load".
 */
export default class SafeBoundary extends Component<
  { children: ReactNode; fallback?: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error: unknown) {
    console.error("[SafeBoundary]", error);
  }

  render() {
    return this.state.failed ? (this.props.fallback ?? null) : this.props.children;
  }
}
