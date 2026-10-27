import type { Metadata } from "next";
import Link from "next/link";
import Img from "@/components/Img";
import PageScope from "@/components/PageScope";

export const metadata: Metadata = {
  title: "Engine Service — MyZR1 Maintenance",
};

const css = `
.muted-text-mb12 {
        color: var(--muted);
        line-height: 1.8;
        margin-bottom: 12px;
      }
      .muted-text {
        color: var(--muted);
        line-height: 1.8;
      }
`;

export default function Page() {
  return (
    <PageScope styles={css}>
      <div className="breadcrumb">
        <Link href="/">Home</Link> › <Link href="/service">Service</Link> ›{" "}
        <span>Engine Service</span>
      </div>

      <div className="page-hero">
        <Img
          fallback="/engine-lt7-c8.png"
          className="hero-bg"
          src="/oil-main.png"
          alt="Engine Service"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-tag">Oil · DCT · Fluids · Battery</div>
          <h1>Engine Service Guide</h1>
          <p>
            Maintenance schedules, fluid specifications, DCT filter service,
            battery care, and OEM replacement parts — keeping the LT7 enginein
            perfect condition.
          </p>
          <div className="hero-ctas">
            <Link href="/service/body-care" className="btn btn-primary">
              Body Care →
            </Link>
            <Link href="/service/owner" className="btn btn-outline">
              Owner Guides
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
                <h2>Fluids &amp; Capacities</h2>
              </div>
              <table className="spec-table">
                <tbody>
                  <tr>
                    <td>Engine oil</td>
                    <td>Mobil 1 5W-30 Full Synthetic — 10.5 qt</td>
                  </tr>
                  <tr>
                    <td>Oil filter</td>
                    <td>GM AC Delco PF63E (or equivalent)</td>
                  </tr>
                  <tr>
                    <td>DCT fluid</td>
                    <td>Dexron VI ATF — approx. 10.5 qt</td>
                  </tr>
                  <tr>
                    <td>Coolant</td>
                    <td>Dex-Cool orange concentrate — 11.5 qt</td>
                  </tr>
                  <tr>
                    <td>Brake fluid</td>
                    <td>DOT 4 (track use: DOT 5.1)</td>
                  </tr>
                  <tr>
                    <td>Power steering</td>
                    <td>GM Electric Power Steering — no fluid</td>
                  </tr>
                  <tr>
                    <td>Washer fluid</td>
                    <td>Standard winter-grade</td>
                  </tr>
                  <tr>
                    <td>Intercooler fluid</td>
                    <td>Proprietary GM coolant — dealer fill</td>
                  </tr>
                  <tr>
                    <td>Differential fluid</td>
                    <td>75W-90 synthetic GL-5 — 1.5 qt</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <div className="section-header">
                <div className="bar orange"></div>
                <h2>Service Intervals</h2>
              </div>
              <table className="spec-table">
                <tbody>
                  <tr>
                    <td>Oil change</td>
                    <td>3,000 mi / 1 yr — OLM system alerts</td>
                  </tr>
                  <tr>
                    <td>DCT filter</td>
                    <td>7,500 mi / 1 yr — first service critical</td>
                  </tr>
                  <tr>
                    <td>Differential fluid</td>
                    <td>30,000 mi or as indicated</td>
                  </tr>
                  <tr>
                    <td>Coolant</td>
                    <td>5 yr / 150,000 mi</td>
                  </tr>
                  <tr>
                    <td>Spark plugs</td>
                    <td>60,000 mi (iridium plugs)</td>
                  </tr>
                  <tr>
                    <td>Air filter</td>
                    <td>15,000 mi or as needed</td>
                  </tr>
                  <tr>
                    <td>Brake fluid</td>
                    <td>2 years — annual if track use</td>
                  </tr>
                  <tr>
                    <td>12V battery test</td>
                    <td>Annual — replace every 4–5 years</td>
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
            <h2>DCT Filter Service</h2>
          </div>
          <div className="feature-row">
            <div className="feature-img">
              <Img
                fallback="/oil-main.png"
                src="/assets/maintenance.png"
                alt="DCT Filter"
              />
            </div>
            <div className="feature-text">
              <h3>7,500-Mile DCT Filter — Critical First Service</h3>
              <p className="muted-text-mb12">
                The Tremec 8-speed DCT uses a serviceable filter cartridge that
                must be replaced at 7,500 miles for the first service, then
                every 15,000 miles thereafter. This is more frequent than a
                traditional automatic transmission because the dual-clutch pack
                generates fine metallic particles during the break-in period.
              </p>
              <p className="muted-text-mb12">
                Missing the first DCT filter service is the single most common
                maintenance mistake on C8 ZR1 and Z06 owners. Contaminated fluid
                left past the 7,500-mile mark can accelerate clutch pack wear
                and reduce shift quality.
              </p>
              <p className="muted-text">
                Recommended fluid: Dexron VI ATF. The dealer will drain, replace
                the filter cartridge, refill, and perform a relearn procedure
                via scan tool to reset the clutch adaptation tables.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar green"></div>
            <h2>Battery Systems</h2>
          </div>
          <div className="two-col">
            <Link href="/engine/lt7#battery" className="card">
              <Img
                fallback="/engine-lt7-c8.png"
                className="card-img"
                src="/battery.png"
                alt="12V Battery"
              />
              <div className="card-body">
                <span className="card-tag tag-blue">12V AGM</span>
                <h3>Main 12V Battery</h3>
                <p>
                  The ZR1 uses an AGM battery optimized for the high-current
                  demands of active aero, cooling fans, and electronic systems.
                  If storing the car, use a GM-approved trickle charger to
                  maintain battery health. Standard replacement interval is 4–5
                  years.
                </p>
              </div>
            </Link>{" "}
            <Link href="/zr1/zr1x" className="card">
              <Img
                fallback="/battery.png"
                className="card-img"
                src="/assets/zr1x-battery.png"
                alt="Hybrid Battery"
              />
              <div className="card-body">
                <span className="card-tag tag-purple">ZR1X Hybrid</span>
                <h3>High-Voltage Battery Pack</h3>
                <p>
                  The ZR1X's HV battery requires dealer-level service only.
                  Thermal management is fully automatic. GM recommends keeping
                  the hybrid battery between 20–80% state of charge for
                  long-term storage to maximize pack longevity.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="bar orange"></div>
            <h2>Gallery</h2>
          </div>
          <div className="img-grid">
            <Img hideOnError src="/oil-main.png" alt="Oil System" />{" "}
            <Img src="/engine-lt7-c8.png" alt="LT7 engine" />{" "}
            <Img hideOnError src="/battery.png" alt="Battery" />{" "}
            <Img
              hideOnError
              src="/assets/zr1x-battery.png"
              alt="ZR1X Battery"
            />
          </div>
        </div>
      </section>
    </PageScope>
  );
}
