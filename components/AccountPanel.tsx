"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useConvexAuth, useMutation, useQuery } from "convex/react";
import { anyApi } from "convex/server";
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

const Form = styled.form`
  display: grid;
  gap: 10px;
  input,
  select,
  textarea {
    padding: 10px 14px;
    border-radius: 8px;
    background: var(--card2);
    border: 1px solid var(--border);
    color: var(--text);
    font: inherit;
    font-size: 0.9rem;
    outline: none;
    &:focus {
      border-color: var(--accent);
    }
  }
  button {
    border: none;
    padding: 12px;
    font-size: 0.95rem;
    cursor: pointer;
  }
  button:disabled {
    opacity: 0.6;
    cursor: wait;
  }
`;

type Favorite = { _id: string; path: string; title?: string };
type Submission = { _id: string; title: string; generation: string; status: string };

export default function AccountPanel({ name, email }: { name: string; email: string }) {
  const { isAuthenticated } = useConvexAuth();
  const favorites = useQuery(anyApi.favorites.list, isAuthenticated ? {} : "skip") as Favorite[] | undefined;
  const removeFavorite = useMutation(anyApi.favorites.remove);

  const [items, setItems] = useState<Submission[]>([]);
  const [state, setState] = useState<"idle" | "saving" | "done" | "error">("idle");
  const [error, setError] = useState("");

  const loadSubmissions = useCallback(async () => {
    const res = await fetch("/api/submissions");
    if (res.ok) setItems((await res.json()).items);
  }, []);

  useEffect(() => {
    loadSubmissions();
  }, [loadSubmissions]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setState("saving");
    setError("");
    const res = await fetch("/api/submissions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      form.reset();
      setState("done");
      loadSubmissions();
    } else {
      setState("error");
      setError((await res.json().catch(() => null))?.error ?? "Something went wrong");
    }
  }

  return (
    <Wrap>
      <div>
        <h1>Welcome, {name}</h1>
        <p className="sub">{email}</p>
      </div>

      <Grid>
        <Panel>
          <h2>Saved pages</h2>
          <p className="hint">Use the ☆ button in the nav on any page to save it here. Stored in Convex.</p>
          {favorites === undefined ? (
            <p className="hint">Loading…</p>
          ) : favorites.length === 0 ? (
            <p className="hint">Nothing saved yet.</p>
          ) : (
            <ul>
              {favorites.map((f) => (
                <li key={f._id}>
                  <Link href={f.path}>{f.title?.replace(/ — MyZR1 - MyZR1X$/, "") || f.path}</Link>
                  <button onClick={() => removeFavorite({ id: f._id })} aria-label="Remove">
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          )}
        </Panel>

        <Panel>
          <h2>Submit to the Owners Gallery</h2>
          <p className="hint">Tell us about your ZR1 / ZR1X. Submissions are stored in MongoDB for review.</p>
          <Form onSubmit={onSubmit}>
            <input name="title" placeholder="Title (e.g. My 2026 ZR1X)" required maxLength={120} />
            <select name="generation" required defaultValue="">
              <option value="" disabled>
                Generation
              </option>
              {["C3", "C4", "C6", "C7", "C8", "ZR1X"].map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
            <input name="imageUrl" type="url" placeholder="Photo URL (optional)" />
            <textarea name="message" rows={4} placeholder="Tell your story…" maxLength={2000} />
            <button className="btn btn-primary" disabled={state === "saving"}>
              {state === "saving" ? "Submitting…" : "Submit"}
            </button>
            {state === "done" && <p className="hint">Thanks — submitted for review.</p>}
            {state === "error" && <p className="hint" style={{ color: "#f87171" }}>{error}</p>}
          </Form>
        </Panel>

        <Panel>
          <h2>Your submissions</h2>
          <p className="hint">Pending items are reviewed before appearing publicly.</p>
          {items.length > 0 ? (
            <ul>
              {items.map((s) => (
                <li key={s._id}>
                  <span>
                    {s.title} <span style={{ color: "var(--muted)" }}>· {s.generation}</span>
                  </span>
                  <span style={{ color: "var(--accent)", textTransform: "capitalize" }}>{s.status}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="hint">No submissions yet.</p>
          )}
        </Panel>
      </Grid>
    </Wrap>
  );
}
