import type { Metadata } from "next";
import Link from "next/link";
import Img from "@/components/Img";

export const metadata: Metadata = { title: "ZR1 Mods — MyZR1 Modifications" };

export default function Page() {
  return (
    <>
      <div className="breadcrumb">
        <Link href="/">Home</Link> › <Link href="/mods">Mods</Link> ›{" "}
        <span>ZR1 Mods</span>
      </div>

      <div className="page-hero">
        <Img className="hero-bg" src="/c8-zr1.png" alt="ZR1 Mods" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-tag">ZR1 Platform · RWD</div>
          <h1>ZR1 Modifications 🛠️</h1>
          <p>
            Performance tuning, handling, active aero, cooling, electronic
            displays, battery, and aesthetic modifications for the C8 ZR1
            platform.
          </p>
          <div className="hero-ctas">
            <Link href="/mods/zr1x" className="btn btn-primary">
              ZR1X Mods →
            </Link>
            <Link href="/engine" className="btn btn-outline">
              Stock Engine Tech
            </Link>
          </div>
        </div>
      </div>

      <section id="performance" className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar"></div>
            <h2>Performance Tuning</h2>
          </div>
          <div className="card-grid">
            <div className="card">
              <Img
                className="card-img"
                src="/engine-lt7-c8.png"
                alt="ECU Tune"
              />
              <div className="card-body">
                <span className="card-tag tag-blue">ECU</span>
                <h3>ECU Calibration</h3>
                <p>
                  Third-party calibration via HP Tuners or EFI Live can optimize
                  boost curves, fuel maps, and ignition timing. Note: ECU
                  modifications will void powertrain warranty coverage.
                </p>
              </div>
            </div>
            <div className="card">
              <Img
                fallback="/engine-lt7-c8.png"
                className="card-img"
                src="/turbo.png"
                alt="Intercooler"
              />
              <div className="card-body">
                <span className="card-tag tag-orange">Intake</span>
                <h3>Intercooler Upgrade</h3>
                <p>
                  Larger water-to-air intercooler cores reduce charge-air
                  temperatures under sustained boost, particularly valuable
                  during back-to-back track laps where heat soak becomes a
                  factor.
                </p>
              </div>
            </div>
            <div className="card">
              <Img
                fallback="/engine-lt7-c8.png"
                className="card-img"
                src="/exhaust.png"
                alt="Exhaust"
              />
              <div className="card-body">
                <span className="card-tag tag-purple">Exhaust</span>
                <h3>Exhaust Upgrade</h3>
                <p>
                  Cat-back and axle-back systems from Corsa, Borla, and Kooks
                  optimize exhaust flow while enhancing the LT7's distinct
                  flat-plane soundtrack. Factory active valve integration varies
                  by system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="handling" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="bar orange"></div>
            <h2>Handling Mods</h2>
          </div>
          <div className="card-grid">
            <div className="card">
              <Img
                fallback="/c8-zr1.png"
                className="card-img"
                src="/images/c8-double-wishbone.png"
                alt="Suspension"
              />
              <div className="card-body">
                <span className="card-tag tag-orange">Suspension</span>
                <h3>Coilover / Spring Kits</h3>
                <p>
                  Aftermarket coilovers or spring kits (e.g., Eibach, H&amp;R)
                  allow ride-height adjustment and spring-rate tuning for
                  specific track configurations. Works alongside MRC dampers.
                </p>
              </div>
            </div>
            <div className="card">
              <Img
                fallback="/c8-zr1.png"
                className="card-img"
                src="/images/wheel-10-spoke-visible-carbon-fiber-hover.jpg"
                alt="Wheels"
              />
              <div className="card-body">
                <span className="card-tag tag-blue">Wheels</span>
                <h3>Aftermarket Wheel Sets</h3>
                <p>
                  Forged monoblock or 3-piece wheels in dedicated track
                  width/offset specs. Center-lock adapter kits allow rapid wheel
                  changes during endurance track days.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-img-placeholder">⚙️</div>
              <div className="card-body">
                <span className="card-tag tag-green">Alignment</span>
                <h3>Track Alignment</h3>
                <p>
                  Negative camber front and rear (−1.5° to −2.5°) improves tire
                  contact patch during cornering. Requires adjustable camber
                  bolts or plates at all four corners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="aero" className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar purple"></div>
            <h2>Active Aero Upgrades</h2>
          </div>
          <div className="two-col">
            <div className="card">
              <Img
                fallback="/c8-zr1.png"
                className="card-img"
                src="/aerodynamics.png"
                alt="Aero"
              />
              <div className="card-body">
                <span className="card-tag tag-purple">Wing</span>
                <h3>Wing Extensions</h3>
                <p>
                  Gurney flaps or swan-neck wing mounts that increase rear
                  downforce while maintaining the factory active wing's range of
                  motion. Compatible with ZTK package geometry.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-img-placeholder">⬇️</div>
              <div className="card-body">
                <span className="card-tag tag-blue">Splitter</span>
                <h3>Front Splitter Replacement</h3>
                <p>
                  Carbon fiber splitter extensions and dive planes that work
                  with the factory front aero system. Adds measurable front
                  downforce at track speeds — important for balance with rear
                  wing mods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cooling" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="bar green"></div>
            <h2>Cooling Mods</h2>
          </div>
          <div className="three-col">
            <div className="card">
              <Img
                fallback="/engine-lt7-c8.png"
                className="card-img"
                src="/assets/zr1x-cooling-overview.png"
                alt="Cooling"
              />
              <div className="card-body">
                <span className="card-tag tag-green">Intercooler</span>
                <h3>Upgraded Intercooler Core</h3>
                <p>
                  Larger tube-and-fin or bar-and-plate cores for the
                  water-to-air intercooler circuit. Reduces heat soak on
                  extended track sessions.
                </p>
              </div>
            </div>
            <div className="card">
              <Img
                fallback="/engine-lt7-c8.png"
                className="card-img"
                src="/assets/zr1x-radiator1.png"
                alt="Radiator"
              />
              <div className="card-body">
                <span className="card-tag tag-orange">Radiator</span>
                <h3>Additional Oil Cooler</h3>
                <p>
                  Sandwich-plate oil cooler adapters for the LT7's dry sump
                  system. Helps maintain oil temperature under extended
                  full-throttle operation.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-img-placeholder">🌬️</div>
              <div className="card-body">
                <span className="card-tag tag-blue">Airflow</span>
                <h3>Heat Deflectors</h3>
                <p>
                  Underbody heat deflector panels route hot exhaust air away
                  from the rear suspension and fuel lines — especially useful
                  for cars run without undertray panels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="displays" className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar blue"></div>
            <h2>Electronic Displays</h2>
          </div>
          <div className="two-col">
            <div className="card">
              <Img
                fallback="/instrument-panel.png"
                className="card-img"
                src="/hud.png"
                alt="HUD"
              />
              <div className="card-body">
                <span className="card-tag tag-blue">HUD</span>
                <h3>Aftermarket HUD Systems</h3>
                <p>
                  OBDII-based HUD projectors and windshield-mounted units that
                  add supplementary data beyond the factory display — boost
                  pressure, oil temp, lap timer, and gear indicator.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-img-placeholder">📹</div>
              <div className="card-body">
                <span className="card-tag tag-orange">Camera</span>
                <h3>Additional Camera Mounts</h3>
                <p>
                  Suction-cup and roll bar mount systems for GoPro / Insta360
                  cameras. Complements the factory PDR with additional angles
                  for post-session video analysis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="aesthetic" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="bar orange"></div>
            <h2>Aesthetic &amp; Stripes</h2>
          </div>
          <div className="img-grid">
            <Img
              hideOnError
              src="/images/dual-racing-stripes-carbon-flash-metallic-hover.png"
              alt="Carbon Flash Stripes"
            />{" "}
            <Img
              hideOnError
              src="/images/dual-racing-stripes-edge-red-hover.png"
              alt="Edge Red Stripes"
            />{" "}
            <Img
              hideOnError
              src="/images/dual-racing-stripes-edge-yellow-hover.png"
              alt="Yellow Stripes"
            />{" "}
            <Img
              hideOnError
              src="/images/dual-racing-stripes-royal-blue-hover.png"
              alt="Royal Blue Stripes"
            />{" "}
            <Img
              hideOnError
              src="/images/dual-racing-stripes-asymmetrical-blue-carbon-flash-hover.png"
              alt="Asymmetrical Blue"
            />{" "}
            <Img
              hideOnError
              src="/images/dual-racing-stripes-asymmetrical-edge-red-carbon-flash-hover.png"
              alt="Asymmetrical Red"
            />
          </div>
          <p
            style={{
              color: "var(--muted)",
              fontSize: "0.85rem",
              marginTop: "16px",
            }}
          >
            Racing stripe packages — dual racing stripes, carbon flash accents,
            and asymmetrical two-tone configurations. Available as factory
            options or aftermarket vinyl wraps.
          </p>
        </div>
      </section>
    </>
  );
}
