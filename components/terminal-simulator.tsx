"use client"

import { useEffect, useState } from "react"
import { Circle } from "lucide-react"

export function TerminalSimulator() {
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [showCursor, setShowCursor] = useState(true)

  // Terminal content to be displayed
  const terminalLines = [
    "$ npm install @compile7/jwt-validator",
    "Installing packages...",
    "✓ Packages installed successfully!",
    "$ import { validateJWT } from '@compile7/jwt-validator'",
    "$ const isValid = validateJWT(token)",
    "$ console.log(isValid)",
    "true",
  ]

  useEffect(() => {
    // Blink cursor effect
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    if (currentLineIndex >= terminalLines.length) return

    // Type out each character with a delay
    if (currentCharIndex < terminalLines[currentLineIndex].length) {
      const timeout = setTimeout(() => {
        setCurrentCharIndex(currentCharIndex + 1)
      }, 30) // Typing speed
      return () => clearTimeout(timeout)
    }

    // Move to next line after a pause
    const timeout = setTimeout(() => {
      setDisplayedLines([...displayedLines, terminalLines[currentLineIndex]])
      setCurrentLineIndex(currentLineIndex + 1)
      setCurrentCharIndex(0)
    }, 500) // Pause between lines

    return () => clearTimeout(timeout)
  }, [currentLineIndex, currentCharIndex, displayedLines, terminalLines])

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg text-left">
      {/* Terminal header */}
      <div className="bg-gray-800 px-4 py-2 flex items-center">
        <div className="flex space-x-2">
          <Circle className="h-3 w-3 text-red-500 fill-red-500" />
          <Circle className="h-3 w-3 text-yellow-500 fill-yellow-500" />
          <Circle className="h-3 w-3 text-green-500 fill-green-500" />
        </div>
        <div className="mx-auto text-gray-400 text-sm">compile7-terminal</div>
      </div>

      {/* Terminal content */}
      <div className="p-4 font-mono text-sm text-gray-100 min-h-[200px]">
        {displayedLines.map((line, index) => (
          <div key={index} className="mb-1">
            {line}
          </div>
        ))}

        {/* Current line being typed */}
        {currentLineIndex < terminalLines.length && (
          <div>
            {terminalLines[currentLineIndex].substring(0, currentCharIndex)}
            {showCursor && <span className="bg-gray-100 animate-pulse">▌</span>}
          </div>
        )}
      </div>
    </div>
  )
}

