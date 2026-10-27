import type { Metadata } from "next";
import Link from "next/link";
import Img from "@/components/Img";

export const metadata: Metadata = { title: "Interior & Cockpit — MyZR1 Body" };

export default function Page() {
  return (
    <>
      <div className="breadcrumb">
        <Link href="/">Home</Link> › <Link href="/body">Body</Link> ›{" "}
        <span>Interior</span>
      </div>

      <div className="page-hero">
        <Img
          fallback="/instrument-panel.png"
          className="hero-bg"
          src="/hud.png"
          alt="ZR1 Interior"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-tag">Cockpit · HUD · Seats · Displays</div>
          <h1>Interior &amp; Cockpit</h1>
          <p>
            A driver-focused cockpit redesigned for the 2026–27 model year —
            performance seats, heads-up display, dual digital screens, Alcantara
            trim, and complete steering wheel control integration.
          </p>
          <div className="hero-ctas">
            <Link href="/body/exterior" className="btn btn-primary">
              ← Exterior
            </Link>
            <Link href="/service" className="btn btn-outline">
              Service Guide
            </Link>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar"></div>
            <h2>Interior Gallery</h2>
          </div>
          <div className="img-grid">
            <Img hideOnError src="/hud.png" alt="Heads-Up Display" />{" "}
            <Img
              hideOnError
              src="/instrument-panel.png"
              alt="Instrument Panel"
            />{" "}
            <Img hideOnError src="/zr1-instrument-panel.png" alt="ZR1 Panel" />{" "}
            <Img hideOnError src="/steering.png" alt="Steering Wheel" />{" "}
            <Img hideOnError src="/c8-gt1seat.png" alt="GT1 Seat" />{" "}
            <Img hideOnError src="/c8-gt2seat.png" alt="GT2 Seat" />{" "}
            <Img
              hideOnError
              src="/assets/ptm-pro-2027-left-display.png"
              alt="PTM Display"
            />{" "}
            <Img hideOnError src="/assets/infotainment" alt="" />
          </div>
        </div>
      </section>

      <section id="seats" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="bar purple"></div>
            <h2>Performance Seats</h2>
          </div>
          <div className="three-col">
            <Link href="/body" className="card">
              <Img
                fallback="/c8-gt2seat.png"
                className="card-img"
                src="/c8-gt1seat.png"
                alt="GT1 Seat"
              />
              <div className="card-body">
                <span className="card-tag tag-blue">Standard</span>
                <h3>GT1 Seat</h3>
                <p>
                  The standard GT1 seat balances all-day comfort with lateral
                  support. Leather-wrapped with available Napa upgrades —
                  suitable for daily driving and spirited canyon roads.
                </p>
              </div>
            </Link>{" "}
            <Link href="/body" className="card">
              <Img className="card-img" src="/c8-gt2seat.png" alt="GT2 Seat" />
              <div className="card-body">
                <span className="card-tag tag-orange">Sport</span>
                <h3>GT2 Seat</h3>
                <p>
                  Enhanced bolstering with firmer cushioning — the ideal choice
                  for drivers who split time between the track and the street,
                  offering more lateral support under hard cornering.
                </p>
              </div>
            </Link>{" "}
            <Link href="/body" className="card">
              <Img
                fallback="/c8-gt2seat.png"
                className="card-img"
                src="/c8-gt3seat.png"
                alt="Competition Seat"
              />
              <div className="card-body">
                <span className="card-tag tag-purple">Track</span>
                <h3>Competition Seat</h3>
                <p>
                  Fixed-back carbon fiber bucket — maximum lateral and shoulder
                  support for track days. Requires a neck brace or HANS device
                  for helmet use. Lightest seating option.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section id="hud" className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar orange"></div>
            <h2>Heads-Up Display &amp; Instruments</h2>
          </div>
          <div className="feature-row">
            <div className="feature-img">
              <Img fallback="/instrument-panel.png" src="/hud.png" alt="HUD" />
            </div>
            <div className="feature-text">
              <h3>Full-Color HUD</h3>
              <p
                style={{
                  color: "var(--muted)",
                  lineHeight: "1.8",
                  marginBottom: "12px",
                }}
              >
                The ZR1's heads-up display projects a full-color image onto the
                windshield in the driver's direct line of sight. Content is
                customizable — speed, RPM, gear, PTM status, navigation, and
                drive mode can all appear simultaneously.
              </p>
              <p style={{ color: "var(--muted)", lineHeight: "1.8" }}>
                In Track mode, the HUD switches to a performance layout showing
                live g-force, PTM Pro slip percentage, and lap timer. The HUD
                brightness adjusts automatically to ambient light conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="display" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="bar green"></div>
            <h2>Digital Cockpit &amp; Infotainment</h2>
          </div>
          <div className="two-col">
            <div>
              <Img
                hideOnError
                src="/instrument-panel.png"
                alt="Instrument Panel"
                style={{
                  borderRadius: "12px",
                  border: "1px solid var(--border)",
                  width: "100%",
                  height: "240px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div>
              <table className="spec-table">
                <tbody>
                  <tr>
                    <td>Driver display</td>
                    <td>12-inch reconfigurable digital cluster</td>
                  </tr>
                  <tr>
                    <td>Center screen</td>
                    <td>8-inch diagonal infotainment touchscreen</td>
                  </tr>
                  <tr>
                    <td>OS</td>
                    <td>GM Infotainment 3 Premium</td>
                  </tr>
                  <tr>
                    <td>Wireless</td>
                    <td>Apple CarPlay &amp; Android Auto</td>
                  </tr>
                  <tr>
                    <td>Navigation</td>
                    <td>Built-in with OTA map updates</td>
                  </tr>
                  <tr>
                    <td>Audio</td>
                    <td>Bose Performance Series 14-speaker</td>
                  </tr>
                  <tr>
                    <td>Rear camera</td>
                    <td>HD digital rear-view mirror / camera</td>
                  </tr>
                  <tr>
                    <td>PDR integration</td>
                    <td>Performance Data Recorder controls</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section id="steering" className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar purple"></div>
            <h2>Steering Wheel &amp; Controls</h2>
          </div>
          <div className="feature-row">
            <div className="feature-img">
              <Img
                fallback="/instrument-panel.png"
                src="/steering.png"
                alt="Steering Wheel"
              />
            </div>
            <div className="feature-text">
              <h3>Driver Control Center</h3>
              <p
                style={{
                  color: "var(--muted)",
                  lineHeight: "1.8",
                  marginBottom: "12px",
                }}
              >
                The ZR1's D-shaped steering wheel is wrapped in microfiber suede
                (Alcantara) and positions all critical driver controls within
                thumb reach. Gear shift paddles, PTM mode buttons, drive mode
                selector, and traction control adjustments are all accessible
                without leaving the wheel.
              </p>
              <p style={{ color: "var(--muted)", lineHeight: "1.8" }}>
                The 2026–27 steering wheel adds tactile haptic feedback for mode
                confirmation — a light pulse when changing drive mode ensures
                the driver registers the change without looking down from the
                road.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="alcantara" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="bar orange"></div>
            <h2>Suede Alcantara &amp; Trim</h2>
          </div>
          <div className="three-col">
            <div className="card">
              <div className="card-img-placeholder">🧵</div>
              <div className="card-body">
                <span className="card-tag tag-purple">Alcantara</span>
                <h3>Suede Door Inserts</h3>
                <p>
                  Standard on ZR1 — suede Alcantara door panel inserts and upper
                  dash trim. Available in black, red, or natural colorways
                  matching the seat color selection.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-img-placeholder">🪑</div>
              <div className="card-body">
                <span className="card-tag tag-blue">Colors</span>
                <h3>Interior Color Options</h3>
                <p>
                  Jet Black, Natural, Torch Red, Habanero, Santorini Blue, and
                  Sky Cool Gray seat belts — all combinable with the seat and
                  trim selections for a personalized cockpit.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-img-placeholder">🎛️</div>
              <div className="card-body">
                <span className="card-tag tag-orange">Controls</span>
                <h3>Wall of Buttons</h3>
                <p>
                  The ZR1's center console "wall of buttons" was updated for
                  2026–27 with tactile separation and backlit icons — reducing
                  the time required to find the right control at speed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
