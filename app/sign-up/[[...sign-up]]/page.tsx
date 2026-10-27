import type { Metadata } from "next";
import { SignUp } from "@clerk/nextjs";
import AuthShell from "@/components/AuthShell";

export const metadata: Metadata = {
  title: "Create Account",
  robots: { index: false, follow: false },
};

export default function SignUpPage() {
  return (
    <AuthShell
      title="Create Account"
      blurb="Join the MyZR1 community to submit photo albums, access premium content, and connect with ZR1 owners worldwide."
    >
      <SignUp signInUrl="/sign-in" fallbackRedirectUrl="/account" />
    </AuthShell>
  );
}
