import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import Img from "@/components/Img";
import PageScope from "@/components/PageScope";

export const metadata: Metadata = pageMeta(
  "Nürburgring Times & Rivals — MyZR1",
  "The ultimate benchmark of automotive capability. Explore how the sheer magnitude of the ZR1 platform stacks up against the fiercest hypercars and track…",
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
      .caption {
        color: var(--muted);
        font-size: 0.9rem;
        margin: 8px 0 18px;
      }
      .wide-shot {
        width: 100%;
        border-radius: 12px;
        border: 1px solid var(--border);
      }
`;

export default function Page() {
  return (
    <PageScope styles={css}>
      <div className="breadcrumb">
        <Link href="/">Home</Link> › <Link href="/tracks">Tracks</Link> ›{" "}
        <span>Nürburgring</span>
      </div>

      <div className="page-hero">
        <Img
          className="hero-bg"
          src="/assets/nurburgring-times/nurburgring-sign.png"
          alt="Nürburgring sign"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-tag">Nordschleife · 12.9 miles</div>
          <h1>Nürburgring Times &amp; Rivals</h1>
          <p>
            The ultimate benchmark of automotive capability. Explore how the
            sheer magnitude of the ZR1 platform stacks up against the fiercest
            hypercars and track weapons on the Nordschleife.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar"></div>
            <h2>ZR1 &amp; ZR1X Projected Pace</h2>
          </div>
          <p className="muted-text-mb14">
            <strong>C8 ZR1 (RWD).</strong> With 1,064 horsepower routed through
            the ZTK package's Michelin Pilot Sport Cup 2 R tires and producing
            up to 1,200 lbs of downforce, the Corvette C8 ZR1 is mechanically
            over-engineered for the 12.9-mile circuit. It aims directly at the
            sub-6:50 limit time, targeting hypercar territory.
          </p>
          <p className="muted-text">
            <strong>C8 ZR1X (eAWD hybrid).</strong> Adds a front e-axle 186 hp
            electric motor to the same LT7 5.5L twin-turbo V8 for a combined
            ~1,250 hp, torque-vectoring eAWD, regen-blended braking, and a
            Push-to-Pass mode. Corner exits, technical sectors, and braking
            zones all favor the ZR1X. Chevrolet positions it as the
            production-Corvette flagship targeting the sub-6:50 / sub-6:40
            envelope on a clean session.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="bar orange"></div>
            <h2>The Global Contenders</h2>
          </div>
          <div className="card-grid">
            <div className="card">
              <div className="card-body">
                <h3>Porsche 911 GT3 RS (992)</h3>
                <p>
                  The benchmark for aerodynamic efficiency and chassis tuning.
                  Its extreme active aero yields a 6:49.328 lap time despite
                  producing 518 hp — less than half the ZR1, and roughly a third
                  of the ZR1X.
                </p>
                <p>
                  ZR1 advantage: raw power and top speed. ZR1X advantage: ~1,250
                  hp plus eAWD launch and corner-exit traction.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3>Ford Mustang GTD</h3>
                <p>
                  Ford's effort to break into the sub-7 minute ring club, with
                  over 800 hp and a bespoke carbon-fiber inboard suspension.
                </p>
                <p>
                  ZR1 advantage: mass-production architecture. ZR1X advantage:
                  hybrid eAWD torque-vectoring plus factory PTM Pro.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3>Ford GT (Mark II)</h3>
                <p>
                  The purpose-built Le Mans winner converted back for the
                  street, using a carbon-fiber tub and racing aerodynamics for
                  high lateral G.
                </p>
                <p>
                  ZR1 advantage: twin-turbo V8 torque band. ZR1X advantage:
                  instant e-motor torque fill plus Push-to-Pass.
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
            <h2>Session Gallery</h2>
          </div>
          <Img
            className="wide-shot"
            src="/assets/nurburgring-times/leaderboard-fastest-production-cars.png"
            alt="Nürburgring fastest production cars board including Corvette ZR1X and ZR1 times"
          />
          <p className="caption">
            Fastest production cars leaderboard, with Corvette ZR1X and ZR1
            placed among global rivals.
          </p>
          <div className="img-grid">
            <Img
              src="/assets/nurburgring-times/track-map-outline.png"
              alt="Nordschleife track outline map"
            />{" "}
            <Img
              src="/assets/nurburgring-times/nurburgring-sign.png"
              alt="Nürburgring sign at the track facility"
            />{" "}
            <Img
              src="/assets/nurburgring-times/driver-lineup-nurburgring.png"
              alt="Driver lineup for Nürburgring sessions"
            />{" "}
            <Img
              src="/assets/nurburgring-times/cockpit-148mph-shot.png"
              alt="In-car footage at 148 mph on the Nürburgring"
            />{" "}
            <Img
              src="/assets/nurburgring-times/in-cabin-wide-track-view.png"
              alt="Wide in-cabin view during a Nürburgring lap"
            />{" "}
            <Img
              src="/assets/nurburgring-times/driver-view-189mph.png"
              alt="Driver view showing 189 mph on the cluster"
            />{" "}
            <Img
              src="/assets/nurburgring-times/driver-cockpit-view.png"
              alt="Driver cockpit view with steering and cluster"
            />{" "}
            <Img
              src="/assets/nurburgring-times/three-corvettes-grid.png"
              alt="Three Corvettes lined up at the Nürburgring"
            />
          </div>
          <p className="muted-text" style={{ marginTop: "18px" }}>
            Reference:{" "}
            <a href="https://www.chevrolet.com/performance/corvette/zr1x">
              chevrolet.com/performance/corvette/zr1x
            </a>
          </p>
        </div>
      </section>
    </PageScope>
  );
}
