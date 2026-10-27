import type { Metadata } from "next";
import Link from "next/link";
import Img from "@/components/Img";
import PageScope from "@/components/PageScope";

export const metadata: Metadata = { title: "C8 ZR1 (2025–2027) — MyZR1" };

const css = `
.muted-text-mb14 {
        color: var(--muted);
        line-height: 1.8;
        margin-bottom: 14px;
      }
      .flex-tags-mt18 {
        display: flex;
        gap: 10px;
        margin-top: 18px;
        flex-wrap: wrap;
      }
`;

export default function Page() {
  return (
    <PageScope styles={css}>
      <div className="breadcrumb">
        <Link href="/">Home</Link> › <Link href="/zr1">ZR1</Link> ›{" "}
        <span>C8 ZR1</span>
      </div>

      <div className="page-hero">
        <Img className="hero-bg" src="/c8-zr1.png" alt="C8 ZR1" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-tag">2025 – 2027</div>
          <h1>C8 ZR1 — Modern Legend</h1>
          <p>
            The mid-engine revolution arrives at full force. 1,064 HP from the
            LT7 Twin-Turbo flat-plane V8, active aerodynamics producing 1,000+
            lb of downforce, and carbon ceramic brakes. The most powerful
            naturally-aspirated production car engine ever built by an American
            manufacturer.
          </p>
          <div className="hero-ctas">
            <Link href="/engine/lt7" className="btn btn-primary">
              LT7 engine Details
            </Link>
            <Link href="/zr1/zr1x" className="btn btn-outline">
              ZR1X Hypercar →
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
                <h2>Specifications</h2>
              </div>
              <table className="spec-table">
                <tbody>
                  <tr>
                    <td>Years</td>
                    <td>2025, 2026, 2027</td>
                  </tr>
                  <tr>
                    <td>Engine</td>
                    <td>LT7 engineTwin-Turbo Flat-Plane V8</td>
                  </tr>
                  <tr>
                    <td>Displacement</td>
                    <td>5.5L (335 cu in)</td>
                  </tr>
                  <tr>
                    <td>Horsepower</td>
                    <td>1,064 HP @ 8,400 rpm</td>
                  </tr>
                  <tr>
                    <td>Torque</td>
                    <td>828 lb-ft @ 6,000 rpm</td>
                  </tr>
                  <tr>
                    <td>Valvetrain</td>
                    <td>DOHC 32-valve, flat-plane crank</td>
                  </tr>
                  <tr>
                    <td>Induction</td>
                    <td>Twin turbochargers, dual-port injection</td>
                  </tr>
                  <tr>
                    <td>Transmission</td>
                    <td>8-speed Tremec DCT</td>
                  </tr>
                  <tr>
                    <td>Drive</td>
                    <td>RWD (ZR1) / E-AWD (ZR1X)</td>
                  </tr>
                  <tr>
                    <td>0–60 mph</td>
                    <td>2.6 seconds</td>
                  </tr>
                  <tr>
                    <td>Top Speed</td>
                    <td>233 mph</td>
                  </tr>
                  <tr>
                    <td>Downforce</td>
                    <td>1,000+ lb at speed</td>
                  </tr>
                  <tr>
                    <td>Brakes</td>
                    <td>Carbon-ceramic rotors standard</td>
                  </tr>
                  <tr>
                    <td>Tires</td>
                    <td>Michelin Pilot Sport Cup 2 R</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <div className="section-header">
                <div className="bar green"></div>
                <h2>The LT7 engineDifference</h2>
              </div>
              <p className="muted-text-mb14">
                The C8 ZR1 marks the first time GM has combined a flat-plane
                crankshaft V8 with twin turbochargers in a production Corvette.
                The LT7's flat-plane crank enables a higher revving engine with
                better exhaust scavenging between cylinders — it screams to
                8,400 rpm.
              </p>
              <p className="muted-text-mb14">
                The active aerodynamics system — with a deployable front
                splitter and adjustable rear wing — enables the car to switch
                between low-drag (233 mph) and maximum downforce (1,000+ lb)
                configurations automatically based on driving mode.
              </p>
              <p className="muted-text-mb14">
                Inside the mid-engine layout, the transmission sits behind the
                engine in a transaxle configuration. The Tremec 8-speed DCT
                provides lightning-fast gear changes with no torque
                interruption.
              </p>
              <div className="flex-tags-mt18">
                <span className="card-tag tag-green">1,064 HP</span>{" "}
                <span className="card-tag tag-blue">233 mph</span>{" "}
                <span className="card-tag tag-orange">1,000+ lb Downforce</span>{" "}
                <span className="card-tag tag-purple">Flat-Plane Crank</span>
              </div>
            </div>
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
            <Img src="/c8-zr1.png" alt="C8 ZR1" />{" "}
            <Img src="/engine-lt7-c8.png" alt="LT7 engine" />{" "}
            <Img hideOnError src="/aerodynamics.png" alt="C8 Aerodynamics" />{" "}
            <Img hideOnError src="/assets/c8-zr1-2026.png" alt="C8 ZR1 2026" />{" "}
            <Img hideOnError src="/turbo.png" alt="Turbos" />{" "}
            <Img hideOnError src="/exhaust.png" alt="Exhaust" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar"></div>
            <h2>Key Systems</h2>
          </div>
          <div className="card-grid">
            <Link href="/engine/lt7" className="card">
              <Img className="card-img" src="/engine-lt7-c8.png" alt="LT7" />
              <div className="card-body">
                <span className="card-tag tag-blue">Engine</span>
                <h3>LT7 engineTwin-Turbo V8</h3>
                <p>Flat-plane crank, 1,064 HP, 8,400 rpm redline.</p>
                <span className="card-link">Details →</span>
              </div>
            </Link>{" "}
            <Link href="/engine/turbos" className="card">
              <Img
                fallback="/engine-lt7-c8.png"
                className="card-img"
                src="/turbo.png"
                alt="Turbos"
              />
              <div className="card-body">
                <span className="card-tag tag-orange">Turbos</span>
                <h3>Twin Turbos</h3>
                <p>Largest turbos ever fitted to a Corvette.</p>
                <span className="card-link">Details →</span>
              </div>
            </Link>{" "}
            <Link href="/body/exterior" className="card">
              <Img
                fallback="/c8-zr1.png"
                className="card-img"
                src="/aerodynamics.png"
                alt="Aero"
              />
              <div className="card-body">
                <span className="card-tag tag-purple">Aero</span>
                <h3>Active Aerodynamics</h3>
                <p>1,000+ lb downforce at speed.</p>
                <span className="card-link">Details →</span>
              </div>
            </Link>{" "}
            <Link href="/engine/drivetrain" className="card">
              <Img
                fallback="/drive.png"
                className="card-img"
                src="/eawd.png"
                alt="DCT"
              />
              <div className="card-body">
                <span className="card-tag tag-green">Drivetrain</span>
                <h3>Tremec 8-speed DCT</h3>
                <p>Dual-clutch transaxle for zero-interrupt shifts.</p>
                <span className="card-link">Details →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </PageScope>
  );
}
