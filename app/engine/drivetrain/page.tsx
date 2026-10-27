import type { Metadata } from "next";
import Link from "next/link";
import Img from "@/components/Img";
import PageScope from "@/components/PageScope";

export const metadata: Metadata = { title: "Drivetrain — DCT & E-AWD — MyZR1" };

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
      .mt-8 {
        margin-top: 8px;
      }
`;

export default function Page() {
  return (
    <PageScope styles={css}>
      <div className="breadcrumb">
        <Link href="/">Home</Link> › <Link href="/engine">Engine</Link> ›{" "}
        <span>Drivetrain</span>
      </div>

      <div className="page-hero">
        <Img
          fallback="/drive.png"
          className="hero-bg"
          src="/eawd.png"
          alt="E-AWD Drivetrain"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-tag">DCT · LSD · E-AWD</div>
          <h1>Drivetrain Systems</h1>
          <p>
            The Tremec 8-speed DCT transaxle, electronic limited-slip
            differential, and the ZR1X's E-AWD architecture — the systems that
            put 1,064+ HP to the road.
          </p>
          <div className="hero-ctas">
            <Link href="/zr1/zr1x" className="btn btn-primary">
              ZR1X E-AWD Details
            </Link>
            <Link href="/engine/driving" className="btn btn-outline">
              Driving Dynamics →
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
                <h2>Tremec DCT Specs</h2>
              </div>
              <table className="spec-table">
                <tbody>
                  <tr>
                    <td>Type</td>
                    <td>Dual-clutch transaxle (DCT)</td>
                  </tr>
                  <tr>
                    <td>Manufacturer</td>
                    <td>Tremec</td>
                  </tr>
                  <tr>
                    <td>Speeds</td>
                    <td>8 forward, 1 reverse</td>
                  </tr>
                  <tr>
                    <td>Placement</td>
                    <td>Rear transaxle (mid-engine layout)</td>
                  </tr>
                  <tr>
                    <td>Clutch packs</td>
                    <td>Dual wet multi-plate clutches</td>
                  </tr>
                  <tr>
                    <td>Shift time</td>
                    <td>&lt;100ms under full load</td>
                  </tr>
                  <tr>
                    <td>Cooling</td>
                    <td>Dedicated transmission oil cooler</td>
                  </tr>
                  <tr>
                    <td>Oil spec</td>
                    <td>Dexron VI ATF</td>
                  </tr>
                  <tr>
                    <td>Filter interval</td>
                    <td>7,500 miles or 1 year</td>
                  </tr>
                  <tr>
                    <td>Launch control</td>
                    <td>Integrated with PTM system</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <div className="section-header">
                <div className="bar green"></div>
                <h2>How the DCT Works</h2>
              </div>
              <p className="muted-text-mb14">
                A dual-clutch transmission uses two separate clutch packs — one
                for odd gears (1, 3, 5, 7) and one for even gears (2, 4, 6, 8).
                While driving in 1st gear, the transmission pre-selects 2nd gear
                on the second clutch. When the shift signal comes, one clutch
                opens and the other closes simultaneously — with zero torque
                interruption.
              </p>
              <p className="muted-text-mb14">
                The Tremec unit is positioned as a rear transaxle — the
                differential and transmission share a single housing at the rear
                axle. This placement (necessary for the mid-engine layout) also
                improves front/rear weight balance. On the ZR1, the result is a
                near-perfect 40/60 front/rear weight distribution.
              </p>
              <p className="muted-text">
                In manual mode, paddle shifters give the driver direct control.
                In automatic Track mode, the transmission holds gears
                aggressively to keep the LT7 engineon the top of its powerband.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="lsd" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="bar purple"></div>
            <h2>Electronic Limited-Slip Differential</h2>
          </div>
          <div className="feature-row">
            <div className="feature-img">
              <Img
                fallback="/eawd.png"
                src="/assets/elsd-power-flow-diagram.png"
                alt="eLSD"
              />
            </div>
            <div className="feature-text">
              <h3>eLSD — Torque Vectoring Rear Axle</h3>
              <p className="muted-text-mb12">
                The electronic limited-slip differential (eLSD) can bias torque
                between the rear wheels in milliseconds. Under hard
                acceleration, it locks up to send maximum torque to the wheel
                with the most traction. In cornering, it can apply a small
                amount of diff lock to the outside rear wheel, effectively
                yawing the car into the corner.
              </p>
              <p className="muted-text">
                The eLSD works in concert with the PTM system — both systems
                share sensor inputs from wheel speed sensors, accelerometers,
                and steering angle. Together they make the ZR1 exploitable and
                adjustable, not just electronically nannied.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="eawd" className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar orange"></div>
            <h2>E-AWD System (ZR1X Only)</h2>
          </div>
          <div className="two-col">
            <div>
              <table className="spec-table">
                <tbody>
                  <tr>
                    <td>System type</td>
                    <td>Electric front axle + ICE rear axle</td>
                  </tr>
                  <tr>
                    <td>Front drive</td>
                    <td>Electric motor driving front axle</td>
                  </tr>
                  <tr>
                    <td>Rear drive</td>
                    <td>LT7 engine + 8-speed DCT transaxle</td>
                  </tr>
                  <tr>
                    <td>Torque split</td>
                    <td>Variable front/rear, software-controlled</td>
                  </tr>
                  <tr>
                    <td>Stealth mode</td>
                    <td>Front eMotor only — silent operation</td>
                  </tr>
                  <tr>
                    <td>Motor blending</td>
                    <td>Seamless LT7 engine + eMotor torque fill</td>
                  </tr>
                  <tr>
                    <td>Battery</td>
                    <td>High-voltage hybrid pack</td>
                  </tr>
                  <tr>
                    <td>Regen braking</td>
                    <td>Front axle regenerative braking</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <p className="muted-text-mb14">
                The ZR1X's E-AWD system adds a front electric motor to the base
                ZR1's rear-drive DCT drivetrain. The front motor operates
                independently of the LT7 engine— it can run alone in Stealth
                Mode, fill torque gaps during shifts, or combine with the LT7
                enginefor maximum acceleration.
              </p>
              <p className="muted-text-mb14">
                Motor blending is handled by the ZR1X's ECU, which monitors
                throttle demand, wheel slip, and battery state of charge to
                decide how much torque each axle receives. Under hard launch
                from a standstill, both axles fire simultaneously — explaining
                the ZR1X's sub-2.5 second 0–60 capability.
              </p>
              <Link href="/zr1/zr1x" className="btn btn-primary mt-8">
                Full ZR1X Guide →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageScope>
  );
}
