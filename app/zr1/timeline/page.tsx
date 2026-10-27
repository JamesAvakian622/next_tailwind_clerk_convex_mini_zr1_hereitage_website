import type { Metadata } from "next";
import Link from "next/link";
import Img from "@/components/Img";
import PageScope from "@/components/PageScope";

export const metadata: Metadata = { title: "ZR1 Timeline 1970–2030 — MyZR1" };

const css = `
.text-green {
        color: var(--green);
      }
      .text-purple {
        color: var(--purple);
      }
      .mt-32 {
        margin-top: 32px;
      }
      .timeline {
        position: relative;
        padding-left: 40px;
      }
      .timeline::before {
        content: "";
        position: absolute;
        left: 16px;
        top: 0;
        bottom: 0;
        width: 2px;
        background: var(--border);
      }
      .tl-item {
        position: relative;
        margin-bottom: 36px;
      }
      .tl-dot {
        position: absolute;
        left: -32px;
        top: 4px;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background: var(--accent);
        border: 2px solid var(--bg);
        z-index: 1;
      }
      .tl-dot.purple {
        background: var(--purple);
      }
      .tl-dot.green {
        background: var(--green);
      }
      .tl-year {
        font-size: 0.72rem;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        color: var(--accent);
        margin-bottom: 4px;
      }
      .tl-title {
        font-size: 1.05rem;
        font-weight: 700;
        color: #fff;
        margin-bottom: 6px;
      }
      .tl-body {
        font-size: 0.85rem;
        color: var(--muted);
        line-height: 1.7;
      }
      .tl-img {
        width: 100%;
        max-width: 320px;
        border-radius: 8px;
        border: 1px solid var(--border);
        margin-top: 10px;
        object-fit: cover;
        height: 160px;
      }
`;

