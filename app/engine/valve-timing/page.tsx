import type { Metadata } from "next";
import Link from "next/link";
import Img from "@/components/Img";
import PageScope from "@/components/PageScope";

export const metadata: Metadata = {
  title: "LT7 Variable Valve Timing (VVT) — MyZR1 Engine",
};

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
      .center-mt32 {
        text-align: center;
        margin-top: 32px;
      }
      .card-box {
        background: var(--card);
        padding: 18px;
        border-radius: 8px;
        border: 1px solid var(--border);
      }
      .h4-accent {
        margin: 0 0 6px;
        color: var(--accent);
      }
      .h4-blue {
        margin: 0 0 6px;
        color: var(--blue);
      }
      .h4-purple {
        margin: 0 0 6px;
        color: var(--purple);
      }
      .p-small {
        margin: 0;
        color: var(--muted);
        font-size: 0.9rem;
      }
      .center-mt24 {
        text-align: center;
        margin-top: 24px;
      }
      .muted-text-centered-box {
        color: var(--muted);
        line-height: 1.8;
        margin-bottom: 24px;
        max-width: 700px;
        margin-inline: auto;
      }
      .flex-center-gap12 {
        display: flex;
        gap: 12px;
        justify-content: center;
        flex-wrap: wrap;
      }
      .vvt-list {
        color: var(--muted);
        line-height: 1.8;
        padding-left: 20px;
        margin-bottom: 12px;
      }
      .mb-12 {
        margin-bottom: 12px;
      }
      .mb-8 {
        margin-bottom: 8px;
      }
