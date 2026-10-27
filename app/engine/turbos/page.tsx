import type { Metadata } from "next";
import Link from "next/link";
import Img from "@/components/Img";
import PageScope from "@/components/PageScope";

export const metadata: Metadata = { title: "Turbos & Exhaust — MyZR1 Engine" };

const css = `
.muted-text-mb14 {
        color: var(--muted);
        line-height: 1.8;
        margin-bottom: 14px;
      }
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
        <Link href="/">Home</Link> › <Link href="/engine">Engine</Link> ›{" "}
        <span>Turbos &amp; Exhaust</span>
      </div>

      <div className="page-hero">
        <Img
          fallback="/engine-lt7-c8.png"
          className="hero-bg"
          src="/turbo.png"
          alt="LT7 engineTurbos"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-tag">Forced Induction</div>
          <h1>Turbos, Exhaust &amp; Cooling</h1>
          <p>
            The largest turbos ever fitted to a production Corvette — paired
            with a uniquely routed exhaust system, heat exchangers, and a
            dual-port injection system that feeds 1,064 HP.
          </p>
          <div className="hero-ctas">
            <Link href="/engine/lt7" className="btn btn-primary">
              ← LT7 engine
            </Link>
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
                <div className="bar orange"></div>
                <h2>Turbocharger Specs</h2>
              </div>
              <table className="spec-table">
                <tbody>
                  <tr>
                    <td>Configuration</td>
                    <td>Twin turbochargers (one per bank)</td>
                  </tr>
                  <tr>
                    <td>Turbo type</td>
                    <td>Twin-scroll, equal-length header fed</td>
                  </tr>
                  <tr>
                    <td>Placement</td>
                    <td>Hot-vee (between cylinder banks)</td>
                  </tr>
                  <tr>
                    <td>Max boost pressure</td>
                    <td>~18 psi (est.)</td>
                  </tr>
                  <tr>
                    <td>Intercooling</td>
                    <td>Water-to-air intercoolers</td>
                  </tr>
                  <tr>
                    <td>Exhaust routing</td>
                    <td>Flat-plane optimized pulse separation</td>
                  </tr>
                  <tr>
                    <td>Wastegate</td>
                    <td>Integrated electronic wastegate</td>
                  </tr>
                  <tr>
                    <td>Heat management</td>
                    <td>Water-cooled bearing housings</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <div className="section-header">
                <div className="bar purple"></div>
                <h2>Why Twin Turbos Work Here</h2>
              </div>
              <p className="muted-text-mb14">
                The flat-plane crankshaft of the LT7 enginecreates a natural
                firing order that keeps exhaust pulses from each bank separated
                — exactly what twin-scroll turbos need to spool quickly and
                efficiently. Each bank's four cylinders feed their own
                turbocharger, maintaining pulse energy without cross-bank
                interference.
              </p>
              <p className="muted-text-mb14">
                The "hot-vee" placement puts the turbos in the valley between
                the cylinder banks. This shortens exhaust runners dramatically,
                reducing turbo lag. The trade-off is intense heat management —
                which GM solves with water-to-air intercoolers and multiple heat
                exchangers in the front fascia.
              </p>
              <p className="muted-text">
                The result: essentially no perceivable turbo lag at any RPM, a
                linear powerband from idle to 8,400 rpm, and a sound that blends
                a flat-plane V8's high-pitched scream with the whoosh of
                compressed air.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="exhaust" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="bar orange"></div>
            <h2>Exhaust System</h2>
          </div>
          <div className="feature-row">
            <div className="feature-img">
              <Img
                fallback="/engine-lt7-c8.png"
                src="/exhaust.png"
                alt="Exhaust System"
              />
            </div>
            <div className="feature-text">
              <h3>Active Exhaust &amp; Sound</h3>
              <p className="muted-text-mb12">
                The LT7's exhaust exits through electronically-controlled active
                valves that open fully in Sport and Track modes. In Tour mode,
                the valves partially close — reducing cabin drone and meeting
                drive-by noise regulations.
              </p>
              <p className="muted-text-mb12">
                The flat-plane crank's firing order — combined with
                individual-bank turbocharging — produces a distinct
                high-frequency exhaust note that's unlike any previous Corvette.
                The LT7 enginescreams rather than rumbles, with a sharp crack on
                upshifts in full-throttle mode.
              </p>
              <p className="muted-text">
                Quad exhaust outlets exit at the rear center of the vehicle — a
                signature visual element of the C8 ZR1's tail. The
                titanium-coated exhaust tips are standard on all trim levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="heat" className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar green"></div>
            <h2>Heat Exchangers &amp; Cooling</h2>
          </div>
          <div className="three-col">
            <div className="card">
              <Img
                fallback="/engine-lt7-c8.png"
                className="card-img"
                src="/assets/zr1x-cooling-overview.png"
                alt="Cooling Overview"
              />
              <div className="card-body">
                <span className="card-tag tag-blue">Intercooling</span>
                <h3>Water-to-Air Intercoolers</h3>
                <p>
                  Two water-to-air intercoolers cool the compressed charge air
                  from each turbo before it enters the intake plenum — critical
                  for maintaining density and preventing knock.
                </p>
              </div>
            </div>
            <div className="card">
              <Img
                fallback="/assets/zr1x-cooling-overview.png"
                className="card-img"
                src="/assets/zr1x-radiator1.png"
                alt="Radiator"
              />
              <div className="card-body">
                <span className="card-tag tag-orange">Radiators</span>
                <h3>Front Heat Exchangers</h3>
                <p>
                  The ZR1's front fascia houses multiple heat exchangers —
                  engine coolant, transmission fluid, intercooler water
                  circuits, and power steering fluid all require cooling at
                  1,064 HP output levels.
                </p>
              </div>
            </div>
            <div className="card">
              <Img
                fallback="/engine-lt7-c8.png"
                className="card-img"
                src="/oil-main.png"
                alt="Dry Sump"
              />
              <div className="card-body">
                <span className="card-tag tag-purple">Lubrication</span>
                <h3>Dry-Sump Oiling</h3>
                <p>
                  An 8-stage dry-sump scavenging system ensures consistent oil
                  pressure under extreme cornering G-forces and during
                  full-throttle track sessions where a wet sump would starve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageScope>
  );
}
