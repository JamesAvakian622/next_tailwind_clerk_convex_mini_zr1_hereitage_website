import type { Metadata } from "next";
import Link from "next/link";
import Img from "@/components/Img";
import PageScope from "@/components/PageScope";

export const metadata: Metadata = { title: "C6 ZR1 (2009–2013) — MyZR1" };

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
        <span>C6 ZR1</span>
      </div>

      <div className="page-hero">
        <Img
          fallback="/c6-zr1.png"
          className="hero-bg"
          src="/engine-ls9-c6.png"
          alt="C6 ZR1 LS9"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-tag">2009 – 2013</div>
          <h1>C6 ZR1 — Blue Devil</h1>
          <p>
            638 HP supercharged LS9 V8, carbon-ceramic brakes, carbon-fiber body
            panels, and a 205 mph top speed. The Blue Devil proved American
            engineering could dominate the world stage.
          </p>
          <div className="hero-ctas">
            <Link href="/gallery/photos" className="btn btn-primary">
              View C6 Photos
            </Link>
            <Link href="/zr1/c7" className="btn btn-outline">
              Next: C7 ZR1 →
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
                    <td>Years Produced</td>
                    <td>2009–2013</td>
                  </tr>
                  <tr>
                    <td>Engine</td>
                    <td>LS9 Supercharged V8</td>
                  </tr>
                  <tr>
                    <td>Displacement</td>
                    <td>6.2L</td>
                  </tr>
                  <tr>
                    <td>Horsepower</td>
                    <td>638 HP @ 6,500 rpm</td>
                  </tr>
                  <tr>
                    <td>Torque</td>
                    <td>604 lb-ft @ 3,800 rpm</td>
                  </tr>
                  <tr>
                    <td>Supercharger</td>
                    <td>Roots-type 2.3L Eaton TVS</td>
                  </tr>
                  <tr>
                    <td>Transmission</td>
                    <td>6-speed Tremec TR6060 manual</td>
                  </tr>
                  <tr>
                    <td>0–60 mph</td>
                    <td>3.3 seconds</td>
                  </tr>
                  <tr>
                    <td>Top Speed</td>
                    <td>205 mph</td>
                  </tr>
                  <tr>
                    <td>Brakes</td>
                    <td>Carbon-ceramic rotors (Brembo)</td>
                  </tr>
                  <tr>
                    <td>Body</td>
                    <td>Carbon-fiber hood, roof, fenders</td>
                  </tr>
                  <tr>
                    <td>Units Built</td>
                    <td>~6,200 total</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <div className="section-header">
                <div className="bar purple"></div>
                <h2>The Blue Devil</h2>
              </div>
              <p className="muted-text-mb14">
                The C6 ZR1 debuted at the 2008 Detroit Auto Show and immediately
                set a new benchmark for American performance. The LS9 engine
                featured a 2.3-liter Eaton TVS supercharger mounted in the
                valley of the block, titanium intake valves, and dry-sump
                lubrication.
              </p>
              <p className="muted-text-mb14">
                Carbon-ceramic brakes were standard — the first Corvette to
                feature them. The carbon-fiber roof panel, hood, front splitter,
                and rocker panels reduced weight while increasing rigidity. The
                suspension was tuned by Lotus for both track and street driving.
              </p>
              <p className="muted-text">
                The C6 ZR1 set a Nürburgring lap time of 7:26.4 in 2008, making
                it one of the fastest production cars ever to lap the famous
                German circuit at that time.
              </p>
              <div className="flex-tags-mt18">
                <span className="card-tag tag-orange">638 HP Supercharged</span>{" "}
                <span className="card-tag tag-blue">205 mph Top Speed</span>{" "}
                <span className="card-tag tag-purple">
                  Carbon Ceramic Brakes
                </span>
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
            <Img hideOnError src="/engine-ls9-c6.png" alt="LS9 Engine" />{" "}
            <Img hideOnError src="/c6-zr1.png" alt="C6 ZR1" />{" "}
            <Img hideOnError src="/engine-ls9-c6.jpg" alt="C6 LS9" />
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
            <Link href="/zr1/c4" className="card">
              <Img
                fallback="/c4-zr1.png"
                className="card-img"
                src="/engine-lt5-c4.png"
                alt="C4"
              />
              <div className="card-body">
                <span className="card-tag tag-blue">1990–1995</span>
                <h3>C4 ZR-1</h3>
                <p>Lotus LT5 — 405 HP.</p>
                <span className="card-link">View →</span>
              </div>
            </Link>{" "}
            <Link href="/zr1/c7" className="card">
              <Img
                fallback="/c7-zr1.png"
                className="card-img"
                src="/engine-lt5-c7.png"
                alt="C7"
              />
              <div className="card-body">
                <span className="card-tag tag-blue">2019</span>
                <h3>C7 ZR1</h3>
                <p>LT5 supercharged — 755 HP.</p>
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
            </Link>
          </div>
        </div>
      </section>
    </PageScope>
  );
}
