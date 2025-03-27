"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/saml-theme-toggle"
import { Search, Menu, X, Code } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <MobileNav pathname={pathname} />
          </SheetContent>
        </Sheet>
        <Link href="/" className="flex items-center gap-2 mr-4">
          <div className="relative w-10 h-10 rounded-md overflow-hidden flex items-center justify-center">
            <Code className="w-12 h-12 text-primary" />
          </div>
          <span className="text-2xl font-semibold text-gray-800">Compile7</span>
        </Link>
        <Link href="/saml/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-xl">SAML Docs</span>
        </Link>
        <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6">
          <Link
            href="/saml/docs/introduction"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname?.startsWith("/docs") ? "text-primary" : "text-muted-foreground",
            )}
          >
            Documentation
          </Link>
          <Link
            href="/saml/resources"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname?.startsWith("/resources") ? "text-primary" : "text-muted-foreground",
            )}
          >
            Resources
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

function MobileNav({ pathname }: { pathname?: string }) {
  return (
    <div className="flex flex-col space-y-4 mt-4">
      <Link
        href="/saml/"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/" ? "text-primary" : "text-muted-foreground",
        )}
      >
        Home
      </Link>
      <Link
        href="/saml/docs/introduction"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname?.startsWith("/docs") ? "text-primary" : "text-muted-foreground",
        )}
      >
        Documentation
      </Link>
      <Link
        href="/saml/examples"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname?.startsWith("/examples") ? "text-primary" : "text-muted-foreground",
        )}
      >
        Examples
      </Link>
      <Link
        href="/saml/resources"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname?.startsWith("/resources") ? "text-primary" : "text-muted-foreground",
        )}
      >
        Resources
      </Link>
    </div>
  )
}

