import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import Img from "@/components/Img";
import PageScope from "@/components/PageScope";

export const metadata: Metadata = pageMeta(
  "Drive Modes & Z-Mode — MyZR1 Engine",
  "The Corvette C8 ZR1 and ZR1X gives the driver two independent custom driving-profile slots: the Z-Mode button on the steering wheel for an aggressive…",
);

const css = `
.muted-copy {
        color: var(--muted);
        line-height: 1.8;
        margin-bottom: 14px;
      }

      .muted-copy-tight {
        color: var(--muted);
        line-height: 1.8;
      }

      .mode-image {
        width: 100%;
        border-radius: 12px;
        border: 1px solid var(--border);
      }

      .mode-caption {
        font-size: 0.85rem;
        color: var(--muted);
        margin-top: 8px;
        text-align: center;
      }

      .mode-list {
        color: var(--muted);
        line-height: 1.6;
        padding-left: 20px;
        margin: 10px 0 0;
      }

      .mode-list li {
        margin-bottom: 8px;
      }

      .configuration-list {
        color: var(--muted);
        line-height: 1.8;
        padding-left: 20px;
      }

      .pro-tip-copy {
        color: var(--muted);
        line-height: 1.8;
        margin-top: 10px;
      }
`;

export default function Page() {
  return (
    <PageScope styles={css}>
      <div className="breadcrumb">
        <Link href="/">Home</Link> › <Link href="/engine">Engine</Link> ›{" "}
        <span>Drive Modes</span>
      </div>

      <div className="page-hero">
        <Img
          className="hero-bg"
          src="/rarity-guide/z-mode-button-steering.png"
          alt="Z-Mode Button Steering"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-tag">Z-Mode · My Mode · Calibration</div>
          <h1>Z-Mode &amp; Drive Modes</h1>
          <p>
            The Corvette C8 ZR1 and ZR1X gives the driver two independent custom
            driving-profile slots: the Z-Mode button on the steering wheel for
            an aggressive performance preset, and My Mode from the infotainment
            for a daily-driver preset.
          </p>
          <div className="hero-ctas">
            <Link href="/engine/driving" className="btn btn-primary">
              ← Driving Dynamics
            </Link>{" "}
            <Link href="/body" className="btn btn-outline">
              Body &amp; Interior →
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
                <h2>Set And Preset Profiles</h2>
              </div>
              <p className="muted-copy">
                Stock C8 drive modes &#123;' '&#125;
                <b>Tour, Sport, Track, Weather</b> &#123;' '&#125; are factory
                sets driving profiles where most parameters are locked. <br />
                <br /> The two more presets are driver selectable adjustable
                modes are &#123;' '&#125; <b>Z-Mode</b> &#123;' '&#125; and
                &#123;' '&#125; <b>My Mode</b>. &#123;' '&#125;
              </p>
              <p className="muted-copy">
                Think of them as two save slots that the driver fully owns: each
                one stores its own choice of throttle mapping, steering effort,
                suspension stiffness, exhaust loudness, transmission shift
                speed, traction strategy, brake feel, and (on the ZR1X) hybrid
                motor blending.
              </p>
              <p className="muted-copy-tight">
                Z-Mode is built for maximum performance at the touch of a single
                steering-wheel button, while My Mode acts as your custom,
                persistent daily driving profile.
              </p>
            </div>
            <div>
              <Img
                src="/rarity-guide/z-mode/03-vehicle-settings-z-mymode.png"
                alt="Vehicle settings menu"
                className="mode-image"
              />
              <p className="mode-caption">
                Vehicle settings menu on the center infotainment screen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="bar orange"></div>
            <h2>Profile Comparison</h2>
          </div>
          <div className="card-grid">
            <div className="card">
              <div className="card-body">
                <span className="card-tag tag-purple">Performance</span>
                <h3>Z-Mode</h3>
                <ul className="mode-list">
                  <li>
                    Triggered by the dedicated <b>Z button</b> on the steering
                    wheel.
                  </li>
                  <li>
                    Designed for the most aggressive setup you regularly want
                    (canyon run, autocross, track).
                  </li>
                  <li>
                    Engages instantly so you never take a hand off the wheel.
                  </li>
                  <li>
                    On ZR1X: locks in your preferred <em>Push-to-Pass</em> and
                    hybrid power blend.
                  </li>
                </ul>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <span className="card-tag tag-blue">Daily Driving</span>
                <h3>My Mode</h3>
                <ul className="mode-list">
                  <li>Selected from the console drive-mode rotary dial.</li>
                  <li>
                    Designed for comfortable daily miles (soft ride, quiet
                    exhaust, smooth shifting).
                  </li>
                  <li>
                    Persists across ignition cycles; the car boots directly into
                    it.
                  </li>
                  <li>
                    Great for hybrid silence on city streets without giving up
                    power.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar green"></div>
            <h2>Z-Mode Details &amp; Options</h2>
          </div>
          <div className="feature-row">
            <div className="feature-img">
              <Img
                src="/rarity-guide/z-mode/02-steering-wheel-z-button.png"
                alt="Steering wheel button"
              />
            </div>
            <div className="feature-text">
              <h3>Steering Wheel Performance Customization</h3>
              <p className="muted-copy">
                One tap of the red Z button arms the performance profile; tap it
                again to revert to your previous mode. The adjustable options
                include:
              </p>
              <table className="spec-table">
                <tbody>
                  <tr>
                    <td>
                      <b>Activation</b>
                    </td>
                    <td>Steering wheel button (no hand off wheel)</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Throttle Map</b>
                    </td>
                    <td>Tour-soft to Track-snappy</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Steering Weight</b>
                    </td>
                    <td>Tour, Sport, or Track weighting</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Suspension (FE7)</b>
                    </td>
                    <td>damper firmness (Tour, Sport, Track)</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Exhaust Valve</b>
                    </td>
                    <td>Stealth, Tour, Sport, or Track volume</td>
                  </tr>
                  <tr>
                    <td>
                      <b>DCT Transmission</b>
                    </td>
                    <td>Shift speed &amp; gear hold strategy</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Traction (PTM)</b>
                    </td>
                    <td>Lock in preferred PTM stages</td>
                  </tr>
                  <tr>
                    <td>
                      <b>ZR1X Hybrid</b>
                    </td>
                    <td>Front motor torque add &amp; Push-to-Pass</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="bar purple"></div>
            <h2>My Mode Details &amp; Setup</h2>
          </div>
          <div className="feature-row flip">
            <div className="feature-img">
              <Img
                src="/rarity-guide/z-mode/01-cluster-my-mode.png"
                alt="My Mode Cluster"
              />
            </div>
            <div className="feature-text">
              <h3>Daily Comfort Setup</h3>
              <p className="muted-copy">
                My Mode is designed to be the default driving mode. The
                instrument cluster displays "My Mode" right under the
                speedometer when it is active.
              </p>
              <table className="spec-table">
                <tbody>
                  <tr>
                    <td>
                      <b>Activation</b>
                    </td>
                    <td>Console drive-mode rotary dial</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Persistence</b>
                    </td>
                    <td>Remembers setting across ignition key cycles</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Suggested Setup</b>
                    </td>
                    <td>
                      Tour-soft suspension + Sport steering + Stealth exhaust
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Cabin Features</b>
                    </td>
                    <td>Links to climate controls and cabin display theme</td>
                  </tr>
                  <tr>
                    <td>
                      <b>ZR1X Hybrid</b>
                    </td>
                    <td>
                      Silent, electric-only rollout option for early mornings
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar"></div>
            <h2>How to Configure Each Profile</h2>
          </div>
          <div className="two-col">
            <div>
              <h3>Configuration Steps</h3>
              <ol className="configuration-list">
                <li>
                  Park the vehicle and turn the accessory power or engine on.
                </li>
                <li>
                  On the center infotainment screen, tap the <b>Vehicle</b> tab.
                </li>
                <li>
                  Tap <b>Z-Mode</b> or <b>MyMode</b> at the top of the menu
                  options.
                </li>
                <li>
                  Walk through each configurable parameter (Steering,
                  Suspension, Brake, Throttle, Trans, Exhaust, eAWD/PTP).
                </li>
                <li>
                  Save your profile. It will be bound to your active driver key
                  (Driver 1 / Driver 2).
                </li>
              </ol>
            </div>
            <div>
              <h3>Pro Tips</h3>
              <p className="muted-copy-tight">
                Build Z-Mode for the highest intensity driving you intend to do.
                Since it is recallable instantly via the steering wheel button,
                you can swap back and forth between Tour and your aggressive
                preset with zero delay.
              </p>
              <p className="pro-tip-copy">
                For My Mode, focus on compliance and quietness, specifically
                keeping exhaust in Stealth mode if you start the car early in
                residential neighborhoods, while maintaining a firm steering
                feel for track-like steering response.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageScope>
  );
}
