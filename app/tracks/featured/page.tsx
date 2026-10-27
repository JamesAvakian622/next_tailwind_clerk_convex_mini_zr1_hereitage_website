import type { Metadata } from "next";
import Link from "next/link";
import Img from "@/components/Img";
import PageScope from "@/components/PageScope";

export const metadata: Metadata = {
  title: "Featured Regional Track Maps — MyZR1",
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
      .mt-12 {
        margin-top: 12px;
      }
      .max-w-700 {
        max-width: 700px;
      }
`;

export default function Page() {
  return (
    <PageScope styles={css}>
      <div className="breadcrumb">
        <Link href="/">Home</Link> › <Link href="/tracks">Tracks</Link> ›{" "}
        <span>Featured Regions</span>
      </div>

      <div className="page-hero">
        <Img
          className="hero-bg"
          src="/chevy-racing.png"
          alt="Featured Track Regions"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-tag">8 Featured Regions</div>
          <h1>Featured Regional Track Maps</h1>
          <p>
            Curated regional track guides with highlighted venues, HPDE
            opportunities, driving schools, and spectator tips — covering the
            most important ZR1 track corridors in America.
          </p>
          <div className="hero-ctas">
            <Link href="/tracks/directory" className="btn btn-primary">
              All 50 States →
            </Link>
            <Link href="/tracks" className="btn btn-outline">
              Tracks Home
            </Link>
          </div>
        </div>
      </div>

      <section id="tennessee-kentucky" className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar green"></div>
            <h2>Tennessee &amp; Kentucky</h2>
            <p>NCM Motorsports Park — the definitive ZR1 track corridor</p>
          </div>
          <div className="feature-row">
            <div className="feature-img">
              <Img src="/ncm-park.png" alt="NCM Motorsports Park" />
            </div>
            <div className="feature-text">
              <h3>NCM Motorsports Park</h3>
              <p className="muted-text-mb12">
                The National Corvette Museum's adjacent 3.15-mile road course in
                Bowling Green, KY is the top ZR1 track-day destination in the
                USA. HPDE programs, the Driving Club, and the Performance Build
                Center where you can watch your LT7 engineassembled by hand.
              </p>
              <table className="spec-table mt-12">
                <tbody>
                  <tr>
                    <td>NCM Motorsports Park</td>
                    <td>3.15 mi · Paved road · Bowling Green, KY</td>
                  </tr>
                  <tr>
                    <td>Bristol Motor Speedway</td>
                    <td>0.533 mi · Paved oval · Bristol, TN</td>
                  </tr>
                  <tr>
                    <td>Nashville Superspeedway</td>
                    <td>1.33 mi · Paved oval · Lebanon, TN</td>
                  </tr>
                  <tr>
                    <td>Kentucky Speedway</td>
                    <td>1.5 mi · Paved oval · Sparta, KY</td>
                  </tr>
                  <tr>
                    <td>Nashville Fairgrounds</td>
                    <td>0.596 mi · Paved oval · Nashville, TN</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section id="california" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="bar"></div>
            <h2>California</h2>
            <p>West Coast road courses, ovals, and drag strips</p>
          </div>
          <div className="feature-row flip">
            <div className="feature-img">
              <Img
                fallback="/chevy-racing.png"
                src="/images/speed-records-hero.png"
                alt="California Tracks"
              />
            </div>
            <div className="feature-text">
              <h3>WeatherTech Raceway Laguna Seca &amp; More</h3>
              <p className="muted-text-mb12">
                California offers the densest concentration of world-class road
                courses for ZR1 track days — Laguna Seca's Corkscrew, Sonoma
                Raceway's combined road/drag facility, and Thunderhill's
                multiple configurations near Willows.
              </p>
              <table className="spec-table mt-12">
                <tbody>
                  <tr>
                    <td>WeatherTech Laguna Seca</td>
                    <td>2.238 mi · Monterey, CA</td>
                  </tr>
                  <tr>
                    <td>Sonoma Raceway</td>
                    <td>2.52 mi road + drag · Sonoma, CA</td>
                  </tr>
                  <tr>
                    <td>Thunderhill Raceway Park</td>
                    <td>3 / 5 mi configs · Willows, CA</td>
                  </tr>
                  <tr>
                    <td>Buttonwillow Raceway Park</td>
                    <td>Multi-length · Buttonwillow, CA</td>
                  </tr>
                  <tr>
                    <td>Willow Springs Int'l</td>
                    <td>Road + oval + drift · Rosamond, CA</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section id="florida" className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar orange"></div>
            <h2>Florida</h2>
            <p>Year-round racing climate</p>
          </div>
          <div className="two-col">
            <div>
              <table className="spec-table">
                <tbody>
                  <tr>
                    <td>Daytona International</td>
                    <td>2.5 mi · Daytona Beach</td>
                  </tr>
                  <tr>
                    <td>Sebring Int'l Raceway</td>
                    <td>3.74 mi · Sebring</td>
                  </tr>
                  <tr>
                    <td>Homestead-Miami Speedway</td>
                    <td>1.5 mi oval/road · Homestead</td>
                  </tr>
                  <tr>
                    <td>Palm Beach Int'l Raceway</td>
                    <td>2.0 mi road + drag · Jupiter</td>
                  </tr>
                  <tr>
                    <td>Orlando Speedworld</td>
                    <td>3/8 mi oval + drag · Bithlo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <p className="muted-text-mb12">
                Florida's year-round warm climate makes it ideal for winter
                track-day planning. Daytona's Rolex 24 and Sebring's 12 Hours
                are major spectator events — the endurance classics that define
                American sports car racing. HPDE events at PBIR run throughout
                the winter months.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="north-carolina" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="bar purple"></div>
            <h2>North Carolina</h2>
            <p>NASCAR heartland</p>
          </div>
          <table className="spec-table max-w-700">
            <tbody>
              <tr>
                <td>Charlotte Motor Speedway</td>
                <td>1.5 mi oval · Concord, NC</td>
              </tr>
              <tr>
                <td>zMAX Dragway</td>
                <td>¼ mi · Concord, NC · NHRA national events</td>
              </tr>
              <tr>
                <td>North Wilkesboro Speedway</td>
                <td>0.625 mi · North Wilkesboro, NC</td>
              </tr>
              <tr>
                <td>Hickory Motor Speedway</td>
                <td>0.363 mi · Hickory, NC</td>
              </tr>
              <tr>
                <td>Rockingham Speedway</td>
                <td>1.017 mi · Rockingham, NC</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="south-carolina" className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar orange"></div>
            <h2>South Carolina</h2>
            <p>Darlington and coastal short tracks</p>
          </div>
          <table className="spec-table max-w-700">
            <tbody>
              <tr>
                <td>Darlington Raceway</td>
                <td>1.366 mi · Darlington, SC · "Too Tough to Tame"</td>
              </tr>
              <tr>
                <td>Carolina Motorsports Park</td>
                <td>2.27 mi · Kershaw, SC · HPDE &amp; club racing</td>
              </tr>
              <tr>
                <td>Myrtle Beach Speedway</td>
                <td>0.538 mi · Myrtle Beach, SC</td>
              </tr>
              <tr>
                <td>Florence Motor Speedway</td>
                <td>0.4 mi · Timmonsville, SC</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="ohio" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="bar green"></div>
            <h2>Ohio</h2>
            <p>Mid-Ohio road racing and Eldora dirt legends</p>
          </div>
          <table className="spec-table max-w-700">
            <tbody>
              <tr>
                <td>Mid-Ohio Sports Car Course</td>
                <td>2.258 mi · Lexington, OH · HPDE &amp; club</td>
              </tr>
              <tr>
                <td>Eldora Speedway</td>
                <td>½ mi dirt oval · Rossburg, OH</td>
              </tr>
              <tr>
                <td>Nelson Ledges Road Course</td>
                <td>2.0 mi · Garrettsville, OH</td>
              </tr>
              <tr>
                <td>Toledo Speedway</td>
                <td>½ mi oval · Toledo, OH</td>
              </tr>
              <tr>
                <td>Mansfield Motor Speedway</td>
                <td>0.5 mi oval · Mansfield, OH</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="new-york" className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar purple"></div>
            <h2>New York</h2>
            <p>Watkins Glen anchors northeast road racing</p>
          </div>
          <table className="spec-table max-w-700">
            <tbody>
              <tr>
                <td>Watkins Glen International</td>
                <td>3.4 mi · Watkins Glen, NY · NASCAR &amp; IMSA</td>
              </tr>
              <tr>
                <td>New York Safety Track</td>
                <td>~2 mi · Jefferson, NY · Track days</td>
              </tr>
              <tr>
                <td>Lancaster Speedway</td>
                <td>½ mi oval + drag · Lancaster, NY</td>
              </tr>
              <tr>
                <td>Orange County Fair Speedway</td>
                <td>5/8 mi dirt · Middletown, NY</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="chicago" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="bar"></div>
            <h2>Chicago Metro</h2>
            <p>Autobahn, Blackhawk Farms, and Road America day trips</p>
          </div>
          <div className="feature-row">
            <div className="feature-img">
              <Img
                fallback="/chevy-racing.png"
                src="/driving1.png"
                alt="Chicago Tracks"
              />
            </div>
            <div className="feature-text">
              <h3>Midwest Track Corridor</h3>
              <p className="muted-text-mb12">
                Chicago's metro area offers Autobahn Country Club's private road
                courses in Joliet, Blackhawk Farms Raceway near the Wisconsin
                border, and easy day-trip access to Road America — the
                4.048-mile natural-terrain circuit in Elkhart Lake, WI that's
                one of America's best road courses.
              </p>
              <table className="spec-table mt-12">
                <tbody>
                  <tr>
                    <td>Autobahn Country Club</td>
                    <td>Multi-config road · Joliet, IL</td>
                  </tr>
                  <tr>
                    <td>Blackhawk Farms Raceway</td>
                    <td>1.95 mi road · South Beloit, IL</td>
                  </tr>
                  <tr>
                    <td>Road America</td>
                    <td>4.048 mi road · Elkhart Lake, WI</td>
                  </tr>
                  <tr>
                    <td>Illiana Motor Speedway</td>
                    <td>½ mi oval · Schererville, IN</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </PageScope>
  );
}
