import type { Metadata } from "next";
import Link from "next/link";
import Img from "@/components/Img";
import PageScope from "@/components/PageScope";

export const metadata: Metadata = {
  title: {
    absolute:
      "MyZR1 - MyZR1X — Corvette ZR1 Heritage & Collection",
  },
};

const css = `
.obj-top {
        object-position: top;
      }
      .text-purple {
        color: var(--purple);
      }
      .home-hero {
        position: relative;
        min-height: 92vh;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        overflow: hidden;
        background: #000;
      }
      .home-hero img.hero-bg {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.5;
        filter: brightness(0.65);
      }
      .home-hero .overlay {
        position: absolute;
        inset: 0;
        background: radial-gradient(
          ellipse at center,
          rgba(4, 26, 61, 0.55) 0%,
          rgba(0, 0, 0, 0.72) 100%
        );
      }
      .home-hero .hc {
        position: relative;
        z-index: 2;
        padding: 40px 24px;
        max-width: 820px;
      }
      .home-hero .pre-tag {
        display: inline-block;
        background: rgba(184, 232, 252, 0.18);
        color: #b8e8fc;
        border: 1px solid rgba(184, 232, 252, 0.35);
        font-size: 0.75rem;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.14em;
        padding: 5px 18px;
        border-radius: 999px;
        margin-bottom: 20px;
      }
      .home-hero h1 {
        font-size: clamp(2.8rem, 7vw, 5.5rem);
        font-weight: 950;
        text-transform: uppercase;
        letter-spacing: -0.03em;
        line-height: 0.95;
        background: linear-gradient(135deg, #fff 0%, #aaa 100%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 16px;
      }
      .home-hero h2 {
        font-size: clamp(1.1rem, 2.5vw, 1.9rem);
        font-weight: 400;
        color: #fff;
        margin-bottom: 18px;
      }
      .home-hero p {
        font-size: 0.97rem;
        color: rgba(255, 255, 255, 0.75);
        max-width: 560px;
        margin: 0 auto 34px;
      }
      .home-ctas {
        display: flex;
        gap: 14px;
        justify-content: center;
        flex-wrap: wrap;
      }
      .home-ctas a {
        padding: 14px 36px;
        border-radius: 50px;
        font-weight: 800;
        font-size: 0.95rem;
        text-transform: uppercase;
        transition: all 0.25s;
      }
      .cta-p {
        background: var(--accent);
        color: #000;
      }
      .cta-p:hover {
        background: #7dd3fc;
        color: #000;
        transform: translateY(-2px);
      }
      .cta-s {
        background: rgba(255, 255, 255, 0.1);
        color: #fff;
        border: 1px solid rgba(255, 255, 255, 0.3);
      }
      .cta-s:hover {
        background: rgba(255, 255, 255, 0.18);
        color: #fff;
      }
      .slide-dots {
        position: absolute;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 10px;
        z-index: 5;
      }
      .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.35);
        border: none;
        cursor: pointer;
        transition: all 0.3s;
      }
      .dot.active {
        background: var(--accent);
        width: 28px;
        border-radius: 5px;
      }
      /* section cards */
      .section-cards {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 22px;
      }
      .sec-card {
        display: block;
        position: relative;
        border-radius: 14px;
        overflow: hidden;
        border: 1px solid var(--border);
        transition:
          border-color 0.2s,
          transform 0.2s;
        background: var(--card);
      }
      .sec-card:hover {
        border-color: var(--accent);
        transform: translateY(-4px);
        color: inherit;
      }
      .sec-card img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        display: block;
      }
      .sec-card .sc-body {
        padding: 18px;
      }
      .sec-card .sc-tag {
        font-size: 0.68rem;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: var(--accent);
        margin-bottom: 6px;
        display: block;
      }
      .sec-card h3 {
        font-size: 1.1rem;
        font-weight: 800;
        color: #fff;
        margin-bottom: 6px;
      }
      .sec-card p {
        font-size: 0.82rem;
        color: var(--muted);
        line-height: 1.5;
        margin-bottom: 12px;
      }
      .sec-card .arrow {
        font-size: 0.82rem;
        font-weight: 700;
        color: var(--accent);
      }
      /* gen grid */
      .gen-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: 18px;
      }
      .gen-card {
        display: block;
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: 12px;
        overflow: hidden;
        transition:
          border-color 0.2s,
          transform 0.2s;
      }
      .gen-card:hover {
        border-color: var(--accent);
        transform: translateY(-3px);
      }
      .gen-card img {
        width: 100%;
        height: 150px;
        object-fit: cover;
      }
      .gen-card .gc-body {
        padding: 14px;
      }
      .gen-card .year {
        font-size: 0.68rem;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: var(--accent);
        display: block;
        margin-bottom: 4px;
      }
      .gen-card h4 {
        font-size: 0.95rem;
        font-weight: 700;
        color: #fff;
        margin-bottom: 4px;
      }
      .gen-card p {
        font-size: 0.78rem;
        color: var(--muted);
      }
`;

