// Import Next.js metadata types
import type { Metadata } from "next";

// Import Google Fonts
import { Geist, Geist_Mono } from "next/font/google";

// Global styles
import "./globals.css";

// Import the custom QueryProvider (used for TanStack Query)
import QueryProvider from "@/components/QueryProvider";

// Import the app's header
import Header from "@/components/Header";

// Import NextAuth's SessionProvider to enable session support
import { SessionProviderWrapper } from "@/components/SessionProviderWrapper"; // client-only wrapper

import ReduxProvider from "@/components/ReduxProvider";

// Configure Google fonts with CSS variables
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata shown in browser tabs and search engines
export const metadata: Metadata = {
  title: "Task Manager",
  description: "Manage your tasks efficiently with authentication",
};

// Root layout wraps the entire app
// Inside RootLayout:
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ReduxProvider> {/* 👈 wrap ReduxProvider */}
          <SessionProviderWrapper>
            <QueryProvider>
              <Header />
              {children}
            </QueryProvider>
          </SessionProviderWrapper>
        </ReduxProvider>
      </body>
    </html>
  );
}
