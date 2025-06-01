// lib/provider.tsx
"use client";

/**
 * Redux Provider Component
 * Wraps the app with the Redux store so any component can access it
 */

import { Provider } from "react-redux";
import { store } from "./store";

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
