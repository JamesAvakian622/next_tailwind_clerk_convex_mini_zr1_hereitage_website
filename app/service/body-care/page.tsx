import type { Metadata } from "next";
import Link from "next/link";
import Img from "@/components/Img";

export const metadata: Metadata = {
  title: "Body Care & Cleaning — MyZR1 Maintenance",
};

export default function Page() {
  return (
    <>
      <div className="breadcrumb">
        <Link href="/">Home</Link> › <Link href="/service">Service</Link> ›{" "}
        <span>Body Care</span>
      </div>

      <div className="page-hero">
        <Img
          fallback="/assets/care-and-cleaning.png"
          className="hero-bg"
          src="/clean.png"
          alt="Body Care"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-tag">Cleaning · Brakes · Tires · Storage</div>
          <h1>Body Care &amp; Cleaning</h1>
          <p>
            Proper care for carbon fiber, carbon-ceramic brakes, Michelin Cup
            tires, painted surfaces, roof panels, and the Quail Edition's
            special protocol — keeping your ZR1 showroom-perfect.
          </p>
          <div className="hero-ctas">
            <Link href="/service/engine" className="btn btn-primary">
              ← Engine Service
            </Link>
            <Link href="/service/owner" className="btn btn-outline">
              Owner Guides →
            </Link>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar green"></div>
            <h2>Care Gallery</h2>
          </div>
          <div className="img-grid">
            <Img hideOnError src="/clean.png" alt="Car Cleaning" />{" "}
            <Img
              hideOnError
              src="/assets/care-and-cleaning.png"
              alt="Care and Cleaning"
            />{" "}
            <Img
              hideOnError
              src="/assets/quail-cleaning/quail-front-dealer.png"
              alt=""
            />{" "}
            <Img
              hideOnError
              src="/assets/disc-brakes-blue-wheel-closeup.png"
              alt="Brake Cleaning"
            />{" "}
            <Img hideOnError src="/assets/roof-top.png" alt="Roof Panels" />{" "}
            <Img hideOnError src="/assets/maintenance.png" alt="Maintenance" />
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="bar orange"></div>
            <h2>Cleaning Guide</h2>
          </div>
          <div className="two-col">
            <div>
              <div className="link-section">
                <h3>Paint &amp; Exterior Surfaces</h3>
                <div className="link-list">
                  <div className="link-item">
                    <div className="li-icon">🚿</div>
                    <div className="li-text">
                      <span className="li-label">Two-bucket wash method</span>
                      <span className="li-sub">
                        Separate rinse and soap buckets to prevent swirling
                      </span>
                    </div>
                  </div>
                  <div className="link-item">
                    <div className="li-icon">🧴</div>
                    <div className="li-text">
                      <span className="li-label">pH-neutral car shampoo</span>
                      <span className="li-sub">
                        Avoid dish soap — strips wax and sealant
                      </span>
                    </div>
                  </div>
                  <div className="link-item">
                    <div className="li-icon">🪣</div>
                    <div className="li-text">
                      <span className="li-label">Microfiber wash mitt</span>
                      <span className="li-sub">
                        Soft-pile for clear-coat safe washing
                      </span>
                    </div>
                  </div>
                  <div className="link-item">
                    <div className="li-icon">💧</div>
                    <div className="li-text">
                      <span className="li-label">Rinse top-down</span>
                      <span className="li-sub">
                        Start at roof, finish at rockers — prevents grit
                        dragging
                      </span>
                    </div>
                  </div>
                  <div className="link-item">
                    <div className="li-icon">🌬️</div>
                    <div className="li-text">
                      <span className="li-label">Blow-dry or air-dry</span>
                      <span className="li-sub">
                        Leaf blower removes water from body panel seams
                      </span>
                    </div>
                  </div>
                  <div className="link-item">
                    <div className="li-icon">🛡️</div>
                    <div className="li-text">
                      <span className="li-label">
                        Ceramic coating recommended
                      </span>
                      <span className="li-sub">
                        Easier cleaning; protects clear coat long-term
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="link-section">
                <h3 className="orange">Carbon Fiber Care</h3>
                <div className="link-list">
                  <div className="link-item">
                    <div className="li-icon">🧽</div>
                    <div className="li-text">
                      <span className="li-label">
                        UV-protectant wax or coating
                      </span>
                      <span className="li-sub">
                        Clear carbon weave fades without UV protection
                      </span>
                    </div>
                  </div>
                  <div className="link-item">
                    <div className="li-icon">🚫</div>
                    <div className="li-text">
                      <span className="li-label">Avoid abrasive polishes</span>
                      <span className="li-sub">
                        Will scratch the clear coat over the weave
                      </span>
                    </div>
                  </div>
                  <div className="link-item">
                    <div className="li-icon">🌡️</div>
                    <div className="li-text">
                      <span className="li-label">
                        Avoid high-pressure near edges
                      </span>
                      <span className="li-sub">
                        High-pressure water can lift carbon panel edges
                      </span>
                    </div>
                  </div>
                  <div className="link-item">
                    <div className="li-icon">✅</div>
                    <div className="li-text">
                      <span className="li-label">Carbon-specific sealant</span>
                      <span className="li-sub">
                        Meguiar's Ultimate Black or equivalent
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar purple"></div>
            <h2>Brake &amp; Wheel Cleaning</h2>
          </div>
          <div className="two-col">
            <div>
              <table className="spec-table">
                <tbody>
                  <tr>
                    <td>Carbon ceramic rotors</td>
                    <td>Rinse only — avoid acidic wheel cleaners</td>
                  </tr>
                  <tr>
                    <td>Brake dust</td>
                    <td>Dedicated iron remover spray (pH neutral)</td>
                  </tr>
                  <tr>
                    <td>Caliper cleaning</td>
                    <td>Mild soap + soft brush; rinse thoroughly</td>
                  </tr>
                  <tr>
                    <td>Forged aluminum wheels</td>
                    <td>pH-neutral wheel soap; seal annually</td>
                  </tr>
                  <tr>
                    <td>Lug nuts</td>
                    <td>Torque check after cleaning: 100 lb-ft</td>
                  </tr>
                  <tr>
                    <td>Frequency</td>
                    <td>After every track session; monthly street</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <div className="img-grid">
                <Img
                  hideOnError
                  src="/assets/disc-brakes-blue-wheel-closeup.png"
                  alt="Brake Closeup"
                />{" "}
                <Img
                  hideOnError
                  src="/assets/disc-brakes-pad-hand.png"
                  alt="Brake Pad"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="bar blue"></div>
            <h2>Storage Preparation</h2>
          </div>
          <div className="three-col">
            <div className="card">
              <div className="card-img-placeholder">📦</div>
              <div className="card-body">
                <span className="card-tag tag-blue">
                  Short-Term (1–3 months)
                </span>
                <h3>Short-Term Storage</h3>
                <p>
                  Full detail and wax. Tire flat-spot prevention by inflating to
                  maximum cold pressure. Battery maintainer connected. Fuel
                  stabilizer added. Climate-controlled garage ideal.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-img-placeholder">❄️</div>
              <div className="card-body">
                <span className="card-tag tag-orange">
                  Long-Term (3–12 months)
                </span>
                <h3>Long-Term Storage</h3>
                <p>
                  Full fluid change before storage. Fuel tank full with
                  stabilizer. Tires on jack stands to prevent flat spots.
                  Battery tender connected. Breathable car cover inside a
                  climate-controlled space.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-img-placeholder">🏎️</div>
              <div className="card-body">
                <span className="card-tag tag-green">Collector Care</span>
                <h3>Collector Monthly Checklist</h3>
                <p>
                  Start and idle to operating temp monthly. Check tire pressure.
                  Inspect seals and weatherstripping. Run A/C to prevent
                  refrigerant seal degradation. Record mileage and condition
                  notes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
