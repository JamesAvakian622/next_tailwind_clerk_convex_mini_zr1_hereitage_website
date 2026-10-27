import type { Metadata } from "next";
import PolicyPage, { Section } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of use governing your use of the MyZR1 - MyZR1X website, owners gallery, photo submissions, and account features operated by Optical Automation, LLC.",
};

const SITE_ROOT = process.env.NEXT_PUBLIC_SITE_URL || "https://www.myzr1.com";

export default function TermsPage() {
  return (
    <PolicyPage title="Terms of Use" lastUpdated="2026-04-10">
      <Section>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using MyCorvette ZR1 / MyZR1X ({SITE_ROOT}), operated
          by Optical Automation, LLC, and CoolJimmy you agree to comply with and
          be bound by these Terms of Use. If you do not agree, please do not use
          the site.
        </p>
      </Section>
      <Section>
        <h2>2. Use of Content</h2>
        <p>
          All text, images, media, and data are provided for informational and
          entertainment purposes. You may view and share content for personal
          use. Redistribution, modification, or commercial use requires prior
          written consent from Optical Automation, LLC.
        </p>
      </Section>
      <Section>
        <h2>3. User Accounts</h2>
        <p>
          Account registration is managed via Clerk authentication. You are
          responsible for maintaining the security of your account credentials.
          Multi-tenant organization accounts are subject to additional terms
          based on your subscription plan.
        </p>
      </Section>
      <Section>
        <h2>4. Security Practices</h2>
        <p>
          Timestamps are recorded in ISO 8601 format where applicable. Page
          access may be logged for operations and support, with
          organization-scoped tenant isolation where accounts use organizations.
        </p>
      </Section>
      <Section>
        <h2>5. In-App Purchases</h2>
        <p>
          Premium features are available via subscription. Web purchases are
          processed through Stripe. iOS purchases are subject to Apple App Store
          terms. Android purchases follow Google Play terms.
        </p>
      </Section>
      <Section>
        <h2>6. Disclaimer</h2>
        <p>
          Content is provided &quot;as is&quot; without warranties of any kind.
          Optical Automation, LLC is not responsible for any damages resulting
          from use of the site.
        </p>
      </Section>
      <Section>
        <h2>7. Contact</h2>
        <p>
          For questions regarding these terms, contact us at
          software@OpticalAutomation.com.
        </p>
      </Section>
    </PolicyPage>
  );
}
