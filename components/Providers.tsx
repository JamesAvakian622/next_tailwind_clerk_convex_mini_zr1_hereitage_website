"use client";

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { dark } from "@clerk/ui/themes";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import GlobalStyle from "./GlobalStyle";
import StoreUser from "./StoreUser";

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
const convex = convexUrl ? new ConvexReactClient(convexUrl) : null;

export default function Providers({ children }: { children: React.ReactNode }) {
  const inner = (
    <>
      <GlobalStyle />
      {children}
    </>
  );

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
      {convex ? (
        <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
          <StoreUser />
          {inner}
        </ConvexProviderWithClerk>
      ) : (
        inner
      )}
    </ClerkProvider>
  );
}
