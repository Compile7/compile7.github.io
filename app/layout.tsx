import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/header";
import { CheatCode } from "@/components/cheat-code";
import { headers } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
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
      <body className={inter.className}>
        {isSamlPath ? (
          children
        ) : (
          <ThemeProvider attribute="class" defaultTheme="light">
            <Header />
            <CheatCode />
            {children}
            <footer className="py-6 bg-white border-t">
              <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
                <p>
                  © {new Date().getFullYear()} Compile7. A non-profit
                  organization for developers.
                </p>
                <p className="mt-2 text-xs text-gray-400">
                  Psst! Try pressing Command + E for a surprise
                </p>
              </div>
            </footer>
          </ThemeProvider>
        )}
      </body>
    </html>
  );
}
