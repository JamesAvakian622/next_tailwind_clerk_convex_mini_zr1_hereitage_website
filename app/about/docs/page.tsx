import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import Img from "@/components/Img";
import PageScope from "@/components/PageScope";

export const metadata: Metadata = pageMeta(
  "Docs & Downloads — MyZR1",
  "White papers, owner's resources, ZR1 and ZR1X technical documents, media assets, and the GM PDF reference guide — all in one place.",
);

const css = `
.muted-text-mb14 {
        color: var(--muted);
        line-height: 1.8;
        margin-bottom: 14px;
      }
      .muted-text-mb18 {
        color: var(--muted);
        line-height: 1.8;
        margin-bottom: 18px;
      }
      .flex-btn-gap8 {
        display: inline-flex;
        align-items: center;
        gap: 8px;
      }
      .muted-text-small-mt16 {
        color: var(--muted);
        font-size: 0.82rem;
        margin-top: 16px;
      }
`;

export default function Page() {
  return (
    <PageScope styles={css}>
      <div className="breadcrumb">
        <Link href="/">Home</Link> › <Link href="/about">About</Link> ›{" "}
        <span>Docs &amp; Downloads</span>
      </div>

      <div className="page-hero">
        <Img
          fallback="/c8-zr1.png"
          className="hero-bg"
          src="/assets/c8-zr1-2026.png"
          alt="Docs and Downloads"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-tag">Documents · Manuals · Assets</div>
          <h1>Docs &amp; Downloads</h1>
          <p>
            White papers, owner's resources, ZR1 and ZR1X technical documents,
            media assets, and the GM PDF reference guide — all in one place.
          </p>
          <div className="hero-ctas">
            <a href="#gm-pdf" className="btn btn-primary">
              GM PDF Guide
            </a>
            <Link href="/about" className="btn btn-outline">
              About Us
            </Link>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar"></div>
            <h2>Available Documents</h2>
          </div>
          <div className="card-grid card-grid-lg">
            <a href="/CoolJimmy.pdf" download="" className="card">
              <Img
                fallback="/c8-zr1.png"
                className="card-img"
                src="/assets/ZR1%20Speed%20Phenom%202026.ppt.png"
                alt="GM PDF"
              />
              <div className="card-body">
                <span className="card-tag tag-blue">PDF Download</span>
                <h3>GM PDF — ZR1 Reference Guide</h3>
                <p>
                  The CoolJimmy GM PDF reference document — comprehensive ZR1
                  specifications, engineering highlights, and performance data
                  in a single downloadable PDF.
                </p>
                <span className="card-link">⬇ Download PDF</span>
              </div>
            </a>
            <div className="card">
              <Img className="card-img" src="/c8-zr1.png" alt="ZR1 Downloads" />
              <div className="card-body">
                <span className="card-tag tag-orange">ZR1 Resources</span>
                <h3>ZR1 Downloads</h3>
                <p>
                  Manuals, spec sheets, service guides, and media assets for the
                  C8 ZR1 — curated for owners and enthusiasts needing the most
                  accurate factory reference material.
                </p>
                <span className="card-link">Browse ZR1 Downloads</span>
              </div>
            </div>
            <div className="card">
              <Img
                className="card-img"
                src="/c8-zr1x.png"
                alt="ZR1X Downloads"
              />
              <div className="card-body">
                <span className="card-tag tag-purple">ZR1X Resources</span>
                <h3>ZR1X Downloads</h3>
                <p>
                  Hybrid ZR1X technical resources, E-AWD system documentation,
                  battery guides, and eMotor calibration references for ZR1X
                  owners.
                </p>
                <span className="card-link">Browse ZR1X Downloads</span>
              </div>
            </div>
            <div className="card">
              <Img
                fallback="/CoolJimmy.png"
                className="card-img"
                src="/opauto.png"
                alt="My Corvette Series"
              />
              <div className="card-body">
                <span className="card-tag tag-green">White Paper</span>
                <h3>My Corvette Series Websites</h3>
                <p>
                  The official white paper describing the complete CoolJimmy "My
                  Corvette" website series — product scope, mission, and the
                  technology platform behind MyZR1 - MyZR1X.
                </p>
                <span className="card-link">View White Paper</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gm-pdf" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="bar orange"></div>
            <h2>GM PDF Reference</h2>
          </div>
          <div className="feature-row">
            <div className="feature-img">
              <Img
                fallback="/c8-zr1.png"
                src="/assets/ZR1%20Speed%20Phenom%202026.ppt.png"
                alt="ZR1 Speed Phenom"
              />
            </div>
            <div className="feature-text">
              <h3>ZR1 Speed Phenom 2026</h3>
              <p className="muted-text-mb14">
                The CoolJimmy GM PDF is a curated reference document covering
                the 2026 ZR1 and ZR1X platforms. It includes key specifications,
                engineering highlights, performance benchmarks, and special
                edition details — formatted for both on-screen reading and
                printing.
              </p>
              <p className="muted-text-mb18">
                Available as a free download — no account required. Right-click
                and "Save As" or use the download button below.
              </p>
              <a
                href="/CoolJimmy.pdf"
                download="CoolJimmy-ZR1-Reference.pdf"
                className="btn btn-primary flex-btn-gap8"
              >
                ⬇ Download GM PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar purple"></div>
            <h2>Media &amp; Image Assets</h2>
          </div>
          <div className="img-grid">
            <Img hideOnError src="/assets/c8-zr1-2026.png" alt="C8 ZR1 2026" />{" "}
            <Img src="/engine-lt7-c8.png" alt="LT7 engine" />{" "}
            <Img src="/c8-zr1x.png" alt="C8 ZR1X" />{" "}
            <Img
              hideOnError
              src="/assets/stars-stripes-c8-zr1-2026.png"
              alt="Stars and Stripes"
            />{" "}
            <Img src="/chevy-racing.png" alt="Corvette Racing" />{" "}
            <Img hideOnError src="/aerodynamics.png" alt="Aerodynamics" />
          </div>
          <p className="muted-text-small-mt16">
            Images shown are reference assets from the MyZR1 - MyZR1X media
            library. All Chevrolet Corvette images are property of General
            Motors — used here for informational and enthusiast reference
            purposes.
          </p>
        </div>
      </section>
    </PageScope>
  );
}
