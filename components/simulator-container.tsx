"use client"

import { useState, useEffect, useRef } from "react"
import { TerminalSimulator } from "@/components/terminal-simulator"
import { CodeIdeSimulator } from "@/components/code-ide-simulator"

export function SimulatorContainer() {
  const [showTerminal, setShowTerminal] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerHeight, setContainerHeight] = useState(300) // Default height

  useEffect(() => {
    // Toggle between terminal and code IDE every 5 seconds
    const interval = setInterval(() => {
      setShowTerminal((prev) => !prev)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Update container height based on content
  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        // Get the height of the current visible content
        const activeContent = containerRef.current.querySelector(".simulator-content")
        if (activeContent) {
          const contentHeight = activeContent.getBoundingClientRect().height
          setContainerHeight(contentHeight)
        }
      }
    }

    // Update height after a short delay to ensure content is rendered
    const timer = setTimeout(updateHeight, 100)

    // Also update on window resize
    window.addEventListener("resize", updateHeight)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("resize", updateHeight)
    }
  }, [showTerminal])

  return (
    <div ref={containerRef} className="relative" style={{ height: `${containerHeight}px`, minHeight: "300px" }}>
      <div
        className={`simulator-content transition-opacity duration-500 ${
          showTerminal ? "opacity-100 z-10" : "opacity-0 z-0 absolute top-0 left-0 right-0"
        }`}
      >
        <TerminalSimulator />
      </div>

      <div
        className={`simulator-content transition-opacity duration-500 ${
          !showTerminal ? "opacity-100 z-10" : "opacity-0 z-0 absolute top-0 left-0 right-0"
        }`}
      >
        <CodeIdeSimulator />
      </div>
    </div>
  )
}

