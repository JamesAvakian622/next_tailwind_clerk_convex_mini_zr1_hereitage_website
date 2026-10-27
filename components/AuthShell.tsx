"use client";

import styled from "styled-components";

/** Centered, on-brand container for Clerk's <SignIn/> / <SignUp/>. */
const Shell = styled.main`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
  padding: 48px 24px;
  background:
    radial-gradient(ellipse at top, rgba(56, 189, 248, 0.12), transparent 60%),
    var(--bg);

  h1 {
    font-size: 1.6rem;
    font-weight: 900;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: -0.01em;
  }
  p {
    color: var(--muted);
    font-size: 0.9rem;
    max-width: 420px;
    text-align: center;
  }
`;

export default function AuthShell({ title, blurb, children }: { title: string; blurb?: string; children: React.ReactNode }) {
  return (
    <Shell>
      <h1>{title}</h1>
      {blurb && <p>{blurb}</p>}
      {children}
    </Shell>
  );
}
