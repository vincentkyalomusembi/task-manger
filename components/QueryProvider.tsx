"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

// Wraps your app in a QueryClientProvider to enable TanStack Query hooks
export default function QueryProvider({ children }: { children: ReactNode }) {
  const [client] = useState(new QueryClient());
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
