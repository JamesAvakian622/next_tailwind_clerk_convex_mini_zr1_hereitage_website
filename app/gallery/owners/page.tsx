import type { Metadata } from "next";
import Link from "next/link";
import Img from "@/components/Img";
import PageScope from "@/components/PageScope";

export const metadata: Metadata = { title: "Owners Gallery — MyZR1" };

const css = `
.muted-text-mb16 {
        color: var(--muted);
        line-height: 1.8;
        margin-bottom: 16px;
      }
      .ctas-flex-start {
        justify-content: flex-start;
      }
`;

export default function Page() {
  return (
    <PageScope styles={css}>
      <div className="breadcrumb">
        <Link href="/">Home</Link> › <Link href="/gallery">Gallery</Link> ›{" "}
        <span>Owners Gallery</span>
      </div>

      <div className="page-hero">
        <Img
          fallback="/c8-zr1x.png"
          className="hero-bg"
          src="/c8-zr1x-corner.png"
          alt="Owners Gallery"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-tag">My Garage · C1 – ZR1X</div>
          <h1>Owners Gallery</h1>
          <p>
            Browse member-submitted Corvette builds from C1 through ZR1X. Sign
            in to manage your own garage, upload photos, and share your build
            with the community.
          </p>
          <div className="hero-ctas">
            <a href="#submit" className="btn btn-primary">
              Submit Your Photos
            </a>{" "}
            <Link href="/about" className="btn btn-outline">
              Sign In / Sign Up
            </Link>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar green"></div>
            <h2>Browse by Generation</h2>
            <p>Member albums organized by Corvette generation</p>
          </div>
          <div className="card-grid">
            <Link href="/about" className="card">
              <div className="card-img-placeholder">🏎️ C1</div>
              <div className="card-body">
                <span className="card-tag tag-blue">C1 Corvette</span>
                <h3>C1 Member Albums</h3>
                <p>
                  1953–1962 — The original Corvette. Member builds and
                  restoration projects.
                </p>
                <span className="card-link">Browse →</span>
              </div>
            </Link>{" "}
            <Link href="/about" className="card">
              <div className="card-img-placeholder">🏎️ C2</div>
              <div className="card-body">
                <span className="card-tag tag-blue">C2 Corvette</span>
                <h3>C2 Member Albums</h3>
                <p>
                  1963–1967 — The Sting Ray era. Split-window coupes and
                  roadsters.
                </p>
                <span className="card-link">Browse →</span>
              </div>
            </Link>{" "}
            <Link href="/about" className="card">
              <Img
                fallback="/c3-zr1.png"
                className="card-img"
                src="/engine-lt1-c3.png"
                alt="C3"
              />
              <div className="card-body">
                <span className="card-tag tag-blue">C3 ZR1</span>
                <h3>C3 ZR1 Member Albums</h3>
                <p>1968–1982 — Including the rare 1970–72 ZR1 package cars.</p>
                <span className="card-link">Browse →</span>
              </div>
            </Link>{" "}
            <Link href="/about" className="card">
              <Img
                fallback="/c4-zr1.png"
                className="card-img"
                src="/engine-lt5-c4.png"
                alt="C4"
              />
              <div className="card-body">
                <span className="card-tag tag-blue">C4 ZR-1</span>
                <h3>C4 ZR-1 Member Albums</h3>
                <p>
                  1984–1996 — Including the Lotus LT5-powered 1990–95 ZR1
                  builds.
                </p>
                <span className="card-link">Browse →</span>
              </div>
            </Link>{" "}
            <Link href="/about" className="card">
              <div className="card-img-placeholder">🏎️ C5</div>
              <div className="card-body">
                <span className="card-tag tag-blue">C5 Corvette</span>
                <h3>C5 Member Albums</h3>
                <p>
                  1997–2004 — Z06, hardtop, convertible, and coupe builds from
                  members.
                </p>
                <span className="card-link">Browse →</span>
              </div>
            </Link>{" "}
            <Link href="/about" className="card">
              <Img
                fallback="/c6-zr1.png"
                className="card-img"
                src="/engine-ls9-c6.png"
                alt="C6"
              />
              <div className="card-body">
                <span className="card-tag tag-blue">C6 ZR1</span>
                <h3>C6 ZR1 Member Albums</h3>
                <p>
                  2005–2013 — LS9-powered ZR1 and Z06 builds from the community.
                </p>
                <span className="card-link">Browse →</span>
              </div>
            </Link>{" "}
            <Link href="/about" className="card">
              <Img
                fallback="/engine-lt5-c7.png"
                className="card-img"
                src="/c7-zr1.png"
                alt="C7"
              />
              <div className="card-body">
                <span className="card-tag tag-blue">C7 ZR1</span>
                <h3>C7 ZR1 Member Albums</h3>
                <p>
                  2014–2019 — Including the rare single-year 2019 ZR1 builds.
                </p>
                <span className="card-link">Browse →</span>
              </div>
            </Link>{" "}
            <Link href="/about" className="card">
              <Img className="card-img" src="/c8-zr1.png" alt="C8 ZR1" />
              <div className="card-body">
                <span className="card-tag tag-green">C8 ZR1</span>
                <h3>C8 ZR1 Member Albums</h3>
                <p>
                  2020–2027 — Mid-engine era builds, ZR1, Z06, and Stingray from
                  community members.
                </p>
                <span className="card-link">Browse →</span>
              </div>
            </Link>{" "}
            <Link href="/about" className="card">
              <Img className="card-img" src="/c8-zr1x.png" alt="C8 ZR1X" />
              <div className="card-body">
                <span className="card-tag tag-purple">C8 ZR1X</span>
                <h3>C8 ZR1X Member Albums</h3>
                <p>
                  2026+ — ZR1X owners gallery — the most exclusive builds on the
                  platform.
                </p>
                <span className="card-link">Browse →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section id="submit" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="bar orange"></div>
            <h2>Submit Your Photos</h2>
          </div>
          <div className="two-col">
            <div>
              <p className="muted-text-mb16">
                Share your Corvette build with the MyZR1 - MyZR1X community.
                Whether it's a pristine original C3 ZR1, a heavily modified C8
                ZR1, or a freshly delivered ZR1X, we'd love to feature your car
                in the Owners Gallery.
              </p>
              <p className="muted-text-mb16">
                To submit photos you need to create a free account. Once signed
                in, you can create an album, add photos, add descriptions, and
                choose whether your album is public or private.
              </p>
              <div className="hero-ctas ctas-flex-start">
                <Link href="/about" className="btn btn-primary">
                  Create Account
                </Link>{" "}
                <Link href="/about" className="btn btn-outline">
                  Sign In
                </Link>
              </div>
            </div>
            <div>
              <div className="link-section">
                <h3>Submission Guidelines</h3>
                <div className="link-list">
                  <div className="link-item">
                    <div className="li-icon">📸</div>
                    <div className="li-text">
                      <span className="li-label">
                        High-resolution photos preferred
                      </span>
                      <span className="li-sub">
                        Minimum 1100px wide for gallery display
                      </span>
                    </div>
                  </div>
                  <div className="link-item">
                    <div className="li-icon">🚗</div>
                    <div className="li-text">
                      <span className="li-label">Your own car only</span>
                      <span className="li-sub">
                        Do not submit photos of vehicles you don't own
                      </span>
                    </div>
                  </div>
                  <div className="link-item">
                    <div className="li-icon">📋</div>
                    <div className="li-text">
                      <span className="li-label">Add a description</span>
                      <span className="li-sub">
                        Year, model, color, and notable modifications
                      </span>
                    </div>
                  </div>
                  <div className="link-item">
                    <div className="li-icon">✅</div>
                    <div className="li-text">
                      <span className="li-label">JPG or PNG format</span>
                      <span className="li-sub">
                        Up to 20MB per photo, 100 photos per album
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageScope>
  );
}
