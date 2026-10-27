// Generated from legacy/shared.css by scripts/gen-global-style.mjs
export const sharedCss = `/* MyZR1 - MyZR1X — Shared Stylesheet */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
:root {
  --bg: #0a0e17;
  --nav: #041a3d;
  --card: #111827;
  --card2: #0d1520;
  --border: rgba(255, 255, 255, 0.1);
  --text: #e2e8f0;
  --muted: #94a3b8;
  --accent: #38bdf8;
  --purple: #a855f7;
  --green: #10b981;
  --orange: #f97316;
  --footer: #060d1a;
  --radius: 12px;
}
body {
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
}
a {
  color: var(--accent);
  text-decoration: none;
}
a:hover {
  color: #7dd3fc;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}

/* ── NAV ── */

.btn {
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-primary {
  background: var(--accent);
  color: #000;
}
.btn-primary:hover {
  background: #7dd3fc;
  color: #000;
}
.btn-outline {
  border: 1px solid var(--border);
  color: var(--text);
  background: transparent;
}
.btn-outline:hover {
  border-color: var(--accent);
  color: var(--accent);
}

/* ── BREADCRUMB ── */
.breadcrumb {
  background: var(--card2);
  border-bottom: 1px solid var(--border);
  padding: 10px 24px;
  font-size: 0.8rem;
  color: var(--muted);
}
.breadcrumb a {
  color: var(--muted);
}
.breadcrumb a:hover {
  color: var(--accent);
}
.breadcrumb span {
  color: var(--text);
  font-weight: 600;
}

/* ── HERO ── */
.page-hero {
  position: relative;
  min-height: 380px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: #000;
}
.page-hero img.hero-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.45;
  filter: brightness(0.7);
}
.page-hero .hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(4, 26, 61, 0.92) 0%,
    rgba(4, 26, 61, 0.6) 60%,
    transparent 100%
  );
}
.page-hero .hero-content {
  position: relative;
  z-index: 2;
  padding: 60px 48px;
  max-width: 700px;
}
.page-hero .hero-tag {
  display: inline-block;
  background: var(--accent);
  color: #000;
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 4px 14px;
  border-radius: 999px;
  margin-bottom: 14px;
}
.page-hero h1 {
  font-size: clamp(1.8rem, 4vw, 3.2rem);
  font-weight: 900;
  line-height: 1.1;
  color: #fff;
  margin-bottom: 14px;
}
.page-hero p {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 520px;
  margin-bottom: 24px;
}
.hero-ctas {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

/* ── LAYOUT ── */
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
}
.section {
  padding: 60px 0;
}
.section-alt {
  background: #080f1c;
}
.section-header {
  margin-bottom: 36px;
}
.section-header .bar {
  width: 48px;
  height: 4px;
  background: var(--accent);
  border-radius: 2px;
  margin-bottom: 12px;
}
.section-header .bar.purple {
  background: var(--purple);
}
.section-header .bar.green {
  background: var(--green);
}
.section-header .bar.orange {
  background: var(--orange);
}
.section-header h2 {
  font-size: 1.8rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #fff;
}
.section-header p {
  color: var(--muted);
  margin-top: 6px;
  font-size: 0.95rem;
}

/* ── CARDS ── */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
}
.card-grid-lg {
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
}
.card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  transition:
    border-color 0.2s,
    transform 0.2s;
  display: flex;
  flex-direction: column;
}
.card:hover {
  border-color: var(--accent);
  transform: translateY(-3px);
}
.card-img {
  width: 100%;
  height: 190px;
  object-fit: cover;
  flex-shrink: 0;
}
.card-img-placeholder {
  width: 100%;
  height: 190px;
  background: linear-gradient(135deg, #0d1a2e, #1a2a3e);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;
  flex-shrink: 0;
}
.card-body {
  padding: 18px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.card-tag {
  display: inline-block;
  font-size: 0.68rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 2px 9px;
  border-radius: 999px;
  margin-bottom: 4px;
}
.tag-blue {
  background: rgba(56, 189, 248, 0.15);
  color: var(--accent);
  border: 1px solid rgba(56, 189, 248, 0.3);
}
.tag-purple {
  background: rgba(168, 85, 247, 0.15);
  color: var(--purple);
  border: 1px solid rgba(168, 85, 247, 0.3);
}
.tag-green {
  background: rgba(16, 185, 129, 0.15);
  color: var(--green);
  border: 1px solid rgba(16, 185, 129, 0.3);
}
.tag-orange {
  background: rgba(249, 115, 22, 0.15);
  color: var(--orange);
  border: 1px solid rgba(249, 115, 22, 0.3);
}
.card-body h3 {
  font-size: 1.05rem;
  font-weight: 700;
  color: #fff;
}
.card-body p {
  font-size: 0.83rem;
  color: var(--muted);
  line-height: 1.5;
  flex: 1;
}
.card-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--accent);
  margin-top: 10px;
}
.card-link::after {
  content: "→";
  transition: transform 0.2s;
}
.card-link:hover::after {
  transform: translateX(4px);
}

/* ── LINK LIST ── */
.link-section {
  margin-bottom: 40px;
}
.link-section h3 {
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--accent);
  margin-bottom: 14px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--border);
}
.link-section h3.purple {
  color: var(--purple);
}
.link-section h3.green {
  color: var(--green);
}
.link-section h3.orange {
  color: var(--orange);
}
.link-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.link-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text);
  transition:
    border-color 0.2s,
    background 0.2s;
}
.link-item:hover {
  border-color: var(--accent);
  background: #131f35;
  color: var(--accent);
}
.link-item .li-img {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  object-fit: cover;
  flex-shrink: 0;
  border: 1px solid var(--border);
}
.link-item .li-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
}
.link-item .li-text {
  min-width: 0;
}
.link-item .li-label {
  font-size: 0.88rem;
  font-weight: 600;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.link-item .li-sub {
  font-size: 0.74rem;
  color: var(--muted);
  display: block;
}

/* ── TWO-COL ── */
.two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}
.three-col {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.four-col {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
@media (max-width: 900px) {
  .two-col,
  .three-col,
  .four-col {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 600px) {
  .two-col,
  .three-col,
  .four-col {
    grid-template-columns: 1fr;
  }
}

/* ── SPEC TABLE ── */
.spec-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.88rem;
}
.spec-table th {
  background: var(--nav);
  color: var(--accent);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  padding: 10px 14px;
  text-align: left;
  border-bottom: 1px solid var(--border);
}
.spec-table td {
  padding: 10px 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  vertical-align: top;
}
.spec-table tr:hover td {
  background: rgba(56, 189, 248, 0.04);
}
.spec-table td:first-child {
  color: var(--muted);
  font-size: 0.8rem;
  width: 38%;
}
.spec-table td:last-child {
  color: #fff;
  font-weight: 500;
}

/* ── IMAGE GRID ── */
.img-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 12px;
}
.img-grid img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid var(--border);
}

/* ── WIDE FEATURE ── */
.feature-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}
.feature-row.flip {
  direction: rtl;
}
.feature-row.flip > * {
  direction: ltr;
}
.feature-img {
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid var(--border);
}
.feature-img img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
.feature-text h3 {
  font-size: 1.4rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 10px;
}
.feature-text p {
  color: var(--muted);
  font-size: 0.93rem;
  line-height: 1.7;
  margin-bottom: 14px;
}
@media (max-width: 800px) {
  .feature-row {
    grid-template-columns: 1fr;
  }
}

/* ── FOOTER ── */

/* ── SITEMAP GRID ── */
.sitemap-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}
.sitemap-box {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px;
}
.sitemap-box h3 {
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--accent);
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--border);
}
.sitemap-box ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.sitemap-box ul li a {
  font-size: 0.82rem;
  color: var(--muted);
}
.sitemap-box ul li a:hover {
  color: var(--accent);
}
.sitemap-box h4 {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: var(--accent);
  margin: 14px 0 8px;
}
.sitemap-sub {
  font-size: 0.74rem;
  color: var(--muted);
  opacity: 0.8;
}

/* Glossary definition lists */
.glossary-list {
  margin: 24px 0 0;
}
.glossary-list dt {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text);
  border-top: 1px solid var(--border);
  padding-top: 16px;
  margin-top: 16px;
}
.glossary-list dt:first-child {
  border-top: none;
  margin-top: 0;
  padding-top: 0;
}
.glossary-list dd {
  margin: 8px 0 0;
  font-size: 0.92rem;
  line-height: 1.6;
  color: var(--muted);
}
`;