`;

export default function Page() {
  return (
    <PageScope styles={css}>
      <div className="breadcrumb">
        <Link href="/">Home</Link> › <Link href="/engine">Engine</Link> ›{" "}
        <span>Valve Timing</span>
      </div>

      <div className="page-hero">
        <Img
          className="hero-bg"
          src="/images/dohc-finger-follower-valvetrain.png"
          alt="LT7 DOHC Valvetrain"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-tag">VVT · DOHC · Dual Phasing</div>
          <h1>LT7 Variable Valve Timing</h1>
          <p>
            How the ZR1 and ZR1X retime their four camshafts on the fly. The LT7
            Double Over Head Cam (DOHC) architecture uses independent cam
            phasing to let the Engine Control Unit (ECU) shape airflow, boost
            response, exhaust scavenging, and cylinder pressure with surgical
            precision.
          </p>
          <div className="hero-ctas">
            <Link href="/engine/lt7" className="btn btn-primary">
              ← LT7 V8 Overview
            </Link>{" "}
            <Link href="/engine/turbos" className="btn btn-outline">
              Turbos &amp; Exhaust →
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
                <h2>Valve Timing Specifications</h2>
              </div>
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Valvetrain Element</th>
                    <th>Specification</th>
                    <th>Why It Matters</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <b>Camshaft layout</b>
                    </td>
                    <td>DOHC, 4 cams, 32 valves</td>
                    <td>Independent intake/exhaust phasing per bank</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Valve actuation</b>
                    </td>
                    <td>Finger followers</td>
                    <td>Low mass enables high rpm and aggressive profiles</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Variable valve timing</b>
                    </td>
                    <td>Hydraulic cam phasers</td>
                    <td>
                      Continuous retiming for response, scavenging &amp; power
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Exhaust valves</b>
                    </td>
                    <td>Sodium-filled hollow stems</td>
                    <td>Survive sustained Twin-Turbo exhaust heat</td>
                  </tr>
                  <tr>
                    <td>
                      <b>ECU strategy</b>
                    </td>
                    <td>Independent per-bank phasing</td>
                    <td>
                      Shapes boost spool, torque, knock margin &amp; turbo lag
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Turbo integration</b>
                    </td>
                    <td>Overlap-managed scavenging</td>
                    <td>Keeps 76 mm turbos spooled without anti-lag</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <div className="section-header">
                <div className="bar green"></div>
                <h2>Why Valve Timing Matters</h2>
              </div>
              <p className="muted-text-mb14">
                The LT7's Engine Control Unit (ECU) and DOHC system don't just
                control the cams — they strategically phase them to optimize
                airflow, boost, and combustion pressure every millisecond. This
                is the real magic behind the ZR1X's broad, relentless powerband.
              </p>
              <p className="muted-text-mb14">
                Unlike the pushrod small-blocks that defined earlier Corvettes,
                the LT7 is a dual-overhead-cam engine. It features four
                camshafts total (two per cylinder bank) acting on the valves
                through low-friction finger followers. This structure is what
                makes advanced VVT possible.
              </p>
              <p className="muted-text">
                By separating the intake and exhaust cam events, the ECU can
                adjust timing dynamically based on RPM, engine load, boost
                levels, and temperature.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="bar orange"></div>
            <h2>Cam Phasing &amp; ECU Control</h2>
          </div>
          <div className="feature-row">
            <div className="feature-img">
              <Img
                src="/images/dohc-finger-follower-valvetrain.png"
                alt="LT7 DOHC Valvetrain"
              />
            </div>
            <div className="feature-text">
              <h3>Independent Cam Phasing: The Real Power Trick</h3>
              <p className="muted-text mb-12">
                Pushrod engines are limited to a single camshaft, forcing a
                compromise between low-end driveability and top-end power. The
                LT7 has four. This means the ECU can adjust intake cam timing
                and exhaust cam timing independently, per bank, continuously,
                under boost, and at 7,500 rpm.
              </p>
              <p className="muted-text mb-12">
                The LT7 uses hydraulic cam phasers to rotate each camshaft
                relative to its drive sprocket, advancing or retarding valve
                events on the fly.
              </p>
              <ul className="vvt-list">
                <li>
                  <b>Low RPM:</b> The calibration favors engine stability and
                  crisp throttle response.
                </li>
                <li>
                  <b>Mid-Range:</b> The ECU increases valve overlap to help
                  scavenge cylinders and keep the turbos spooled.
                </li>
                <li>
                  <b>Peak Power:</b> Events are timed for maximum volumetric
                  efficiency and cylinder filling.
                </li>
                <li>
                  <b>Response Time:</b> Cam phasing responds in fractions of a
                  second, meaning the engine retimes itself constantly.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar purple"></div>
            <h2>Twin-Turbo &amp; eAWD Blending</h2>
          </div>
          <div className="two-col">
            <div>
              <h3>ECU Management of Twin-Turbos</h3>
              <p className="muted-text-mb14">
                On naturally aspirated engines, valve timing primarily optimizes
                volumetric efficiency. On the turbocharged LT7, the ECU uses cam
                phasing to actively manage turbo behavior:
              </p>
              <ul className="vvt-list">
                <li className="mb-8">
                  <b>Boost Spool Optimization:</b> Retarding the exhaust cam
                  increases exhaust gas energy to the turbines for faster spool;
                  advancing the intake cam reduces reversion for cleaner intake
                  charge airflow.
                </li>
                <li className="mb-8">
                  <b>Torque Shaping:</b> The ECU blends cam timing to flatten
                  torque delivery, ensuring the massive 1,064 hp doesn't
                  overwhelm rear traction.
                </li>
                <li className="mb-8">
                  <b>Detonation Control:</b> VVT manages effective cylinder
                  pressure, letting the ECU avoid engine knock under high boost
                  without pulling ignition timing.
                </li>
                <li className="mb-8">
                  <b>High-RPM Breathing:</b> Finger followers plus DOHC allow
                  aggressive cam profiles; the ECU advances intake timing at
                  high RPM to maintain volumetric efficiency.
                </li>
              </ul>
            </div>
            <div>
              <h3>ZR1X: Blending Valve Timing for eAWD</h3>
              <p className="muted-text-mb14">
                The ZR1X coordinates the 1,064-hp LT7 engine and the 186-hp
                front electric drive as a single electro-mechanical system.
              </p>
              <p className="muted-text-mb14">
                Because the electric motor provides high torque at low speed,
                the ECU adjusts DOHC valve overlap for torque arbitration
                between the gasoline engine and the front motor. This stabilizes
                cylinder pressure, controls turbine acceleration, and maintains
                combustion efficiency during blended torque operation.
              </p>
              <p className="muted-text">
                Arbitration cycles occur in sub-10-millisecond intervals,
                delivering a unified, seamless power profile that makes the ZR1X
                feel smoother and more controlled under full acceleration.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageScope>
  );
}
