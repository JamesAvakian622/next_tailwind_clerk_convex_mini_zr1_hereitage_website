import type { Metadata } from "next";
import Link from "next/link";
import Img from "@/components/Img";

export const metadata: Metadata = { title: "ZR1 Collection" };

export default function Page() {
  return (
    <>
      <div className="breadcrumb">
        <Link href="/">Home</Link> › <span>ZR1 Collection</span>
      </div>

      <div className="page-hero">
        <Img
          fallback="/horse.png"
          className="hero-bg"
          src="/c8-zr1.png"
          alt="ZR1 Collection"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-tag">ZR1 Index</div>
          <h1>The Complete ZR1 Collection</h1>
          <p>
            Six generations of American performance excellence — from the
            legendary 1970 C3 origins to the electrified 2026 ZR1X hypercar.
            King of the Hill, every era.
          </p>
          <div className="hero-ctas">
            <Link href="/zr1/c8" className="btn btn-primary">
              C8 ZR1 (2025–27)
            </Link>{" "}
            <Link href="/zr1/zr1x" className="btn btn-outline">
              C8 ZR1X Hypercar
            </Link>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar"></div>
            <h2>ZR1 Generations</h2>
            <p>Every generation in chronological order</p>
          </div>
          <div className="card-grid card-grid-lg">
            <Link href="/zr1/c3" className="card">
              <Img
                fallback="/c3-zr1.png"
                className="card-img"
                src="/engine-lt1-c3.png"
                alt="C3 ZR1"
              />
              <div className="card-body">
                <span className="card-tag tag-blue">1970–1972</span>
                <h3>C3 ZR1 — The Origin</h3>
                <p>
                  The special performance package that started the ZR1 legend.
                  The LT1 small-block V8 produced 370 HP and established "King
                  of the Hill" status.
                </p>
                <span className="card-link">View C3 ZR1</span>
              </div>
            </Link>{" "}
            <Link href="/zr1/c4" className="card">
              <Img
                fallback="/c4-zr1.png"
                className="card-img"
                src="/engine-lt5-c4.png"
                alt="C4 ZR-1"
              />
              <div className="card-body">
                <span className="card-tag tag-blue">1990–1995</span>
                <h3>C4 ZR-1 — King of the Hill</h3>
                <p>
                  The Lotus-engineered LT5 DOHC V8 redefined what a Corvette
                  could be. 405 HP and world speed records made it the most
                  technically advanced American car of its era.
                </p>
                <span className="card-link">View C4 ZR-1</span>
              </div>
            </Link>{" "}
            <Link href="/zr1/c6" className="card">
              <Img
                fallback="/c6-zr1.png"
                className="card-img"
                src="/engine-ls9-c6.png"
                alt="C6 ZR1"
              />
              <div className="card-body">
                <span className="card-tag tag-blue">2009–2013</span>
                <h3>C6 ZR1 — Blue Devil</h3>
                <p>
                  638 HP supercharged LS9, carbon-ceramic brakes, carbon-fiber
                  roof panel, and a 205 mph top speed. The Blue Devil dominated
                  every benchmark it faced.
                </p>
                <span className="card-link">View C6 ZR1</span>
              </div>
            </Link>{" "}
            <Link href="/zr1/c7" className="card">
              <Img
                fallback="/c7-zr1.png"
                className="card-img"
                src="/engine-lt5-c7.png"
                alt="C7 ZR1"
              />
              <div className="card-body">
                <span className="card-tag tag-blue">2019</span>
                <h3>C7 ZR1 — Peak Front-Engine</h3>
                <p>
                  755 HP supercharged LT5 V8, the ultimate evolution of the
                  front-engine Corvette ZR1. The last of the front-engine ZR1
                  bloodline — a fitting finale.
                </p>
                <span className="card-link">View C7 ZR1</span>
              </div>
            </Link>{" "}
            <Link href="/zr1/c8" className="card">
              <Img className="card-img" src="/c8-zr1.png" alt="C8 ZR1" />
              <div className="card-body">
                <span className="card-tag tag-green">2025–2027</span>
                <h3>C8 ZR1 — Modern Legend</h3>
                <p>
                  The mid-engine revolution arrives. 1,064 HP LT7
                  engineTwin-Turbo flat-plane V8, Tremec DCT, carbon ceramic
                  brakes, and active aerodynamics producing 1,000+ lb of
                  downforce.
                </p>
                <span className="card-link">View C8 ZR1</span>
              </div>
            </Link>{" "}
            <Link href="/zr1/zr1x" className="card">
              <Img className="card-img" src="/c8-zr1x.png" alt="C8 ZR1X" />
              <div className="card-body">
                <span className="card-tag tag-purple">2026+ · Hybrid</span>
                <h3>C8 ZR1X — The Hypercar</h3>
                <p>
                  Where electrification meets pure racing adrenaline. E-AWD,
                  1,250+ HP, Quail Edition, Asymmetrical Edition, and Stars
                  &amp; Steel. The hypercar that competes with exotics costing
                  10× as much.
                </p>
                <span className="card-link">View C8 ZR1X</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="bar purple"></div>
            <h2>ZR1 Index Links</h2>
            <p>Community, timeline, and reference pages</p>
          </div>
          <div className="two-col">
            <div className="link-section">
              <h3>Index &amp; Reference</h3>
              <div className="link-list">
                <Link href="/zr1/timeline" className="link-item">
                  <div className="li-icon">⏳</div>
                  <div className="li-text">
                    <span className="li-label">ZR1 Timeline</span>
                    <span className="li-sub">Milestones 1970–2030</span>
                  </div>
                </Link>{" "}
                <Link href="/rarity" className="link-item">
                  <div className="li-icon">💎</div>
                  <div className="li-text">
                    <span className="li-label">Rarity Guide</span>
                    <span className="li-sub">2025, 26 &amp; 27 ZR1</span>
                  </div>
                </Link>{" "}
                <Link href="/engine" className="link-item">
                  <div className="li-icon">🔥</div>
                  <div className="li-text">
                    <span className="li-label">Engine &amp; Tech</span>
                    <span className="li-sub">LT7, turbos, drivetrain</span>
                  </div>
                </Link>{" "}
                <Link href="/rarity/accolades" className="link-item">
                  <div className="li-icon">🏆</div>
                  <div className="li-text">
                    <span className="li-label">Acclaims &amp; Accolades</span>
                    <span className="li-sub">Renowned recognition</span>
                  </div>
                </Link>{" "}
                <Link href="/rarity/generations" className="link-item">
                  <div className="li-icon">🏎️</div>
                  <div className="li-text">
                    <span className="li-label">Generation Breakdown</span>
                    <span className="li-sub">C4–C8 specs compared</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="link-section">
              <h3 className="purple">Community</h3>
              <div className="link-list">
                <Link href="/rarity/community" className="link-item">
                  <div className="li-icon">🏛️</div>
                  <div className="li-text">
                    <span className="li-label">Enthusiast Clubs</span>
                    <span className="li-sub">Corvette communities</span>
                  </div>
                </Link>{" "}
                <Link href="/tracks" className="link-item">
                  <div className="li-icon">🏁</div>
                  <div className="li-text">
                    <span className="li-label">NCM Motorsports Park</span>
                    <span className="li-sub">Track &amp; car costs</span>
                  </div>
                </Link>{" "}
                <Link href="/gallery/owners" className="link-item">
                  <div className="li-icon">🏠</div>
                  <div className="li-text">
                    <span className="li-label">Owners Gallery</span>
                    <span className="li-sub">
                      My Garage &amp; member albums
                    </span>
                  </div>
                </Link>{" "}
                <Link href="/gallery/photos" className="link-item">
                  <div className="li-icon">📷</div>
                  <div className="li-text">
                    <span className="li-label">Photo Albums</span>
                    <span className="li-sub">All generation galleries</span>
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
