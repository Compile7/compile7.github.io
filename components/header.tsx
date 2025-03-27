import { Code } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="bg-gray-100 rounded-full mx-4 my-4 px-6 py-3 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <div className="relative w-10 h-10 rounded-md overflow-hidden flex items-center justify-center">
        <Code className="w-12 h-12 text-primary" />
        </div>
        <span className="text-2xl font-semibold text-gray-800">Compile7</span>
      </Link>
      <nav className="flex gap-6">
        <Link href="/saml" className="text-gray-800 hover:text-primary">
          SAML
        </Link>
        <Link href="/about" className="text-gray-800 hover:text-primary">
          About
        </Link>
        <Link href="/decompile" className="text-gray-800 hover:text-primary">
          Blog
        </Link>
      </nav>
    </header>
  )
}

