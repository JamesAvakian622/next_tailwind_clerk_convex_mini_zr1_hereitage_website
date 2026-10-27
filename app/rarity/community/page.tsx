import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import Img from "@/components/Img";

export const metadata: Metadata = pageMeta(
  "Community & Clubs — MyZR1 Rarity",
  "The people who live and breathe Corvette ZR1 — from the National Corvette Museum in Bowling Green to YouTube channels with millions of subscribers tracking…",
);

export default function Page() {
  return (
    <>
      <div className="breadcrumb">
        <Link href="/">Home</Link> › <Link href="/rarity">Rarity</Link> ›{" "}
        <span>Community &amp; Clubs</span>
      </div>

      <div className="page-hero">
        <Img
          fallback="/chevy-racing.png"
          className="hero-bg"
          src="/ncm-park.png"
          alt="Community"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-tag">Enthusiast Community</div>
          <h1>ZR1 Clubs &amp; Communities</h1>
          <p>
            The people who live and breathe Corvette ZR1 — from the National
            Corvette Museum in Bowling Green to YouTube channels with millions
            of subscribers tracking every ZR1 development.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar green"></div>
            <h2>Enthusiast Clubs</h2>
          </div>
          <div className="card-grid card-grid-lg">
            <Link href="/tracks" className="card">
              <Img
                className="card-img"
                src="/ncm-park.png"
                alt="NCM Motorsports Park"
              />
              <div className="card-body">
                <span className="card-tag tag-blue">Museum &amp; Track</span>
                <h3>National Corvette Museum</h3>
                <p>
                  Bowling Green, KY — home of Corvette heritage and the adjacent
                  NCM Motorsports Park, a 3.15-mile road course open to ZR1
                  owners for HPDE and club track days.
                </p>
                <span className="card-link">View Tracks →</span>
              </div>
            </Link>{" "}
            <Link href="/tracks" className="card">
              <Img
                fallback="/driving-fast.png"
                className="card-img"
                src="/brink.png"
                alt="Brink of Speed"
              />
              <div className="card-body">
                <span className="card-tag tag-orange">YouTube</span>
                <h3>Brink of Speed</h3>
                <p>
                  Acceleration and speed testing channel — detailed drag strip
                  runs, roll-race videos, and deep performance comparisons of
                  the C8 ZR1 vs supercars.
                </p>
                <span className="card-link">View Community →</span>
              </div>
            </Link>{" "}
            <Link href="/tracks" className="card">
              <Img
                fallback="/driving1.png"
                className="card-img"
                src="/images/horsepower-obsessed-logo.png"
                alt="Horsepower Obsessed"
              />
              <div className="card-body">
                <span className="card-tag tag-purple">YouTube</span>
                <h3>Horsepower Obsessed</h3>
                <p>
                  Track walkarounds, tuning updates, and enthusiast content
                  covering every ZR1 and ZR1X development from reveal to
                  delivery.
                </p>
                <span className="card-link">View Community →</span>
              </div>
            </Link>{" "}
            <Link href="/tracks" className="card">
              <Img
                fallback="/chevy-racing.png"
                className="card-img"
                src="/five-drivers.png"
                alt="Drivers"
              />
              <div className="card-body">
                <span className="card-tag tag-green">Racing</span>
                <h3>Corvette Racing</h3>
                <p>
                  Chevrolet's factory GT racing program — endurance racing from
                  C5-R through C8.R and Z06 GT3.R, keeping Corvette at the front
                  of international sports car racing.
                </p>
                <span className="card-link">View Gallery →</span>
              </div>
            </Link>{" "}
            <Link href="/tracks" className="card">
              <Img
                className="card-img"
                src="/driving-fast.png"
                alt="DragTimes"
              />
              <div className="card-body">
                <span className="card-tag tag-blue">Drag Racing</span>
                <h3>DragTimes</h3>
                <p>
                  Quarter-mile runs, 0–60 testing, and POV features — the go-to
                  source for objective C8 ZR1 performance data at the strip.
                </p>
                <span className="card-link">View Community →</span>
              </div>
            </Link>{" "}
            <Link href="/tracks" className="card">
              <Img
                fallback="/ncm-park.png"
                className="card-img"
                src="/images/performance-build-center.png"
                alt="NCM Build Center"
              />
              <div className="card-body">
                <span className="card-tag tag-orange">Factory</span>
                <h3>NCM Engine Build Center</h3>
                <p>
                  Watch your own LT7 engine assembled by hand in Bowling Green.
                  A unique owner experience available at the Corvette
                  Performance Build Center adjacent to the NCM.
                </p>
                <span className="card-link">View Tracks →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="bar purple"></div>
            <h2>Dealer Community</h2>
          </div>
          <div className="two-col">
            <div>
              <div className="link-section">
                <h3>Top ZR1 Dealers</h3>
                <div className="link-list">
                  <div className="link-item">
                    <div className="li-icon">🏬</div>
                    <div className="li-text">
                      <span className="li-label">Ciocca Corvette</span>
                      <span className="li-sub">
                        World's largest Corvette dealership
                      </span>
                    </div>
                  </div>
                  <div className="link-item">
                    <div className="li-icon">🏎️</div>
                    <div className="li-text">
                      <span className="li-label">Rick Corvette Conti</span>
                      <span className="li-sub">
                        Dealer news &amp; allocation tracking
                      </span>
                    </div>
                  </div>
                  <div className="link-item">
                    <div className="li-icon">🏁</div>
                    <div className="li-text">
                      <span className="li-label">Corvette Mike</span>
                      <span className="li-sub">
                        Specialist in pre-owned Corvettes
                      </span>
                    </div>
                  </div>
                  <div className="link-item">
                    <div className="li-icon">📋</div>
                    <div className="li-text">
                      <span className="li-label">NCM Insurance</span>
                      <span className="li-sub">
                        Collectible car coverage for ZR1 owners
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="link-section">
                <h3 className="green">Connect</h3>
                <div className="link-list">
                  <Link href="/tracks" className="link-item">
                    <div className="li-icon">🏁</div>
                    <div className="li-text">
                      <span className="li-label">Race Track Directory</span>
                      <span className="li-sub">Find a track near you</span>
                    </div>
                  </Link>{" "}
                  <Link href="/gallery/owners" className="link-item">
                    <div className="li-icon">🏠</div>
                    <div className="li-text">
                      <span className="li-label">
                        My Garage — Owners Gallery
                      </span>
                      <span className="li-sub">Share your ZR1 build</span>
                    </div>
                  </Link>{" "}
                  <Link href="/about" className="link-item">
                    <div className="li-icon">✉️</div>
                    <div className="li-text">
                      <span className="li-label">Contact Us</span>
                      <span className="li-sub">Get in touch with the team</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
