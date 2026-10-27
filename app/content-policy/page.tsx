import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import PolicyPage, { Section } from "@/components/PolicyPage";

export const metadata: Metadata = pageMeta(
  "Content Policy",
  "Acceptable use, prohibited content, and intellectual property rules for MyZR1 - MyZR1X.",
);

export default function ContentPolicyPage() {
  return (
    <PolicyPage title="Content Policy" lastUpdated="2026-04-10">
      <Section>
        <h2>1. Acceptable Use</h2>
        <p>
          The Cool Jimmy MyCorvette Series is showing the C8 generation ZR1 and
          ZR1X for Corvette ZR1 enthusiasts from MyZR1.com and MyZR1X.com domain
          name websites. All user-submitted content must be appropriate,
          relevant, and comply with applicable laws.
        </p>
      </Section>
      <Section>
        <h2>2. Prohibited Content</h2>
        <ul>
          <li>Spam, malware, or phishing content</li>
          <li>Illegal, defamatory, or harmful material</li>
          <li>Copyright-infringing content without proper licensing</li>
          <li>Personal information of others without consent</li>
        </ul>
      </Section>
      <Section>
        <h2>3. Intellectual Property</h2>
        <p>
          All original content on this site is owned by Cool Jimmy, Optical
          Automation, LLC. Chevrolet, Corvette, and ZR1 are trademarks of
          General Motors. Usage of GM trademarks is for informational and
          editorial purposes only.
        </p>
      </Section>
      <Section>
        <h2>4. Enforcement</h2>
        <p>
          Violations may result in content removal and account suspension.
          Reports can be sent to Software@OpticalAutomation.com.
        </p>
      </Section>
    </PolicyPage>
  );
}
