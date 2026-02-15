import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextGen Realty - AI-Powered Wholesaling CRM",
  description:
    "The only CRM built for real estate wholesalers. AI deal analysis, built-in dialer, skip tracing, and more. Pay only for what you use — no monthly subscriptions.",
  keywords: [
    "real estate wholesaling",
    "wholesaling CRM",
    "deal analysis",
    "skip tracing",
    "real estate investing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
