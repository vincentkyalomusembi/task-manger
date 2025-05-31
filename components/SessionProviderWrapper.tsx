"use client";

import { SessionProvider } from "next-auth/react";

// A Client Component that wraps children with the SessionProvider
export function SessionProviderWrapper({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
