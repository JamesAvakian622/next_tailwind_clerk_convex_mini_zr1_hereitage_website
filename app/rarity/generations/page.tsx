import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import Img from "@/components/Img";
import PageScope from "@/components/PageScope";

export const metadata: Metadata = pageMeta(
  "Generation Breakdown — MyZR1 Rarity",
  "Every generation compared side-by-side — horsepower, torque, top speed, production numbers, and key features across five decades of ZR1 excellence.",
);

const css = `
.table-container {
        overflow-x: auto;
      }
      .spec-table-wide {
        min-width: 800px;
      }
`;

export default function Page() {
  return (
    <PageScope styles={css}>
      <div className="breadcrumb">
        <Link href="/">Home</Link> › <Link href="/rarity">Rarity</Link> ›{" "}
        <span>Generation Breakdown</span>
      </div>

      <div className="page-hero">
        <Img className="hero-bg" src="/c8-zr1.png" alt="ZR1 Generations" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-tag">C3 → C8 ZR1X</div>
          <h1>ZR1 Generation Breakdown</h1>
          <p>
            Every generation compared side-by-side — horsepower, torque, top
            speed, production numbers, and key features across five decades of
            ZR1 excellence.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar"></div>
            <h2>Full Specification Comparison</h2>
          </div>
          <div className="table-container">
            <table className="spec-table spec-table-wide">
              <thead>
                <tr>
                  <th>Spec</th>
                  <th>C3 ZR1</th>
                  <th>C4 ZR-1</th>
                  <th>C6 ZR1</th>
                  <th>C7 ZR1</th>
                  <th>C8 ZR1</th>
                  <th>C8 ZR1X</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Years</td>
                  <td>1970–72</td>
                  <td>1990–95</td>
                  <td>2009–13</td>
                  <td>2019</td>
                  <td>2025–27</td>
                  <td>2026+</td>
                </tr>
                <tr>
                  <td>Engine</td>
                  <td>LT1 V8</td>
                  <td>LT5 DOHC V8</td>
                  <td>LS9 SC V8</td>
                  <td>LT5 SC V8</td>
                  <td>LT7 engineTT V8</td>
                  <td>LT7 engine + eMotor</td>
                </tr>
                <tr>
                  <td>Displacement</td>
                  <td>5.7L</td>
                  <td>5.7L</td>
                  <td>6.2L</td>
                  <td>6.2L</td>
                  <td>5.5L</td>
                  <td>5.5L</td>
                </tr>
                <tr>
                  <td>Horsepower</td>
                  <td>370 HP</td>
                  <td>405 HP</td>
                  <td>638 HP</td>
                  <td>755 HP</td>
                  <td>1,064 HP</td>
                  <td>1,250+ HP</td>
                </tr>
                <tr>
                  <td>Torque</td>
                  <td>380 lb-ft</td>
                  <td>385 lb-ft</td>
                  <td>604 lb-ft</td>
                  <td>715 lb-ft</td>
                  <td>828 lb-ft</td>
                  <td>900+ lb-ft</td>
                </tr>
                <tr>
                  <td>Induction</td>
                  <td>Carbureted</td>
                  <td>Fuel injected</td>
                  <td>Supercharged</td>
                  <td>Supercharged</td>
                  <td>Twin-Turbo</td>
                  <td>Twin-Turbo + Electric</td>
                </tr>
                <tr>
                  <td>Valvetrain</td>
                  <td>OHV 2v</td>
                  <td>DOHC 32v</td>
                  <td>OHV 16v</td>
                  <td>OHV 16v</td>
                  <td>DOHC 32v</td>
                  <td>DOHC 32v</td>
                </tr>
                <tr>
                  <td>Transmission</td>
                  <td>4-spd Manual</td>
                  <td>6-spd Manual</td>
                  <td>6-spd Manual</td>
                  <td>7/8-spd</td>
                  <td>8-spd DCT</td>
                  <td>8-spd DCT</td>
                </tr>
                <tr>
                  <td>Drive</td>
                  <td>RWD</td>
                  <td>RWD</td>
                  <td>RWD</td>
                  <td>RWD</td>
                  <td>RWD</td>
                  <td>E-AWD</td>
                </tr>
                <tr>
                  <td>0–60 mph</td>
                  <td>~5.7 sec</td>
                  <td>4.5 sec</td>
                  <td>3.3 sec</td>
                  <td>2.85 sec</td>
                  <td>2.6 sec</td>
                  <td>&lt;2.5 sec</td>
                </tr>
                <tr>
                  <td>Top Speed</td>
                  <td>~150 mph</td>
                  <td>180 mph</td>
                  <td>205 mph</td>
                  <td>212 mph</td>
                  <td>233 mph</td>
                  <td>230+ mph</td>
                </tr>
                <tr>
                  <td>Layout</td>
                  <td>Front-engine</td>
                  <td>Front-engine</td>
                  <td>Front-engine</td>
                  <td>Front-engine</td>
                  <td>Mid-engine</td>
                  <td>Mid-engine</td>
                </tr>
                <tr>
                  <td>Units Built</td>
                  <td>~25</td>
                  <td>6,939</td>
                  <td>~6,200</td>
                  <td>~2,900</td>
                  <td>TBD</td>
                  <td>Very Limited</td>
                </tr>
                <tr>
                  <td>Carbon Brakes</td>
                  <td>No</td>
                  <td>No</td>
                  <td>Yes (std)</td>
                  <td>Yes (std)</td>
                  <td>Yes (std)</td>
                  <td>Yes (std)</td>
                </tr>
                <tr>
                  <td>Active Aero</td>
                  <td>No</td>
                  <td>No</td>
                  <td>No</td>
                  <td>ZTK option</td>
                  <td>Yes (std)</td>
                  <td>Yes (std)</td>
                </tr>
                <tr>
                  <td>Downforce</td>
                  <td>—</td>
                  <td>—</td>
                  <td>—</td>
                  <td>950 lb (ZTK)</td>
                  <td>1,000+ lb</td>
                  <td>1,000+ lb</td>
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
            <h2>Generation Photo Gallery</h2>
          </div>
          <div className="img-grid">
            <Img hideOnError src="/engine-lt1-c3.png" alt="C3 LT1" />{" "}
            <Img hideOnError src="/engine-lt5-c4.png" alt="C4 LT5" />{" "}
            <Img hideOnError src="/engine-ls9-c6.png" alt="C6 LS9" />{" "}
            <Img hideOnError src="/engine-lt5-c7.png" alt="C7 LT5" />{" "}
            <Img src="/engine-lt7-c8.png" alt="C8 LT7" />{" "}
            <Img src="/c8-zr1x.png" alt="C8 ZR1X" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar green"></div>
            <h2>Explore Each Generation</h2>
          </div>
          <div className="card-grid">
            <Link href="/zr1/c3" className="card">
              <Img
                fallback="/c3-zr1.png"
                className="card-img"
                src="/engine-lt1-c3.png"
                alt="C3"
              />
              <div className="card-body">
                <span className="card-tag tag-blue">1970–72</span>
                <h3>C3 ZR1</h3>
                <p>370 HP · ~25 units · The origin.</p>
                <span className="card-link">View →</span>
              </div>
            </Link>{" "}
            <Link href="/zr1/c4" className="card">
              <Img
                fallback="/c4-zr1.png"
                className="card-img"
                src="/engine-lt5-c4.png"
                alt="C4"
              />
              <div className="card-body">
                <span className="card-tag tag-blue">1990–95</span>
                <h3>C4 ZR-1</h3>
                <p>405 HP · 6,939 units · King of the Hill.</p>
                <span className="card-link">View →</span>
              </div>
            </Link>{" "}
            <Link href="/zr1/c6" className="card">
              <Img
                fallback="/c6-zr1.png"
                className="card-img"
                src="/engine-ls9-c6.png"
                alt="C6"
              />
              <div className="card-body">
                <span className="card-tag tag-blue">2009–13</span>
                <h3>C6 ZR1</h3>
                <p>638 HP · ~6,200 units · Blue Devil.</p>
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
                <p>755 HP · ~2,900 units · Final front-engine.</p>
                <span className="card-link">View →</span>
              </div>
            </Link>{" "}
            <Link href="/zr1/c8" className="card">
              <Img className="card-img" src="/c8-zr1.png" alt="C8" />
              <div className="card-body">
                <span className="card-tag tag-green">2025–27</span>
                <h3>C8 ZR1</h3>
                <p>1,064 HP · Mid-engine revolution.</p>
                <span className="card-link">View →</span>
              </div>
            </Link>{" "}
            <Link href="/zr1/zr1x" className="card">
              <Img className="card-img" src="/c8-zr1x.png" alt="ZR1X" />
              <div className="card-body">
                <span className="card-tag tag-purple">2026+ · Hybrid</span>
                <h3>C8 ZR1X</h3>
                <p>1,250+ HP · E-AWD Hypercar.</p>
                <span className="card-link">View →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </PageScope>
  );
}
