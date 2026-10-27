"use client";

import Link from "next/link";
import styled from "styled-components";
import Img from "./Img";

const Wrap = styled.footer`
  background: var(--footer);
  border-top: 1px solid var(--border);
  padding: 48px 24px 28px;
`;
const Inner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;
const Brand = styled.div`
  text-align: center;
  margin-bottom: 36px;
  img {
    height: 80px;
    margin: 0 auto 12px;
    object-fit: contain;
  }
  h2 {
    font-size: 1.3rem;
    font-weight: 800;
    color: #fff;
    margin-bottom: 6px;
  }
  p {
    font-size: 0.85rem;
    color: var(--muted);
    max-width: 480px;
    margin: 0 auto;
  }
`;
const Cols = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 24px 16px;
  margin-bottom: 36px;
`;
const Col = styled.div`
  h3 {
    font-size: 0.78rem;
    font-weight: 800;
    color: #fff;
    margin-bottom: 10px;
  }
  a {
    display: block;
    font-size: 0.8rem;
    color: var(--muted);
    margin-bottom: 5px;
    &:hover {
      color: var(--accent);
    }
  }
`;
const Bottom = styled.div`
  border-top: 1px solid var(--border);
  padding-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
`;
const Copyright = styled.span`
  font-size: 0.76rem;
  color: #4b5563;
`;
const Legal = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  a {
    font-size: 0.78rem;
    color: var(--muted);
  }
`;
const Social = styled.div`
  display: flex;
  gap: 10px;
  a {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: var(--card);
    border: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--muted);
    transition:
      background 0.2s,
      color 0.2s;
    &:hover {
      background: var(--accent);
      color: #000;
    }
  }
`;

const COLS = [
  {
    title: "ZR1",
    links: [
      ["/zr1", "ZR1 Collection"],
      ["/zr1/c3", "C3 ZR1"],
      ["/zr1/c4", "C4 ZR-1"],
      ["/zr1/c6", "C6 ZR1"],
      ["/zr1/c7", "C7 ZR1"],
      ["/zr1/c8", "C8 ZR1"],
      ["/zr1/zr1x", "C8 ZR1X"],
      ["/zr1/timeline", "Timeline"],
    ],
  },
  {
    title: "Tech",
    links: [
      ["/engine", "Engine Hub"],
      ["/engine/lt7", "LT7 engine"],
      ["/engine/turbos", "Turbos"],
      ["/engine/drivetrain", "Drivetrain"],
      ["/engine/driving", "Driving"],
      ["/body", "Body"],
      ["/body/exterior", "Exterior"],
      ["/body/interior", "Interior"],
    ],
  },
  {
    title: "Explore",
    links: [
      ["/rarity", "Rarity Guide"],
      ["/gallery", "Gallery"],
      ["/mods", "Mods"],
      ["/tracks", "Tracks"],
      ["/service", "Service"],
      ["/about", "About Us"],
      ["/glossary", "Glossary"],
      ["/sitemap", "Sitemap"],
    ],
  },
];

const SOCIAL = [
  {
    href: "https://www.facebook.com/profile.php?id=100091998258369",
    label: "Facebook",
    d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    href: "https://x.com/javakian2025",
    label: "X",
    d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    href: "https://youtube.com",
    label: "YouTube",
    d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
];

export default function Footer() {
  return (
    <Wrap className="site-footer">
      <Inner>
        <Brand>
          <Img src="/CoolJimmy-footer.png" alt="Cool Jimmy" hideOnError />
          <h2>My ZR1 / My ZR1X Corvette</h2>
          <p>
            An Optical Automation Product — celebrating Chevrolet Corvette ZR1
            heritage from C3 to C8 ZR1X.
          </p>
        </Brand>
        <Cols>
          {COLS.map((c) => (
            <Col key={c.title}>
              <h3>{c.title}</h3>
              {c.links.map(([href, label]) => (
                <Link key={href} href={href}>
                  {label}
                </Link>
              ))}
            </Col>
          ))}
        </Cols>
        <Bottom>
          <Copyright>
            © {new Date().getFullYear()} Cool Jimmy, Optical Automation, LLC.
            All rights reserved.
          </Copyright>
          <Legal>
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/content-policy">Content</Link>
            <Link href="/cookie-policy">Cookies</Link>
          </Legal>
          <Social>
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener"
                aria-label={s.label}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d={s.d} />
                </svg>
              </a>
            ))}
          </Social>
        </Bottom>
      </Inner>
    </Wrap>
  );
}
