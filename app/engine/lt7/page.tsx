import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import Img from "@/components/Img";
import PageScope from "@/components/PageScope";

export const metadata: Metadata = pageMeta(
  "LT7 engineTwin-Turbo V8 — MyZR1 Engine",
  "1,064 HP at 7,000 rpm from a 5.5-liter flat-plane crankshaft DOHC V8 — the most powerful Corvette engine ever produced and one of the most technically…",
);

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
      .flex-tags-mt18 {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        margin-top: 18px;
      }
      .mt-15 {
        margin-top: 15px;
      }
      .btn-small {
        padding: 8px 18px;
        font-size: 0.85rem;
      }
      .mt-40 {
        margin-top: 40px;
      }
      .table-container {
        overflow-x: auto;
      }
      .mt-24 {
        margin-top: 24px;
      }
      .table-650 {
        min-width: 650px;
      }
`;

export default function Page() {
  return (
    <PageScope styles={css}>
      <div className="breadcrumb">
        <Link href="/">Home</Link> › <Link href="/engine">Engine</Link> ›{" "}
        <span>LT7 engine</span>
      </div>

      <div className="page-hero">
        <Img
          className="hero-bg"
          src="/engine-lt7-c8.png"
          alt="LT7 engineTwin-Turbo V8"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-tag">5.5L · DOHC · Twin-Turbo</div>
          <h1>LT7 engineTwin-Turbo V8</h1>
          <p>
            1,064 HP at 7,000 rpm from a 5.5-liter flat-plane crankshaft DOHC V8
            — the most powerful Corvette engine ever produced and one of the
            most technically advanced production V8s in the world.
          </p>
          <div className="hero-ctas">
            <Link href="/engine/turbos" className="btn btn-primary">
              Turbos &amp; Exhaust
            </Link>{" "}
            <Link href="/engine/drivetrain" className="btn btn-outline">
              Drivetrain →
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
                <h2>LT7 engineSpecifications</h2>
              </div>
              <table className="spec-table">
                <tbody>
                  <tr>
                    <td>Displacement</td>
                    <td>5.5L (335 cu in)</td>
                  </tr>
                  <tr>
                    <td>Configuration</td>
                    <td>90° V8, flat-plane crankshaft</td>
                  </tr>
                  <tr>
                    <td>Valvetrain</td>
                    <td>DOHC, 4 valves per cylinder, 32 total</td>
                  </tr>
                  <tr>
                    <td>Bore × Stroke</td>
                    <td>104.0 mm × 80.0 mm</td>
                  </tr>
                  <tr>
                    <td>Compression</td>
                    <td>9.8:1 (lowered under 10:1 to reduce detonation)</td>
                  </tr>
                  <tr>
                    <td>Horsepower</td>
                    <td>1,064 HP @ 7,000 rpm</td>
                  </tr>
                  <tr>
                    <td>Torque</td>
                    <td>828 lb-ft @ 6,000 rpm</td>
                  </tr>
                  <tr>
                    <td>Redline</td>
                    <td>8,100 rpm in sixth gear</td>
                  </tr>
                  <tr>
                    <td>Fuel System</td>
                    <td>Dual-port injection (DI + PFI)</td>
                  </tr>
                  <tr>
                    <td>Induction</td>
                    <td>Twin turbochargers</td>
                  </tr>
                  <tr>
                    <td>Lubrication</td>
                    <td>Dry-sump, 8-stage scavenging</td>
                  </tr>
                  <tr>
                    <td>Oil Capacity</td>
                    <td>10.5 qt (Mobil 1 5W-30)</td>
                  </tr>
                  <tr>
                    <td>Block material</td>
                    <td>Aluminum</td>
                  </tr>
                  <tr>
                    <td>Head material</td>
                    <td>Aluminum, sodium-hollow exhaust valves</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <div className="section-header">
                <div className="bar purple"></div>
                <h2>What Makes the LT7 engineSpecial</h2>
              </div>
              <p className="muted-text-mb14">
                The LT7's flat-plane crankshaft is the defining characteristic
                that separates it from every previous Corvette engine. A
                flat-plane crank fires alternating banks at 180° intervals —
                like two four-cylinder engines sharing a crankshaft. This allows
                superior exhaust scavenging between cylinders and enables a much
                higher natural revving ceiling.
              </p>
              <p className="muted-text-mb14">
                Pairing a flat-plane crank with twin turbochargers required
                extensive engineering — particularly the exhaust manifold
                routing. Each bank's exhaust feeds its own turbo, maintaining
                the pulse separation that flat-plane engines depend on for
                efficiency. The result is instant turbo response and a howling
                exhaust note unlike any other turbocharged V8.
              </p>
              <p className="muted-text-mb14">
                The LT7 enginealso inherits the sodium-hollow exhaust valves
                from the Z06's LT6 engine, the LT7's naturally-aspirated
                sibling. Sodium inside the hollow valve stem conducts heat away
                from the valve head — critical near the 8,100 rpm sixth-gear
                redline under boost.
              </p>
              <div className="flex-tags-mt18">
                <span className="card-tag tag-blue">Flat-Plane Crank</span>{" "}
                <span className="card-tag tag-orange">Twin Turbo</span>{" "}
                <span className="card-tag tag-green">DOHC 32v</span>{" "}
                <span className="card-tag tag-purple">Dry Sump</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="peak">
        <div className="container">
          <div className="section-header">
            <div className="bar orange"></div>
            <h2>Peak Efficiency &amp; Performance</h2>
            <p>
              For the ZR1 and ZR1X LT7, the peak range depends on whether you
              are looking at torque, horsepower, cruising efficiency, or
              absolute top speed.
            </p>
          </div>
          <div className="feature-row">
            <div className="feature-img">
              <Img
                src="/LT7%20plot.png"
                alt="LT7 engine dyno plot of horsepower and torque versus RPM"
              />
            </div>
            <div className="feature-text">
              <p className="muted-text-mb14">
                The LT7 dyno plot for the 2025, 2026, and 2027 engine shows
                horsepower and torque versus RPM. Source: Chevrolet.com.
              </p>
              <p className="muted-text-mb14">
                <strong>Peak torque band.</strong> The torque curve is
                essentially flat between 3,000 and 6,750 RPM, consistently
                delivering over 800 lb-ft. Peak torque is 828 lb-ft at 6,000
                RPM. Torque is the force the engine puts on the crankshaft, and
                you feel it as the push that puts you into the seat.
              </p>
              <p className="muted-text-mb14">
                <strong>Peak power band.</strong> The engine reaches its maximum
                1,064 horsepower at 7,000 RPM. Power is how quickly that torque
                is delivered to the wheels, and it is what you feel as the car
                keeps accelerating.
              </p>
              <p className="muted-text">
                <strong>Top-speed gear.</strong> To hit the 233 mph top speed,
                the sweet spot is sixth gear. GM uses an 8,100 RPM redline only
                in sixth gear so the car can keep accelerating. The power band
                drops off too steeply in seventh and eighth to hold that speed.
                You can still cruise the ZR1 or ZR1X at 60 mph in eighth gear at
                about 1,400 RPM without the engine bogging down or collecting
                carbon.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container" id="valvetrain">
          <div className="section-header">
            <div className="bar orange"></div>
            <h2>Valvetrain &amp; Injection</h2>
          </div>
          <div className="feature-row">
            <div className="feature-img">
              <Img
                fallback="/engine-lt7-c8.png"
                src="/images/dohc-finger-follower-valvetrain.png"
                alt="DOHC Finger Follower Valvetrain"
              />
            </div>
            <div className="feature-text">
              <h3>DOHC Finger-Follower Valvetrain</h3>
              <p>
                The LT7 engineuses a roller finger-follower valvetrain — the
                same architecture found in high-revving European performance
                engines. Compared to traditional pushrod rocker arms, finger
                followers reduce friction and reciprocating mass, enabling the
                LT7 engineto rev cleanly to the 8,100 rpm sixth-gear redline
                despite producing enormous low-end torque from the turbos.
              </p>
              <p>
                Hydraulic lash adjusters maintain valve clearances
                automatically, eliminating the manual valve adjustments required
                by solid-lifter designs.
              </p>
              <p className="mt-15">
                <Link
                  href="/engine/valve-timing"
                  className="btn btn-outline btn-small"
                >
                  Learn More: Valve Timing &amp; VVT →
                </Link>
              </p>
            </div>
          </div>
          <div className="feature-row flip mt-40">
            <div className="feature-img">
              <Img
                fallback="/engine-lt7-c8.png"
                src="/images/dual-port-injection-hero.png"
                alt="Dual-Port Injection"
              />
            </div>
            <div className="feature-text">
              <h3>Dual-Port Fuel Injection</h3>
              <p>
                The LT7 enginecombines both direct injection (DI) and port fuel
                injection (PFI) in a single system. DI injects fuel directly
                into the combustion chamber at high pressure, ideal for power
                and efficiency under load. PFI injects into the intake port,
                keeping intake valves clean from carbon buildup — a well-known
                issue with DI-only engines.
              </p>
              <p>
                The ECU automatically blends both systems based on RPM, load,
                and temperature, maximizing combustion efficiency across the
                entire operating range.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" id="history">
          <div className="section-header">
            <div className="bar green"></div>
            <h2>Engine History — C3 to C8</h2>
          </div>
          <div className="img-grid">
            <Img hideOnError src="/engine-lt1-c3.png" alt="C3 LT1" />{" "}
            <Img hideOnError src="/engine-lt5-c4.png" alt="C4 LT5" />{" "}
            <Img hideOnError src="/engine-ls9-c6.png" alt="C6 LS9" />{" "}
            <Img hideOnError src="/engine-lt5-c7.png" alt="C7 LT5" />{" "}
            <Img src="/engine-lt7-c8.png" alt="C8 LT7" />{" "}
            <Img hideOnError src="/LT7.png" alt="LT7" />
          </div>
          <div className="table-container mt-24">
            <table className="spec-table table-650">
              <thead>
                <tr>
                  <th>Engine</th>
                  <th>Gen</th>
                  <th>Type</th>
                  <th>HP</th>
                  <th>Notable</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>LT1</td>
                  <td>C3 ZR1</td>
                  <td>OHV V8</td>
                  <td>370 HP</td>
                  <td>First ZR1 engine, solid-lifter</td>
                </tr>
                <tr>
                  <td>LT5</td>
                  <td>C4 ZR-1</td>
                  <td>DOHC V8 (Lotus)</td>
                  <td>405 HP</td>
                  <td>32-valve; world speed record</td>
                </tr>
                <tr>
                  <td>LS9</td>
                  <td>C6 ZR1</td>
                  <td>SC OHV V8</td>
                  <td>638 HP</td>
                  <td>Roots supercharger; 6.2L</td>
                </tr>
                <tr>
                  <td>LT5</td>
                  <td>C7 ZR1</td>
                  <td>SC OHV V8</td>
                  <td>755 HP</td>
                  <td>Largest Eaton TVS ever; 6.2L</td>
                </tr>
                <tr>
                  <td>LT7</td>
                  <td>C8 ZR1</td>
                  <td>DOHC TT V8</td>
                  <td>1,064 HP</td>
                  <td>Flat-plane; twin turbos; 5.5L</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container" id="battery">
          <div className="section-header">
            <div className="bar purple"></div>
            <h2>Battery Systems</h2>
          </div>
          <div className="two-col">
            <Link href="/zr1/zr1x" className="card">
              <Img
                fallback="/assets/zr1x-battery.png"
                className="card-img"
                src="/battery.png"
                alt="Battery"
              />
              <div className="card-body">
                <span className="card-tag tag-blue">12V System</span>
                <h3>Main Battery</h3>
                <p>
                  The ZR1 uses a standard 12V AGM battery optimized for the
                  high-current demands of the active aero, carbon ceramic brake
                  cooling fans, and electronic systems.
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
                <span className="card-tag tag-purple">ZR1X Only</span>
                <h3>Hybrid Battery Pack</h3>
                <p>
                  The ZR1X adds a high-voltage battery pack powering the front
                  electric motor. The pack is thermally managed and integrates
                  with the LT7's ECU for seamless motor blending.
                </p>
                <p>This Bettery Pack is for the front 186 hp electric motor.</p>
                <p>
                  The Push-To-Pass immediately adds this 186 hp for instant
                  immediate power to the fdront wheels at anytime. You must be
                  driving more than 3 mph for activation.
                </p>
                <p>
                  Push-To-Pass is activated by pressing up on the Cruise Control
                  button on the left side of the steering wheel. You can use
                  this feature anytime and
                </p>
                <span className="card-link">ZR1X Details →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar"></div>
            <h2>Related Engine Topics</h2>
          </div>
          <div className="card-grid">
            <Link href="/engine/turbos" className="card">
              <Img
                fallback="/engine-lt7-c8.png"
                className="card-img"
                src="/turbo.png"
                alt="Turbos"
              />
              <div className="card-body">
                <span className="card-tag tag-orange">Forced Induction</span>
                <h3>Turbos &amp; Exhaust</h3>
                <p>
                  Largest turbos ever on a Corvette — architecture, sizing, and
                  boost strategy.
                </p>
                <span className="card-link">View →</span>
              </div>
            </Link>{" "}
            <Link href="/engine/drivetrain" className="card">
              <Img
                fallback="/drive.png"
                className="card-img"
                src="/eawd.png"
                alt="Drivetrain"
              />
              <div className="card-body">
                <span className="card-tag tag-green">Drivetrain</span>
                <h3>DCT &amp; E-AWD</h3>
                <p>Tremec 8-speed DCT and E-AWD architecture for the ZR1X.</p>
                <span className="card-link">View →</span>
              </div>
            </Link>{" "}
            <Link href="/engine/driving" className="card">
              <Img
                fallback="/driving-fast.png"
                className="card-img"
                src="/ptm.png"
                alt="PTM"
              />
              <div className="card-body">
                <span className="card-tag tag-purple">Dynamics</span>
                <h3>PTM &amp; Drive Modes</h3>
                <p>
                  Performance Traction Management, launch control, and Z-Mode
                  explained.
                </p>
                <span className="card-link">View →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </PageScope>
  );
}
