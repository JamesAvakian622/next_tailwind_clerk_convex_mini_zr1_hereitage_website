import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import Img from "@/components/Img";

export const metadata: Metadata = pageMeta(
  "Corvette Racing Gallery — MyZR1",
  "Six decades of factory GT racing — from the C4 GTP prototype through the C8.R and Z06 GT3.R. Chevrolet's racing program has won Le Mans class victories…",
);

export default function Page() {
  return (
    <>
      <div className="breadcrumb">
        <Link href="/">Home</Link> › <Link href="/gallery">Gallery</Link> ›{" "}
        <span>Corvette Racing</span>
      </div>

      <div className="page-hero">
        <Img
          className="hero-bg"
          src="/chevy-racing.png"
          alt="Corvette Racing"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-tag">IMSA · WEC · GTLM · GT3</div>
          <h1>Corvette Racing</h1>
          <p>
            Six decades of factory GT racing — from the C4 GTP prototype through
            the C8.R and Z06 GT3.R. Chevrolet's racing program has won Le Mans
            class victories, IMSA championships, and cemented Corvette's place
            in endurance racing history.
          </p>
          <div className="hero-ctas">
            <Link href="/gallery/photos" className="btn btn-primary">
              ← ZR1 Photos
            </Link>
            <Link href="/gallery/owners" className="btn btn-outline">
              Owners Gallery
            </Link>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar orange"></div>
            <h2>Factory Race Cars</h2>
          </div>
          <div className="card-grid card-grid-lg">
            <div className="card">
              <Img className="card-img" src="/chevy-racing.png" alt="C4 GTP" />
              <div className="card-body">
                <span className="card-tag tag-orange">IMSA Prototype</span>
                <h3>C4 GTP</h3>
                <p>
                  The C4-based GTP prototype that competed in IMSA's top
                  prototype class in the late 1980s and early 1990s — a direct
                  descendant of the C4 Corvette's platform.
                </p>
              </div>
            </div>
            <div className="card">
              <Img className="card-img" src="/chevy-racing.png" alt="C5-R" />
              <div className="card-body">
                <span className="card-tag tag-blue">Factory GT</span>
                <h3>C5-R</h3>
                <p>
                  The C5-R launched Corvette Racing's modern era, winning its
                  class at Le Mans multiple times in the GT1 category.
                  LS6-powered and built by Pratt &amp; Miller — a landmark in
                  American GT racing.
                </p>
              </div>
            </div>
            <div className="card">
              <Img className="card-img" src="/chevy-racing.png" alt="C6.R" />
              <div className="card-body">
                <span className="card-tag tag-green">GT1 / GT2</span>
                <h3>C6.R</h3>
                <p>
                  The C6.R competed in both GT1 and GT2/GTLM categories,
                  becoming one of the most successful factory GT racers of its
                  era with multiple Le Mans and ALMS titles over its long
                  career.
                </p>
              </div>
            </div>
            <div className="card">
              <Img className="card-img" src="/chevy-racing.png" alt="C7.R" />
              <div className="card-body">
                <span className="card-tag tag-purple">GTLM Endurance</span>
                <h3>C7.R</h3>
                <p>
                  The C7.R continued Corvette Racing's dominance in IMSA GTLM,
                  winning multiple manufacturers' and drivers' championships.
                  Based on the C7 Stingray with a race-spec LT1 engine variant.
                </p>
              </div>
            </div>
            <div className="card">
              <Img className="card-img" src="/chevy-racing.png" alt="C8.R" />
              <div className="card-body">
                <span className="card-tag tag-orange">Mid-Engine GTD</span>
                <h3>C8.R</h3>
                <p>
                  The mid-engine transition brought a completely new C8.R — now
                  competing in GTD class. The 5.5L flat-plane V8 in race spec
                  form produces a screaming sound note that was immediately
                  iconic.
                </p>
              </div>
            </div>
            <div className="card">
              <Img
                fallback="/chevy-racing.png"
                className="card-img"
                src="/five-drivers.png"
                alt="Z06 GT3.R"
              />
              <div className="card-body">
                <span className="card-tag tag-blue">Customer GT3</span>
                <h3>Z06 GT3.R</h3>
                <p>
                  The GT3.R brings Corvette racing to customer teams worldwide —
                  FIA GT3 homologated, available for endurance and sprint racing
                  in IMSA GTD, SRO, and regional GT3 championships globally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="bar purple"></div>
            <h2>Racing Gallery</h2>
          </div>
          <div className="img-grid">
            <Img src="/chevy-racing.png" alt="Corvette Racing 1" />{" "}
            <Img hideOnError src="/five-drivers.png" alt="Corvette Drivers" />{" "}
            <Img hideOnError src="/drive.png" alt="Racing Action" />{" "}
            <Img hideOnError src="/driving-fast.png" alt="Fast Driving" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar green"></div>
            <h2>Racing Heritage Highlights</h2>
          </div>
          <table className="spec-table">
            <thead>
              <tr>
                <th>Race Car</th>
                <th>Era</th>
                <th>Series</th>
                <th>Key Achievement</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>C4 GTP</td>
                <td>1985–1993</td>
                <td>IMSA GTP</td>
                <td>Factory prototype program, front-engine era</td>
              </tr>
              <tr>
                <td>C5-R</td>
                <td>1999–2004</td>
                <td>ALMS GT1</td>
                <td>Multiple Le Mans GT1 class victories</td>
              </tr>
              <tr>
                <td>C6.R</td>
                <td>2005–2013</td>
                <td>ALMS GT1/2</td>
                <td>Most successful Corvette racer; multiple Le Mans wins</td>
              </tr>
              <tr>
                <td>C7.R</td>
                <td>2014–2019</td>
                <td>IMSA GTLM</td>
                <td>Multiple IMSA manufacturers' championships</td>
              </tr>
              <tr>
                <td>C8.R</td>
                <td>2020–present</td>
                <td>IMSA GTD Pro</td>
                <td>First mid-engine factory Corvette race car</td>
              </tr>
              <tr>
                <td>Z06 GT3.R</td>
                <td>2024–present</td>
                <td>IMSA GTD / SRO</td>
                <td>Customer GT3 program — worldwide availability</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
