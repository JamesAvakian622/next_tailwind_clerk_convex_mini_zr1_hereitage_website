import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import Img from "@/components/Img";
import PageScope from "@/components/PageScope";

export const metadata: Metadata = pageMeta(
  "Track Directory — All 50 States — MyZR1",
  "Browse race tracks across all 50 states — road courses, ovals, drag strips, kart tracks, and driving schools. Every listing includes surface type, shape…",
);

const css = `
.state-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
        gap: 10px;
      }
      .state-card {
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: 8px;
        padding: 12px 14px;
        transition: border-color 0.2s;
      }
      .state-card:hover {
        border-color: var(--accent);
        text-decoration: none;
      }
      .state-card .state-code {
        font-size: 1.2rem;
        font-weight: 800;
        color: #fff;
        display: block;
      }
      .state-card .state-name {
        font-size: 0.8rem;
        color: var(--muted);
      }
      .state-card .region-badge {
        font-size: 0.68rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        margin-top: 4px;
        display: block;
      }
`;

export default function Page() {
  return (
    <PageScope styles={css}>
      <div className="breadcrumb">
        <Link href="/">Home</Link> › <Link href="/tracks">Tracks</Link> ›{" "}
        <span>Directory</span>
      </div>

      <div className="page-hero">
        <Img
          className="hero-bg"
          src="/chevy-racing.png"
          alt="Track Directory"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-tag">All 50 States</div>
          <h1>USA Race Track Directory</h1>
          <p>
            Browse race tracks across all 50 states — road courses, ovals, drag
            strips, kart tracks, and driving schools. Every listing includes
            surface type, shape, spectator and drive-your-car flags.
          </p>
          <div className="hero-ctas">
            <Link href="/tracks/featured" className="btn btn-primary">
              Featured Regions →
            </Link>
            <Link href="/tracks" className="btn btn-outline">
              Tracks Home
            </Link>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar"></div>
            <h2>Featured Track Listings</h2>
          </div>
          <div className="card-grid">
            <Link href="/tracks/featured#tennessee-kentucky" className="card">
              <Img className="card-img" src="/ncm-park.png" alt="NCM" />
              <div className="card-body">
                <span className="card-tag tag-green">Bowling Green, KY</span>
                <h3>NCM Motorsports Park</h3>
                <p>
                  3.15 mi · Paved road course · HPDE &amp; club · Spectator
                  &amp; drive-your-car · Adjacent to National Corvette Museum
                </p>
              </div>
            </Link>{" "}
            <Link href="/tracks/featured#california" className="card">
              <Img
                fallback="/chevy-racing.png"
                className="card-img"
                src="/driving-fast.png"
                alt="Laguna Seca"
              />
              <div className="card-body">
                <span className="card-tag tag-blue">Monterey, CA</span>
                <h3>WeatherTech Laguna Seca</h3>
                <p>
                  2.238 mi · Paved road course · HPDE &amp; pro events ·
                  Spectator &amp; drive-your-car · Iconic Corkscrew corner
                </p>
              </div>
            </Link>{" "}
            <Link href="/tracks/featured#florida" className="card">
              <Img
                fallback="/chevy-racing.png"
                className="card-img"
                src="/drive.png"
                alt="Daytona"
              />
              <div className="card-body">
                <span className="card-tag tag-orange">Daytona Beach, FL</span>
                <h3>Daytona International Speedway</h3>
                <p>
                  2.5 mi · Paved tri-oval &amp; road · NASCAR &amp; IMSA · Major
                  spectator destination
                </p>
              </div>
            </Link>{" "}
            <Link href="/tracks/featured#north-carolina" className="card">
              <Img
                className="card-img"
                src="/chevy-racing.png"
                alt="Charlotte Motor Speedway"
              />
              <div className="card-body">
                <span className="card-tag tag-purple">Concord, NC</span>
                <h3>Charlotte Motor Speedway</h3>
                <p>
                  1.5 mi · Paved oval · NASCAR complex with zMAX Dragway · Major
                  spectator venue
                </p>
              </div>
            </Link>{" "}
            <Link href="/tracks/featured#new-york" className="card">
              <Img
                fallback="/chevy-racing.png"
                className="card-img"
                src="/driving1.png"
                alt="Watkins Glen"
              />
              <div className="card-body">
                <span className="card-tag tag-blue">Watkins Glen, NY</span>
                <h3>Watkins Glen International</h3>
                <p>
                  3.4 mi · Paved road course · NASCAR &amp; IMSA · Spectator
                  &amp; drive-your-car
                </p>
              </div>
            </Link>{" "}
            <Link href="/tracks/featured#ohio" className="card">
              <Img
                fallback="/chevy-racing.png"
                className="card-img"
                src="/drive.png"
                alt="Mid-Ohio"
              />
              <div className="card-body">
                <span className="card-tag tag-green">Lexington, OH</span>
                <h3>Mid-Ohio Sports Car Course</h3>
                <p>
                  2.258 mi · Paved road course · HPDE &amp; club · Spectator
                  &amp; drive-your-car
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section id="drivers" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="bar orange"></div>
            <h2>Drivers Directory</h2>
          </div>
          <div className="card-grid">
            <div className="card">
              <Img
                fallback="/chevy-racing.png"
                className="card-img"
                src="/five-drivers.png"
                alt="Jesse Iwuji"
              />
              <div className="card-body">
                <span className="card-tag tag-blue">NASCAR</span>
                <h3>Jesse Iwuji</h3>
                <p>
                  NASCAR competitor and performance educator — PTM Pro and
                  Launch Control walkthroughs featured on MyZR1 for C8 ZR1
                  owners.
                </p>
              </div>
            </div>
            <div className="card">
              <Img
                className="card-img"
                src="/chevy-racing.png"
                alt="Corvette Racing"
              />
              <div className="card-body">
                <span className="card-tag tag-orange">IMSA / GT</span>
                <h3>Corvette Racing</h3>
                <p>
                  Chevrolet's factory GT program — endurance racing from C5-R
                  through C8.R and Z06 GT3.R worldwide.
                </p>
              </div>
            </div>
            <div className="card">
              <Img className="card-img" src="/ncm-park.png" alt="NCM HPDE" />
              <div className="card-body">
                <span className="card-tag tag-green">HPDE</span>
                <h3>NCM Driving Club</h3>
                <p>
                  Drive-your-car programs at NCM Motorsports Park — the core ZR1
                  owner track day community.
                </p>
              </div>
            </div>
            <div className="card">
              <Img className="card-img" src="/driving-fast.png" alt="Hagerty" />
              <div className="card-body">
                <span className="card-tag tag-purple">Enthusiast</span>
                <h3>Hagerty Drivers Club</h3>
                <p>
                  Collector-car drivers — tour events, garage stories, and road
                  culture for ZR1 and ZR1X owners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar purple"></div>
            <h2>All 50 States</h2>
            <p>
              Click any state to browse its tracks — links to featured.html
              where detailed guides are available
            </p>
          </div>
          <div className="state-grid">
            <Link href="/tracks/featured" className="state-card">
              <span className="state-code">AL</span>
              <span className="state-name">Alabama</span>
              <span className="region-badge" style={{ color: "var(--orange)" }}>
                South
              </span>
            </Link>{" "}
            <Link href="/tracks/featured" className="state-card">
              <span className="state-code">AK</span>
              <span className="state-name">Alaska</span>
              <span className="region-badge" style={{ color: "var(--accent)" }}>
                West
              </span>
            </Link>{" "}
            <Link href="/tracks/featured" className="state-card">
              <span className="state-code">AZ</span>
              <span className="state-name">Arizona</span>
              <span className="region-badge" style={{ color: "var(--accent)" }}>
                West
              </span>
            </Link>{" "}
            <Link href="/tracks/featured" className="state-card">
              <span className="state-code">AR</span>
              <span className="state-name">Arkansas</span>
              <span className="region-badge" style={{ color: "var(--orange)" }}>
                South
              </span>
            </Link>{" "}
            <Link
              href="/tracks/featured#california"
              className="state-card"
              style={{ borderColor: "var(--accent)" }}
            >
              <span className="state-code">CA ★</span>
              <span className="state-name">California</span>
              <span className="region-badge" style={{ color: "var(--accent)" }}>
                West · Featured
              </span>
            </Link>{" "}
            <Link href="/tracks/featured" className="state-card">
              <span className="state-code">CO</span>
              <span className="state-name">Colorado</span>
              <span className="region-badge" style={{ color: "var(--accent)" }}>
                West
              </span>
            </Link>{" "}
            <Link href="/tracks/featured" className="state-card">
              <span className="state-code">CT</span>
              <span className="state-name">Connecticut</span>
              <span className="region-badge" style={{ color: "var(--purple)" }}>
                East
              </span>
            </Link>{" "}
            <Link href="/tracks/featured" className="state-card">
              <span className="state-code">DE</span>
              <span className="state-name">Delaware</span>
              <span className="region-badge" style={{ color: "var(--purple)" }}>
                East
              </span>
            </Link>{" "}
            <Link
              href="/tracks/featured#florida"
              className="state-card"
              style={{ borderColor: "var(--orange)" }}
            >
              <span className="state-code">FL ★</span>
              <span className="state-name">Florida</span>
              <span className="region-badge" style={{ color: "var(--orange)" }}>
                South · Featured
              </span>
            </Link>{" "}
            <Link href="/tracks/featured" className="state-card">
              <span className="state-code">GA</span>
              <span className="state-name">Georgia</span>
              <span className="region-badge" style={{ color: "var(--orange)" }}>
                South
              </span>
            </Link>{" "}
            <Link href="/tracks/featured" className="state-card">
              <span className="state-code">HI</span>
              <span className="state-name">Hawaii</span>
              <span className="region-badge" style={{ color: "var(--accent)" }}>
                West
              </span>
            </Link>{" "}
            <Link href="/tracks/featured" className="state-card">
              <span className="state-code">ID</span>
              <span className="state-name">Idaho</span>
              <span className="region-badge" style={{ color: "var(--accent)" }}>
                West
              </span>
            </Link>{" "}
            <Link
              href="/tracks/featured#chicago"
              className="state-card"
              style={{ borderColor: "var(--green)" }}
            >
              <span className="state-code">IL ★</span>
              <span className="state-name">Illinois</span>
              <span className="region-badge" style={{ color: "var(--green)" }}>
                North · Chicago
              </span>
            </Link>{" "}
            <Link href="/tracks/featured" className="state-card">
              <span className="state-code">IN</span>
              <span className="state-name">Indiana</span>
              <span className="region-badge" style={{ color: "var(--green)" }}>
                North
              </span>
            </Link>{" "}
            <Link href="/tracks/featured" className="state-card">
              <span className="state-code">IA</span>
              <span className="state-name">Iowa</span>
              <span className="region-badge" style={{ color: "var(--green)" }}>
                North
              </span>
            </Link>{" "}
            <Link href="/tracks/featured" className="state-card">
              <span className="state-code">KS</span>
              <span className="state-name">Kansas</span>
              <span className="region-badge" style={{ color: "var(--green)" }}>
                North
              </span>
            </Link>{" "}
            <Link
              href="/tracks/featured#tennessee-kentucky"
              className="state-card"
              style={{ borderColor: "var(--green)" }}
            >
              <span className="state-code">KY ★</span>
              <span className="state-name">Kentucky</span>
              <span className="region-badge" style={{ color: "var(--green)" }}>
                South · NCM
              </span>
            </Link>{" "}
            <Link href="/tracks/featured" className="state-card">
              <span className="state-code">LA</span>
              <span className="state-name">Louisiana</span>
              <span className="region-badge" style={{ color: "var(--orange)" }}>
                South
              </span>
            </Link>{" "}
            <Link href="/tracks/featured" className="state-card">
              <span className="state-code">ME</span>
              <span className="state-name">Maine</span>
              <span className="region-badge" style={{ color: "var(--purple)" }}>
                East
              </span>
            </Link>{" "}
            <Link href="/tracks/featured" className="state-card">
              <span className="state-code">MD</span>
              <span className="state-name">Maryland</span>
              <span className="region-badge" style={{ color: "var(--purple)" }}>
                East
              </span>
            </Link>{" "}
            <Link href="/tracks/featured" className="state-card">
              <span className="state-code">MA</span>
              <span className="state-name">Massachusetts</span>
              <span className="region-badge" style={{ color: "var(--purple)" }}>
                East
              </span>
            </Link>{" "}
            <Link href="/tracks/featured" className="state-card">
              <span className="state-code">MI</span>
              <span className="state-name">Michigan</span>
              <span className="region-badge" style={{ color: "var(--green)" }}>
                North
              </span>
            </Link>{" "}
            <Link href="/tracks/featured" className="state-card">
              <span className="state-code">MN</span>
              <span className="state-name">Minnesota</span>
              <span className="region-badge" style={{ color: "var(--green)" }}>
                North
              </span>
            </Link>{" "}
            <Link href="/tracks/featured" className="state-card">
              <span className="state-code">MS</span>
              <span className="state-name">Mississippi</span>
              <span className="region-badge" style={{ color: "var(--orange)" }}>
                South
              </span>
            </Link>{" "}
            <Link href="/tracks/featured" className="state-card">
              <span className="state-code">MO</span>
              <span className="state-name">Missouri</span>
              <span className="region-badge" style={{ color: "var(--green)" }}>
                North
              </span>
            </Link>{" "}
            <Link href="/tracks/featured" className="state-card">
              <span className="state-code">MT</span>
              <span className="state-name">Montana</span>
              <span className="region-badge" style={{ color: "var(--accent)" }}>
                West
              </span>
            </Link>{" "}
            <Link href="/tracks/featured" className="state-card">
              <span className="state-code">NE</span>
              <span className="state-name">Nebraska</span>
              <span className="region-badge" style={{ color: "var(--green)" }}>
                North
              </span>
            </Link>{" "}
            <Link href="/tracks/featured" className="state-card">
              <span className="state-code">NV</span>
              <span className="state-name">Nevada</span>
              <span className="region-badge" style={{ color: "var(--accent)" }}>
                West
              </span>
            </Link>{" "}
            <Link href="/tracks/featured" className="state-card">
              <span className="state-code">NH</span>
              <span className="state-name">New Hampshire</span>
              <span className="region-badge" style={{ color: "var(--purple)" }}>
                East
              </span>
            </Link>{" "}
            <Link href="/tracks/featured" className="state-card">
              <span className="state-code">NJ</span>
              <span className="state-name">New Jersey</span>
              <span className="region-badge" style={{ color: "var(--purple)" }}>
                East
              </span>
            </Link>{" "}
            <Link href="/tracks/featured" className="state-card">
              <span className="state-code">NM</span>
              <span className="state-name">New Mexico</span>
              <span className="region-badge" style={{ color: "var(--accent)" }}>
                West
              </span>
            </Link>{" "}
            <Link
              href="/tracks/featured#new-york"
              className="state-card"
              style={{ borderColor: "var(--purple)" }}
            >
              <span className="state-code">NY ★</span>
              <span className="state-name">New York</span>
              <span className="region-badge" style={{ color: "var(--purple)" }}>
                East · Featured
              </span>
            </Link>{" "}
            <Link
              href="/tracks/featured#north-carolina"
              className="state-card"
              style={{ borderColor: "var(--orange)" }}
            >
              <span className="state-code">NC ★</span>
              <span className="state-name">North Carolina</span>
              <span className="region-badge" style={{ color: "var(--orange)" }}>
                South · Featured
              </span>
            </Link>{" "}
            <Link href="/tracks/featured" className="state-card">
              <span className="state-code">ND</span>
              <span className="state-name">North Dakota</span>
              <span className="region-badge" style={{ color: "var(--green)" }}>
                North
              </span>
            </Link>{" "}
            <Link
              href="/tracks/featured#ohio"
              className="state-card"
              style={{ borderColor: "var(--green)" }}
            >
              <span className="state-code">OH ★</span>
              <span className="state-name">Ohio</span>
              <span className="region-badge" style={{ color: "var(--green)" }}>
                North · Featured
              </span>
            </Link>{" "}
            <Link href="/tracks/featured" className="state-card">
              <span className="state-code">OK</span>
              <span className="state-name">Oklahoma</span>
              <span className="region-badge" style={{ color: "var(--orange)" }}>
                South
              </span>
            </Link>{" "}
            <Link href="/tracks/featured" className="state-card">
              <span className="state-code">OR</span>
              <span className="state-name">Oregon</span>
              <span className="region-badge" style={{ color: "var(--accent)" }}>
                West
              </span>
            </Link>{" "}
            <Link href="/tracks/featured" className="state-card">
              <span className="state-code">PA</span>
              <span className="state-name">Pennsylvania</span>
              <span className="region-badge" style={{ color: "var(--purple)" }}>
                East
              </span>
            </Link>{" "}
            <Link href="/tracks/featured" className="state-card">
              <span className="state-code">RI</span>
              <span className="state-name">Rhode Island</span>
              <span className="region-badge" style={{ color: "var(--purple)" }}>
                East
              </span>
            </Link>{" "}
            <Link
              href="/tracks/featured#south-carolina"
              className="state-card"
              style={{ borderColor: "var(--orange)" }}
            >
              <span className="state-code">SC ★</span>
              <span className="state-name">South Carolina</span>
              <span className="region-badge" style={{ color: "var(--orange)" }}>
                South · Featured
              </span>
            </Link>{" "}
            <Link href="/tracks/featured" className="state-card">
              <span className="state-code">SD</span>
              <span className="state-name">South Dakota</span>
              <span className="region-badge" style={{ color: "var(--green)" }}>
                North
              </span>
            </Link>{" "}
            <Link
              href="/tracks/featured#tennessee-kentucky"
              className="state-card"
              style={{ borderColor: "var(--orange)" }}
            >
              <span className="state-code">TN ★</span>
              <span className="state-name">Tennessee</span>
              <span className="region-badge" style={{ color: "var(--orange)" }}>
                South · Featured
              </span>
            </Link>{" "}
            <Link href="/tracks/featured" className="state-card">
              <span className="state-code">TX</span>
              <span className="state-name">Texas</span>
              <span className="region-badge" style={{ color: "var(--orange)" }}>
                South
              </span>
            </Link>{" "}
            <Link href="/tracks/featured" className="state-card">
              <span className="state-code">UT</span>
              <span className="state-name">Utah</span>
              <span className="region-badge" style={{ color: "var(--accent)" }}>
                West
              </span>
            </Link>{" "}
            <Link href="/tracks/featured" className="state-card">
              <span className="state-code">VT</span>
              <span className="state-name">Vermont</span>
              <span className="region-badge" style={{ color: "var(--purple)" }}>
                East
              </span>
            </Link>{" "}
            <Link href="/tracks/featured" className="state-card">
              <span className="state-code">VA</span>
              <span className="state-name">Virginia</span>
              <span className="region-badge" style={{ color: "var(--orange)" }}>
                South
              </span>
            </Link>{" "}
            <Link href="/tracks/featured" className="state-card">
              <span className="state-code">WA</span>
              <span className="state-name">Washington</span>
              <span className="region-badge" style={{ color: "var(--accent)" }}>
                West
              </span>
            </Link>{" "}
            <Link href="/tracks/featured" className="state-card">
              <span className="state-code">WV</span>
              <span className="state-name">West Virginia</span>
              <span className="region-badge" style={{ color: "var(--orange)" }}>
                South
              </span>
            </Link>{" "}
            <Link
              href="/tracks/featured#chicago"
              className="state-card"
              style={{ borderColor: "var(--green)" }}
            >
              <span className="state-code">WI ★</span>
              <span className="state-name">Wisconsin</span>
              <span className="region-badge" style={{ color: "var(--green)" }}>
                North · Chicago
              </span>
            </Link>{" "}
            <Link href="/tracks/featured" className="state-card">
              <span className="state-code">WY</span>
              <span className="state-name">Wyoming</span>
              <span className="region-badge" style={{ color: "var(--accent)" }}>
                West
              </span>
            </Link>
          </div>
          <p
            style={{
              color: "var(--muted)",
              fontSize: "0.78rem",
              marginTop: "16px",
            }}
          >
            ★ = Featured region with detailed track guide available
          </p>
        </div>
      </section>
    </PageScope>
  );
}
