import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import Img from "@/components/Img";
import PageScope from "@/components/PageScope";

export const metadata: Metadata = pageMeta(
  "Driving Dynamics — MyZR1 Engine",
  "PTM launch control, Z-Mode custom presets, Performance Data Recorder, G-meter, drive modes, traction control, and the full suite of driver-focused systems…",
);

const css = `
.muted-text-mb14 {
        color: var(--muted);
        line-height: 1.8;
        margin-bottom: 14px;
      }
      .muted-text-mb12 {
        color: var(--muted);
        line-height: 1.8;
        margin-bottom: 12px;
      }
      .muted-text {
        color: var(--muted);
        line-height: 1.8;
      }
      .center-mt32 {
        margin-top: 32px;
        text-align: center;
      }
      .pdr-img-style {
        border-radius: 12px;
        border: 1px solid var(--border);
        width: 100%;
      }
      .mb-24 {
        margin-bottom: 24px;
      }
`;

export default function Page() {
  return (
    <PageScope styles={css}>
      <div className="breadcrumb">
        <Link href="/">Home</Link> › <Link href="/engine">Engine</Link> ›{" "}
        <span>Driving Dynamics</span>
      </div>

      <div className="page-hero">
        <Img
          fallback="/driving-fast.png"
          className="hero-bg"
          src="/ptm.png"
          alt="PTM Driving"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-tag">PTM · Z-Mode · PDR</div>
          <h1>Driving Dynamics &amp; Performance</h1>
          <p>
            PTM launch control, Z-Mode custom presets, Performance Data
            Recorder, G-meter, drive modes, traction control, and the full suite
            of driver-focused systems in the C8 ZR1.
          </p>
          <div className="hero-ctas">
            <Link href="/engine/drivetrain" className="btn btn-primary">
              ← Drivetrain
            </Link>
            <Link href="/body" className="btn btn-outline">
              Body &amp; Chassis →
            </Link>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar"></div>
            <h2>Drive Modes</h2>
            <p id="modes">
              Six modes tuning every aspect of the ZR1's behavior
            </p>
          </div>
          <div className="card-grid">
            <div className="card">
              <div className="card-img-placeholder">🛣️</div>
              <div className="card-body">
                <span className="card-tag tag-blue">Tour</span>
                <h3>Tour Mode</h3>
                <p>
                  Comfortable daily driving — softened suspension, reduced
                  exhaust volume, light throttle mapping, stability control
                  fully active.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-img-placeholder">🏎️</div>
              <div className="card-body">
                <span className="card-tag tag-orange">Sport</span>
                <h3>Sport Mode</h3>
                <p>
                  Heightened throttle response, firmer suspension, more
                  aggressive DCT shifts, active exhaust fully open, stability
                  control remains active.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-img-placeholder">🏁</div>
              <div className="card-body">
                <span className="card-tag tag-green">Track</span>
                <h3>Track Mode</h3>
                <p>
                  Maximum performance — stiffest suspension, sharpest throttle,
                  fastest DCT shifts, stability control at track limit,
                  Performance Data Recorder armed.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-img-placeholder">⚡</div>
              <div className="card-body">
                <span className="card-tag tag-purple">Z-Mode</span>
                <h3>Z-Mode (Custom)</h3>
                <p>
                  Driver-programmable: mix any combination of suspension,
                  throttle, transmission, exhaust, and stability settings. Two
                  Z-Mode presets can be stored.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-img-placeholder">🤫</div>
              <div className="card-body">
                <span className="card-tag tag-blue">Stealth (ZR1X)</span>
                <h3>Stealth Mode</h3>
                <p>
                  ZR1X only — electric front motor drives the car silently.
                  Engine off, zero noise, zero emissions driving at low speeds.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-img-placeholder">🌧️</div>
              <div className="card-body">
                <span className="card-tag tag-orange">Weather</span>
                <h3>Weather Mode</h3>
                <p>
                  Reduced power output, maximum stability intervention, ABS
                  optimized for wet surfaces — the ZR1's safety-first mode.
                </p>
              </div>
            </div>
          </div>
          <div className="center-mt32">
            <Link href="/engine/drivemodes" className="btn btn-outline">
              Deep Dive: Z-Mode &amp; Custom Driving Profiles →
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="bar purple"></div>
            <h2>PTM — Performance Traction Management</h2>
          </div>
          <div className="feature-row">
            <div className="feature-img">
              <Img
                fallback="/assets/ptm-launch-control-display.png"
                src="/ptm.png"
                alt="PTM Display"
              />
            </div>
            <div className="feature-text">
              <h3>Launch Control &amp; PTM Pro</h3>
              <p className="muted-text-mb12">
                PTM is the ZR1's integrated traction, launch, and performance
                management platform. In launch mode, PTM holds a pre-set RPM,
                monitors wheel slip on all four corners (ZR1X), and releases
                clutch engagement at the optimal moment for maximum acceleration
                without wheelspin.
              </p>
              <p className="muted-text-mb12">
                PTM Pro Mode, exclusive to Track and Z-Mode, allows the driver
                to dial in exactly how much wheelspin is permitted — from fully
                locked-down grip to controlled oversteer. It's displayed live on
                the left instrument cluster screen, showing individual wheel
                torque and slip percentages.
              </p>
              <p className="muted-text">
                Push-to-Pass (ZR1X only) is an overboost function that
                momentarily increases electric motor output for a burst of extra
                torque beyond the standard calibration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="pdr" className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar orange"></div>
            <h2>Performance Data Recorder</h2>
          </div>
          <div className="two-col">
            <div>
              <Img
                hideOnError
                src="/assets/pdr-menu-live.png"
                alt="PDR Live"
                className="pdr-img-style"
              />
            </div>
            <div>
              <p className="muted-text-mb14">
                The Performance Data Recorder (PDR) records 1080p video from a
                forward-facing camera while simultaneously logging GPS track
                position, throttle, brake, steering angle, lateral g-force,
                speed, and gear selection as a data overlay.
              </p>
              <p className="muted-text-mb14">
                Footage is saved to a microSD card in the center console. The
                Cosworth-developed software allows post-session analysis on a
                laptop — replaying the lap with all telemetry channels visible,
                identifying braking points and cornering lines for improvement.
              </p>
              <p className="muted-text">
                On ZR1X, the PDR also logs front motor torque output and battery
                state of charge, providing a complete picture of how the hybrid
                system was used during each lap.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="speed" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="bar green"></div>
            <h2>Speed Records</h2>
          </div>
          <div className="img-grid mb-24">
            <Img
              hideOnError
              src="/images/speed-records-hero.png"
              alt="Speed Records"
            />{" "}
            <Img
              hideOnError
              src="/assets/zr1-vs-zr1-dragtimes-clean.png"
              alt="ZR1 vs ZR1"
            />{" "}
            <Img hideOnError src="/driving-fast.png" alt="Driving Fast" />
          </div>
          <table className="spec-table">
            <thead>
              <tr>
                <th>Record</th>
                <th>C8 ZR1</th>
                <th>C8 ZR1X</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0–60 mph</td>
                <td>2.6 seconds</td>
                <td>&lt;2.5 seconds (est.)</td>
              </tr>
              <tr>
                <td>0–100 mph</td>
                <td>~5.4 seconds</td>
                <td>&lt;5.0 seconds (est.)</td>
              </tr>
              <tr>
                <td>Quarter mile</td>
                <td>&lt;10.0 seconds</td>
                <td>&lt;9.5 seconds (est.)</td>
              </tr>
              <tr>
                <td>Top speed</td>
                <td>233 mph</td>
                <td>230+ mph</td>
              </tr>
              <tr>
                <td>Nürburgring</td>
                <td>Sub-6:50 target</td>
                <td>Sub-6:50 / sub-6:40 target</td>
              </tr>
              <tr>
                <td>Braking 60–0</td>
                <td>~96 ft</td>
                <td>~96 ft</td>
              </tr>
              <tr>
                <td>Lateral G</td>
                <td>1.22 G (est.)</td>
                <td>1.25+ G (est.)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="gmeter" className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar purple"></div>
            <h2>G-Meter &amp; Telemetry</h2>
          </div>
          <div className="two-col">
            <div className="card">
              <div className="card-img-placeholder">⏱️</div>
              <div className="card-body">
                <span className="card-tag tag-blue">Live Data</span>
                <h3>G-Meter Display</h3>
                <p>
                  The ZR1's gauge cluster includes a live g-meter display
                  showing lateral and longitudinal acceleration forces. Combined
                  with the PDR, drivers can analyze how hard they're pushing the
                  chassis relative to its limits.
                </p>
              </div>
            </div>
            <div className="card">
              <Img
                className="card-img"
                src="/LT7%20plot.png"
                alt="LT7 dyno plot"
              />
              <div className="card-body">
                <span className="card-tag tag-orange">Analysis</span>
                <h3>Dyno &amp; Torque Plots</h3>
                <p>
                  The LT7 torque curve stays essentially flat from 3,000 to
                  6,750 RPM, over 800 lb-ft, and peaks at 828 lb-ft at 6,000
                  RPM. Maximum power is 1,064 horsepower at 7,000 RPM. Top
                  speed, 233 mph, is held in sixth gear at an 8,100 RPM redline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="peak" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="bar orange"></div>
            <h2>Peak Efficiency on the Road</h2>
            <p>
              These cars are built for slow cruising and for full-pace driving.
              The lower 9.8:1 compression ratio softens the Z06's aggressive
              feel and reduces the risk of detonation.
            </p>
          </div>
          <div className="card-grid">
            <div className="card">
              <div className="card-body">
                <span className="card-tag tag-blue">Cruise</span>
                <h3>60 mph in Eighth</h3>
                <p>
                  You can drive the ZR1 or ZR1X at 60 mph in eighth gear at
                  about 1,400 RPM without the engine bogging down or collecting
                  carbon.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <span className="card-tag tag-orange">Neutral</span>
                <h3>Revving in Neutral</h3>
                <p>
                  With the transmission in neutral, throttle input can raise
                  engine speed while the dual-clutch stays disengaged from the
                  driven wheels. Confirm the car is stationary, keep the brake
                  applied while the state is changing, and return to Park or
                  Drive only when the maneuver is finished.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <span className="card-tag tag-green">Ring</span>
                <h3>Nürburgring Pace</h3>
                <p>
                  The C8 ZR1 targets a sub-6:50 Nordschleife lap. The ZR1X adds
                  the front e-axle for about 1,250 hp combined and targets the
                  sub-6:50 / sub-6:40 envelope.
                </p>
                <Link href="/tracks/nurburgring" className="card-link">
                  Nürburgring times →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageScope>
  );
}
