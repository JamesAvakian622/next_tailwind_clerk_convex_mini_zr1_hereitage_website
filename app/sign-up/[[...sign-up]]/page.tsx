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
      blurb="Join the MyZR1 community. Sign up with Google in one click, or use your email."
    >
      <SignUp signInUrl="/sign-in" fallbackRedirectUrl="/" />
    </AuthShell>
  );
}
