import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import Img from "@/components/Img";

export const metadata: Metadata = pageMeta(
  "Body — Exterior & Interior — MyZR1",
  "Active aerodynamics, carbon-ceramic brakes, forged wheels, Michelin tires, magnetic suspension, and a redesigned 2026–27 interior — every physical element…",
);

export default function Page() {
  return (
    <>
      <div className="breadcrumb">
        <Link href="/">Home</Link> › <span>Body</span>
      </div>

      <div className="page-hero">
        <Img
          fallback="/c8-zr1.png"
          className="hero-bg"
          src="/aerodynamics.png"
          alt={"ZR1 Body & Aero"}
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-tag">Exterior · Interior · Chassis</div>
          <h1>Body, Exterior &amp; Interior</h1>
          <p>
            Active aerodynamics, carbon-ceramic brakes, forged wheels, Michelin
            tires, magnetic suspension, and a redesigned 2026–27 interior —
            every physical element of the C8 ZR1 and ZR1X.
          </p>
          <div className="hero-ctas">
            <Link href="/body/exterior" className="btn btn-primary">
              Exterior &amp; Chassis
            </Link>{" "}
            <Link href="/body/interior" className="btn btn-outline">
              Interior
            </Link>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar"></div>
            <h2>Body Sections</h2>
          </div>
          <div className="two-col">
            <Link href="/body/exterior" className="card">
              <Img
                fallback="/c8-zr1.png"
                className="card-img"
                src="/aerodynamics.png"
                alt="Exterior"
              />
              <div className="card-body">
                <span className="card-tag tag-blue">
                  Exterior &amp; Chassis
                </span>
                <h3>Exterior, Aero &amp; Chassis</h3>
                <p>
                  Active aerodynamics, carbon-ceramic brakes, forged wheels,
                  Michelin tires, magneto-rheological suspension, front lift,
                  convertible option, dimensions, and weight. Special editions:
                  Quail, Asymmetrical, Stars &amp; Steel.
                </p>
                <span className="card-link">Full Exterior Guide</span>
              </div>
            </Link>{" "}
            <Link href="/body/interior" className="card">
              <Img
                fallback="/instrument-panel.png"
                className="card-img"
                src="/hud.png"
                alt="Interior"
              />
              <div className="card-body">
                <span className="card-tag tag-purple">Interior</span>
                <h3>Interior &amp; Cockpit</h3>
                <p>
                  Performance seats, heads-up display, digital cockpit, wall of
                  buttons, suede Alcantara trim, steering wheel controls,
                  digital rear-view mirror, and the 2026–27 redesigned cabin.
                </p>
                <span className="card-link">Full Interior Guide</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="bar orange"></div>
            <h2>Body Gallery</h2>
          </div>
          <div className="img-grid">
            <Img hideOnError src="/aerodynamics.png" alt="Aero" />{" "}
            <Img src="/c8-zr1.png" alt="C8 ZR1" />{" "}
            <Img src="/c8-zr1x.png" alt="C8 ZR1X" />{" "}
            <Img hideOnError src="/assets/c8-zr1-2026.png" alt="2026 ZR1" />{" "}
            <Img hideOnError src="/hud.png" alt="HUD" />{" "}
            <Img hideOnError src="/steering.png" alt="Steering Wheel" />{" "}
            <Img
              hideOnError
              src="/instrument-panel.png"
              alt="Instrument Panel"
            />{" "}
            <Img hideOnError src="/front-lift.png" alt="Front Lift" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar purple"></div>
            <h2>Quick Body Links</h2>
          </div>
          <div className="two-col">
            <div className="link-section">
              <h3>Exterior &amp; Chassis</h3>
              <div className="link-list">
                <Link href="/body/exterior#aero" className="link-item">
                  <Img className="li-img" src="/aerodynamics.png" alt="Aero" />
                  <div className="li-text">
                    <span className="li-label">Active Aerodynamics</span>
                    <span className="li-sub">1,000+ lb downforce</span>
                  </div>
                </Link>{" "}
                <Link href="/body/exterior#brakes" className="link-item">
                  <div className="li-icon">🛑</div>
                  <div className="li-text">
                    <span className="li-label">Carbon Ceramic Brakes</span>
                    <span className="li-sub">Brembo front specs</span>
                  </div>
                </Link>{" "}
                <Link href="/body/exterior#suspension" className="link-item">
                  <div className="li-icon">🧲</div>
                  <div className="li-text">
                    <span className="li-label">Magneto Shocks</span>
                    <span className="li-sub">MR suspension</span>
                  </div>
                </Link>{" "}
                <Link href="/body/exterior#wheels" className="link-item">
                  <div className="li-icon">🛞</div>
                  <div className="li-text">
                    <span className="li-label">Forged Wheels &amp; Tires</span>
                    <span className="li-sub">Michelin Cup 2R</span>
                  </div>
                </Link>{" "}
                <Link href="/body/exterior#convertible" className="link-item">
                  <div className="li-icon">🔘</div>
                  <div className="li-text">
                    <span className="li-label">Convertible</span>
                    <span className="li-sub">Power retractable top</span>
                  </div>
                </Link>{" "}
                <Link href="/body/exterior#editions" className="link-item">
                  <Img
                    hideOnError
                    className="li-img"
                    src="/c8-quail.png"
                    alt="Editions"
                  />
                  <div className="li-text">
                    <span className="li-label">Special Editions</span>
                    <span className="li-sub">
                      Quail, Asymmetrical, Stars &amp; Steel
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="link-section">
              <h3 className="purple">Interior</h3>
              <div className="link-list">
                <Link href="/body/interior#seats" className="link-item">
                  <div className="li-icon">🪑</div>
                  <div className="li-text">
                    <span className="li-label">Performance Seats</span>
                    <span className="li-sub">GT1, GT2 &amp; Competition</span>
                  </div>
                </Link>{" "}
                <Link href="/body/interior#hud" className="link-item">
                  <Img className="li-img" src="/hud.png" alt="HUD" />
                  <div className="li-text">
                    <span className="li-label">Heads-Up Display</span>
                    <span className="li-sub">Windshield projection</span>
                  </div>
                </Link>{" "}
                <Link href="/body/interior#display" className="link-item">
                  <Img
                    className="li-img"
                    src="/instrument-panel.png"
                    alt="Display"
                  />
                  <div className="li-text">
                    <span className="li-label">Digital Cockpit</span>
                    <span className="li-sub">12" + 8" displays</span>
                  </div>
                </Link>{" "}
                <Link href="/body/interior#steering" className="link-item">
                  <Img className="li-img" src="/steering.png" alt="Steering" />
                  <div className="li-text">
                    <span className="li-label">Steering Wheel</span>
                    <span className="li-sub">
                      Carbon fiber, button controls
                    </span>
                  </div>
                </Link>{" "}
                <Link href="/body/interior#alcantara" className="link-item">
                  <div className="li-icon">🧵</div>
                  <div className="li-text">
                    <span className="li-label">Suede Alcantara</span>
                    <span className="li-sub">Door &amp; trim surfaces</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
