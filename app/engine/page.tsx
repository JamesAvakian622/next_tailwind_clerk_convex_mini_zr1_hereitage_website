import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import Img from "@/components/Img";

export const metadata: Metadata = pageMeta(
  "Engine & Tech",
  "The most advanced American performance engineering ever produced — 1,064 HP LT7 engineTwin-Turbo flat-plane V8, Tremec 8-speed DCT, E-AWD, and the full…",
);

export default function Page() {
  return (
    <>
      <div className="breadcrumb">
        <Link href="/">Home</Link> › <span>Engine &amp; Tech</span>
      </div>

      <div className="page-hero">
        <Img className="hero-bg" src="/engine-lt7-c8.png" alt="LT7 engine" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-tag">LT7 engine· DCT · E-AWD</div>
          <h1>Engine &amp; Technology</h1>
          <p>
            The most advanced American performance engineering ever produced —
            1,064 HP LT7 engineTwin-Turbo flat-plane V8, Tremec 8-speed DCT,
            E-AWD, and the full suite of driving dynamics systems.
          </p>
          <div className="hero-ctas">
            <Link href="/engine/lt7" className="btn btn-primary">
              LT7 engine Deep Dive
            </Link>{" "}
            <Link href="/engine/drivetrain" className="btn btn-outline">
              Drivetrain Systems
            </Link>{" "}
            <Link href="/glossary" className="btn btn-outline">
              Glossary
            </Link>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar"></div>
            <h2>Engine Sections</h2>
            <p>Deep dives into every powertrain system</p>
          </div>
          <div className="card-grid card-grid-lg">
            <Link href="/engine/lt7" className="card">
              <Img
                className="card-img"
                src="/engine-lt7-c8.png"
                alt="LT7 engine"
              />
              <div className="card-body">
                <span className="card-tag tag-blue">Core Engine</span>
                <h3>LT7 engineTwin-Turbo V8</h3>
                <p>
                  5.5L flat-plane crank, DOHC 32-valve, twin turbos, dual-port
                  injection — 1,064 HP at 8,400 rpm. Everything about the most
                  powerful Corvette engine ever built.
                </p>
                <span className="card-link">Full LT7 engineGuide</span>
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
                <span className="card-tag tag-orange">Forced Induction</span>
                <h3>Turbos, Exhaust &amp; Injection</h3>
                <p>
                  The largest turbos ever on a Corvette, dual-port injection
                  system, exhaust routing, and heat exchangers that keep the LT7
                  cool under full load.
                </p>
                <span className="card-link">Turbos &amp; Exhaust</span>
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
                <h3>DCT, E-AWD &amp; Differentials</h3>
                <p>
                  Tremec 8-speed DCT, electronic limited-slip diff, E-AWD
                  architecture, and the ZR1X's motor-blending strategy for
                  seamless power delivery.
                </p>
                <span className="card-link">Drivetrain Guide</span>
              </div>
            </Link>{" "}
            <Link href="/engine/driving" className="card">
              <Img
                fallback="/driving-fast.png"
                className="card-img"
                src="/ptm.png"
                alt="Driving Dynamics"
              />
              <div className="card-body">
                <span className="card-tag tag-purple">Dynamics</span>
                <h3>Driving Modes &amp; Performance</h3>
                <p>
                  PTM, Z-Mode, launch control, g-meter, Performance Data
                  Recorder, drive modes, traction control, and the ZR1's
                  track-focused suite of driver aids.
                </p>
                <span className="card-link">Driving Guide</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="bar orange"></div>
            <h2>Engine Gallery</h2>
          </div>
          <div className="img-grid">
            <Img src="/engine-lt7-c8.png" alt="LT7 engine" />{" "}
            <Img hideOnError src="/LT7.png" alt="LT7" />{" "}
            <Img hideOnError src="/turbo.png" alt="Turbos" />{" "}
            <Img hideOnError src="/exhaust.png" alt="Exhaust" />{" "}
            <Img
              hideOnError
              src="/images/dual-port-injection-hero.png"
              alt="Fuel Injection"
            />{" "}
            <Img
              hideOnError
              src="/images/dohc-finger-follower-valvetrain.png"
              alt="DOHC Valvetrain"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar purple"></div>
            <h2>All Engine Topics</h2>
          </div>
          <div className="two-col">
            <div className="link-section">
              <h3>Engine</h3>
              <div className="link-list">
                <Link href="/engine/lt7" className="link-item">
                  <Img className="li-img" src="/engine-lt7-c8.png" alt="LT7" />
                  <div className="li-text">
                    <span className="li-label">LT7 engine</span>
                    <span className="li-sub">Twin-Turbo flat-plane V8</span>
                  </div>
                </Link>{" "}
                <Link href="/engine/lt7#history" className="link-item">
                  <Img
                    hideOnError
                    className="li-img"
                    src="/engine-lt1-c3.png"
                    alt="History"
                  />
                  <div className="li-text">
                    <span className="li-label">Engine History C3–C8</span>
                    <span className="li-sub">LT1, LT5, LS9, LT7</span>
                  </div>
                </Link>{" "}
                <Link href="/engine/turbos" className="link-item">
                  <Img
                    hideOnError
                    className="li-img"
                    src="/turbo.png"
                    alt="Turbos"
                  />
                  <div className="li-text">
                    <span className="li-label">Turbos — Largest Ever</span>
                    <span className="li-sub">Twin-Turbo architecture</span>
                  </div>
                </Link>{" "}
                <Link href="/engine/turbos#exhaust" className="link-item">
                  <Img
                    hideOnError
                    className="li-img"
                    src="/exhaust.png"
                    alt="Exhaust"
                  />
                  <div className="li-text">
                    <span className="li-label">Exhaust System</span>
                    <span className="li-sub">Routing &amp; sound</span>
                  </div>
                </Link>{" "}
                <Link href="/engine/lt7#injection" className="link-item">
                  <Img
                    hideOnError
                    className="li-img"
                    src="/images/dual-port-injection-hero.png"
                    alt="Injection"
                  />
                  <div className="li-text">
                    <span className="li-label">Dual-Port Injection</span>
                    <span className="li-sub">Direct &amp; port injection</span>
                  </div>
                </Link>{" "}
                <Link href="/engine/lt7#valvetrain" className="link-item">
                  <Img
                    hideOnError
                    className="li-img"
                    src="/images/dohc-finger-follower-valvetrain.png"
                    alt="DOHC"
                  />
                  <div className="li-text">
                    <span className="li-label">DOHC Valvetrain</span>
                    <span className="li-sub">Finger followers &amp; cams</span>
                  </div>
                </Link>{" "}
                <Link href="/engine/valve-timing" className="link-item">
                  <Img
                    hideOnError
                    className="li-img"
                    src="/images/dohc-finger-follower-valvetrain.png"
                    alt="VVT"
                  />
                  <div className="li-text">
                    <span className="li-label">Valve Timing &amp; VVT</span>
                    <span className="li-sub">
                      Independent cam phasing &amp; ECU
                    </span>
                  </div>
                </Link>{" "}
                <Link href="/engine/turbos#heat" className="link-item">
                  <div className="li-icon">🌡️</div>
                  <div className="li-text">
                    <span className="li-label">Heat Exchangers</span>
                    <span className="li-sub">Cooling system</span>
                  </div>
                </Link>{" "}
                <Link href="/engine/lt7#battery" className="link-item">
                  <Img
                    hideOnError
                    className="li-img"
                    src="/battery.png"
                    alt="Battery"
                  />
                  <div className="li-text">
                    <span className="li-label">Battery Systems</span>
                    <span className="li-sub">12V main + hybrid</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="link-section">
              <h3 className="purple">Drivetrain &amp; Dynamics</h3>
              <div className="link-list">
                <Link href="/engine/drivetrain" className="link-item">
                  <Img
                    hideOnError
                    className="li-img"
                    src="/eawd.png"
                    alt="E-AWD"
                  />
                  <div className="li-text">
                    <span className="li-label">DCT Transmission</span>
                    <span className="li-sub">Tremec 8-speed dual-clutch</span>
                  </div>
                </Link>{" "}
                <Link href="/engine/drivetrain#eawd" className="link-item">
                  <div className="li-icon">🔀</div>
                  <div className="li-text">
                    <span className="li-label">E-AWD System</span>
                    <span className="li-sub">ZR1X electric front axle</span>
                  </div>
                </Link>{" "}
                <Link href="/engine/drivetrain#lsd" className="link-item">
                  <div className="li-icon">⚙️</div>
                  <div className="li-text">
                    <span className="li-label">Electronic LSD</span>
                    <span className="li-sub">Limited-slip differential</span>
                  </div>
                </Link>{" "}
                <Link href="/engine/driving" className="link-item">
                  <Img
                    hideOnError
                    className="li-img"
                    src="/ptm.png"
                    alt="PTM"
                  />
                  <div className="li-text">
                    <span className="li-label">PTM — Traction Mgmt</span>
                    <span className="li-sub">PTM Pro &amp; Launch Control</span>
                  </div>
                </Link>{" "}
                <Link href="/engine/drivemodes" className="link-item">
                  <div className="li-icon">🎛️</div>
                  <div className="li-text">
                    <span className="li-label">Drive Modes &amp; Z-Mode</span>
                    <span className="li-sub">Tour, Sport, Track, Z-Mode</span>
                  </div>
                </Link>{" "}
                <Link href="/engine/driving#pdr" className="link-item">
                  <div className="li-icon">📹</div>
                  <div className="li-text">
                    <span className="li-label">Performance Data Recorder</span>
                    <span className="li-sub">Telemetry &amp; overlay</span>
                  </div>
                </Link>{" "}
                <Link href="/engine/driving#speed" className="link-item">
                  <Img
                    hideOnError
                    className="li-img"
                    src="/images/speed-records-hero.png"
                    alt="Speed"
                  />
                  <div className="li-text">
                    <span className="li-label">Speed Records</span>
                    <span className="li-sub">0–60, ¼ mile, top speed</span>
                  </div>
                </Link>{" "}
                <Link href="/engine/lt7#peak" className="link-item">
                  <Img
                    hideOnError
                    className="li-img"
                    src="/LT7%20plot.png"
                    alt="LT7 dyno plot"
                  />
                  <div className="li-text">
                    <span className="li-label">Peak Efficiency</span>
                    <span className="li-sub">828 lb-ft and 1,064 hp bands</span>
                  </div>
                </Link>{" "}
                <Link href="/engine/driving#gmeter" className="link-item">
                  <div className="li-icon">⏱️</div>
                  <div className="li-text">
                    <span className="li-label">G-Meter</span>
                    <span className="li-sub">
                      Lateral &amp; longitudinal forces
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
