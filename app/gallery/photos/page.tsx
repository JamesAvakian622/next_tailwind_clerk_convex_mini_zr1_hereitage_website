import type { Metadata } from "next";
import Link from "next/link";
import Img from "@/components/Img";
import PageScope from "@/components/PageScope";

export const metadata: Metadata = { title: "Photo Albums — MyZR1 Gallery" };

const css = `
.muted-text {
        color: var(--muted);
        font-size: 0.85rem;
        margin-top: 16px;
      }
`;

export default function Page() {
  return (
    <PageScope styles={css}>
      <div className="breadcrumb">
        <Link href="/">Home</Link> › <Link href="/gallery">Gallery</Link> ›{" "}
        <span>Photo Albums</span>
      </div>

      <div className="page-hero">
        <Img className="hero-bg" src="/c8-zr1.png" alt="ZR1 Photo Albums" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-tag">C3 · C4 · C6 · C7 · C8 · ZR1X</div>
          <h1>ZR1 Photo Albums</h1>
          <p>
            Curated photo collections for every ZR1 generation — from the
            original 1970 C3 to the electrified 2026 ZR1X, plus the Cool Jimmy
            personal collection and Corvette Racing gallery.
          </p>
          <div className="hero-ctas">
            <Link href="/gallery/racing" className="btn btn-primary">
              Racing Gallery →
            </Link>
            <Link href="/gallery/owners" className="btn btn-outline">
              Owners Gallery
            </Link>
          </div>
        </div>
      </div>

      <section id="c8" className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar green"></div>
            <h2>C8 ZR1 (2025–2027)</h2>
          </div>
          <div className="img-grid">
            <Img src="/c8-zr1.png" alt="C8 ZR1" />{" "}
            <Img hideOnError src="/assets/c8-zr1-2026.png" alt="C8 ZR1 2026" />{" "}
            <Img src="/engine-lt7-c8.png" alt="LT7 engine" />{" "}
            <Img hideOnError src="/aerodynamics.png" alt="C8 Aero" />{" "}
            <Img hideOnError src="/turbo.png" alt="Turbos" />{" "}
            <Img hideOnError src="/exhaust.png" alt="Exhaust" />
          </div>
        </div>
      </section>

      <section id="zr1x" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="bar purple"></div>
            <h2>C8 ZR1X (2026+) — Hypercar</h2>
          </div>
          <div className="img-grid">
            <Img src="/c8-zr1x.png" alt="C8 ZR1X" />{" "}
            <Img hideOnError src="/assets/zr1x-side.png" alt="ZR1X Side" />{" "}
            <Img hideOnError src="/c8-zr1x-corner.png" alt="ZR1X Corner" />{" "}
            <Img hideOnError src="/c8-quail.png" alt="Quail Edition" />{" "}
            <Img
              hideOnError
              src="/c8zr1x-ztk-asymetric-black.png"
              alt="Asymmetrical"
            />{" "}
            <Img
              hideOnError
              src="/stars-and-steel-black.png"
              alt="Stars and Steel"
            />{" "}
            <Img
              hideOnError
              src="/assets/zr1x-battery.png"
              alt="ZR1X Battery"
            />{" "}
            <Img hideOnError src="/eawd.png" alt="E-AWD" />{" "}
            <Img hideOnError src="/images/ZR1Xgreen.png" alt="ZR1X Green" />
          </div>
        </div>
      </section>

      <section id="c7" className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar"></div>
            <h2>C7 ZR1 (2019)</h2>
          </div>
          <div className="img-grid">
            <Img hideOnError src="/c7-zr1.png" alt="C7 ZR1" />{" "}
            <Img hideOnError src="/engine-lt5-c7.png" alt="C7 LT5" />{" "}
            <Img hideOnError src="/engine-lt5-c7.jpg" alt="C7 Engine" />{" "}
            <Img hideOnError src="/sp.png" alt="C7 ZR1 Side" />
          </div>
        </div>
      </section>

      <section id="c6" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="bar orange"></div>
            <h2>C6 ZR1 (2009–2013) — Blue Devil</h2>
          </div>
          <div className="img-grid">
            <Img hideOnError src="/c6-zr1.png" alt="C6 ZR1" />{" "}
            <Img hideOnError src="/engine-ls9-c6.png" alt="LS9 Engine" />{" "}
            <Img hideOnError src="/engine-ls9-c6.jpg" alt="C6 LS9" />
          </div>
        </div>
      </section>

      <section id="c4" className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar blue"></div>
            <h2>C4 ZR-1 (1990–1995) — King of the Hill</h2>
          </div>
          <div className="img-grid">
            <Img hideOnError src="/c4-zr1.png" alt="C4 ZR-1" />{" "}
            <Img hideOnError src="/engine-lt5-c4.png" alt="C4 LT5" />{" "}
            <Img hideOnError src="/LT2.png" alt="C4 LT" />
          </div>
        </div>
      </section>

      <section id="c3" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="bar blue"></div>
            <h2>C3 ZR1 (1970–1972) — The Origin</h2>
          </div>
          <div className="img-grid">
            <Img hideOnError src="/engine-lt1-c3.png" alt="C3 LT1" />{" "}
            <Img hideOnError src="/c3-zr1.png" alt="C3 ZR1" />{" "}
            <Img hideOnError src="/1953.png" alt="Classic Corvette Heritage" />
          </div>
        </div>
      </section>

      <section id="cool-jimmy" className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar purple"></div>
            <h2>Cool Jimmy Album — Best of 2025/26</h2>
          </div>
          <div className="img-grid">
            <Img
              hideOnError
              src="/images/cool-jimmy-album/b1.png"
              alt="Cool Jimmy 1"
            />{" "}
            <Img src="/CoolJimmy.png" alt="Cool Jimmy Logo" />{" "}
            <Img hideOnError src="/assets/CoolJimmy.png" alt="Cool Jimmy" />
          </div>
          <p className="muted-text">
            The Cool Jimmy personal album — curated highlights from 2025 and
            2026 spanning the full ZR1 and ZR1X model range.
          </p>
        </div>
      </section>
    </PageScope>
  );
}
