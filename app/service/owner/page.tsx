import type { Metadata } from "next";
import Link from "next/link";
import Img from "@/components/Img";

export const metadata: Metadata = { title: "Owner Guides — MyZR1 Maintenance" };

export default function Page() {
  return (
    <>
      <div className="breadcrumb">
        <Link href="/">Home</Link> › <Link href="/service">Service</Link> ›{" "}
        <span>Owner Guides</span>
      </div>

      <div className="page-hero">
        <Img
          fallback="/clean.png"
          className="hero-bg"
          src="/assets/maintenance.png"
          alt="Owner Guides"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-tag">Warranty · Mechanics · Bulletins</div>
          <h1>Owner &amp; Collector Guides</h1>
          <p>
            Warranty coverage details, in-dash service reminders, GM-certified
            mechanic finder, service bulletins, collector care monthly
            checklist, and top dealer resources.
          </p>
          <div className="hero-ctas">
            <Link href="/service/engine" className="btn btn-primary">
              Engine Service
            </Link>
            <Link href="/service/body-care" className="btn btn-outline">
              Body Care
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
                <h2>Factory Warranty Coverage</h2>
              </div>
              <table className="spec-table">
                <tbody>
                  <tr>
                    <td>Bumper-to-bumper</td>
                    <td>3 years / 36,000 miles</td>
                  </tr>
                  <tr>
                    <td>Powertrain</td>
                    <td>5 years / 60,000 miles</td>
                  </tr>
                  <tr>
                    <td>Corrosion</td>
                    <td>5 years / 100,000 miles (perforation)</td>
                  </tr>
                  <tr>
                    <td>Roadside assistance</td>
                    <td>5 years / 60,000 miles</td>
                  </tr>
                  <tr>
                    <td>Emissions</td>
                    <td>8 years / 80,000 miles (federal)</td>
                  </tr>
                  <tr>
                    <td>ZR1X hybrid battery</td>
                    <td>8 years / 100,000 miles (CA: 10yr/150k)</td>
                  </tr>
                  <tr>
                    <td>Maintenance plans</td>
                    <td>Available via GM Financial — dealer quote</td>
                  </tr>
                  <tr>
                    <td>Track use</td>
                    <td>Performance Traction Management covered</td>
                  </tr>
                  <tr>
                    <td>Voiding warranty</td>
                    <td>Aftermarket tune, unauthorized mods</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <div className="section-header">
                <div className="bar purple"></div>
                <h2>Service Reminder System</h2>
              </div>
              <p
                style={{
                  color: "var(--muted)",
                  lineHeight: "1.8",
                  marginBottom: "14px",
                }}
              >
                The ZR1's Oil Life Monitor (OLM) uses an algorithm analyzing RPM
                cycles, engine temperature, and driving conditions to calculate
                remaining oil life as a percentage. When it drops below 10%, a
                message appears in the Driver Information Center.
              </p>
              <p
                style={{
                  color: "var(--muted)",
                  lineHeight: "1.8",
                  marginBottom: "14px",
                }}
              >
                Separate alerts appear for tire rotation, DCT filter, brake
                fluid inspection, and coolant check at their respective
                intervals. All can be acknowledged and reset through the DIC
                menu after service is performed.
              </p>
              <p style={{ color: "var(--muted)", lineHeight: "1.8" }}>
                Track-mode drive sessions accelerate the OLM algorithm — expect
                shorter intervals when the car is regularly taken to circuit
                events. The OLM does not account for brake fluid degradation
                under track heat, so manual brake fluid monitoring is
                recommended for track drivers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="bar orange"></div>
            <h2>Finding a Certified Mechanic</h2>
          </div>
          <div className="three-col">
            <div className="card">
              <div className="card-img-placeholder">👨‍🔧</div>
              <div className="card-body">
                <span className="card-tag tag-blue">GM Certified</span>
                <h3>GM-Certified Corvette Tech</h3>
                <p>
                  Look for dealers with a dedicated Corvette specialist —
                  ideally someone with ZR1 or Z06 experience. Ciocca Corvette,
                  Kerbeck, and NCM-affiliated dealers are well-regarded options.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-img-placeholder">🏁</div>
              <div className="card-body">
                <span className="card-tag tag-orange">Track Specialists</span>
                <h3>Performance Shop Network</h3>
                <p>
                  Shops with Tremec DCT training and GM Tech 2/GDS2 scan tool
                  access are essential for ZR1 service. HP Tuners-authorized
                  shops can perform ECU data-logging without voiding factory
                  warranty (read-only).
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-img-placeholder">🏛️</div>
              <div className="card-body">
                <span className="card-tag tag-purple">NCM Affiliated</span>
                <h3>NCM Service Partners</h3>
                <p>
                  The National Corvette Museum maintains a list of preferred
                  service partners near Bowling Green and beyond — experienced
                  in all Corvette generations including C8 ZR1 and ZR1X.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar green"></div>
            <h2>Service Bulletins</h2>
          </div>
          <div className="link-list" style={{ maxWidth: "720px" }}>
            <div className="link-item">
              <div className="li-icon">📋</div>
              <div className="li-text">
                <span className="li-label">DCT Clutch Adaptation Relearn</span>
                <span className="li-sub">
                  Required after first DCT filter service — dealer scan tool
                  procedure
                </span>
              </div>
            </div>
            <div className="link-item">
              <div className="li-icon">📋</div>
              <div className="li-text">
                <span className="li-label">
                  Active Exhaust Valve Calibration
                </span>
                <span className="li-sub">
                  If exhaust note changes unexpectedly — recalibration via GDS2
                </span>
              </div>
            </div>
            <div className="link-item">
              <div className="li-icon">📋</div>
              <div className="li-text">
                <span className="li-label">
                  MR Suspension Damper Replacement
                </span>
                <span className="li-sub">
                  Warranty procedure for Magnetic Ride Control damper failure
                </span>
              </div>
            </div>
            <div className="link-item">
              <div className="li-icon">📋</div>
              <div className="li-text">
                <span className="li-label">
                  Carbon Ceramic Rotor Surface Prep
                </span>
                <span className="li-sub">
                  Required bedding procedure after pad or rotor replacement
                </span>
              </div>
            </div>
            <div className="link-item">
              <div className="li-icon">📋</div>
              <div className="li-text">
                <span className="li-label">ZR1X HV Battery Thermal Check</span>
                <span className="li-sub">
                  Annual inspection for ZR1X high-voltage battery integrity
                </span>
              </div>
            </div>
            <div className="link-item">
              <div className="li-icon">📋</div>
              <div className="li-text">
                <span className="li-label">PDR Camera Firmware Update</span>
                <span className="li-sub">
                  OTA available — improves exposure and GPS accuracy
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
