import type { Metadata } from "next";
import Link from "next/link";
import Img from "@/components/Img";

export const metadata: Metadata = { title: "Service & Maintenance — MyZR1" };

export default function Page() {
  return (
    <>
      <div className="breadcrumb">
        <Link href="/">Home</Link> › <span>Service &amp; Maintenance</span>
      </div>

      <div className="page-hero">
        <Img
          fallback="/clean.png"
          className="hero-bg"
          src="/assets/maintenance.png"
          alt="ZR1 Maintenance"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-tag">Engine · Body · Owner Guides</div>
          <h1>Service &amp; Maintenance</h1>
          <p>
            Everything you need to keep your ZR1 or ZR1X in peak condition — oil
            changes, DCT filter, brake cleaning, tire care, warranty
            information, and collector storage guides.
          </p>
          <div className="hero-ctas">
            <Link href="/service/engine" className="btn btn-primary">
              Engine Service
            </Link>{" "}
            <Link href="/service/owner" className="btn btn-outline">
              Owner Guides
            </Link>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar"></div>
            <h2>Maintenance Sections</h2>
          </div>
          <div className="card-grid card-grid-lg">
            <Link href="/service/engine" className="card">
              <Img
                fallback="/engine-lt7-c8.png"
                className="card-img"
                src="/oil-main.png"
                alt="Engine Service"
              />
              <div className="card-body">
                <span className="card-tag tag-blue">Engine</span>
                <h3>Engine Service</h3>
                <p>
                  Maintenance schedule, 3k/3-year intervals, fluids and
                  capacities, battery service, OEM stock parts guide, and DCT
                  filter at 7,500 miles.
                </p>
                <span className="card-link">Engine Service Guide</span>
              </div>
            </Link>{" "}
            <Link href="/service/body-care" className="card">
              <Img
                fallback="/assets/care-and-cleaning.png"
                className="card-img"
                src="/clean.png"
                alt="Body Care"
              />
              <div className="card-body">
                <span className="card-tag tag-green">Body</span>
                <h3>Body Care &amp; Cleaning</h3>
                <p>
                  Detailing guide, brake dust removal, wheel and rim care, tire
                  alignment, roof panel care, Quail edition cleaning protocol,
                  and long-term storage preparation.
                </p>
                <span className="card-link">Body Care Guide</span>
              </div>
            </Link>{" "}
            <Link href="/service/owner" className="card">
              <Img
                fallback="/clean.png"
                className="card-img"
                src="/assets/maintenance.png"
                alt="Owner Guides"
              />
              <div className="card-body">
                <span className="card-tag tag-purple">Owner</span>
                <h3>Owner &amp; Collector Guides</h3>
                <p>
                  Warranty coverage, service bulletins, certified mechanic
                  finder, in-dash service reminder, collector care monthly
                  checklist, and top 10 dealers.
                </p>
                <span className="card-link">Owner Guides</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="bar orange"></div>
            <h2>Quick Reference: Key Service Intervals</h2>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table className="spec-table" style={{ minWidth: "600px" }}>
              <thead>
                <tr>
                  <th>Service Item</th>
                  <th>Interval</th>
                  <th>Spec / Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Engine oil &amp; filter</td>
                  <td>3,000 miles or 1 year (OLM alert)</td>
                  <td>Mobil 1 5W-30 full synthetic, 10.5 qt</td>
                </tr>
                <tr>
                  <td>DCT transmission filter</td>
                  <td>7,500 miles or 1 year</td>
                  <td>Dexron VI ATF, special filter cartridge</td>
                </tr>
                <tr>
                  <td>Tire rotation</td>
                  <td>7,500 miles</td>
                  <td>Staggered fitment — front/rear not interchangeable</td>
                </tr>
                <tr>
                  <td>Brake fluid flush</td>
                  <td>2 years or after track use</td>
                  <td>DOT 4 or 5.1 high-temp fluid</td>
                </tr>
                <tr>
                  <td>Coolant flush</td>
                  <td>5 years / 150,000 miles</td>
                  <td>Dex-Cool orange</td>
                </tr>
                <tr>
                  <td>Cabin air filter</td>
                  <td>15,000 miles or 2 years</td>
                  <td>Standard GM cabin filter replacement</td>
                </tr>
                <tr>
                  <td>12V battery check</td>
                  <td>Annual</td>
                  <td>AGM battery; use GM-approved charger for storage</td>
                </tr>
                <tr>
                  <td>Carbon ceramic brake inspection</td>
                  <td>Annual or 15,000 miles</td>
                  <td>Visual inspection of rotor faces and pad thickness</td>
                </tr>
                <tr>
                  <td>Roof panel seals</td>
                  <td>Inspect annually</td>
                  <td>Clean and condition weatherstrip seals</td>
                </tr>
                <tr>
                  <td>Wheel torque check</td>
                  <td>After first 50 miles following tire service</td>
                  <td>100 lb-ft lug torque</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar purple"></div>
            <h2>Gallery</h2>
          </div>
          <div className="img-grid">
            <Img hideOnError src="/oil-main.png" alt="Oil System" />{" "}
            <Img hideOnError src="/clean.png" alt="Car Cleaning" />{" "}
            <Img
              hideOnError
              src="/assets/care-and-cleaning.png"
              alt="Care and Cleaning"
            />{" "}
            <Img hideOnError src="/assets/maintenance.png" alt="Maintenance" />
          </div>
        </div>
      </section>
    </>
  );
}
