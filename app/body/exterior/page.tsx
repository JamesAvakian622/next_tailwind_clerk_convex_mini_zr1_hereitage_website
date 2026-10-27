import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import Img from "@/components/Img";

export const metadata: Metadata = pageMeta(
  "Exterior & Chassis — MyZR1 Body",
  "Active aerodynamics, carbon-ceramic brakes, magneto-rheological suspension, forged wheels, Michelin Cup 2R tires, and special limited editions. The ZR1's…",
);

export default function Page() {
  return (
    <>
      <div className="breadcrumb">
        <Link href="/">Home</Link> › <Link href="/body">Body</Link> ›{" "}
        <span>Exterior &amp; Chassis</span>
      </div>

      <div className="page-hero">
        <Img
          fallback="/c8-zr1.png"
          className="hero-bg"
          src="/aerodynamics.png"
          alt="ZR1 Aerodynamics"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-tag">Aero · Brakes · Suspension · Editions</div>
          <h1>Exterior &amp; Chassis</h1>
          <p>
            Active aerodynamics, carbon-ceramic brakes, magneto-rheological
            suspension, forged wheels, Michelin Cup 2R tires, and special
            limited editions. The ZR1's exterior and chassis systems explained.
          </p>
          <div className="hero-ctas">
            <Link href="/body/interior" className="btn btn-primary">
              Interior →
            </Link>
            <Link href="/engine" className="btn btn-outline">
              Engine Tech
            </Link>
          </div>
        </div>
      </div>

      <section id="aero" className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar"></div>
            <h2>Active Aerodynamics</h2>
          </div>
          <div className="feature-row">
            <div className="feature-img">
              <Img
                fallback="/c8-zr1.png"
                src="/aerodynamics.png"
                alt="Active Aero"
              />
            </div>
            <div className="feature-text">
              <h3>1,000+ lb of Downforce</h3>
              <p
                style={{
                  color: "var(--muted)",
                  lineHeight: "1.8",
                  marginBottom: "12px",
                }}
              >
                The C8 ZR1's active aerodynamic system includes a deployable
                front dive plane, an adjustable rear wing, and underbody
                elements that work together to generate over 1,000 lb of
                downforce at speed. In drag-reduction mode, the system flattens
                out to minimize drag for maximum top speed — allowing the 233
                mph run.
              </p>
              <p
                style={{
                  color: "var(--muted)",
                  lineHeight: "1.8",
                  marginBottom: "12px",
                }}
              >
                The rear wing adjusts automatically based on drive mode. In
                Track mode, it rises to maximum angle. In high-speed mode, it
                flattens. The front splitter extends and retracts via actuators
                controlled by the same system that manages suspension, PTM, and
                exhaust.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                  marginTop: "14px",
                }}
              >
                <span className="card-tag tag-blue">1,000+ lb Downforce</span>{" "}
                <span className="card-tag tag-orange">
                  Active Front Splitter
                </span>{" "}
                <span className="card-tag tag-purple">
                  Adjustable Rear Wing
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="brakes" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="bar orange"></div>
            <h2>Carbon Ceramic Brakes</h2>
          </div>
          <div className="two-col">
            <div>
              <table className="spec-table">
                <tbody>
                  <tr>
                    <td>Front rotor</td>
                    <td>Carbon-ceramic composite</td>
                  </tr>
                  <tr>
                    <td>Front rotor size</td>
                    <td>15.7 in (398 mm)</td>
                  </tr>
                  <tr>
                    <td>Front caliper</td>
                    <td>6-piston Brembo monobloc</td>
                  </tr>
                  <tr>
                    <td>Rear rotor</td>
                    <td>Carbon-ceramic composite</td>
                  </tr>
                  <tr>
                    <td>Rear rotor size</td>
                    <td>15.0 in (380 mm)</td>
                  </tr>
                  <tr>
                    <td>Rear caliper</td>
                    <td>4-piston Brembo</td>
                  </tr>
                  <tr>
                    <td>Pad compound</td>
                    <td>Track-compound standard</td>
                  </tr>
                  <tr>
                    <td>60–0 mph</td>
                    <td>~96 ft</td>
                  </tr>
                  <tr>
                    <td>Heat resistance</td>
                    <td>1,200°C rotor temp capability</td>
                  </tr>
                  <tr>
                    <td>Weight vs. iron</td>
                    <td>~60% lighter per rotor</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <div className="img-grid">
                <Img
                  hideOnError
                  src="/assets/disc-brakes-alcon-front-1.png"
                  alt="Front Brakes"
                />{" "}
                <Img
                  hideOnError
                  src="/assets/disc-brakes-blue-wheel-closeup.png"
                  alt="Brake Closeup"
                />{" "}
                <Img
                  hideOnError
                  src="/assets/disc-brakes-wheel-well.png"
                  alt="Brake Wheel Well"
                />{" "}
                <Img
                  hideOnError
                  src="/assets/disc-brakes-pad-profile.png"
                  alt="Brake Pad"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="suspension" className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar purple"></div>
            <h2>Suspension &amp; Chassis</h2>
          </div>
          <div className="three-col">
            <Link href="/body" className="card">
              <Img
                fallback="/c8-zr1.png"
                className="card-img"
                src="/images/c8-double-wishbone.png"
                alt="Double Wishbone"
              />
              <div className="card-body">
                <span className="card-tag tag-purple">Suspension</span>
                <h3>Double-Wishbone</h3>
                <p>
                  Front and rear double-wishbone suspension with adjustable
                  dampers — the same geometry used in Le Mans-class race cars
                  for precise wheel control.
                </p>
              </div>
            </Link>{" "}
            <Link href="/body" className="card">
              <div className="card-img-placeholder">🧲</div>
              <div className="card-body">
                <span className="card-tag tag-blue">Magneto-Rheological</span>
                <h3>Magnetic Ride Control</h3>
                <p>
                  MR fluid-filled shock absorbers that can vary their stiffness
                  in milliseconds by applying a magnetic field — the
                  fastest-reacting suspension technology available.
                </p>
              </div>
            </Link>{" "}
            <Link href="/body" className="card">
              <Img
                fallback="/lift-control.png"
                className="card-img"
                src="/front-lift.png"
                alt="Front Lift"
              />
              <div className="card-body">
                <span className="card-tag tag-green">Front Lift</span>
                <h3>GPS-Based Front Lift</h3>
                <p>
                  The front lift system raises the nose by 50 mm to clear speed
                  bumps and steep driveways. The GPS memory function
                  automatically lifts when it detects a saved location.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section id="wheels" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="bar orange"></div>
            <h2>Wheels &amp; Tires</h2>
          </div>
          <div className="two-col">
            <div>
              <div className="img-grid">
                <Img
                  hideOnError
                  src="/images/wheel-20-spoke-bright-machined-hover.jpg"
                  alt="Wheel Option 1"
                />{" "}
                <Img
                  hideOnError
                  src="/images/wheel-20-spoke-carbon-flash-hover.jpg"
                  alt="Wheel Option 2"
                />{" "}
                <Img
                  hideOnError
                  src="/images/wheel-10-spoke-visible-carbon-fiber-hover.jpg"
                  alt="Carbon Fiber Wheel"
                />{" "}
                <Img
                  hideOnError
                  src="/images/wheel-20-spoke-edge-blue-hover.jpg"
                  alt="Edge Blue Wheel"
                />
              </div>
            </div>
            <div>
              <table className="spec-table">
                <tbody>
                  <tr>
                    <td>Front wheels</td>
                    <td>20×9.5 in forged aluminum</td>
                  </tr>
                  <tr>
                    <td>Rear wheels</td>
                    <td>21×12.0 in forged aluminum</td>
                  </tr>
                  <tr>
                    <td>Wheel options</td>
                    <td>5 styles, 6 finishes</td>
                  </tr>
                  <tr>
                    <td>Carbon fiber wheel</td>
                    <td>Optional — 10-spoke visible CF</td>
                  </tr>
                  <tr>
                    <td>Front tire</td>
                    <td>Michelin Pilot Sport Cup 2 R 275/30ZR20</td>
                  </tr>
                  <tr>
                    <td>Rear tire</td>
                    <td>Michelin Pilot Sport Cup 2 R 345/25ZR21</td>
                  </tr>
                  <tr>
                    <td>Tire compound</td>
                    <td>Cup 2 R (track-focused semi-slick)</td>
                  </tr>
                  <tr>
                    <td>Optional tires</td>
                    <td>Michelin PS4S (all-season) / PS Cup 2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section id="convertible" className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar green"></div>
            <h2>Convertible &amp; Colors</h2>
          </div>
          <div className="two-col">
            <Link href="/body" className="card">
              <Img
                fallback="/c8-zr1.png"
                className="card-img"
                src="/assets/roof-top.png"
                alt="Convertible Roof"
              />
              <div className="card-body">
                <span className="card-tag tag-blue">Convertible</span>
                <h3>Power Retractable Top</h3>
                <p>
                  The ZR1 Convertible features a power-retractable soft top that
                  operates in under 16 seconds at speeds up to 30 mph. The
                  folded top stores in a dedicated compartment behind the seats.
                </p>
              </div>
            </Link>{" "}
            <Link href="/body" className="card">
              <Img
                fallback="/c8-zr1.png"
                className="card-img"
                src="/images/arctic-white-hover.png"
                alt="Exterior Colors"
              />
              <div className="card-body">
                <span className="card-tag tag-orange">Colors</span>
                <h3>Exterior Color Palette</h3>
                <p>
                  Arctic White, Torch Red, Sebring Orange, Blade Silver, Black,
                  Admiral Blue, and more — plus special Asymmetrical two-tone
                  configurations available on the ZR1X.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section id="editions" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="bar purple"></div>
            <h2>Special Editions</h2>
          </div>
          <div className="three-col">
            <Link href="/zr1/zr1x" className="card">
              <Img
                fallback="/c8-zr1x.png"
                className="card-img"
                src="/c8-quail.png"
                alt="Quail"
              />
              <div className="card-body">
                <span className="card-tag tag-purple">Quail ZR1X</span>
                <h3>Monterey Reveal Edition</h3>
                <p>
                  The most exclusive ZR1X configuration — revealed at Quail
                  Motorsports Gathering.
                </p>
                <span className="card-link">View →</span>
              </div>
            </Link>{" "}
            <Link href="/zr1/zr1x" className="card">
              <Img
                fallback="/c8-zr1x.png"
                className="card-img"
                src="/c8zr1x-ztk-asymetric-black.png"
                alt="Asymmetrical"
              />
              <div className="card-body">
                <span className="card-tag tag-orange">Asymmetrical Ed.</span>
                <h3>Two-Tone Red/Black</h3>
                <p>
                  Dramatic split interior and exterior color — a uniquely bold
                  statement.
                </p>
                <span className="card-link">View →</span>
              </div>
            </Link>{" "}
            <Link href="/zr1/zr1x" className="card">
              <Img
                fallback="/assets/stars-stripes-c8-zr1-2026.png"
                className="card-img"
                src="/stars-and-steel-black.png"
                alt="Stars and Steel"
              />
              <div className="card-body">
                <span className="card-tag tag-blue">Stars &amp; Steel</span>
                <h3>250 Units/Year</h3>
                <p>
                  Patriotic special edition — 250 units in 2026, 250 in 2027.
                </p>
                <span className="card-link">View →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
