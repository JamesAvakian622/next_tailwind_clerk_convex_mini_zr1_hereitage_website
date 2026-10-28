"use client";

import Link from "next/link";
import styled from "styled-components";

const Wrap = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  padding: 48px 24px 72px;
  display: grid;
  gap: 24px;

  h1 {
    font-size: 2rem;
    font-weight: 900;
    color: #fff;
  }
  .sub {
    color: var(--muted);
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
`;

const Panel = styled.section`
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px;

  h2 {
    font-size: 1.05rem;
    font-weight: 800;
    color: #fff;
    margin-bottom: 4px;
  }
  .hint {
    font-size: 0.8rem;
    color: var(--muted);
    margin-bottom: 16px;
  }
  ul {
    list-style: none;
    display: grid;
    gap: 8px;
  }
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    padding: 8px 12px;
    background: var(--card2);
    border: 1px solid var(--border);
    border-radius: 8px;
    font-size: 0.85rem;
  }
  li button {
    background: none;
    border: none;
    color: var(--muted);
    cursor: pointer;
    &:hover {
      color: #f87171;
    }
  }
`;

export default function AccountPanel({ name, email }: { name: string; email: string }) {
  return (
    <Wrap>
      <div>
        <h1>Welcome, {name}</h1>
        <p className="sub">{email}</p>
      </div>

      <Grid>
        <Panel>
          <h2>Your account</h2>
          <p className="hint">
            You are signed in. Use the avatar in the top-right of the nav to manage your profile, security settings, or
            sign out.
          </p>
          <p className="hint">
            <Link href="/gallery">Browse the gallery</Link> · <Link href="/zr1">Explore the ZR1 timeline</Link>
          </p>
        </Panel>
      </Grid>
    </Wrap>
  );
}