export default function Page() {
  return (
    <PageScope styles={css}>
      <section className="home-hero">
        <Img
          fallback="/c8-zr1x.png"
          className="hero-bg"
          src="/assets/c8-zr1-2026.png"
          alt="C8 ZR1 2026"
        />
        <div className="overlay"></div>
        <div className="hc">
          <div className="pre-tag">
            Pre-Release Ver 0.5 — Confidential Access Only
          </div>
          <h1>Corvette ZR1 &amp; ZR1X</h1>
          <h2>Celebrate the Corvette ZR1 Platform</h2>
          <p>
            From the legendary 1970 C3 to the electrified 2026 ZR1X Hypercar —
            photo galleries, rarity guides, engineering deep-dives, performance
            mods, and owner albums.
          </p>
          <div className="home-ctas">
            <Link href="/zr1" className="cta-p">
              Enter Collection
            </Link>{" "}
            <Link href="/gallery" className="cta-s">
              Browse Gallery
            </Link>
          </div>
        </div>
        <div className="slide-dots">
          <button className="dot active" title="Slide 1"></button>
          <button className="dot" title="Slide 2"></button>{" "}
          <button className="dot" title="Slide 3"></button>
          <button className="dot" title="Slide 4"></button>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar"></div>
            <h2>Explore the Site</h2>
            <p>Every section of MyZR1 - MyZR1X at a glance</p>
          </div>
          <div className="section-cards">
            <Link href="/zr1" className="sec-card">
              <Img
                fallback="/horse.png"
                src="/c8-zr1.png"
                alt="ZR1 Collection"
              />
              <div className="sc-body">
                <span className="sc-tag">ZR1 Index</span>
                <h3>The Complete ZR1 Collection</h3>
                <p>
                  C3 through C8 ZR1X — every generation, heritage timeline, and
                  generation photo pages.
                </p>
                <span className="arrow">Explore ZR1 →</span>
              </div>
            </Link>{" "}
            <Link href="/rarity" className="sec-card">
              <Img
                fallback="/c8-zr1x.png"
                src="/assets/stars-stripes-c8-zr1-2026.png"
                alt="Rarity Guide"
              />
              <div className="sc-body">
                <span className="sc-tag">Rarity</span>
                <h3>Rarity Guide &amp; Market Value</h3>
                <p>
                  Collector scores, market forecasts, special editions, and
                  enthusiast clubs.
                </p>
                <span className="arrow">View Rarity →</span>
              </div>
            </Link>{" "}
            <Link href="/engine" className="sec-card">
              <Img
                fallback="/LT7.png"
                src="/engine-lt7-c8.png"
                alt="LT7 engine"
              />
              <div className="sc-body">
                <span className="sc-tag">Engine &amp; Tech</span>
                <h3>LT7 engineTwin-Turbo &amp; Drivetrain</h3>
                <p>
                  Deep dives into the 1,064 HP LT7, turbos, ECU, DCT, E-AWD, and
                  driving dynamics.
                </p>
                <span className="arrow">View Engine →</span>
              </div>
            </Link>{" "}
            <Link href="/body" className="sec-card">
              <Img
                fallback="/assets/c8-zr1-2026.png"
                src="/aerodynamics.png"
                alt={"Body & Aerodynamics"}
              />
              <div className="sc-body">
                <span className="sc-tag">Body</span>
                <h3>Exterior, Interior &amp; Specs</h3>
                <p>
                  Aerodynamics, suspension, brakes, wheels, carbon ceramic, and
                  the redesigned interior.
                </p>
                <span className="arrow">View Body →</span>
              </div>
            </Link>{" "}
            <Link href="/service" className="sec-card">
              <Img
                fallback="/clean.png"
                src="/assets/maintenance.png"
                alt="Maintenance"
              />
              <div className="sc-body">
                <span className="sc-tag">Service</span>
                <h3>Maintenance &amp; Owner Guides</h3>
                <p>
                  Fluids, schedules, DCT filter, warranty, certified mechanics,
                  and collector care.
                </p>
                <span className="arrow">View Service →</span>
              </div>
            </Link>{" "}
            <Link href="/gallery" className="sec-card">
              <Img
                fallback="/c8-zr1.png"
                src="/chevy-racing.png"
                alt="Gallery"
              />
              <div className="sc-body">
                <span className="sc-tag">Gallery</span>
                <h3>Photo Albums &amp; Corvette Racing</h3>
                <p>
                  Generation albums, factory racing cars C4-GTP through Z06
                  GT3.R, and owners gallery.
                </p>
                <span className="arrow">View Gallery →</span>
              </div>
            </Link>{" "}
            <Link href="/mods" className="sec-card">
              <Img
                fallback="/c8-zr1x.png"
                src="/assets/zr1x-side.png"
                alt="Mods"
              />
              <div className="sc-body">
                <span className="sc-tag">Mods 🛠️</span>
                <h3>ZR1 &amp; ZR1X Modifications</h3>
                <p>
                  Performance tuning, handling, active aero, cooling, displays,
                  and aesthetic mods.
                </p>
                <span className="arrow">View Mods →</span>
              </div>
            </Link>{" "}
            <Link href="/tracks" className="sec-card">
              <Img
                fallback="/chevy-racing.png"
                src="/ncm-park.png"
                alt="Race Tracks"
              />
              <div className="sc-body">
                <span className="sc-tag">Tracks</span>
                <h3>USA National Race Directory</h3>
                <p>
                  All 50 states, featured regional maps, driver directory, and
                  NCM Motorsports Park.
                </p>
                <span className="arrow">View Tracks →</span>
              </div>
            </Link>{" "}
            <Link href="/about" className="sec-card">
              <Img
                fallback="/opauto.png"
                src="/CoolJimmy.png"
                alt="About"
                className="obj-top"
              />
              <div className="sc-body">
                <span className="sc-tag">About Us</span>
                <h3>Cool Jimmy &amp; Optical Automation</h3>
                <p>
                  About the site, glossary, mobile apps, contact, special
                  thanks, docs, and downloads.
                </p>
                <span className="arrow">About Us →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="bar purple"></div>
            <h2>Legacy Across Eras</h2>
            <p>Every ZR1 generation — from 1970 to 2026+</p>
          </div>
          <div className="gen-grid">
            <Link href="/zr1/c3" className="gen-card">
              <Img
                fallback="/c3-zr1.png"
                src="/engine-lt1-c3.png"
                alt="C3 ZR1"
              />
              <div className="gc-body">
                <span className="year">1970–1972</span>
                <h4>C3 ZR1 — The Origin</h4>
                <p>370 HP LT1 small-block that started it all.</p>
              </div>
            </Link>{" "}
            <Link href="/zr1/c4" className="gen-card">
              <Img
                fallback="/c4-zr1.png"
                src="/engine-lt5-c4.png"
                alt="C4 ZR-1"
              />
              <div className="gc-body">
                <span className="year">1990–1995</span>
                <h4>C4 ZR-1 — King of the Hill</h4>
                <p>Lotus-engineered LT5 DOHC V8, 405 HP.</p>
              </div>
            </Link>{" "}
            <Link href="/zr1/c6" className="gen-card">
              <Img
                fallback="/c6-zr1.png"
                src="/engine-ls9-c6.png"
                alt="C6 ZR1"
              />
              <div className="gc-body">
                <span className="year">2009–2013</span>
                <h4>C6 ZR1 — Blue Devil</h4>
                <p>638 HP supercharged LS9, 205 mph.</p>
              </div>
            </Link>{" "}
            <Link href="/zr1/c7" className="gen-card">
              <Img
                fallback="/c7-zr1.png"
                src="/engine-lt5-c7.png"
                alt="C7 ZR1"
              />
              <div className="gc-body">
                <span className="year">2019</span>
                <h4>C7 ZR1 — Peak Front-Engine</h4>
                <p>755 HP supercharged LT5, final front-engine ZR1.</p>
              </div>
            </Link>{" "}
            <Link href="/zr1/c8" className="gen-card">
              <Img src="/c8-zr1.png" alt="C8 ZR1" />
              <div className="gc-body">
                <span className="year">2025–2027</span>
                <h4>C8 ZR1 — Modern Legend</h4>
                <p>1,064 HP LT7 engineTwin-Turbo mid-engine revolution.</p>
              </div>
            </Link>{" "}
            <Link href="/zr1/zr1x" className="gen-card">
              <Img src="/c8-zr1x.png" alt="C8 ZR1X" />
              <div className="gc-body">
                <span className="year text-purple">2026+</span>
                <h4>C8 ZR1X — The Hypercar</h4>
                <p>Hybrid AWD, 1,250+ HP electrified hypercar.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar orange"></div>
            <h2>Featured Highlights</h2>
            <p>Key technology and performance moments</p>
          </div>
          <div className="three-col">
            <Link href="/engine/lt7" className="card">
              <Img
                className="card-img"
                src="/engine-lt7-c8.png"
                alt="LT7 engine"
              />
              <div className="card-body">
                <span className="card-tag tag-blue">Engine</span>
                <h3>LT7 engineTwin-Turbo V8</h3>
                <p>
                  Flat-plane crank, dual-port injection, 1,064 HP — the most
                  powerful Corvette engine ever built.
                </p>
                <span className="card-link">Learn More</span>
              </div>
            </Link>{" "}
            <Link href="/engine/turbos" className="card">
              <Img className="card-img" src="/turbo.png" alt="Turbos" />
              <div className="card-body">
                <span className="card-tag tag-orange">Turbos</span>
                <h3>Largest Turbos Ever on a Corvette</h3>
                <p>
                  Twin turbos feeding the LT7's 5.5L flat-plane V8 for massive
                  low-end torque and top-end power.
                </p>
                <span className="card-link">Learn More</span>
              </div>
            </Link>{" "}
            <Link href="/body/exterior" className="card">
              <Img
                className="card-img"
                src="/aerodynamics.png"
                alt="Aerodynamics"
              />
              <div className="card-body">
                <span className="card-tag tag-purple">Aero</span>
                <h3>Active Aerodynamics</h3>
                <p>
                  1,000+ lb of downforce at speed via active aero elements,
                  front splitter, and rear wing.
                </p>
                <span className="card-link">Learn More</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </PageScope>
  );
}
