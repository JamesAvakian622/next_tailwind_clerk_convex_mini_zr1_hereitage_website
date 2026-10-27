import type { Metadata } from "next";
import PolicyPage, { Section } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How MyZR1 - MyZR1X (Optical Automation, LLC) collects, uses, stores, and shares your information.",
};

export default function PrivacyPage() {
  return (
    <PolicyPage title="Privacy Policy" lastUpdated="2026-04-10">
      <Section>
        <h2>1. Information We Collect</h2>
        <p>
          We collect information you provide when creating an account (via
          Clerk), including name, email, and organization membership. We also
          collect usage data including page views, session duration, and device
          type.
        </p>
      </Section>
      <Section>
        <h2>2. Cookies &amp; Tracking</h2>
        <p>We use cookies to:</p>
        <ul>
          <li>Maintain sessions</li>
          <li>Analyze usage</li>
          <li>Improve performance</li>
        </ul>
        <p>
          Users may disable cookies in their browser settings. See our Cookie
          Policy for full details.
        </p>
      </Section>
      <Section>
        <h2>3. Data Storage &amp; Security</h2>
        <p>
          Data is stored in MongoDB with tenant isolation via organizationId.
          Traffic is encrypted in transit (HTTPS). Timestamps are stored in ISO
          8601 format where applicable.
        </p>
      </Section>
      <Section>
        <h2>4. Data Sharing</h2>
        <p>
          We do not sell your personal information. Data may be shared with
          Clerk (authentication), Stripe (payments), and MongoDB Atlas (data
          storage) as essential service providers.
        </p>
      </Section>
      <Section>
        <h2>5. Your Rights</h2>
        <p>
          You may request access to, correction of, or deletion of your personal
          data by contacting software@OpticalAutomation.com.
        </p>
      </Section>
      <Section>
        <h2>6. Contact</h2>
        <p>Optical Automation, LLC — software@OpticalAutomation.com</p>
      </Section>
    </PolicyPage>
  );
}
