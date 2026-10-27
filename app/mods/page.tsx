import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import Img from "@/components/Img";

export const metadata: Metadata = pageMeta(
  "Mods — ZR1 & ZR1X Modifications — MyZR1",
  "Performance tuning, handling upgrades, active aero enhancements, cooling improvements, display mods, and aesthetic customization for both the ZR1 and ZR1X…",
);

export default function Page() {
  return (
    <>
      <div className="breadcrumb">
        <Link href="/">Home</Link> › <span>Mods 🛠️</span>
      </div>

      <div className="page-hero">
        <Img
          fallback="/c8-zr1x.png"
          className="hero-bg"
          src="/assets/zr1x-side.png"
          alt="ZR1 Mods"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-tag">
            Performance · Handling · Aero · Aesthetic
          </div>
          <h1>ZR1 &amp; ZR1X Modifications</h1>
          <p>
            Performance tuning, handling upgrades, active aero enhancements,
            cooling improvements, display mods, and aesthetic customization for
            both the ZR1 and ZR1X platforms.
          </p>
          <div className="hero-ctas">
            <Link href="/mods/zr1" className="btn btn-primary">
              ZR1 Mods
            </Link>{" "}
            <Link href="/mods/zr1x" className="btn btn-outline">
              ZR1X Mods
            </Link>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar"></div>
            <h2>Modifications Overview</h2>
          </div>
          <div className="two-col">
            <Link href="/mods/zr1" className="card">
              <Img className="card-img" src="/c8-zr1.png" alt="ZR1 Mods" />
              <div className="card-body">
                <span className="card-tag tag-blue">ZR1 Platform</span>
                <h3>ZR1 Modifications</h3>
                <p>
                  Performance tuning, ECU calibration, handling mods
                  (suspension, wheels, alignment), active aero upgrades, cooling
                  improvements, electronic display enhancements, battery
                  replacement, and aesthetic / stripe mods for the base ZR1.
                </p>
                <span className="card-link">View ZR1 Mods</span>
              </div>
            </Link>{" "}
            <Link href="/mods/zr1x" className="card">
              <Img className="card-img" src="/c8-zr1x.png" alt="ZR1X Mods" />
              <div className="card-body">
                <span className="card-tag tag-purple">ZR1X Platform</span>
                <h3>ZR1X Modifications</h3>
                <p>
                  Same categories as ZR1 plus ZR1X-specific: hybrid battery
                  management, eMotor calibration, E-AWD torque bias tuning,
                  thermal management for the high-voltage system, and
                  ZR1X-specific aesthetic mods.
                </p>
                <span className="card-link">View ZR1X Mods</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="bar orange"></div>
            <h2>Mod Categories</h2>
          </div>
          <div className="card-grid">
            <Link href="/mods/zr1#performance" className="card">
              <div className="card-img-placeholder">🚀</div>
              <div className="card-body">
                <span className="card-tag tag-blue">Performance</span>
                <h3>Performance Tuning</h3>
                <p>
                  ECU calibration, boost management, intercooler upgrades, and
                  exhaust modifications for more power from the LT7.
                </p>
                <span className="card-link">View →</span>
              </div>
            </Link>{" "}
            <Link href="/mods/zr1#handling" className="card">
              <div className="card-img-placeholder">🏎️</div>
              <div className="card-body">
                <span className="card-tag tag-orange">Handling</span>
                <h3>Handling Mods</h3>
                <p>
                  Coilover kits, sway bars, alignment kits, upgraded brake pads,
                  and forged wheel options for track-focused setups.
                </p>
                <span className="card-link">View →</span>
              </div>
            </Link>{" "}
            <Link href="/mods/zr1#aero" className="card">
              <div className="card-img-placeholder">✈️</div>
              <div className="card-body">
                <span className="card-tag tag-purple">Active Aero</span>
                <h3>Aero Upgrades</h3>
                <p>
                  Wing extensions, splitter replacements, dive planes, and
                  underbody panels that complement the factory active aero
                  system.
                </p>
                <span className="card-link">View →</span>
              </div>
            </Link>{" "}
            <Link href="/mods/zr1#cooling" className="card">
              <div className="card-img-placeholder">❄️</div>
              <div className="card-body">
                <span className="card-tag tag-green">Cooling</span>
                <h3>Cooling Mods</h3>
                <p>
                  Larger intercoolers, additional radiator cores, heat
                  deflectors, and oil cooler upgrades for extended track
                  sessions.
                </p>
                <span className="card-link">View →</span>
              </div>
            </Link>{" "}
            <Link href="/mods/zr1#displays" className="card">
              <div className="card-img-placeholder">🖥️</div>
              <div className="card-body">
                <span className="card-tag tag-blue">Displays</span>
                <h3>Electronic Displays</h3>
                <p>
                  Third-party HUD systems, gauge clusters, data loggers, and
                  camera mounts for track telemetry beyond the factory PDR.
                </p>
                <span className="card-link">View →</span>
              </div>
            </Link>{" "}
            <Link href="/mods/zr1#aesthetic" className="card">
              <div className="card-img-placeholder">✨</div>
              <div className="card-body">
                <span className="card-tag tag-orange">Aesthetic</span>
                <h3>Aesthetic &amp; Stripes</h3>
                <p>
                  Custom livery, racing stripe packages, carbon fiber trim
                  replacements, and interior upgrades that personalize the ZR1's
                  appearance.
                </p>
                <span className="card-link">View →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar purple"></div>
            <h2>Mod Gallery</h2>
          </div>
          <div className="img-grid">
            <Img hideOnError src="/assets/zr1x-side.png" alt="ZR1X Side" />{" "}
            <Img hideOnError src="/c8-zr1x-corner.png" alt="ZR1X Corner" />{" "}
            <Img hideOnError src="/aerodynamics.png" alt="Aero" />{" "}
            <Img
              hideOnError
              src="/assets/zr1x-cooling-overview.png"
              alt="Cooling"
            />{" "}
            <Img
              hideOnError
              src="/images/wheel-10-spoke-visible-carbon-fiber-hover.jpg"
              alt="CF Wheel"
            />{" "}
            <Img hideOnError src="/images/external-mods" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
