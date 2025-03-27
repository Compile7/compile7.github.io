import type React from "react";
import { Mona_Sans as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/saml-site-header";
import { SiteFooter } from "@/components/saml-site-footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "SAML Documentation Portal",
  description:
    "Comprehensive guide to Security Assertion Markup Language (SAML)",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex-1">{children}</div>
      <SiteFooter />
    </div>
  );
}

import "./globals.css";
