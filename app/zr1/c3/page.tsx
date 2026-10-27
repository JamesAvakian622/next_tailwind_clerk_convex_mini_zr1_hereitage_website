import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import Img from "@/components/Img";
import PageScope from "@/components/PageScope";

export const metadata: Metadata = pageMeta(
  "C3 ZR1 (1970–1972) — MyZR1",
  "The special performance package that launched the ZR1 legend. The LT1 small-block V8 delivered 370 HP in an era when American muscle ruled the roads.",
);

const css = `
.muted-text-mb16 {
        color: var(--muted);
        line-height: 1.8;
        margin-bottom: 16px;
      }
      .muted-text {
        color: var(--muted);
        line-height: 1.8;
      }
`;

export default function Page() {
  return (
    <PageScope styles={css}>
      <div className="breadcrumb">
        <Link href="/">Home</Link> › <Link href="/zr1">ZR1</Link> ›{" "}
        <span>C3 ZR1</span>
      </div>

      <div className="page-hero">
        <Img
          fallback="/c3-zr1.png"
          className="hero-bg"
          src="/engine-lt1-c3.png"
          alt="C3 ZR1"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-tag">1970 – 1972</div>
          <h1>C3 ZR1 — The Origin</h1>
          <p>
            The special performance package that launched the ZR1 legend. The
            LT1 small-block V8 delivered 370 HP in an era when American muscle
            ruled the roads.
          </p>
          <div className="hero-ctas">
            <Link href="/gallery/photos" className="btn btn-primary">
              View C3 Photos
            </Link>
            <Link href="/zr1/c4" className="btn btn-outline">
              Next: C4 ZR-1 →
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
                    <td>1970, 1971, 1972</td>
                  </tr>
                  <tr>
                    <td>Engine</td>
                    <td>LT1 Small-Block V8</td>
                  </tr>
                  <tr>
                    <td>Displacement</td>
                    <td>5.7L (350 cu in)</td>
                  </tr>
                  <tr>
                    <td>Horsepower</td>
                    <td>370 HP (1970)</td>
                  </tr>
                  <tr>
                    <td>Torque</td>
                    <td>380 lb-ft</td>
                  </tr>
                  <tr>
                    <td>Transmission</td>
                    <td>4-speed manual (M22 Rock Crusher)</td>
                  </tr>
                  <tr>
                    <td>0–60 mph</td>
                    <td>~5.7 seconds</td>
                  </tr>
                  <tr>
                    <td>Top Speed</td>
                    <td>~150 mph</td>
                  </tr>
                  <tr>
                    <td>Units Built</td>
                    <td>~25 (1970 ZR1 package)</td>
                  </tr>
                  <tr>
                    <td>Body Style</td>
                    <td>T-Top Coupe</td>
                  </tr>
                  <tr>
                    <td>Generation</td>
                    <td>C3 (1968–1982 body)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <div className="section-header">
                <div className="bar purple"></div>
                <h2>Overview</h2>
              </div>
              <p className="muted-text-mb16">
                The C3 ZR1 was born from Chevrolet's racing program in 1970. The
                ZR1 package — officially RPO ZR1 — was a special-order
                solid-lifter performance option that transformed the Corvette
                into a pure racing machine.
              </p>
              <p className="muted-text-mb16">
                The LT1 engine was derived directly from Zora Arkus-Duntov's
                racing heritage. With aluminum heads, a solid-lifter camshaft,
                and an 11:1 compression ratio, it produced a genuine 370 HP at a
                time when manufacturers were beginning to reduce performance
                numbers.
              </p>
              <p className="muted-text">
                Only a handful of C3 ZR1s were ever built, making surviving
                examples among the rarest and most collectible Corvettes in
                existence. This is where the ZR1 legend began.
              </p>
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
            <Img hideOnError src="/engine-lt1-c3.png" alt="C3 LT1 Engine" />{" "}
            <Img hideOnError src="/c3-zr1.png" alt="C3 ZR1" />{" "}
            <Img hideOnError src="/1953.png" alt="Classic Corvette Heritage" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar green"></div>
            <h2>ZR1 Generations</h2>
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
                <p>Lotus LT5 DOHC — 405 HP King of the Hill.</p>
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
                <p>LS9 supercharged — 638 HP Blue Devil.</p>
                <span className="card-link">View →</span>
              </div>
            </Link>{" "}
            <Link href="/zr1/c8" className="card">
              <Img className="card-img" src="/c8-zr1.png" alt="C8" />
              <div className="card-body">
                <span className="card-tag tag-green">2025–2027</span>
                <h3>C8 ZR1</h3>
                <p>LT7 engineTwin-Turbo — 1,064 HP mid-engine.</p>
                <span className="card-link">View →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </PageScope>
  );
}
