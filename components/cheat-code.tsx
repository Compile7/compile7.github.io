"use client"

import { useState, useEffect } from "react"
import { useAnimation } from "framer-motion"

export function CheatCode() {
  const [activated, setActivated] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check for Command/Ctrl + E
      if ((e.metaKey || e.ctrlKey) && e.key === "e") {
        e.preventDefault()
        setActivated(true)

        // Create explosion particles
        createExplosionParticles()

        // Play sound effect if available
        playExplosionSound()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  useEffect(() => {
    if (activated) {
      // Select all major elements to animate
      const elements = document.querySelectorAll(
        "header, section, .simulator-content, .project-card, canvas, h1, h2, button",
      )

      // Apply breaking animation to each element
      elements.forEach((element, index) => {
        // Add a class to handle in CSS
        element.classList.add("breaking")

        // Apply random rotation and position with physics
        const rotation = Math.random() * 360 - 180
        const xOffset = Math.random() * 200 - 100
        const delay = index * 0.05 // Stagger the animations

        // Apply the transformations
        element.setAttribute(
          "style",
          `
          transition: transform 1.5s cubic-bezier(0.5, 0, 1, 1) ${delay}s, 
                      opacity 0.5s ease ${delay}s;
          transform: translate(${xOffset}px, 100vh) rotate(${rotation}deg);
          transform-origin: center center;
          position: relative;
          z-index: 100;
        `,
        )
      })

      // Reset after animation completes
      setTimeout(() => {
        setActivated(false)
        resetElements()
      }, 5000)
    }
  }, [activated])

  // Reset all elements to their original state
  const resetElements = () => {
    const elements = document.querySelectorAll(".breaking")
    elements.forEach((element) => {
      element.classList.remove("breaking")
      element.removeAttribute("style")
    })

    // Remove any particles
    const particles = document.querySelectorAll(".explosion-particle")
    particles.forEach((particle) => particle.remove())
  }

  // Create explosion particles
  const createExplosionParticles = () => {
    const container = document.createElement("div")
    container.className = "fixed inset-0 pointer-events-none z-50"
    document.body.appendChild(container)

    // Create 50 particles
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement("div")
      particle.className = "explosion-particle absolute rounded-full bg-primary"

      // Random size
      const size = Math.random() * 20 + 5
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`

      // Random position
      const startX = window.innerWidth / 2
      const startY = window.innerHeight / 2
      particle.style.left = `${startX}px`
      particle.style.top = `${startY}px`

      // Random direction
      const angle = Math.random() * Math.PI * 2
      const distance = Math.random() * 100 + 50
      const endX = startX + Math.cos(angle) * distance
      const endY = startY + Math.sin(angle) * distance

      // Animation
      particle.animate(
        [
          {
            transform: "scale(0) translate(0, 0)",
            opacity: 1,
          },
          {
            transform: `scale(1) translate(${endX - startX}px, ${endY - startY}px)`,
            opacity: 0,
          },
        ],
        {
          duration: 1000,
          easing: "cubic-bezier(0.1, 0.8, 0.2, 1)",
        },
      )

      container.appendChild(particle)

      // Remove particle after animation
      setTimeout(() => {
        particle.remove()
      }, 1000)
    }

    // Remove container after all animations
    setTimeout(() => {
      container.remove()
    }, 1500)
  }

  // Play explosion sound
  const playExplosionSound = () => {
    try {
      const audio = new Audio("/explosion.mp3")
      audio.volume = 0.3
      audio.play().catch((e) => console.log("Audio play failed:", e))
    } catch (e) {
      console.log("Audio not supported")
    }
  }

  return null // This component doesn't render anything visible
}

