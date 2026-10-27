import type { Metadata } from "next";
import Link from "next/link";
import Img from "@/components/Img";

export const metadata: Metadata = { title: "Rarity Guide" };

export default function Page() {
  return (
    <>
      <div className="breadcrumb">
        <Link href="/">Home</Link> › <span>Rarity Guide</span>
      </div>

      <div className="page-hero">
        <Img
          fallback="/c8-zr1x.png"
          className="hero-bg"
          src="/assets/stars-stripes-c8-zr1-2026.png"
          alt="ZR1 Rarity"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-tag">Collector Intelligence</div>
          <h1>ZR1 Rarity Guide</h1>
          <p>
            Generation scarcity scores, market forecasts, special editions,
            collector rankings, and the communities celebrating these
            extraordinary machines.
          </p>
          <div className="hero-ctas">
            <Link href="/rarity/collector" className="btn btn-primary">
              Collector Guide
            </Link>{" "}
            <Link href="/rarity/generations" className="btn btn-outline">
              Generation Breakdown
            </Link>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar"></div>
            <h2>Rarity Topics</h2>
            <p>Deep-dive guides for collectors and enthusiasts</p>
          </div>
          <div className="card-grid card-grid-lg">
            <Link href="/rarity/accolades" className="card">
              <Img
                fallback="/c8-zr1.png"
                className="card-img"
                src="/assets/stars-stripes-c8-zr1-2026.png"
                alt="Accolades"
              />
              <div className="card-body">
                <span className="card-tag tag-orange">Recognition</span>
                <h3>Acclaims &amp; Accolades</h3>
                <p>
                  Every major award, record, and media recognition the ZR1 and
                  ZR1X have earned — from Motor Trend to road tests worldwide.
                </p>
                <span className="card-link">View Accolades</span>
              </div>
            </Link>{" "}
            <Link href="/rarity/generations" className="card">
              <Img className="card-img" src="/c8-zr1.png" alt="Generations" />
              <div className="card-body">
                <span className="card-tag tag-blue">Specs</span>
                <h3>Generation Breakdown</h3>
                <p>
                  Side-by-side specification comparison of every ZR1 — C3
                  through C8 ZR1X. HP, torque, top speed, units built, and
                  collector value trajectory.
                </p>
                <span className="card-link">View Generations</span>
              </div>
            </Link>{" "}
            <Link href="/rarity/collector" className="card">
              <Img
                fallback="/c8-zr1x.png"
                className="card-img"
                src="/assets/stars-stripes-gallery-grid.png"
                alt="Collector Guide"
              />
              <div className="card-body">
                <span className="card-tag tag-green">Investing</span>
                <h3>Collector Guide</h3>
                <p>
                  Rarity scores, buy/sell guidance, what to look for at auction,
                  and how ZR1 values compare to competing exotics.
                </p>
                <span className="card-link">View Collector Guide</span>
              </div>
            </Link>{" "}
            <Link href="/rarity/market" className="card">
              <Img
                fallback="/c8-zr1.png"
                className="card-img"
                src="/images/speed-records-hero.png"
                alt="Market Value"
              />
              <div className="card-body">
                <span className="card-tag tag-purple">Market</span>
                <h3>Market Value &amp; Forecasts</h3>
                <p>
                  Historical pricing trends, current market analysis, and
                  projections for C8 ZR1 and ZR1X as they transition from new to
                  collector status.
                </p>
                <span className="card-link">View Market Data</span>
              </div>
            </Link>{" "}
            <Link href="/rarity/community" className="card">
              <Img
                fallback="/chevy-racing.png"
                className="card-img"
                src="/ncm-park.png"
                alt="Community"
              />
              <div className="card-body">
                <span className="card-tag tag-blue">Community</span>
                <h3>Clubs &amp; Communities</h3>
                <p>
                  NCM, enthusiast clubs, Horsepower Obsessed, Brink of Speed,
                  DragTimes, Ciocca Corvette — the people who live and breathe
                  ZR1.
                </p>
                <span className="card-link">View Community</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="bar orange"></div>
            <h2>Special Editions</h2>
            <p>Limited-production ZR1X models</p>
          </div>
          <div className="three-col">
            <Link href="/rarity/collector" className="card">
              <Img
                fallback="/c8-zr1x.png"
                className="card-img"
                src="/c8-quail.png"
                alt="Quail ZR1X"
              />
              <div className="card-body">
                <span className="card-tag tag-purple">Limited · Quail</span>
                <h3>Quail ZR1X</h3>
                <p>
                  Revealed at Monterey Car Week — the most exclusive and rare
                  ZR1X configuration available.
                </p>
                <span className="card-link">Details →</span>
              </div>
            </Link>{" "}
            <Link href="/rarity/collector" className="card">
              <Img
                fallback="/c8-zr1x.png"
                className="card-img"
                src="/c8zr1x-ztk-asymetric-black.png"
                alt="Asymmetrical"
              />
              <div className="card-body">
                <span className="card-tag tag-orange">
                  Limited · Asymmetrical
                </span>
                <h3>Asymmetrical Edition</h3>
                <p>
                  Signature two-tone red/black interior and exterior — a bold
                  visual statement for serious collectors.
                </p>
                <span className="card-link">Details →</span>
              </div>
            </Link>{" "}
            <Link href="/rarity/collector" className="card">
              <Img
                fallback="/assets/stars-stripes-c8-zr1-2026.png"
                className="card-img"
                src="/stars-and-steel-black.png"
                alt="Stars and Steel"
              />
              <div className="card-body">
                <span className="card-tag tag-blue">250 Units/Year</span>
                <h3>Stars &amp; Steel Edition</h3>
                <p>
                  Limited to 250 units in 2026 and 250 in 2027 — a patriotic
                  collector-edition with unique badging and trim.
                </p>
                <span className="card-link">Details →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar purple"></div>
            <h2>Quick Reference</h2>
          </div>
          <div className="two-col">
            <div className="link-section">
              <h3>Rarity Links</h3>
              <div className="link-list">
                <Link href="/rarity/accolades" className="link-item">
                  <div className="li-icon">🏆</div>
                  <div className="li-text">
                    <span className="li-label">Acclaims &amp; Accolades</span>
                    <span className="li-sub">Awards &amp; recognition</span>
                  </div>
                </Link>{" "}
                <Link href="/rarity/generations" className="link-item">
                  <div className="li-icon">🏎️</div>
                  <div className="li-text">
                    <span className="li-label">Generation Breakdown</span>
                    <span className="li-sub">C4–C8 specs compared</span>
                  </div>
                </Link>{" "}
                <Link href="/rarity/collector" className="link-item">
                  <div className="li-icon">💎</div>
                  <div className="li-text">
                    <span className="li-label">Collector Guide</span>
                    <span className="li-sub">Scores &amp; buy guidance</span>
                  </div>
                </Link>{" "}
                <Link href="/rarity/market" className="link-item">
                  <div className="li-icon">📈</div>
                  <div className="li-text">
                    <span className="li-label">Market Value</span>
                    <span className="li-sub">Forecasts &amp; charts</span>
                  </div>
                </Link>{" "}
                <Link href="/rarity/community" className="link-item">
                  <div className="li-icon">🏛️</div>
                  <div className="li-text">
                    <span className="li-label">Clubs &amp; Communities</span>
                    <span className="li-sub">NCM, enthusiast groups</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="link-section">
              <h3 className="purple">Related Sections</h3>
              <div className="link-list">
                <Link href="/zr1/zr1x" className="link-item">
                  <Img className="li-img" src="/c8-zr1x.png" alt="ZR1X" />
                  <div className="li-text">
                    <span className="li-label">C8 ZR1X Hypercar</span>
                    <span className="li-sub">E-AWD, 1,250+ HP</span>
                  </div>
                </Link>{" "}
                <Link href="/engine/lt7" className="link-item">
                  <Img className="li-img" src="/engine-lt7-c8.png" alt="LT7" />
                  <div className="li-text">
                    <span className="li-label">LT7 engine</span>
                    <span className="li-sub">1,064 HP Twin-Turbo</span>
                  </div>
                </Link>{" "}
                <Link href="/tracks" className="link-item">
                  <Img className="li-img" src="/ncm-park.png" alt="NCM" />
                  <div className="li-text">
                    <span className="li-label">NCM Motorsports Park</span>
                    <span className="li-sub">Track days &amp; events</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
