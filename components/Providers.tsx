"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/ui/themes";
import GlobalStyle from "./GlobalStyle";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      signInUrl="/sign-in"
      signUpUrl="/sign-up"
      appearance={{
        theme: dark,
        variables: { colorPrimary: "#38bdf8", colorBackground: "#111827" },
        // Put "Continue with Google" first, as a full-width button, above the email form.
        options: {
          socialButtonsPlacement: "top",
          socialButtonsVariant: "blockButton",
        },
      }}
    >
      <GlobalStyle />
      {children}
    </ClerkProvider>
  );
}
