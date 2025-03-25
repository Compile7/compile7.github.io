import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import './globals.css'
import { Header } from "@/components/header"
import { CheatCode } from "@/components/cheat-code"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Compile7 - Developer Community",
  description: "Non-profit organization developing tools for developers",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {/* Header */} 
          <Header />

          {/* Cheat Code Handler */}
          <CheatCode />

          {children}

          {/* Footer */}
          <footer className="py-6 bg-white border-t">
            <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
              <p>© {new Date().getFullYear()} Compile7. A non-profit organization for developers.</p>
              <p className="mt-2 text-xs text-gray-400">Psst! Try pressing Command + E for a surprise</p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}





