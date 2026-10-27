import type { Metadata } from "next";
import { SignIn } from "@clerk/nextjs";
import AuthShell from "@/components/AuthShell";

export const metadata: Metadata = { title: "Sign In" };

export default function SignInPage() {
  return (
    <AuthShell
      title="Sign In"
      blurb="Access your Owners Gallery, saved pages, and premium features."
    >
      <SignIn signUpUrl="/sign-up" fallbackRedirectUrl="/account" />
    </AuthShell>
  );
}
