import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { SessionProviderWrapper } from "@/components/SessionProviderWrapper";
import Header from "@/components/Header"; // Also must be a client component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Task Manager",
  description: "Manage your tasks efficiently with authentication",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SessionProviderWrapper>
          <Header />
          <main className="p-4">{children}</main>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
