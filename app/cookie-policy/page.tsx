import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import PolicyPage, { Section } from "@/components/PolicyPage";

export const metadata: Metadata = pageMeta(
  "Cookie Policy",
  "What cookies MyZR1 - MyZR1X uses, why, and how you can manage them.",
);

export default function CookiePolicyPage() {
  return (
    <PolicyPage title="Cookie Policy" lastUpdated="2026-04-10">
      <Section>
        <h2>1. What Are Cookies</h2>
        <p>
          Cookies are small text files stored on your device when you visit our
          website. They help us provide a better user experience.
        </p>
      </Section>
      <Section>
        <h2>2. How We Use Cookies</h2>
        <p>We use cookies to:</p>
        <ul>
          <li>
            <b>Maintain sessions</b> — Keep you authenticated as you navigate
          </li>
          <li>
            <b>Analyze usage</b> — Understand which pages are visited and how
            often
          </li>
          <li>
            <b>Improve performance</b> — Optimize loading times and
            responsiveness
          </li>
          <li>
            <b>Remember preferences</b> — Store your theme (dark/light) and
            language choices
          </li>
        </ul>
      </Section>
      <Section>
        <h2>3. Types of Cookies</h2>
        <ul>
          <li>
            <b>Necessary:</b> Required for authentication and security (cannot
            be disabled)
          </li>
          <li>
            <b>Analytics:</b> Help us understand usage patterns (optional)
          </li>
          <li>
            <b>Marketing:</b> Help personalize content and ads (optional)
          </li>
          <li>
            <b>Preferences:</b> Remember your settings and choices (optional)
          </li>
        </ul>
      </Section>
      <Section>
        <h2>4. Security Practices</h2>
        <p>
          Cookie consent records include ISO 8601 timestamps. See the Privacy
          Policy for how we handle personal data.
        </p>
      </Section>
      <Section>
        <h2>5. Managing Cookies</h2>
        <p>
          Users may disable cookies in their browser settings. You can also
          manage preferences via our cookie consent banner. Disabling necessary
          cookies may impact site functionality.
        </p>
      </Section>
      <Section>
        <h2>6. Contact</h2>
        <p>Questions about cookies? Contact software@OpticalAutomation.com.</p>
      </Section>
    </PolicyPage>
  );
}
