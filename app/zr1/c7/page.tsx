import type { Metadata } from "next";
import Link from "next/link";
import Img from "@/components/Img";
import PageScope from "@/components/PageScope";

export const metadata: Metadata = { title: "C7 ZR1 (2019) — MyZR1" };

const css = `
.muted-text-mb14 {
        color: var(--muted);
        line-height: 1.8;
        margin-bottom: 14px;
      }
      .muted-text {
        color: var(--muted);
        line-height: 1.8;
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
        <span>C7 ZR1</span>
      </div>

      <div className="page-hero">
        <Img
          fallback="/c7-zr1.png"
          className="hero-bg"
          src="/engine-lt5-c7.png"
          alt="C7 ZR1 LT5"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-tag">2019 Only</div>
          <h1>C7 ZR1 — Peak Front-Engine</h1>
          <p>
            755 HP supercharged LT5 V8, the most powerful Corvette ever built at
            that time. The final front-engine ZR1 and the ultimate expression of
            a 67-year front-engine lineage.
          </p>
          <div className="hero-ctas">
            <Link href="/gallery/photos" className="btn btn-primary">
              View C7 Photos
            </Link>
            <Link href="/zr1/c8" className="btn btn-outline">
              Next: C8 ZR1 →
            </Link>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <div className="section-header">
                <div className="bar"></div>
                <h2>Specifications</h2>
              </div>
              <table className="spec-table">
                <tbody>
                  <tr>
                    <td>Year Produced</td>
                    <td>2019</td>
                  </tr>
                  <tr>
                    <td>Engine</td>
                    <td>LT5 Supercharged V8</td>
                  </tr>
                  <tr>
                    <td>Displacement</td>
                    <td>6.2L</td>
                  </tr>
                  <tr>
                    <td>Horsepower</td>
                    <td>755 HP @ 6,300 rpm</td>
                  </tr>
                  <tr>
                    <td>Torque</td>
                    <td>715 lb-ft @ 4,400 rpm</td>
                  </tr>
                  <tr>
                    <td>Supercharger</td>
                    <td>2.65L Eaton TVS R2650</td>
                  </tr>
                  <tr>
                    <td>Transmission</td>
                    <td>8-speed auto or 7-speed manual</td>
                  </tr>
                  <tr>
                    <td>0–60 mph</td>
                    <td>2.85 seconds</td>
                  </tr>
                  <tr>
                    <td>Top Speed</td>
                    <td>212 mph (w/ ZTK High Wing)</td>
                  </tr>
                  <tr>
                    <td>Brakes</td>
                    <td>Carbon-ceramic standard</td>
                  </tr>
                  <tr>
                    <td>Aero</td>
                    <td>Low-wing or High-wing (ZTK)</td>
                  </tr>
                  <tr>
                    <td>Downforce</td>
                    <td>950 lb (ZTK configuration)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <div className="section-header">
                <div className="bar purple"></div>
                <h2>The Last Front-Engine ZR1</h2>
              </div>
              <p className="muted-text-mb14">
                When Chevrolet unveiled the C7 ZR1 at the 2017 Dubai Motor Show,
                it represented the pinnacle of seven decades of front-engine
                Corvette performance. The 2.65-liter supercharger — the largest
                ever fitted to a Corvette — sits under a special hood with a
                transparent window revealing the blower.
              </p>
              <p className="muted-text-mb14">
                The ZTK Performance Package added a high-downforce rear wing,
                Michelin Pilot Sport Cup 2 tires, and front brake-cooling ducts
                — producing 950 lb of downforce at top speed while maintaining a
                212 mph top speed. The standard low-wing model achieved 115 mph
                less downforce but identical top-speed capability.
              </p>
              <p className="muted-text">
                The C7 ZR1 was the swan song of the front-engine era. When the
                C8 arrived as a mid-engine car, the ZR1 badge moved with it —
                carrying the legacy forward in an entirely new direction.
              </p>
              <div className="flex-tags-mt18">
                <span className="card-tag tag-orange">755 HP</span>{" "}
                <span className="card-tag tag-blue">212 mph</span>{" "}
                <span className="card-tag tag-purple">950 lb Downforce</span>
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
            <Img hideOnError src="/engine-lt5-c7.png" alt="C7 LT5 Engine" />{" "}
            <Img hideOnError src="/engine-lt5-c7.jpg" alt="C7 Engine" />{" "}
            <Img hideOnError src="/c7-zr1.png" alt="C7 ZR1" />{" "}
            <Img hideOnError src="/sp.png" alt="C7 ZR1 Side" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar"></div>
            <h2>Other Generations</h2>
          </div>
          <div className="card-grid">
            <Link href="/zr1/c6" className="card">
              <Img
                fallback="/c6-zr1.png"
                className="card-img"
                src="/engine-ls9-c6.png"
                alt="C6"
              />
              <div className="card-body">
                <span className="card-tag tag-blue">2009–2013</span>
                <h3>C6 ZR1</h3>
                <p>LS9 — 638 HP Blue Devil.</p>
                <span className="card-link">View →</span>
              </div>
            </Link>{" "}
            <Link href="/zr1/c8" className="card">
              <Img className="card-img" src="/c8-zr1.png" alt="C8" />
              <div className="card-body">
                <span className="card-tag tag-green">2025–2027</span>
                <h3>C8 ZR1</h3>
                <p>LT7 engineTwin-Turbo — 1,064 HP.</p>
                <span className="card-link">View →</span>
              </div>
            </Link>{" "}
            <Link href="/zr1/zr1x" className="card">
              <Img className="card-img" src="/c8-zr1x.png" alt="ZR1X" />
              <div className="card-body">
                <span className="card-tag tag-purple">2026+ Hybrid</span>
                <h3>C8 ZR1X</h3>
                <p>1,250+ HP Hypercar E-AWD.</p>
                <span className="card-link">View →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </PageScope>
  );
}
