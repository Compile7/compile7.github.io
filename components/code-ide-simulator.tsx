"use client"

import { useEffect, useState } from "react"
import { Circle, Maximize2 } from "lucide-react"

export function CodeIdeSimulator() {
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  // Code content with syntax highlighting classes
  const codeLines = [
    { content: "import { validateJWT } from '@compile7/jwt-validator';", highlight: "text-blue-400" },
    { content: "", highlight: "" },
    { content: "// Function to verify JWT token", highlight: "text-gray-500" },
    { content: "function verifyUserToken(token) {", highlight: "text-yellow-300" },
    { content: "  try {", highlight: "text-yellow-300" },
    { content: "    const isValid = validateJWT(token, {", highlight: "text-white" },
    { content: "      issuer: 'https://auth.compile7.org',", highlight: "text-green-300" },
    { content: "      audience: 'api.compile7.org',", highlight: "text-green-300" },
    { content: "      algorithms: ['RS256']", highlight: "text-green-300" },
    { content: "    });", highlight: "text-white" },
    { content: "", highlight: "" },
    { content: "    if (isValid) {", highlight: "text-yellow-300" },
    { content: "      return { success: true, message: 'Token is valid' };", highlight: "text-white" },
    { content: "    }", highlight: "text-yellow-300" },
    { content: "  } catch (error) {", highlight: "text-yellow-300" },
    { content: "    console.error('JWT validation failed:', error);", highlight: "text-white" },
    { content: "    return { success: false, message: error.message };", highlight: "text-white" },
    { content: "  }", highlight: "text-yellow-300" },
    { content: "}", highlight: "text-yellow-300" },
  ]

  useEffect(() => {
    // Blink cursor effect
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    // Move cursor to different lines
    const lineInterval = setInterval(() => {
      setCurrentLineIndex((prev) => (prev + 1) % codeLines.length)
    }, 1000)

    return () => {
      clearInterval(cursorInterval)
      clearInterval(lineInterval)
    }
  }, [codeLines.length])

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg text-left">
      {/* IDE header */}
      <div className="bg-gray-800 px-4 py-2 flex items-center">
        <div className="flex space-x-2">
          <Circle className="h-3 w-3 text-red-500 fill-red-500" />
          <Circle className="h-3 w-3 text-yellow-500 fill-yellow-500" />
          <Circle className="h-3 w-3 text-green-500 fill-green-500" />
        </div>
        <div className="flex mx-auto">
          <div className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-t-md">jwt-validator.js</div>
          <div className="text-gray-500 text-sm px-3 py-1">auth.js</div>
        </div>
        <Maximize2 className="h-4 w-4 text-gray-400" />
      </div>

      {/* IDE content */}
      <div className="flex text-sm font-mono min-h-[250px]">
        {/* Line numbers */}
        <div className="bg-gray-800 text-gray-500 px-2 py-4 text-right select-none">
          {codeLines.map((_, index) => (
            <div key={index} className="leading-6">
              {index + 1}
            </div>
          ))}
        </div>

        {/* Code content */}
        <div className="p-4 overflow-x-auto w-full">
          {codeLines.map((line, index) => (
            <div key={index} className="leading-6 flex">
              <span className={line.highlight}>
                {line.content}
                {index === currentLineIndex && showCursor && (
                  <span className="bg-blue-400 ml-0.5 w-0.5 h-5 inline-block animate-pulse">▌</span>
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

