import type { Metadata } from "next";
import { auth, currentUser } from "@clerk/nextjs/server";
import AccountPanel from "@/components/AccountPanel";

export const metadata: Metadata = {
  title: "My Account",
  robots: { index: false, follow: false },
};

// Signed-out visitors are redirected to /sign-in.
export default async function AccountPage() {
  await auth.protect();
  const user = await currentUser();
  return (
    <AccountPanel
      name={user?.firstName ?? user?.username ?? "Owner"}
      email={user?.primaryEmailAddress?.emailAddress ?? ""}
    />
  );
}
