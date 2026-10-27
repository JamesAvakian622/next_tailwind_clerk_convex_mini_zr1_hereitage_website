import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import Img from "@/components/Img";
import PageScope from "@/components/PageScope";

export const metadata: Metadata = pageMeta(
  "Acclaims & Accolades — MyZR1 Rarity",
  "The Corvette ZR1 and ZR1X have earned extraordinary recognition from automotive media, racing organizations, and industry bodies worldwide — proof that…",
);

const css = `
.img-grid-mb32 {
        margin-bottom: 32px;
      }
`;

export default function Page() {
  return (
    <PageScope styles={css}>
      <div className="breadcrumb">
        <Link href="/">Home</Link> › <Link href="/rarity">Rarity</Link> ›{" "}
        <span>Acclaims &amp; Accolades</span>
      </div>

      <div className="page-hero">
        <Img
          fallback="/c8-zr1.png"
          className="hero-bg"
          src="/assets/stars-stripes-c8-zr1-2026.png"
          alt="ZR1 Accolades"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-tag">Recognition</div>
          <h1>Acclaims &amp; Accolades</h1>
          <p>
            The Corvette ZR1 and ZR1X have earned extraordinary recognition from
            automotive media, racing organizations, and industry bodies
            worldwide — proof that American engineering leads the world.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar orange"></div>
            <h2>Performance Records</h2>
          </div>
          <div className="img-grid img-grid-mb32">
            <Img
              hideOnError
              src="/images/speed-records-hero.png"
              alt="Speed Records"
            />{" "}
            <Img
              hideOnError
              src="/assets/zr1-vs-zr1-dragtimes-clean.png"
              alt="Drag Times"
            />{" "}
            <Img hideOnError src="/driving-fast.png" alt="Track Records" />
          </div>
          <div className="card-grid">
            <div className="card">
              <div className="card-img-placeholder">🏁</div>
              <div className="card-body">
                <span className="card-tag tag-orange">Track</span>
                <h3>Nürburgring Lap Times</h3>
                <p>
                  C6 ZR1: 7:26.4 (2008). C7 ZR1: sub-7:00 in ZTK trim. C8 ZR1:
                  among the fastest production cars ever at the 'Ring.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-img-placeholder">⚡</div>
              <div className="card-body">
                <span className="card-tag tag-blue">Speed</span>
                <h3>Top Speed Records</h3>
                <p>
                  C4 ZR-1: 175.1 mph world record (1990). C6 ZR1: 205 mph. C7
                  ZR1: 212 mph. C8 ZR1: 233 mph — the fastest Corvette ever.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-img-placeholder">🏎️</div>
              <div className="card-body">
                <span className="card-tag tag-green">Drag</span>
                <h3>Quarter-Mile Performance</h3>
                <p>
                  C8 ZR1 runs the quarter mile in under 10 seconds — a benchmark
                  that puts it alongside purpose-built supercars costing 3–10×
                  as much.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="bar purple"></div>
            <h2>Media Recognition</h2>
          </div>
          <div className="two-col">
            <div>
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Award / Recognition</th>
                    <th>Generation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Motor Trend Car of the Year</td>
                    <td>Multiple ZR1 eras</td>
                  </tr>
                  <tr>
                    <td>Road &amp; Track Performance Car</td>
                    <td>C6, C7, C8 ZR1</td>
                  </tr>
                  <tr>
                    <td>Car and Driver 10 Best</td>
                    <td>C6, C7, C8 ZR1</td>
                  </tr>
                  <tr>
                    <td>MotorWeek Driver's Choice</td>
                    <td>C8 ZR1</td>
                  </tr>
                  <tr>
                    <td>Hagerty Bull Market</td>
                    <td>C4, C6 ZR1</td>
                  </tr>
                  <tr>
                    <td>Fastest American Production Car</td>
                    <td>Every ZR1 era</td>
                  </tr>
                  <tr>
                    <td>Best Hypercar Value</td>
                    <td>C8 ZR1X (multiple)</td>
                  </tr>
                  <tr>
                    <td>NCM Inductee</td>
                    <td>All generations</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <div className="link-section">
                <h3>Related Rarity Pages</h3>
                <div className="link-list">
                  <Link href="/rarity/generations" className="link-item">
                    <div className="li-icon">🏎️</div>
                    <div className="li-text">
                      <span className="li-label">Generation Breakdown</span>
                      <span className="li-sub">Full spec comparison C3–C8</span>
                    </div>
                  </Link>{" "}
                  <Link href="/rarity/collector" className="link-item">
                    <div className="li-icon">💎</div>
                    <div className="li-text">
                      <span className="li-label">Collector Guide</span>
                      <span className="li-sub">Buy guidance &amp; scores</span>
                    </div>
                  </Link>{" "}
                  <Link href="/rarity/market" className="link-item">
                    <div className="li-icon">📈</div>
                    <div className="li-text">
                      <span className="li-label">Market Value</span>
                      <span className="li-sub">
                        Pricing trends &amp; forecasts
                      </span>
                    </div>
                  </Link>{" "}
                  <Link href="/engine/driving" className="link-item">
                    <div className="li-icon">⚡</div>
                    <div className="li-text">
                      <span className="li-label">Speed Records</span>
                      <span className="li-sub">0–60, ¼ mile, top speed</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageScope>
  );
}
