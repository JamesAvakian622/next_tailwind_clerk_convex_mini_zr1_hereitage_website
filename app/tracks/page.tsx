import type { Metadata } from "next";
import Link from "next/link";
import Img from "@/components/Img";

export const metadata: Metadata = {
  title: "USA Race Tracks Directory — MyZR1",
};

export default function Page() {
  return (
    <>
      <div className="breadcrumb">
        <Link href="/">Home</Link> › <span>Race Tracks</span>
      </div>

      <div className="page-hero">
        <Img
          fallback="/chevy-racing.png"
          className="hero-bg"
          src="/ncm-park.png"
          alt="Race Tracks USA"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-tag">All 50 States · HPDE · Drivers</div>
          <h1>USA Race Track Directory</h1>
          <p>
            The national hub for ZR1 owners, track enthusiasts, and spectators —
            browse all 50 states, explore featured regional maps, find drivers,
            and discover HPDE events near you.
          </p>
          <div className="hero-ctas">
            <Link href="/tracks/directory" className="btn btn-primary">
              Browse All 50 States
            </Link>{" "}
            <Link href="/tracks/featured" className="btn btn-outline">
              Featured Regions
            </Link>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar"></div>
            <h2>Directory Sections</h2>
          </div>
          <div className="card-grid card-grid-lg">
            <Link href="/tracks/directory" className="card">
              <Img
                className="card-img"
                src="/ncm-park.png"
                alt="Track Directory"
              />
              <div className="card-body">
                <span className="card-tag tag-blue">Directory</span>
                <h3>USA Race Track Directory</h3>
                <p>
                  Browse race tracks across all 50 states — road courses, ovals,
                  drag strips, kart tracks, and driving schools.
                  Spectator-friendly and drive-your-car flags on every listing.
                </p>
                <span className="card-link">Browse Directory</span>
              </div>
            </Link>{" "}
            <Link href="/tracks/nurburgring" className="card">
              <Img
                className="card-img"
                src="/assets/nurburgring-times/leaderboard-fastest-production-cars.png"
                alt="Nürburgring leaderboard"
              />
              <div className="card-body">
                <span className="card-tag tag-purple">Nordschleife</span>
                <h3>Nürburgring Times &amp; Rivals</h3>
                <p>
                  How the ZR1 and ZR1X stack up on the 12.9-mile Nordschleife,
                  with the production-car leaderboard and in-car session photos.
                </p>
                <span className="card-link">View Times</span>
              </div>
            </Link>{" "}
            <Link href="/tracks/featured" className="card">
              <Img
                className="card-img"
                src="/chevy-racing.png"
                alt="Featured Regions"
              />
              <div className="card-body">
                <span className="card-tag tag-orange">Regional Maps</span>
                <h3>Featured Regional Maps</h3>
                <p>
                  8 curated regional track guides with detailed maps, highlight
                  tracks, HPDE opportunities, and driving school listings for
                  California, Florida, Carolinas, TN/KY, Ohio, New York, and
                  Chicago.
                </p>
                <span className="card-link">View Regions</span>
              </div>
            </Link>{" "}
            <Link href="/tracks/directory#drivers" className="card">
              <Img
                fallback="/chevy-racing.png"
                className="card-img"
                src="/five-drivers.png"
                alt="Drivers"
              />
              <div className="card-body">
                <span className="card-tag tag-green">Drivers</span>
                <h3>Drivers Directory</h3>
                <p>
                  NASCAR drivers, NCM Motorsports Park driving club, Hagerty
                  Drivers Club, Jesse Iwuji, Corvette Racing, and AAA touring
                  drivers — plus community-submitted driver listings.
                </p>
                <span className="card-link">View Drivers</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="bar orange"></div>
            <h2>Featured Tracks Gallery</h2>
          </div>
          <div className="img-grid">
            <Img src="/ncm-park.png" alt="NCM Motorsports Park" />{" "}
            <Img src="/chevy-racing.png" alt="Corvette Racing" />{" "}
            <Img hideOnError src="/driving-fast.png" alt="Track Day" />{" "}
            <Img hideOnError src="/five-drivers.png" alt="Drivers" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar purple"></div>
            <h2>Must-Visit ZR1 Tracks</h2>
          </div>
          <div className="card-grid">
            <Link href="/tracks/featured#tennessee-kentucky" className="card">
              <Img
                className="card-img"
                src="/ncm-park.png"
                alt="NCM Motorsports Park"
              />
              <div className="card-body">
                <span className="card-tag tag-green">Bowling Green, KY</span>
                <h3>NCM Motorsports Park</h3>
                <p>
                  The definitive ZR1 destination — 3.15-mile road course next to
                  the National Corvette Museum. HPDE, Driving Club, and the
                  Performance Build Center where you can watch your LT7
                  engineassembled.
                </p>
                <span className="card-link">View Region →</span>
              </div>
            </Link>{" "}
            <Link href="/tracks/featured#california" className="card">
              <Img
                fallback="/chevy-racing.png"
                className="card-img"
                src="/images/speed-records-hero.png"
                alt="Laguna Seca"
              />
              <div className="card-body">
                <span className="card-tag tag-blue">Monterey, CA</span>
                <h3>WeatherTech Laguna Seca</h3>
                <p>
                  2.238-mile road course with the iconic Corkscrew. b HPDE and
                  club community — a bucket-list ZR1 track day venue with
                  spectacular scenery.
                </p>
                <span className="card-link">View Region →</span>
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
                <span className="card-tag tag-orange">Watkins Glen, NY</span>
                <h3>Watkins Glen International</h3>
                <p>
                  3.4-mile natural terrain road course in the Finger Lakes.
                  NASCAR Cup and IMSA weekends plus open HPDE days — a landmark
                  of American road racing history.
                </p>
                <span className="card-link">View Region →</span>
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
                <span className="card-tag tag-purple">Lexington, OH</span>
                <h3>Mid-Ohio Sports Car Course</h3>
                <p>
                  2.258-mile technical road course — the Midwest's premier ZR1
                  HPDE venue. b club-racing community and accessible from the
                  Chicago, Cleveland, and Columbus metro areas.
                </p>
                <span className="card-link">View Region →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="bar green"></div>
            <h2>Track Partners</h2>
          </div>
          <div className="three-col">
            <Link href="/tracks/featured#tennessee-kentucky" className="card">
              <Img className="card-img" src="/ncm-park.png" alt="NCM" />
              <div className="card-body">
                <span className="card-tag tag-green">Museum &amp; Track</span>
                <h3>National Corvette Museum</h3>
                <p>
                  Bowling Green, KY — the home of Corvette heritage and NCM
                  Motorsports Park HPDE.
                </p>
                <span className="card-link">View →</span>
              </div>
            </Link>
            <div className="card">
              <Img className="card-img" src="/driving-fast.png" alt="Hagerty" />
              <div className="card-body">
                <span className="card-tag tag-orange">Club</span>
                <h3>Hagerty Drivers Club</h3>
                <p>
                  Collector-car club with tour events, road trips, and
                  enthusiast media for ZR1 and ZR1X owners nationwide.
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
                <span className="card-tag tag-blue">Factory Racing</span>
                <h3>Corvette Racing</h3>
                <p>
                  Follow the factory GT program — C8.R and Z06 GT3.R competing
                  in IMSA and SRO worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
