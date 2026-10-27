import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import Img from "@/components/Img";
import PageScope from "@/components/PageScope";

export const metadata: Metadata = pageMeta(
  "Collector Guide — MyZR1 Rarity",
  "Rarity scores, special edition details, what to look for at auction, and how ZR1 values compare to competing international exotics at every price point.",
);

const css = `
.table-container {
        overflow-x: auto;
      }
      .table-600 {
        min-width: 600px;
      }
`;

export default function Page() {
  return (
    <PageScope styles={css}>
      <div className="breadcrumb">
        <Link href="/">Home</Link> › <Link href="/rarity">Rarity</Link> ›{" "}
        <span>Collector Guide</span>
      </div>

      <div className="page-hero">
        <Img
          fallback="/c8-zr1x.png"
          className="hero-bg"
          src="/assets/stars-stripes-gallery-grid.png"
          alt="Collector Guide"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-tag">Collector Intelligence</div>
          <h1>ZR1 Collector Guide</h1>
          <p>
            Rarity scores, special edition details, what to look for at auction,
            and how ZR1 values compare to competing international exotics at
            every price point.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar green"></div>
            <h2>Rarity Scores by Generation</h2>
          </div>
          <div className="table-container">
            <table className="spec-table table-600">
              <thead>
                <tr>
                  <th>Generation</th>
                  <th>Units Built</th>
                  <th>Rarity Score</th>
                  <th>Collector Demand</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>C3 ZR1 (1970–72)</td>
                  <td>~25</td>
                  <td>★★★★★</td>
                  <td>Extreme</td>
                  <td>Rarest ZR1 ever — near-impossible to find</td>
                </tr>
                <tr>
                  <td>C4 ZR-1 (1990–95)</td>
                  <td>6,939</td>
                  <td>★★★★☆</td>
                  <td>Very High</td>
                  <td>Hagerty Bull Market; appreciating bly</td>
                </tr>
                <tr>
                  <td>C6 ZR1 (2009–13)</td>
                  <td>~6,200</td>
                  <td>★★★☆☆</td>
                  <td>High</td>
                  <td>Blue Devil transitioning to collector status</td>
                </tr>
                <tr>
                  <td>C7 ZR1 (2019)</td>
                  <td>~2,900</td>
                  <td>★★★★☆</td>
                  <td>Very High</td>
                  <td>Single-year production; ZTK commands premium</td>
                </tr>
                <tr>
                  <td>C8 ZR1 (2025–27)</td>
                  <td>TBD</td>
                  <td>★★★☆☆</td>
                  <td>High</td>
                  <td>Rapidly appreciating; early builds most valuable</td>
                </tr>
                <tr>
                  <td>C8 ZR1X Quail Ed.</td>
                  <td>Very few</td>
                  <td>★★★★★</td>
                  <td>Extreme</td>
                  <td>Monterey reveal; most exclusive ZR1X</td>
                </tr>
                <tr>
                  <td>C8 ZR1X Asymmetrical</td>
                  <td>Limited</td>
                  <td>★★★★★</td>
                  <td>Extreme</td>
                  <td>Two-tone red/black; instant collectible</td>
                </tr>
                <tr>
                  <td>C8 Stars &amp; Steel</td>
                  <td>250/yr</td>
                  <td>★★★★☆</td>
                  <td>Very High</td>
                  <td>Known quantity; 500 total across 2 years</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="bar purple"></div>
            <h2>Special Editions Gallery</h2>
          </div>
          <div className="three-col">
            <Link href="/zr1/zr1x" className="card">
              <Img
                fallback="/c8-zr1x.png"
                className="card-img"
                src="/c8-quail.png"
                alt="Quail ZR1X"
              />
              <div className="card-body">
                <span className="card-tag tag-purple">Rarity ★★★★★</span>
                <h3>Quail ZR1X</h3>
                <p>
                  Revealed at Monterey Car Week — extremely limited, most
                  exclusive ZR1X build.
                </p>
                <span className="card-link">View ZR1X →</span>
              </div>
            </Link>{" "}
            <Link href="/zr1/zr1x" className="card">
              <Img
                fallback="/c8-zr1x.png"
                className="card-img"
                src="/c8zr1x-ztk-asymetric-black.png"
                alt="Asymmetrical"
              />
              <div className="card-body">
                <span className="card-tag tag-orange">Rarity ★★★★★</span>
                <h3>Asymmetrical Edition</h3>
                <p>
                  Dramatic red/black split interior and exterior — a truly
                  unique collector piece.
                </p>
                <span className="card-link">View ZR1X →</span>
              </div>
            </Link>{" "}
            <Link href="/zr1/zr1x" className="card">
              <Img
                fallback="/assets/stars-stripes-c8-zr1-2026.png"
                className="card-img"
                src="/stars-and-steel-black.png"
                alt="Stars and Steel"
              />
              <div className="card-body">
                <span className="card-tag tag-blue">Rarity ★★★★☆</span>
                <h3>Stars &amp; Steel</h3>
                <p>
                  Limited to 250 units in 2026 and 250 in 2027 — 500 total
                  worldwide.
                </p>
                <span className="card-link">View ZR1X →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar orange"></div>
            <h2>Collector Buying Checklist</h2>
          </div>
          <div className="two-col">
            <div>
              <div className="link-section">
                <h3>What to Verify at Purchase</h3>
                <div className="link-list">
                  <div className="link-item">
                    <div className="li-icon">📋</div>
                    <div className="li-text">
                      <span className="li-label">
                        Original Monroney sticker
                      </span>
                      <span className="li-sub">
                        Confirms factory options &amp; RPO codes
                      </span>
                    </div>
                  </div>
                  <div className="link-item">
                    <div className="li-icon">🔢</div>
                    <div className="li-text">
                      <span className="li-label">VIN decoding</span>
                      <span className="li-sub">
                        Confirm ZR1 build code, engine match
                      </span>
                    </div>
                  </div>
                  <div className="link-item">
                    <div className="li-icon">📁</div>
                    <div className="li-text">
                      <span className="li-label">Service history</span>
                      <span className="li-sub">
                        Dealer records, warranty cards
                      </span>
                    </div>
                  </div>
                  <div className="link-item">
                    <div className="li-icon">🛞</div>
                    <div className="li-text">
                      <span className="li-label">
                        Numbers-matching drivetrain
                      </span>
                      <span className="li-sub">
                        Critical for C3 and C4 values
                      </span>
                    </div>
                  </div>
                  <div className="link-item">
                    <div className="li-icon">🎨</div>
                    <div className="li-text">
                      <span className="li-label">
                        Original paint &amp; panels
                      </span>
                      <span className="li-sub">
                        Repainted cars carry significant discount
                      </span>
                    </div>
                  </div>
                  <div className="link-item">
                    <div className="li-icon">🏁</div>
                    <div className="li-text">
                      <span className="li-label">Track use history</span>
                      <span className="li-sub">
                        HPDE use affects wear patterns
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="link-section">
                <h3 className="purple">Related Guides</h3>
                <div className="link-list">
                  <Link href="/rarity/market" className="link-item">
                    <div className="li-icon">📈</div>
                    <div className="li-text">
                      <span className="li-label">
                        Market Value &amp; Forecasts
                      </span>
                      <span className="li-sub">
                        Pricing trends by generation
                      </span>
                    </div>
                  </Link>{" "}
                  <Link href="/rarity/accolades" className="link-item">
                    <div className="li-icon">🏆</div>
                    <div className="li-text">
                      <span className="li-label">Acclaims &amp; Accolades</span>
                      <span className="li-sub">Awards that support value</span>
                    </div>
                  </Link>{" "}
                  <Link href="/service" className="link-item">
                    <div className="li-icon">🔧</div>
                    <div className="li-text">
                      <span className="li-label">Maintenance Guide</span>
                      <span className="li-sub">
                        Keeping your ZR1 in top condition
                      </span>
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
