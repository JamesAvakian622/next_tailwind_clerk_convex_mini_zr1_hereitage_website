import type { Metadata } from "next";
import Link from "next/link";
import Img from "@/components/Img";
import PageScope from "@/components/PageScope";

export const metadata: Metadata = { title: "ZR1X Mods — MyZR1X Modifications" };

const css = `
.bg-purple-text-white {
        background: var(--purple);
        color: #fff;
      }
`;

export default function Page() {
  return (
    <PageScope styles={css}>
      <div className="breadcrumb">
        <Link href="/">Home</Link> › <Link href="/mods">Mods</Link> ›{" "}
        <span>ZR1X Mods</span>
      </div>

      <div className="page-hero">
        <Img className="hero-bg" src="/c8-zr1x.png" alt="ZR1X Mods" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-tag bg-purple-text-white">
            ZR1X Platform · E-AWD
          </div>
          <h1>ZR1X Modifications 🛠️</h1>
          <p>
            All ZR1 modification categories plus ZR1X-specific: hybrid battery
            management, eMotor calibration, E-AWD torque bias tuning, and
            high-voltage thermal management upgrades.
          </p>
          <div className="hero-ctas">
            <Link href="/mods/zr1" className="btn btn-primary">
              ← ZR1 Mods
            </Link>
            <Link href="/engine/drivetrain" className="btn btn-outline">
              E-AWD Details
            </Link>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar purple"></div>
            <h2>ZR1X-Specific Modifications</h2>
            <p>
              Additional modification categories unique to the hybrid E-AWD
              platform
            </p>
          </div>
          <div className="card-grid card-grid-lg">
            <div className="card">
              <Img
                fallback="/battery.png"
                className="card-img"
                src="/assets/zr1x-battery.png"
                alt="Battery"
              />
              <div className="card-body">
                <span className="card-tag tag-purple">Hybrid</span>
                <h3>Battery Management</h3>
                <p>
                  Third-party battery monitoring systems track state-of-charge
                  cycles and cell balancing. Some tuners offer HV battery
                  recalibration to expand the usable state-of-charge window
                  beyond the conservative factory limits — increasing electric
                  range and regen aggressiveness.
                </p>
              </div>
            </div>
            <div className="card">
              <Img
                fallback="/assets/elsd-power-flow-diagram.png"
                className="card-img"
                src="/eawd.png"
                alt="E-AWD"
              />
              <div className="card-body">
                <span className="card-tag tag-blue">E-AWD</span>
                <h3>Torque Bias Tuning</h3>
                <p>
                  The front/rear torque split ratio defaults can be adjusted by
                  authorized calibrators via the ZR1X's torque blending ECU
                  parameters. More front bias improves wet-weather traction;
                  more rear bias sharpens the rear-drive character for track
                  use.
                </p>
              </div>
            </div>
            <div className="card">
              <Img
                fallback="/engine-lt7-c8.png"
                className="card-img"
                src="/assets/zr1x-cooling-overview.png"
                alt="Thermal"
              />
              <div className="card-body">
                <span className="card-tag tag-orange">Cooling</span>
                <h3>HV Thermal Management</h3>
                <p>
                  The ZR1X's high-voltage battery uses a liquid thermal
                  management system. Upgraded pump flow rates and heat exchanger
                  capacity allow longer sustained full-system output during
                  track days before thermal limiting occurs.
                </p>
              </div>
            </div>
            <div className="card">
              <Img className="card-img" src="/engine-lt7-c8.png" alt="eMotor" />
              <div className="card-body">
                <span className="card-tag tag-green">Performance</span>
                <h3>eMotor Output Calibration</h3>
                <p>
                  The front electric motor's peak output and duty cycle can be
                  adjusted by authorized ZR1X tuners. Increasing peak torque
                  delivery duration extends the push-to-pass boost effect, while
                  adjusting the regen strength affects brake feel and energy
                  recovery rate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="bar orange"></div>
            <h2>Shared Mod Categories (ZR1 + ZR1X)</h2>
            <p>All ZR1 modifications apply to the ZR1X platform as well</p>
          </div>
          <div className="card-grid">
            <Link href="/mods/zr1#performance" className="card">
              <div className="card-img-placeholder">🚀</div>
              <div className="card-body">
                <span className="card-tag tag-blue">Performance</span>
                <h3>ECU &amp; Engine Tuning</h3>
                <p>
                  LT7 enginecalibration, boost management, exhaust upgrades —
                  all apply to the ZR1X's combustion side.
                </p>
                <span className="card-link">View ZR1 Guide →</span>
              </div>
            </Link>{" "}
            <Link href="/mods/zr1#handling" className="card">
              <div className="card-img-placeholder">🏎️</div>
              <div className="card-body">
                <span className="card-tag tag-orange">Handling</span>
                <h3>Suspension &amp; Wheels</h3>
                <p>
                  Coilovers, alignment, wheel sets — identical application on
                  ZR1X. Note: E-AWD changes optimal alignment targets.
                </p>
                <span className="card-link">View ZR1 Guide →</span>
              </div>
            </Link>{" "}
            <Link href="/mods/zr1#aero" className="card">
              <div className="card-img-placeholder">✈️</div>
              <div className="card-body">
                <span className="card-tag tag-purple">Aero</span>
                <h3>Aerodynamic Upgrades</h3>
                <p>
                  Wing extensions, splitter replacements — same factory aero
                  architecture as ZR1.
                </p>
                <span className="card-link">View ZR1 Guide →</span>
              </div>
            </Link>{" "}
            <Link href="/mods/zr1#aesthetic" className="card">
              <div className="card-img-placeholder">✨</div>
              <div className="card-body">
                <span className="card-tag tag-green">Aesthetic</span>
                <h3>Stripes &amp; Exterior</h3>
                <p>
                  Racing stripe packages and exterior mods — same options as ZR1
                  base platform.
                </p>
                <span className="card-link">View ZR1 Guide →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar green"></div>
            <h2>ZR1X Gallery</h2>
          </div>
          <div className="img-grid">
            <Img src="/c8-zr1x.png" alt="C8 ZR1X" />{" "}
            <Img hideOnError src="/assets/zr1x-side.png" alt="ZR1X Side" />{" "}
            <Img
              hideOnError
              src="/assets/zr1x-battery.png"
              alt="ZR1X Battery"
            />{" "}
            <Img hideOnError src="/eawd.png" alt="E-AWD System" />{" "}
            <Img
              hideOnError
              src="/assets/zr1x-cooling-overview.png"
              alt="Cooling"
            />{" "}
            <Img hideOnError src="/c8-quail.png" alt="Quail Edition" />
          </div>
        </div>
      </section>
    </PageScope>
  );
}
