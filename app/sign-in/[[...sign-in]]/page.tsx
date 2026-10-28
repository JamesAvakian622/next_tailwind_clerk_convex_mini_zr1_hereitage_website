import type { Metadata } from "next";
import { SignIn } from "@clerk/nextjs";
import AuthShell from "@/components/AuthShell";

export const metadata: Metadata = {
  title: "Sign In",
  robots: { index: false, follow: false },
};

export default function SignInPage() {
  return (
    <AuthShell
      title="Sign In"
      blurb="Sign in to view MyZR1 - MyZR1X. Continue with Google in one click, or use your email."
    >
      <SignIn signUpUrl="/sign-up" fallbackRedirectUrl="/" />
    </AuthShell>
  );
}
