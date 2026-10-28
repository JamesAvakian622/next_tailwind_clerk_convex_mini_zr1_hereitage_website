"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Show, UserButton } from "@clerk/nextjs";
import styled from "styled-components";
import Img from "./Img";

const LINKS = [
  { href: "/zr1", label: "ZR1" },
  { href: "/rarity", label: "Rarity" },
  { href: "/engine", label: "Engine" },
  { href: "/body", label: "Body" },
  { href: "/service", label: "Service" },
  { href: "/gallery", label: "Gallery" },
  { href: "/mods", label: "Mods 🛠️" },
  { href: "/tracks", label: "Tracks" },
  { href: "/about", label: "About" },
  { href: "/glossary", label: "Glossary" },
  { href: "/sitemap", label: "Sitemap" },
];

const Bar = styled.nav`
  position: sticky;
  top: 0;
  z-index: 200;
  background: var(--nav);
  border-bottom: 1px solid var(--border);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
`;

const Inner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  min-height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
`;

const Brand = styled(Link)`
  font-size: 1.3rem;
  font-weight: 800;
  color: #fff;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 10px;
  &:hover {
    color: #fff;
  }
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2px;
  flex-wrap: wrap;
  align-items: center;
`;

const NavLink = styled(Link)<{ $active?: boolean }>`
  padding: 6px 11px;
  border-radius: 6px;
  font-size: 0.82rem;
  font-weight: 500;
  color: ${(p) => (p.$active ? "#fff" : "var(--muted)")};
  background: ${(p) => (p.$active ? "rgba(56, 189, 248, 0.12)" : "transparent")};
  transition: color 0.2s, background 0.2s;
  &:hover {
    color: #fff;
    background: rgba(56, 189, 248, 0.12);
  }
`;

const Right = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  flex-shrink: 0;
`;

const Search = styled.input`
  width: 150px;
  height: 34px;
  padding: 0 12px;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: var(--card);
  color: var(--text);
  font-size: 0.82rem;
  outline: none;
  transition: width 0.2s ease, border-color 0.2s ease;
  &::placeholder {
    color: var(--muted);
    opacity: 0.7;
  }
  &:focus {
    width: 200px;
    border-color: var(--accent);
  }
`;

/** Filters the glossary <dt>/<dd> pairs on /glossary (same behaviour as the old inline script). */
function filterGlossary(q: string) {
  const query = q.trim().toLowerCase();
  document.querySelectorAll<HTMLElement>(".glossary-list dt").forEach((dt) => {
    const dd = dt.nextElementSibling?.tagName === "DD" ? (dt.nextElementSibling as HTMLElement) : null;
    const text = `${dt.textContent} ${dd?.textContent ?? ""}`.toLowerCase();
    const match = !query || text.includes(query);
    dt.style.display = match ? "" : "none";
    if (dd) dd.style.display = match ? "" : "none";
  });
}

export default function Nav() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Bar className="site-nav">
      <Inner>
        <Brand href="/">
          <Img src="/CoolJimmy.png" alt="Cool Jimmy" hideOnError />
          MyZR1 - MyZR1X
        </Brand>
        <NavLinks>
          {LINKS.map((l) => (
            <NavLink key={l.href} href={l.href} $active={isActive(l.href)}>
              {l.label}
            </NavLink>
          ))}
        </NavLinks>
        <Right>
          {pathname === "/glossary" && (
            <Search
              type="search"
              placeholder="Search"
              aria-label="Search this page"
              autoComplete="off"
              onChange={(e) => filterGlossary(e.target.value)}
            />
          )}
          <Show when="signed-in">
            <Link href="/account" className="btn btn-outline">
              Account
            </Link>
            <UserButton />
          </Show>
          <Show when="signed-out">
            <Link href="/sign-in" className="btn btn-outline">
              Sign In
            </Link>
            <Link href="/sign-up" className="btn btn-primary">
              Sign Up
            </Link>
          </Show>
        </Right>
      </Inner>
    </Bar>
  );
}
