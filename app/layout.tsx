import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/header";
import { CheatCode } from "@/components/cheat-code";
import { headers } from "next/headers";

// Using Inter with all weights for more design flexibility
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Compile7 - Developer Community",
  description: "Non-profit organization developing tools for developers",
  openGraph: {
    title: "Compile7 - Developer Community",
    description: "Non-profit organization developing tools for developers",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Compile7 - Developer Community",
    description: "Non-profit organization developing tools for developers",
    images: ["/og.svg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = headers();
  const pathname = headersList.get("x-current-path") || "";
  const isSamlPath = pathname.startsWith("/saml");

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-YTHDX2HH7G"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YTHDX2HH7G');
            `,
          }}
        />
      </head>
      <body className="antialiased text-zinc-800 bg-zinc-50">
        {isSamlPath ? (
          children
        ) : (
          <ThemeProvider attribute="class" defaultTheme="light">
            <Header />
            <CheatCode />
            {children}
            <footer className="py-8 bg-white border-t border-zinc-200">
              <div className="container mx-auto px-4 text-center max-w-3xl">
                <p className="text-zinc-600 text-sm">
                  © {new Date().getFullYear()} Compile7 • A <span className="px-1 rounded" style={{ backgroundColor: "rgb(253, 224, 71)" }}>non-profit organization</span> for developers
                </p>
                <p className="mt-3 text-xs text-zinc-400">
                  Psst! Try pressing <span className="px-1 rounded font-medium" style={{ backgroundColor: "rgb(253, 224, 71)" }}>Command + E</span> for a surprise
                </p>
              </div>
            </footer>
          </ThemeProvider>
        )}
      </body>
    </html>
  );
}
