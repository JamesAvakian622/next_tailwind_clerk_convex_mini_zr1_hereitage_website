import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import Img from "@/components/Img";
import PageScope from "@/components/PageScope";

export const metadata: Metadata = pageMeta(
  "C4 ZR-1 (1990–1995) — MyZR1",
  "The Lotus-engineered LT5 DOHC V8 redefined what an American sports car could be. 405 HP, world speed records, and the most technologically advanced Corvette…",
);

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
        <span>C4 ZR-1</span>
      </div>

      <div className="page-hero">
        <Img
          fallback="/c4-zr1.png"
          className="hero-bg"
          src="/engine-lt5-c4.png"
          alt="C4 ZR-1 LT5"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-tag">1990 – 1995</div>
          <h1>C4 ZR-1 — King of the Hill</h1>
          <p>
            The Lotus-engineered LT5 DOHC V8 redefined what an American sports
            car could be. 405 HP, world speed records, and the most
            technologically advanced Corvette of its era.
          </p>
          <div className="hero-ctas">
            <Link href="/gallery/photos" className="btn btn-primary">
              View C4 Photos
            </Link>
            <Link href="/zr1/c6" className="btn btn-outline">
              Next: C6 ZR1 →
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
                    <td>1990–1995</td>
                  </tr>
                  <tr>
                    <td>Engine</td>
                    <td>LT5 DOHC V8 (Lotus-engineered)</td>
                  </tr>
                  <tr>
                    <td>Displacement</td>
                    <td>5.7L (350 cu in)</td>
                  </tr>
                  <tr>
                    <td>Horsepower</td>
                    <td>375 HP (1990–92) / 405 HP (1993–95)</td>
                  </tr>
                  <tr>
                    <td>Torque</td>
                    <td>370 lb-ft (1990–92) / 385 lb-ft (1993–95)</td>
                  </tr>
                  <tr>
                    <td>Valvetrain</td>
                    <td>DOHC, 4 valves per cylinder, 32 valves total</td>
                  </tr>
                  <tr>
                    <td>Transmission</td>
                    <td>ZF 6-speed manual</td>
                  </tr>
                  <tr>
                    <td>0–60 mph</td>
                    <td>4.5 seconds</td>
                  </tr>
                  <tr>
                    <td>Top Speed</td>
                    <td>180 mph (world speed record 1990)</td>
                  </tr>
                  <tr>
                    <td>Units Built</td>
                    <td>6,939 total</td>
                  </tr>
                  <tr>
                    <td>Nicknames</td>
                    <td>"King of the Hill", "LT5 ZR1"</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <div className="section-header">
                <div className="bar purple"></div>
                <h2>The LT5 Engine</h2>
              </div>
              <p className="muted-text-mb14">
                The LT5 was a clean-sheet engine developed jointly by Chevrolet
                and Lotus Engineering. It featured dual overhead camshafts per
                bank, four valves per cylinder, and a unique two-mode intake
                system that restricted power in everyday driving until a "Valet
                Key" was used.
              </p>
              <p className="muted-text-mb14">
                In 1993, the LT5 received a significant upgrade — revised
                cylinder heads with larger ports, revised camshafts, and new
                pistons brought output to 405 HP, cementing the C4 ZR-1's status
                as the fastest production car in America at the time.
              </p>
              <p className="muted-text">
                The ZF 6-speed manual transmission was standard, and the car's
                wider rear body — featuring an extra 3 inches of bodywork —
                distinguished it visually from the base Corvette.
              </p>
              <div className="flex-tags-mt18">
                <span className="card-tag tag-blue">DOHC 32-Valve</span>{" "}
                <span className="card-tag tag-purple">Lotus Engineered</span>{" "}
                <span className="card-tag tag-green">World Speed Record</span>
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
            <Img hideOnError src="/engine-lt5-c4.png" alt="LT5 Engine" />{" "}
            <Img hideOnError src="/c4-zr1.png" alt="C4 ZR-1" />{" "}
            <Img hideOnError src="/LT2.png" alt="C4 Engine" />
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
            <Link href="/zr1/c3" className="card">
              <Img
                fallback="/c3-zr1.png"
                className="card-img"
                src="/engine-lt1-c3.png"
                alt="C3"
              />
              <div className="card-body">
                <span className="card-tag tag-blue">1970–1972</span>
                <h3>C3 ZR1</h3>
                <p>The origin — 370 HP LT1.</p>
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
                <span className="card-tag tag-blue">2009–2013</span>
                <h3>C6 ZR1</h3>
                <p>638 HP LS9 Blue Devil.</p>
                <span className="card-link">View →</span>
              </div>
            </Link>{" "}
            <Link href="/zr1/c8" className="card">
              <Img className="card-img" src="/c8-zr1.png" alt="C8" />
              <div className="card-body">
                <span className="card-tag tag-green">2025–2027</span>
                <h3>C8 ZR1</h3>
                <p>1,064 HP LT7 enginemid-engine.</p>
                <span className="card-link">View →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </PageScope>
  );
}
