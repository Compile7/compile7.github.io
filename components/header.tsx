'use client'

import { Code, Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gray-50 border-b px-4 md:px-6 py-4">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <Code className="w-8 h-8 text-primary" />
          </div>
          <span className="text-xl font-semibold text-gray-800">Compile7</span>
        </Link>
        
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
          <Menu className="w-6 h-6 text-gray-600" />
        </button>

        <nav className="hidden md:flex gap-8">
          <Link href="/saml" className="text-gray-600 hover:text-primary">
            SAML
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-primary">
            About
          </Link>
          <Link href="/decompile" className="text-gray-600 hover:text-primary">
            Blog
          </Link>
        </nav>
      </div>

      {isMenuOpen && (
        <nav className="mt-4 flex flex-col gap-4 md:hidden">
          <Link href="/saml" className="text-gray-600 hover:text-primary">
            SAML
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-primary">
            About
          </Link>
          <Link href="/decompile" className="text-gray-600 hover:text-primary">
            Blog
          </Link>
        </nav>
      )}
    </header>
  )
}

