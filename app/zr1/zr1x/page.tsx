import type { Metadata } from "next";
import Link from "next/link";
import Img from "@/components/Img";
import PageScope from "@/components/PageScope";

export const metadata: Metadata = {
  title: "C8 ZR1X (2026+) — MyZR1X Hypercar",
};

const css = `
.bg-purple-text-white {
        background: var(--purple);
        color: #fff;
      }
      .muted-text-mb14 {
        color: var(--muted);
        line-height: 1.8;
        margin-bottom: 14px;
      }
      .flex-tags-mt18 {
        display: flex;
        gap: 10px;
        margin-top: 18px;
        flex-wrap: wrap;
      }
`;

export default function Page() {
  return (
    <PageScope styles={css}>
      <div className="breadcrumb">
        <Link href="/">Home</Link> › <Link href="/zr1">ZR1</Link> ›{" "}
        <span>C8 ZR1X</span>
      </div>

      <div className="page-hero">
        <Img className="hero-bg" src="/c8-zr1x.png" alt="C8 ZR1X Hypercar" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-tag bg-purple-text-white">
            2026+ · Hybrid AWD
          </div>
          <h1>C8 ZR1X — The Hypercar</h1>
          <p>
            Where electrification meets pure racing adrenaline. The ZR1X
            combines the 1,064 HP LT7 enginewith a front-mounted electric motor
            for E-AWD, delivering 1,250+ HP total system output. Many compare it
            to exotics costing ten times as much.
          </p>
          <div className="hero-ctas">
            <Link href="/engine/lt7" className="btn btn-primary">
              LT7 engine + eMotor
            </Link>
            <Link href="/rarity" className="btn btn-outline">
              Rarity &amp; Editions →
            </Link>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <div className="section-header">
                <div className="bar purple"></div>
                <h2>Specifications</h2>
              </div>
              <table className="spec-table">
                <tbody>
                  <tr>
                    <td>Years</td>
                    <td>2026, 2027+</td>
                  </tr>
                  <tr>
                    <td>Combustion Engine</td>
                    <td>LT7 engineTwin-Turbo Flat-Plane V8</td>
                  </tr>
                  <tr>
                    <td>ICE Output</td>
                    <td>1,064 HP</td>
                  </tr>
                  <tr>
                    <td>Front eMotor</td>
                    <td>Electric front axle drive</td>
                  </tr>
                  <tr>
                    <td>System Output</td>
                    <td>1,250+ HP (combined)</td>
                  </tr>
                  <tr>
                    <td>Drive System</td>
                    <td>E-AWD (Electric front + ICE rear)</td>
                  </tr>
                  <tr>
                    <td>Transmission</td>
                    <td>8-speed Tremec DCT (rear)</td>
                  </tr>
                  <tr>
                    <td>Battery</td>
                    <td>High-voltage hybrid battery pack</td>
                  </tr>
                  <tr>
                    <td>Stealth Mode</td>
                    <td>Electric-only front axle drive</td>
                  </tr>
                  <tr>
                    <td>0–60 mph</td>
                    <td>Sub-2.5 seconds (est.)</td>
                  </tr>
                  <tr>
                    <td>Top Speed</td>
                    <td>230+ mph</td>
                  </tr>
                  <tr>
                    <td>Downforce</td>
                    <td>1,000+ lb</td>
                  </tr>
                  <tr>
                    <td>Special Editions</td>
                    <td>Quail ZR1X, Asymmetrical, Stars &amp; Steel</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <div className="section-header">
                <div className="bar purple"></div>
                <h2>The Hypercar</h2>
              </div>
              <p className="muted-text-mb14">
                The ZR1X adds a front-mounted electric motor to the ZR1's LT7
                drivetrain, creating a full E-AWD system that distributes torque
                between the front electric axle and the rear combustion-powered
                DCT transaxle. The result is traction and launch capability
                beyond what any purely combustion-powered Corvette could
                achieve.
              </p>
              <p className="muted-text-mb14">
                Stealth Mode allows the ZR1X to operate on the front electric
                motor alone — silently navigating parking garages or
                neighborhoods before unleashing the full 1,250+ HP system. The
                PTM (Performance Traction Management) system has been
                recalibrated to account for the instant torque delivery from the
                eMotor.
              </p>
              <p className="muted-text-mb14">
                Special editions include the Quail ZR1X (revealed at Monterey
                Car Week), the Asymmetrical Edition with its signature two-tone
                red-black interior and exterior, and the Stars &amp; Steel
                Edition limited to 250 units per year.
              </p>
              <div className="flex-tags-mt18">
                <span className="card-tag tag-purple">E-AWD Hypercar</span>{" "}
                <span className="card-tag tag-green">1,250+ HP</span>{" "}
                <span className="card-tag tag-blue">Stealth Mode</span>{" "}
                <span className="card-tag tag-orange">Limited Editions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="bar orange"></div>
            <h2>Gallery</h2>
          </div>
          <div className="img-grid">
            <Img src="/c8-zr1x.png" alt="C8 ZR1X" />{" "}
            <Img hideOnError src="/assets/zr1x-side.png" alt="ZR1X Side" />{" "}
            <Img hideOnError src="/c8-zr1x-corner.png" alt="ZR1X Corner" />{" "}
            <Img hideOnError src="/assets/c8-zr1x-helfimage.png" alt="ZR1X" />{" "}
            <Img
              hideOnError
              src="/assets/zr1x-battery.png"
              alt="ZR1X Battery"
            />{" "}
            <Img hideOnError src="/eawd.png" alt="E-AWD" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar purple"></div>
            <h2>Special Editions</h2>
          </div>
          <div className="card-grid">
            <Link href="/rarity" className="card">
              <Img
                fallback="/c8-zr1x.png"
                className="card-img"
                src="/c8-quail.png"
                alt="Quail ZR1X"
              />
              <div className="card-body">
                <span className="card-tag tag-purple">Limited</span>
                <h3>Quail ZR1X</h3>
                <p>
                  Revealed at Monterey Car Week — the most exclusive ZR1X
                  configuration.
                </p>
                <span className="card-link">View Rarity →</span>
              </div>
            </Link>{" "}
            <Link href="/rarity" className="card">
              <Img
                fallback="/c8-zr1x.png"
                className="card-img"
                src="/c8zr1x-ztk-asymetric-black.png"
                alt="Asymmetrical Edition"
              />
              <div className="card-body">
                <span className="card-tag tag-orange">Limited</span>
                <h3>Asymmetrical Edition</h3>
                <p>
                  Two-tone red/black interior and exterior — striking visual
                  asymmetry.
                </p>
                <span className="card-link">View Rarity →</span>
              </div>
            </Link>{" "}
            <Link href="/rarity" className="card">
              <Img
                fallback="/assets/stars-stripes-c8-zr1-2026.png"
                className="card-img"
                src="/stars-and-steel-black.png"
                alt="Stars and Steel"
              />
              <div className="card-body">
                <span className="card-tag tag-blue">250 Units/Year</span>
                <h3>Stars &amp; Steel</h3>
                <p>
                  Patriotic special edition limited to 250 units in 2026 and 250
                  in 2027.
                </p>
                <span className="card-link">View Rarity →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </PageScope>
  );
}
