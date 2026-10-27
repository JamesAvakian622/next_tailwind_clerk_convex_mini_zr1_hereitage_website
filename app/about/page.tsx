import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import Img from "@/components/Img";
import AccountSection from "@/components/AccountSection";

export const metadata: Metadata = pageMeta(
  "About Us",
  "An Optical Automation product by Cool Jimmy Software, celebrating the Chevrolet Corvette ZR1 heritage, connecting enthusiasts, and providing the most…",
);

export default function Page() {
  return (
    <>
      <div className="breadcrumb">
        <Link href="/">Home</Link> › <span>About Us</span>
      </div>

      <div className="page-hero">
        <Img
          className="hero-bg"
          src="/CoolJimmy.png"
          alt="Cool Jimmy"
          style={{ objectPosition: "top center" }}
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-tag">Optical Automation, LLC</div>
          <h1>About Us</h1>
          <br />
          <h1>MyZR1 - MyZR1X</h1>
          <p>
            An Optical Automation product by Cool Jimmy Software, celebrating
            the Chevrolet Corvette ZR1 heritage, connecting enthusiasts, and
            providing the most comprehensive ZR1 and ZR1X reference on the web.
          </p>
          <div className="hero-ctas">
            <Link href="/about/docs" className="btn btn-primary">
              Docs &amp; Downloads
            </Link>{" "}
            <Link href="/glossary" className="btn btn-outline">
              Glossary
            </Link>{" "}
            <Link href="/sitemap" className="btn btn-outline">
              Site Map
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
                <h2>About the Website</h2>
              </div>
              <p
                style={{
                  color: "var(--muted)",
                  lineHeight: "1.8",
                  marginBottom: "14px",
                }}
              >
                The MyZR1 - MyZR1X website is part of the "My Corvette" series
                by Cool Jimmy as a Corvette reference and image photo album. It
                contains client images, information, and YouTube videos relating
                to Chevrolet Corvette ZR1 and ZR1X cars.
              </p>
              <p
                style={{
                  color: "var(--muted)",
                  lineHeight: "1.8",
                  marginBottom: "14px",
                }}
              >
                We are dedicated to documenting the complete heritage as a means
                of celebrating the current models as "King of the Hill" — from
                the legendary C3 origins to the cutting-edge technology of the
                latest 2027 C8 ZR1 and ZR1X sports cars.
              </p>
              <p
                style={{
                  color: "var(--muted)",
                  lineHeight: "1.8",
                  marginBottom: "14px",
                }}
              >
                Our platform offers a specialized hub of Corvette information.
                From our Owners Gallery — both public and private — to technical
                data, engineering guides, and galleries showcasing why the new
                ZR1 and ZR1X are truly in a league of their own.
              </p>
              <p style={{ color: "var(--muted)", lineHeight: "1.8" }}>
                We also have Apple iPhone, iPad, and Apple Watch mobile apps for
                your enjoyment. We thank the engineering teams at General Motors
                for consistently pushing the boundaries of automotive
                performance.
              </p>
            </div>
            <div>
              <div className="section-header">
                <div className="bar purple"></div>
                <h2>Cool Jimmy</h2>
              </div>
              <Img
                hideOnError
                src="/me.jpg"
                alt="Cool Jimmy"
                style={{
                  width: "100%",
                  maxWidth: "300px",
                  borderRadius: "12px",
                  border: "1px solid var(--border)",
                  marginBottom: "18px",
                  objectFit: "cover",
                  height: "240px",
                }}
              />
              <p
                style={{
                  color: "var(--muted)",
                  lineHeight: "1.8",
                  marginBottom: "12px",
                }}
              >
                Cool Jimmy is the author and creator of the MyZR1 - MyZR1X
                platform and the broader My Corvette series of websites. An
                enthusiast, engineer, and storyteller — dedicated to sharing the
                ZR1 legend with as wide an audience as possible.
              </p>
              <p style={{ color: "var(--muted)", lineHeight: "1.8" }}>
                The CoolJimmy Software brand, MyZR1, MyZR1X domain names, and
                mobile apps are registered tradenames and trademarks of Optical
                Automation, LLC.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                  marginTop: "14px",
                }}
              >
                <span className="card-tag tag-blue">Author</span>{" "}
                <span className="card-tag tag-purple">
                  Optical Automation, LLC
                </span>{" "}
                <span className="card-tag tag-orange">CoolJimmy Software</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="bar orange"></div>
            <h2>Mobile Apps</h2>
          </div>
          <div className="feature-row">
            <div className="feature-img">
              <Img
                fallback="/CoolJimmy.png"
                src="/assets/apple-ios-watch-app.png"
                alt="Mobile Apps"
              />
            </div>
            <div className="feature-text">
              <h3>Apple iPhone, iPad &amp; Apple Watch</h3>
              <p
                style={{
                  color: "var(--muted)",
                  lineHeight: "1.8",
                  marginBottom: "12px",
                }}
              >
                The MyZR1 - MyZR1X mobile app is available for Apple iPhone,
                iPad, and Apple Watch — bringing the full ZR1 reference
                experience to your device. Browse photo galleries, access specs,
                and stay connected with the community on the go.
              </p>
              <p
                style={{
                  color: "var(--muted)",
                  lineHeight: "1.8",
                  marginBottom: "16px",
                }}
              >
                The Apple Watch companion app provides quick-glance specs and
                alerts for ZR1 events and community activity — designed for ZR1
                owners who want information at a glance without reaching for
                their phone.
              </p>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <span className="card-tag tag-blue">iPhone</span>{" "}
                <span className="card-tag tag-blue">iPad</span>{" "}
                <span className="card-tag tag-purple">Apple Watch</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar green"></div>
            <h2>Contact &amp; Links</h2>
          </div>
          <div className="two-col">
            <div className="link-section">
              <h3>About &amp; Contact</h3>
              <div className="link-list">
                <div className="link-item">
                  <div className="li-icon">✉️</div>
                  <div className="li-text">
                    <span className="li-label">Contact Us</span>
                    <span className="li-sub">Get in touch with the team</span>
                  </div>
                </div>
                <div className="link-item">
                  <div className="li-icon">🌟</div>
                  <div className="li-text">
                    <span className="li-label">Special Thanks</span>
                    <span className="li-sub">Project &amp; media credits</span>
                  </div>
                </div>
                <div className="link-item">
                  <div className="li-icon">🌐</div>
                  <div className="li-text">
                    <span className="li-label">How To Access</span>
                    <span className="li-sub">CoolJimmy Software websites</span>
                  </div>
                </div>
                <Link href="/about/docs" className="link-item">
                  <div className="li-icon">📄</div>
                  <div className="li-text">
                    <span className="li-label">Docs &amp; Downloads</span>
                    <span className="li-sub">Manuals, guides &amp; assets</span>
                  </div>
                </Link>{" "}
                <Link href="/glossary" className="link-item">
                  <div className="li-icon">📖</div>
                  <div className="li-text">
                    <span className="li-label">Glossary</span>
                    <span className="li-sub">
                      Terms defined, Z07, ZTK, ZR1 &amp; ZR1X
                    </span>
                  </div>
                </Link>{" "}
                <Link href="/sitemap" className="link-item">
                  <div className="li-icon">🗺️</div>
                  <div className="li-text">
                    <span className="li-label">Site Map</span>
                    <span className="li-sub">Every page on this site</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="link-section">
              <h3 className="purple">Social Media</h3>
              <div className="link-list">
                <a
                  href="https://www.facebook.com/profile.php?id=100091998258369"
                  target="_blank"
                  rel="noopener"
                  className="link-item"
                >
                  <div className="li-icon">📘</div>
                  <div className="li-text">
                    <span className="li-label">Facebook</span>
                    <span className="li-sub">CoolJimmy on Facebook</span>
                  </div>
                </a>{" "}
                <a
                  href="https://x.com/javakian2025"
                  target="_blank"
                  rel="noopener"
                  className="link-item"
                >
                  <div className="li-icon">𝕏</div>
                  <div className="li-text">
                    <span className="li-label">X (Twitter)</span>
                    <span className="li-sub">@javakian2025</span>
                  </div>
                </a>{" "}
                <a
                  href="https://www.linkedin.com/company/optical-automation/posts/?feedView=all"
                  target="_blank"
                  rel="noopener"
                  className="link-item"
                >
                  <div className="li-icon">💼</div>
                  <div className="li-text">
                    <span className="li-label">LinkedIn</span>
                    <span className="li-sub">Optical Automation LLC</span>
                  </div>
                </a>{" "}
                <a
                  href="http://www.Github.com/JamesAvakian622"
                  target="_blank"
                  rel="noopener"
                  className="link-item"
                >
                  <div className="li-icon">🐙</div>
                  <div className="li-text">
                    <span className="li-label">GitHub</span>
                    <span className="li-sub">JamesAvakian622</span>
                  </div>
                </a>{" "}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener"
                  className="link-item"
                >
                  <div className="li-icon">▶️</div>
                  <div className="li-text">
                    <span className="li-label">YouTube</span>
                    <span className="li-sub">ZR1 videos &amp; walkarounds</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AccountSection />

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="bar orange"></div>
            <h2>Legal Disclosures</h2>
          </div>
          <div style={{ maxWidth: "720px" }}>
            <p
              style={{
                color: "var(--muted)",
                fontSize: "0.85rem",
                lineHeight: "1.8",
                marginBottom: "12px",
              }}
            >
              <b style={{ color: "var(--text)" }}>Disclosure 1:</b> All
              information on this website is for informational purposes only.
              This website is a platform for information and enthusiast
              community engagement. While we showcase the potential of these
              vehicles, we do not officially endorse specific aftermarket
              modifications.
            </p>
            <p
              style={{
                color: "var(--muted)",
                fontSize: "0.85rem",
                lineHeight: "1.8",
                marginBottom: "12px",
              }}
            >
              <b style={{ color: "var(--text)" }}>Disclosure 2:</b> The MyZR1
              and MyZR1X domain names, website, and CoolJimmy names are
              registered tradenames property of Optical Automation, LLC.
            </p>
            <p
              style={{
                color: "var(--muted)",
                fontSize: "0.85rem",
                lineHeight: "1.8",
                marginBottom: "20px",
              }}
            >
              <b style={{ color: "var(--text)" }}>Disclosure 3:</b> The names
              Chevrolet, Stingray, E-Ray, GrandSport, GrandSportX, Z06, ZR1, and
              ZR1X are trademarks and intellectual property of General Motors.
              This site is an independent, fan-made project not affiliated with,
              endorsed by, or sponsored by General Motors or Chevrolet.
            </p>
            <div
              className="footer-legal-links"
              style={{ justifyContent: "flex-start" }}
            >
              <Link href="/terms">Terms of Use</Link>{" "}
              <Link href="/privacy">Privacy Policy</Link>{" "}
              <Link href="/content-policy">Content Policy</Link>{" "}
              <Link href="/cookie-policy">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
