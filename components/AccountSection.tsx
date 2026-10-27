"use client";

import Link from "next/link";
import { Show, UserButton, useUser } from "@clerk/nextjs";

/** Replaces the old fake email/password forms on /about with real Clerk auth. */
export default function AccountSection() {
  const { user } = useUser();

  return (
    <section id="sign-in" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <div className="bar purple" />
          <h2>Account Access</h2>
        </div>
        <div className="two-col">
          <div className="card" style={{ padding: 32 }}>
            <div className="section-header" style={{ marginBottom: 20 }}>
              <div className="bar" />
              <h2 style={{ fontSize: "1.3rem" }}>Sign In</h2>
            </div>
            <p style={{ color: "var(--muted)", fontSize: "0.9rem", marginBottom: 20 }}>
              Access your Owners Gallery, saved content, and premium features. Sign in with your existing account.
            </p>
            <Show when="signed-out">
              <Link href="/sign-in" className="btn btn-primary" style={{ display: "inline-block", padding: "12px 24px" }}>
                Sign In
              </Link>
            </Show>
            <Show when="signed-in">
              <div className="flex items-center gap-3">
                <UserButton />
                <span style={{ color: "var(--text)" }}>
                  Signed in as {user?.primaryEmailAddress?.emailAddress ?? user?.username}
                </span>
              </div>
              <Link href="/account" className="btn btn-outline" style={{ display: "inline-block", marginTop: 16 }}>
                Go to your account
              </Link>
            </Show>
          </div>
          <div id="sign-up" className="card" style={{ padding: 32 }}>
            <div className="section-header" style={{ marginBottom: 20 }}>
              <div className="bar purple" />
              <h2 style={{ fontSize: "1.3rem" }}>Create Account</h2>
            </div>
            <p style={{ color: "var(--muted)", fontSize: "0.9rem", marginBottom: 20 }}>
              Join the MyZR1 community to submit photo albums, access premium content, and connect with ZR1 owners
              worldwide.
            </p>
            <Show when="signed-out">
              <Link href="/sign-up" className="btn btn-primary" style={{ display: "inline-block", padding: "12px 24px" }}>
                Create Account
              </Link>
            </Show>
            <Show when="signed-in">
              <p style={{ color: "var(--muted)" }}>You already have an account.</p>
            </Show>
          </div>
        </div>
      </div>
    </section>
  );
}