export default function Page() {
  return (
    <PageScope styles={css}>
      <div className="breadcrumb">
        <Link href="/">Home</Link> › <Link href="/zr1">ZR1</Link> ›{" "}
        <span>ZR1 Timeline</span>
      </div>

      <div className="page-hero">
        <Img className="hero-bg" src="/c8-zr1x.png" alt="ZR1 Timeline" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-tag">1970 – 2030</div>
          <h1>ZR1 Timeline</h1>
          <p>
            Six decades of milestones — from the first 370 HP C3 package in 1970
            to the 1,250+ HP electrified hypercar arriving in 2026 and beyond.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <div className="section-header">
                <div className="bar"></div>
                <h2>Milestones</h2>
              </div>
              <div className="timeline">
                <div className="tl-item">
                  <div className="tl-dot"></div>
                  <div className="tl-year">1970</div>
                  <div className="tl-title">
                    C3 ZR1 Debuts — The Legend Begins
                  </div>
                  <div className="tl-body">
                    RPO ZR1 option introduced. The solid-lifter LT1 V8 makes 370
                    HP. Only ~25 units built. Sets the template for all future
                    ZR1s — the highest-performance Corvette option available.
                  </div>
                  <Img
                    hideOnError
                    className="tl-img"
                    src="/engine-lt1-c3.png"
                    alt="C3 LT1"
                  />
                </div>
                <div className="tl-item">
                  <div className="tl-dot"></div>
                  <div className="tl-year">1972</div>
                  <div className="tl-title">C3 ZR1 Ends Production</div>
                  <div className="tl-body">
                    The C3 ZR1 package is discontinued after only 3 model years.
                    The ZR1 name goes dormant for 18 years, building mystique
                    and desirability among collectors.
                  </div>
                </div>
                <div className="tl-item">
                  <div className="tl-dot"></div>
                  <div className="tl-year">1990</div>
                  <div className="tl-title">
                    C4 ZR-1 Returns — King of the Hill
                  </div>
                  <div className="tl-body">
                    The ZR1 badge returns after an 18-year absence with the
                    Lotus-developed LT5 DOHC V8. 375 HP at launch, wider rear
                    body, and a valet key to restrict power. America's fastest
                    production car.
                  </div>
                  <Img
                    hideOnError
                    className="tl-img"
                    src="/engine-lt5-c4.png"
                    alt="C4 LT5"
                  />
                </div>
                <div className="tl-item">
                  <div className="tl-dot"></div>
                  <div className="tl-year">1993</div>
                  <div className="tl-title">LT5 Upgraded to 405 HP</div>
                  <div className="tl-body">
                    Revised cylinder heads and camshafts boost the C4 ZR-1 to
                    405 HP. Sets a world speed record of 175.1 mph at the
                    Kennedy Space Center test track.
                  </div>
                </div>
                <div className="tl-item">
                  <div className="tl-dot"></div>
                  <div className="tl-year">1995</div>
                  <div className="tl-title">C4 ZR-1 Final Year</div>
                  <div className="tl-body">
                    Production ends after 6 model years and 6,939 total units.
                    The C4 ZR-1 remains one of the most technologically
                    ambitious American cars ever built.
                  </div>
                </div>
                <div className="tl-item">
                  <div className="tl-dot"></div>
                  <div className="tl-year">2009</div>
                  <div className="tl-title">C6 ZR1 — Blue Devil Unleashed</div>
                  <div className="tl-body">
                    The 638 HP LS9 supercharged ZR1 debuts. Carbon-ceramic
                    brakes, carbon-fiber panels, and a 205 mph top speed. The
                    Blue Devil sets a Nürburgring time of 7:26.4.
                  </div>
                  <Img
                    hideOnError
                    className="tl-img"
                    src="/engine-ls9-c6.png"
                    alt="C6 LS9"
                  />
                </div>
                <div className="tl-item">
                  <div className="tl-dot"></div>
                  <div className="tl-year">2013</div>
                  <div className="tl-title">C6 ZR1 Final Year</div>
                  <div className="tl-body">
                    5 model years, ~6,200 units. The C6 ZR1 proved American
                    engineering could compete with — and beat — exotics costing
                    3-5× as much.
                  </div>
                </div>
                <div className="tl-item">
                  <div className="tl-dot"></div>
                  <div className="tl-year">2019</div>
                  <div className="tl-title">C7 ZR1 — 755 HP Swan Song</div>
                  <div className="tl-body">
                    The final front-engine ZR1. The LT5 supercharged V8 produces
                    755 HP. Available with ZTK package delivering 950 lb of
                    downforce and a 212 mph top speed.
                  </div>
                  <Img
                    hideOnError
                    className="tl-img"
                    src="/engine-lt5-c7.png"
                    alt="C7 LT5"
                  />
                </div>
                <div className="tl-item">
                  <div className="tl-dot green"></div>
                  <div className="tl-year text-green">2025</div>
                  <div className="tl-title">C8 ZR1 — Mid-Engine Revolution</div>
                  <div className="tl-body">
                    The first mid-engine ZR1. The all-new LT7 engineTwin-Turbo
                    flat-plane V8 produces 1,064 HP. Active aerodynamics, Tremec
                    DCT, and a 233 mph top speed establish a new benchmark for
                    American performance.
                  </div>
                  <Img className="tl-img" src="/c8-zr1.png" alt="C8 ZR1" />
                </div>
                <div className="tl-item">
                  <div className="tl-dot purple"></div>
                  <div className="tl-year text-purple">2026</div>
                  <div className="tl-title">C8 ZR1X — The Hypercar Arrives</div>
                  <div className="tl-body">
                    The ZR1X adds E-AWD via a front electric motor to the LT7,
                    creating a 1,250+ HP hybrid hypercar. Stealth Mode, Quail
                    Edition, Asymmetrical Edition, Stars &amp; Steel. Many
                    automotive journalists call it the greatest performance
                    bargain of all time.
                  </div>
                  <Img className="tl-img" src="/c8-zr1x.png" alt="C8 ZR1X" />
                </div>
                <div className="tl-item">
                  <div className="tl-dot purple"></div>
                  <div className="tl-year text-purple">2027+</div>
                  <div className="tl-title">The ZR1X Evolves</div>
                  <div className="tl-body">
                    Continued development of the ZR1 and ZR1X platforms —
                    updated interior, expanded trim options, and further
                    refinement of the hybrid drivetrain. The ZR1X legacy
                    continues to grow.
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="section-header">
                <div className="bar purple"></div>
                <h2>At a Glance</h2>
              </div>
              <table className="spec-table">
                <tbody>
                  <tr>
                    <td>C3 ZR1</td>
                    <td>1970–1972 · 370 HP · ~25 units</td>
                  </tr>
                  <tr>
                    <td>C4 ZR-1</td>
                    <td>1990–1995 · 405 HP · 6,939 units</td>
                  </tr>
                  <tr>
                    <td>C5 ZR1</td>
                    <td>No C5 ZR1 was produced</td>
                  </tr>
                  <tr>
                    <td>C6 ZR1</td>
                    <td>2009–2013 · 638 HP · ~6,200 units</td>
                  </tr>
                  <tr>
                    <td>C7 ZR1</td>
                    <td>2019 only · 755 HP · ~2,900 units</td>
                  </tr>
                  <tr>
                    <td>C8 ZR1</td>
                    <td>2025–2027 · 1,064 HP · mid-engine</td>
                  </tr>
                  <tr>
                    <td>C8 ZR1X</td>
                    <td>2026+ · 1,250+ HP · E-AWD hybrid</td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-32">
                <div className="section-header">
                  <div className="bar orange"></div>
                  <h2>Quick Links</h2>
                </div>
                <div className="link-list">
                  <Link href="/zr1/c3" className="link-item">
                    <Img
                      hideOnError
                      className="li-img"
                      src="/engine-lt1-c3.png"
                      alt="C3"
                    />
                    <div className="li-text">
                      <span className="li-label">C3 ZR1 (1970–72)</span>
                      <span className="li-sub">370 HP LT1</span>
                    </div>
                  </Link>{" "}
                  <Link href="/zr1/c4" className="link-item">
                    <Img
                      hideOnError
                      className="li-img"
                      src="/engine-lt5-c4.png"
                      alt="C4"
                    />
                    <div className="li-text">
                      <span className="li-label">C4 ZR-1 (1990–95)</span>
                      <span className="li-sub">405 HP Lotus LT5</span>
                    </div>
                  </Link>{" "}
                  <Link href="/zr1/c6" className="link-item">
                    <Img
                      hideOnError
                      className="li-img"
                      src="/engine-ls9-c6.png"
                      alt="C6"
                    />
                    <div className="li-text">
                      <span className="li-label">C6 ZR1 (2009–13)</span>
                      <span className="li-sub">638 HP LS9 Blue Devil</span>
                    </div>
                  </Link>{" "}
                  <Link href="/zr1/c7" className="link-item">
                    <Img
                      hideOnError
                      className="li-img"
                      src="/engine-lt5-c7.png"
                      alt="C7"
                    />
                    <div className="li-text">
                      <span className="li-label">C7 ZR1 (2019)</span>
                      <span className="li-sub">755 HP LT5</span>
                    </div>
                  </Link>{" "}
                  <Link href="/zr1/c8" className="link-item">
                    <Img className="li-img" src="/c8-zr1.png" alt="C8" />
                    <div className="li-text">
                      <span className="li-label">C8 ZR1 (2025–27)</span>
                      <span className="li-sub">1,064 HP LT7</span>
                    </div>
                  </Link>{" "}
                  <Link href="/zr1/zr1x" className="link-item">
                    <Img className="li-img" src="/c8-zr1x.png" alt="ZR1X" />
                    <div className="li-text">
                      <span className="li-label">C8 ZR1X (2026+)</span>
                      <span className="li-sub">1,250+ HP E-AWD Hypercar</span>
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
