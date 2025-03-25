import Link from "next/link"

export function Header() {
  return (
    <header className="bg-gray-100 rounded-full mx-4 my-4 px-6 py-3 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <div className="relative w-10 h-10 rounded-md overflow-hidden flex items-center justify-center">
          {/* Colorful quadrants */}
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-red-500"></div>
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-500"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-yellow-500"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-green-500"></div>

          {/* Overlaid shapes */}
          <div className="absolute w-8 h-8 border-2 border-white rounded-sm z-10"></div>
          <div className="absolute w-8 h-8 border-2 border-white rounded-sm rotate-45 z-10"></div>

          {/* Center dot */}
          <div className="absolute w-2 h-2 bg-white rounded-full z-20"></div>
        </div>
        <span className="text-2xl font-semibold text-gray-800">Compile7</span>
      </Link>
      <nav className="flex gap-6">
        <Link href="/" className="text-gray-800 hover:text-primary">
          Home
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

