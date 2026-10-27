import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import Img from "@/components/Img";
import PageScope from "@/components/PageScope";

export const metadata: Metadata = pageMeta(
  "Site Map",
  "Every page on MyZR1 - MyZR1X — organized by section for easy navigation. Use this as your complete reference guide to the site.",
);

const css = `
.table-container {
        overflow-x: auto;
      }
      .table-640 {
        max-width: 640px;
      }
`;

export default function Page() {
  return (
    <PageScope styles={css}>
      <div className="breadcrumb">
        <Link href="/">Home</Link> › <span>Site Map</span>
      </div>

      <div className="page-hero">
        <Img className="hero-bg" src="/c8-zr1.png" alt="Site Map" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-tag">Complete Navigation</div>
          <h1>Site Map</h1>
          <p>
            Every page on MyZR1 - MyZR1X — organized by section for easy
            navigation. Use this as your complete reference guide to the site.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="sitemap-grid">
            <div className="sitemap-box">
              <h3>🏠 Home &amp; Core</h3>
              <ul>
                <li>
                  <Link href="/">Home — MyZR1 - MyZR1X</Link>
                </li>
                <li>
                  <Link href="/zr1">ZR1 Collection Index</Link>
                </li>
                <li>
                  <Link href="/rarity">Rarity Guide</Link>
                </li>
                <li>
                  <Link href="/engine">Engine &amp; Tech Hub</Link>
                </li>
                <li>
                  <Link href="/body">Body — Exterior &amp; Interior</Link>
                </li>
                <li>
                  <Link href="/service">Service &amp; Maintenance</Link>
                </li>
                <li>
                  <Link href="/gallery">Photo Gallery</Link>
                </li>
                <li>
                  <Link href="/mods">Mods 🛠️</Link>
                </li>
                <li>
                  <Link href="/tracks">Race Tracks USA</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/glossary">
                    Glossary — Engine Terminology (Z07, ZTK, ZR1 &amp; ZR1X)
                  </Link>
                </li>
                <li>
                  <Link href="/sitemap">Site Map (this page)</Link>
                </li>
              </ul>
            </div>
            <div className="sitemap-box">
              <h3>🏎️ ZR1 Generations</h3>
              <ul>
                <li>
                  <Link href="/zr1">ZR1 Collection Overview</Link>
                </li>
                <li>
                  <Link href="/zr1/c3">C3 ZR1 (1970–1972)</Link>
                </li>
                <li>
                  <Link href="/zr1/c4">C4 ZR-1 (1990–1995)</Link>
                </li>
                <li>
                  <Link href="/zr1/c6">C6 ZR1 (2009–2013)</Link>
                </li>
                <li>
                  <Link href="/zr1/c7">C7 ZR1 (2019)</Link>
                </li>
                <li>
                  <Link href="/zr1/c8">C8 ZR1 (2025–2027)</Link>
                </li>
                <li>
                  <Link href="/zr1/zr1x">C8 ZR1X (2026+ Hypercar)</Link>
                </li>
                <li>
                  <Link href="/zr1/timeline">ZR1 Timeline 1970–2030</Link>
                </li>
              </ul>
            </div>
            <div className="sitemap-box">
              <h3>💎 Rarity Guide</h3>
              <ul>
                <li>
                  <Link href="/rarity">Rarity Guide Hub</Link>
                </li>
                <li>
                  <Link href="/rarity/accolades">Acclaims &amp; Accolades</Link>
                </li>
                <li>
                  <Link href="/rarity/generations">Generation Breakdown</Link>
                </li>
                <li>
                  <Link href="/rarity/collector">
                    Collector Guide &amp; Scores
                  </Link>
                </li>
                <li>
                  <Link href="/rarity/market">
                    Market Value &amp; Forecasts
                  </Link>
                </li>
                <li>
                  <Link href="/rarity/community">Clubs &amp; Communities</Link>
                </li>
              </ul>
            </div>
            <div className="sitemap-box">
              <h3>🔥 Engine &amp; Tech</h3>
              <ul>
                <li>
                  <Link href="/engine">Engine Hub</Link>
                </li>
                <li>
                  <Link href="/engine/lt7">LT7 engineTwin-Turbo V8</Link>
                </li>
                <li>
                  <Link href="/engine/lt7#peak">LT7 Peak Efficiency</Link>
                </li>
                <li>
                  <Link href="/engine/valve-timing">
                    LT7 engineVariable Valve Timing (VVT)
                  </Link>
                </li>
                <li>
                  <Link href="/engine/turbos">
                    Turbos, Exhaust &amp; Cooling
                  </Link>
                </li>
                <li>
                  <Link href="/engine/drivetrain">
                    Drivetrain — DCT &amp; E-AWD
                  </Link>
                </li>
                <li>
                  <Link href="/engine/driving">Driving Dynamics &amp; PTM</Link>
                </li>
                <li>
                  <Link href="/engine/drivemodes">
                    Drive Modes &amp; Z-Mode
                  </Link>
                </li>
              </ul>
            </div>
            <div className="sitemap-box">
              <h3>🚗 Body</h3>
              <ul>
                <li>
                  <Link href="/body">Body Hub</Link>
                </li>
                <li>
                  <Link href="/body/exterior">
                    Exterior, Aero &amp; Chassis
                  </Link>
                </li>
                <li>
                  <Link href="/body/interior">Interior &amp; Cockpit</Link>
                </li>
              </ul>
            </div>
            <div className="sitemap-box">
              <h3>🔧 Service &amp; Maintenance</h3>
              <ul>
                <li>
                  <Link href="/service">Service Hub</Link>
                </li>
                <li>
                  <Link href="/service/engine">
                    Engine Service — Fluids &amp; DCT
                  </Link>
                </li>
                <li>
                  <Link href="/service/body-care">
                    Body Care &amp; Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="/service/owner">Owner Guides &amp; Warranty</Link>
                </li>
              </ul>
            </div>
            <div className="sitemap-box">
              <h3>📸 Gallery</h3>
              <ul>
                <li>
                  <Link href="/gallery">Gallery Hub</Link>
                </li>
                <li>
                  <Link href="/gallery/photos">Photo Albums (C3–ZR1X)</Link>
                </li>
                <li>
                  <Link href="/gallery/racing">Corvette Racing Gallery</Link>
                </li>
                <li>
                  <Link href="/gallery/owners">Owners Gallery — My Garage</Link>
                </li>
              </ul>
            </div>
            <div className="sitemap-box">
              <h3>🛠️ Mods</h3>
              <ul>
                <li>
                  <Link href="/mods">Mods Hub</Link>
                </li>
                <li>
                  <Link href="/mods/zr1">ZR1 Modifications</Link>
                </li>
                <li>
                  <Link href="/mods/zr1x">ZR1X Modifications</Link>
                </li>
              </ul>
            </div>
            <div className="sitemap-box">
              <h3>🏁 Tracks</h3>
              <ul>
                <li>
                  <Link href="/tracks">Tracks Hub</Link>
                </li>
                <li>
                  <Link href="/tracks/nurburgring">
                    Nürburgring Times &amp; Rivals
                  </Link>
                </li>
                <li>
                  <Link href="/tracks/directory">
                    USA Directory — All 50 States
                  </Link>
                </li>
                <li>
                  <Link href="/tracks/featured">Featured Regional Maps</Link>
                </li>
                <li>
                  <Link href="/tracks/featured#tennessee-kentucky">
                    Tennessee &amp; Kentucky (NCM)
                  </Link>
                </li>
                <li>
                  <Link href="/tracks/featured#california">California</Link>
                </li>
                <li>
                  <Link href="/tracks/featured#florida">Florida</Link>
                </li>
                <li>
                  <Link href="/tracks/featured#north-carolina">
                    North Carolina
                  </Link>
                </li>
                <li>
                  <Link href="/tracks/featured#south-carolina">
                    South Carolina
                  </Link>
                </li>
                <li>
                  <Link href="/tracks/featured#ohio">Ohio</Link>
                </li>
                <li>
                  <Link href="/tracks/featured#new-york">New York</Link>
                </li>
                <li>
                  <Link href="/tracks/featured#chicago">Chicago Metro</Link>
                </li>
              </ul>
            </div>
            <div className="sitemap-box">
              <h3>ℹ️ About &amp; Docs</h3>
              <ul>
                <li>
                  <Link href="/about">About Us — Cool Jimmy</Link>
                </li>
                <li>
                  <Link href="/glossary">Glossary, Terms Defined</Link>
                </li>
                <li>
                  <Link href="/about#sign-in">Sign In</Link>
                </li>
                <li>
                  <Link href="/about#sign-up">Sign Up</Link>
                </li>
                <li>
                  <Link href="/about/docs">Docs &amp; Downloads</Link>
                </li>
                <li>
                  <a href="/CoolJimmy.pdf" download="">
                    Download GM PDF
                  </a>
                </li>
              </ul>
            </div>
            <div className="sitemap-box">
              <h3>📋 Legal</h3>
              <ul>
                <li>
                  <Link href="/terms">Terms of Use</Link>
                </li>
                <li>
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/content-policy">Content Policy</Link>
                </li>
                <li>
                  <Link href="/cookie-policy">Cookie Policy</Link>
                </li>
              </ul>
            </div>
            <div className="sitemap-box">
              <h3>🔗 External Links</h3>
              <ul>
                <li>
                  <a
                    href="https://www.corvettemuseum.org/"
                    target="_blank"
                    rel="noopener"
                  >
                    National Corvette Museum
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.motorsportspark.org/"
                    target="_blank"
                    rel="noopener"
                  >
                    NCM Motorsports Park
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.chevrolet.com/performance/corvette"
                    target="_blank"
                    rel="noopener"
                  >
                    Chevrolet Corvette (GM)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.chevrolet.com/motorsports"
                    target="_blank"
                    rel="noopener"
                  >
                    Corvette Racing (GM)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100091998258369"
                    target="_blank"
                    rel="noopener"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/javakian2025"
                    target="_blank"
                    rel="noopener"
                  >
                    X / Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/optical-automation/posts/?feedView=all"
                    target="_blank"
                    rel="noopener"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.Github.com/JamesAvakian622"
                    target="_blank"
                    rel="noopener"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="bar purple"></div>
            <h2>Page Count Summary</h2>
          </div>
          <div className="table-container">
            <table className="spec-table table-640">
              <thead>
                <tr>
                  <th>Section</th>
                  <th>Pages</th>
                  <th>Directory</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Home, Glossary &amp; Sitemap</td>
                  <td>3</td>
                  <td>text_documents/</td>
                </tr>
                <tr>
                  <td>ZR1 Generations</td>
                  <td>8</td>
                  <td>text_documents/zr1/</td>
                </tr>
                <tr>
                  <td>Rarity Guide</td>
                  <td>6</td>
                  <td>text_documents/rarity/</td>
                </tr>
                <tr>
                  <td>Engine &amp; Tech</td>
                  <td>5</td>
                  <td>text_documents/engine/</td>
                </tr>
                <tr>
                  <td>Body</td>
                  <td>3</td>
                  <td>text_documents/body/</td>
                </tr>
                <tr>
                  <td>Service &amp; Maintenance</td>
                  <td>4</td>
                  <td>text_documents/service/</td>
                </tr>
                <tr>
                  <td>Gallery</td>
                  <td>4</td>
                  <td>text_documents/gallery/</td>
                </tr>
                <tr>
                  <td>Mods</td>
                  <td>3</td>
                  <td>text_documents/mods/</td>
                </tr>
                <tr>
                  <td>Tracks</td>
                  <td>3</td>
                  <td>text_documents/tracks/</td>
                </tr>
                <tr>
                  <td>About &amp; Docs</td>
                  <td>2</td>
                  <td>text_documents/about/</td>
                </tr>
                <tr>
                  <td>Sitemap</td>
                  <td>1</td>
                  <td>text_documents/sitemap/</td>
                </tr>
                <tr>
                  <td>
                    <b>Total</b>
                  </td>
                  <td>
                    <b>42 pages</b>
                  </td>
                  <td>+ shared.css</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </PageScope>
  );
}
