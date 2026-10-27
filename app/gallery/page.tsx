import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import Img from "@/components/Img";

export const metadata: Metadata = pageMeta(
  "Gallery",
  "Generation photo albums from C3 through C8 ZR1X, Corvette Racing factory race cars, the Corvette Index, and the Owners Gallery where members share their…",
);

export default function Page() {
  return (
    <>
      <div className="breadcrumb">
        <Link href="/">Home</Link> › <span>Gallery</span>
      </div>

      <div className="page-hero">
        <Img
          className="hero-bg"
          src="/chevy-racing.png"
          alt="Corvette Gallery"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-tag">Photos · Racing · Owners</div>
          <h1>Photo Gallery</h1>
          <p>
            Generation photo albums from C3 through C8 ZR1X, Corvette Racing
            factory race cars, the Corvette Index, and the Owners Gallery where
            members share their builds.
          </p>
          <div className="hero-ctas">
            <Link href="/gallery/photos" className="btn btn-primary">
              Browse Photo Albums
            </Link>{" "}
            <Link href="/gallery/owners" className="btn btn-outline">
              Owners Gallery
            </Link>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar"></div>
            <h2>Gallery Sections</h2>
          </div>
          <div className="card-grid card-grid-lg">
            <Link href="/gallery/photos" className="card">
              <Img className="card-img" src="/c8-zr1.png" alt="ZR1 Photos" />
              <div className="card-body">
                <span className="card-tag tag-blue">Photo Albums</span>
                <h3>Generation Photo Albums</h3>
                <p>
                  C3 through C8 ZR1X — curated photo albums for every ZR1
                  generation plus the Cool Jimmy personal collection and C8
                  Stripes wide-body album.
                </p>
                <span className="card-link">View All Photos</span>
              </div>
            </Link>{" "}
            <Link href="/gallery/racing" className="card">
              <Img
                className="card-img"
                src="/chevy-racing.png"
                alt="Corvette Racing"
              />
              <div className="card-body">
                <span className="card-tag tag-orange">Corvette Racing</span>
                <h3>Factory Race Cars</h3>
                <p>
                  C4 GTP through Z06 GT3.R — the complete Corvette factory GT
                  racing history in photos. IMSA, WEC, GTLM, GTD, and customer
                  GT3 programs.
                </p>
                <span className="card-link">View Racing Gallery</span>
              </div>
            </Link>{" "}
            <Link href="/gallery/owners" className="card">
              <Img
                fallback="/c8-zr1x.png"
                className="card-img"
                src="/c8-zr1x-corner.png"
                alt="Owners Gallery"
              />
              <div className="card-body">
                <span className="card-tag tag-green">Owners</span>
                <h3>Owners Gallery — My Garage</h3>
                <p>
                  Member-submitted albums from C1 through ZR1X owners. Browse
                  builds, submit your own ZR1, and connect with the community
                  through the gallery.
                </p>
                <span className="card-link">View Owners Gallery</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="bar purple"></div>
            <h2>Featured Images</h2>
          </div>
          <div className="img-grid">
            <Img src="/c8-zr1.png" alt="C8 ZR1" />{" "}
            <Img src="/c8-zr1x.png" alt="C8 ZR1X" />{" "}
            <Img hideOnError src="/c6-zr1.png" alt="C6 ZR1" />{" "}
            <Img hideOnError src="/c7-zr1.png" alt="C7 ZR1" />{" "}
            <Img src="/chevy-racing.png" alt="Corvette Racing" />{" "}
            <Img
              hideOnError
              src="/assets/stars-stripes-c8-zr1-2026.png"
              alt="Stars and Stripes ZR1"
            />{" "}
            <Img hideOnError src="/c8-quail.png" alt="Quail Edition" />{" "}
            <Img
              hideOnError
              src="/c8zr1x-ztk-asymetric-black.png"
              alt="Asymmetrical Edition"
            />{" "}
            <Img src="/engine-lt7-c8.png" alt="LT7 engine" />{" "}
            <Img hideOnError src="/aerodynamics.png" alt="Aerodynamics" />{" "}
            <Img hideOnError src="/images/ZR1Xgreen.png" alt="ZR1X Green" />{" "}
            <Img hideOnError src="/quail-front.png" alt="Quail Front" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar orange"></div>
            <h2>Quick Album Access</h2>
          </div>
          <div className="two-col">
            <div className="link-section">
              <h3>Generation Albums</h3>
              <div className="link-list">
                <Link href="/gallery/photos#c3" className="link-item">
                  <Img
                    hideOnError
                    className="li-img"
                    src="/engine-lt1-c3.png"
                    alt="C3"
                  />
                  <div className="li-text">
                    <span className="li-label">C3 ZR1 Photo Album</span>
                    <span className="li-sub">1970–1972</span>
                  </div>
                </Link>{" "}
                <Link href="/gallery/photos#c4" className="link-item">
                  <Img
                    hideOnError
                    className="li-img"
                    src="/engine-lt5-c4.png"
                    alt="C4"
                  />
                  <div className="li-text">
                    <span className="li-label">C4 ZR-1 Photo Album</span>
                    <span className="li-sub">1990–1995</span>
                  </div>
                </Link>{" "}
                <Link href="/gallery/photos#c6" className="link-item">
                  <Img className="li-img" src="/c6-zr1.png" alt="C6" />
                  <div className="li-text">
                    <span className="li-label">C6 ZR1 Photo Album</span>
                    <span className="li-sub">2009–2013</span>
                  </div>
                </Link>{" "}
                <Link href="/gallery/photos#c7" className="link-item">
                  <Img className="li-img" src="/c7-zr1.png" alt="C7" />
                  <div className="li-text">
                    <span className="li-label">C7 ZR1 Photo Album</span>
                    <span className="li-sub">2019</span>
                  </div>
                </Link>{" "}
                <Link href="/gallery/photos#c8" className="link-item">
                  <Img className="li-img" src="/c8-zr1.png" alt="C8" />
                  <div className="li-text">
                    <span className="li-label">C8 ZR1 Photo Album</span>
                    <span className="li-sub">2025–2027</span>
                  </div>
                </Link>{" "}
                <Link href="/gallery/photos#zr1x" className="link-item">
                  <Img className="li-img" src="/c8-zr1x.png" alt="ZR1X" />
                  <div className="li-text">
                    <span className="li-label">C8 ZR1X Photo Album</span>
                    <span className="li-sub">2026+</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="link-section">
              <h3 className="orange">Racing &amp; Owners</h3>
              <div className="link-list">
                <Link href="/gallery/racing" className="link-item">
                  <Img
                    className="li-img"
                    src="/chevy-racing.png"
                    alt="Racing"
                  />
                  <div className="li-text">
                    <span className="li-label">Corvette Racing Gallery</span>
                    <span className="li-sub">C4 GTP → Z06 GT3.R</span>
                  </div>
                </Link>{" "}
                <Link href="/gallery/owners" className="link-item">
                  <div className="li-icon">🏠</div>
                  <div className="li-text">
                    <span className="li-label">My Garage</span>
                    <span className="li-sub">Owner albums C1–ZR1X</span>
                  </div>
                </Link>{" "}
                <Link href="/gallery/owners#submit" className="link-item">
                  <div className="li-icon">📤</div>
                  <div className="li-text">
                    <span className="li-label">Submit Your Photos</span>
                    <span className="li-sub">Share your ZR1 build</span>
                  </div>
                </Link>{" "}
                <Link href="/gallery/photos#cool-jimmy" className="link-item">
                  <Img
                    hideOnError
                    className="li-img"
                    src="/images/cool-jimmy-logo.png"
                    alt="Cool Jimmy"
                  />
                  <div className="li-text">
                    <span className="li-label">Cool Jimmy Album</span>
                    <span className="li-sub">Best 2025–26 collection</span>
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
