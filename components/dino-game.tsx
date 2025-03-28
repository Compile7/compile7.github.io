"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"

export function DinoGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [gameStarted, setGameStarted] = useState(false)
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [highScore, setHighScore] = useState(0)

  // Game state refs (to avoid dependency issues in animation loop)
  const gameStateRef = useRef({
    dino: {
      x: 50,
      y: 200,
      width: 44,
      height: 48,
      jumping: false,
      jumpHeight: 15,
      jumpVelocity: 0,
      gravity: 0.8,
      runFrame: 0, // For animation
      frameCount: 0, // For animation timing
    },
    obstacles: [] as { x: number; width: number; height: number }[],
    ground: {
      y: 260,
    },
    speed: 5,
    frameCount: 0,
    score: 0,
    gameOver: false,
  })

  // Initialize game
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = 800
    canvas.height = 300

    // Draw initial state
    drawGame(ctx)

    // Handle keyboard events
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.code === "Space" || e.code === "ArrowUp") &&
        !gameStateRef.current.dino.jumping &&
        gameStarted &&
        !gameStateRef.current.gameOver
      ) {
        gameStateRef.current.dino.jumping = true
        gameStateRef.current.dino.jumpVelocity = gameStateRef.current.dino.jumpHeight
      }

      // Start or restart game with spacebar
      if ((e.code === "Space" || e.code === "ArrowUp") && (!gameStarted || gameStateRef.current.gameOver)) {
        startGame()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [gameStarted])

  // Game animation loop
  useEffect(() => {
    if (!gameStarted) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number

    const gameLoop = () => {
      updateGame()
      drawGame(ctx)

      if (!gameStateRef.current.gameOver) {
        animationId = requestAnimationFrame(gameLoop)
      } else {
        setGameOver(true)
        setGameStarted(false)
        if (gameStateRef.current.score > highScore) {
          setHighScore(gameStateRef.current.score)
        }
      }
    }

    animationId = requestAnimationFrame(gameLoop)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [gameStarted, highScore])

  // Update game state
  const updateGame = () => {
    const gameState = gameStateRef.current

    // Update frame count and score
    gameState.frameCount++
    if (gameState.frameCount % 5 === 0) {
      gameState.score++
      setScore(gameState.score)
    }

    // Update dino animation frame
    gameState.dino.frameCount++
    if (gameState.dino.frameCount % 10 === 0) {
      gameState.dino.runFrame = (gameState.dino.runFrame + 1) % 2
    }

    // Update dino position (jumping)
    if (gameState.dino.jumping) {
      gameState.dino.y -= gameState.dino.jumpVelocity
      gameState.dino.jumpVelocity -= gameState.dino.gravity

      // Check if dino has landed
      if (gameState.dino.y >= gameState.ground.y - gameState.dino.height) {
        gameState.dino.y = gameState.ground.y - gameState.dino.height
        gameState.dino.jumping = false
      }
    }

    // Generate obstacles
    if (gameState.frameCount % 100 === 0) {
      const height = 40 + Math.random() * 30
      gameState.obstacles.push({
        x: 800,
        width: 20,
        height,
      })
    }

    // Update obstacles position
    gameState.obstacles.forEach((obstacle, index) => {
      obstacle.x -= gameState.speed

      // Remove obstacles that are off-screen
      if (obstacle.x + obstacle.width < 0) {
        gameState.obstacles.splice(index, 1)
      }

      // Collision detection - using a slightly smaller hitbox for better gameplay
      if (
        gameState.dino.x + 10 < obstacle.x + obstacle.width &&
        gameState.dino.x + gameState.dino.width - 10 > obstacle.x &&
        gameState.dino.y + gameState.dino.height - 5 > gameState.ground.y - obstacle.height
      ) {
        gameState.gameOver = true
      }
    })

    // Increase speed over time
    if (gameState.frameCount % 500 === 0) {
      gameState.speed += 0.5
    }
  }

  // Draw dinosaur character
  const drawDino = (ctx: CanvasRenderingContext2D, x: number, y: number, frame: number, jumping: boolean) => {
    const gameState = gameStateRef.current

    ctx.fillStyle = "#333"
    ctx.strokeStyle = "#333"
    ctx.lineWidth = 1

    // Body
    ctx.fillRect(x + 10, y + 6, 22, 30)

    // Head
    ctx.fillRect(x + 22, y, 20, 22)

    // Eye
    ctx.fillStyle = "white"
    ctx.fillRect(x + 36, y + 5, 4, 4)
    ctx.fillStyle = "#333"

    // Legs - animate only if not jumping
    if (!jumping) {
      if (frame === 0) {
        // First running frame
        ctx.fillRect(x + 12, y + 36, 6, 12) // Back leg
        ctx.fillRect(x + 26, y + 36, 6, 12) // Front leg
      } else {
        // Second running frame
        ctx.fillRect(x + 16, y + 36, 6, 12) // Back leg
        ctx.fillRect(x + 30, y + 36, 6, 12) // Front leg
      }
    } else {
      // Jumping pose
      ctx.fillRect(x + 12, y + 36, 6, 8) // Back leg
      ctx.fillRect(x + 26, y + 36, 6, 8) // Front leg
    }

    // Arm
    ctx.fillRect(x + 24, y + 16, 8, 4)

    // Tail
    ctx.fillRect(x, y + 10, 10, 8)
  }

  // Draw game elements
  const drawGame = (ctx: CanvasRenderingContext2D) => {
    const gameState = gameStateRef.current

    // Clear canvas
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    // Draw ground
    ctx.beginPath()
    ctx.moveTo(0, gameState.ground.y)
    ctx.lineTo(ctx.canvas.width, gameState.ground.y)
    ctx.strokeStyle = "#333"
    ctx.stroke()

    // Draw dino
    drawDino(ctx, gameState.dino.x, gameState.dino.y, gameState.dino.runFrame, gameState.dino.jumping)

    // Draw obstacles (cacti)
    ctx.fillStyle = "#333"
    gameState.obstacles.forEach((obstacle) => {
      // Draw cactus
      const x = obstacle.x
      const y = gameState.ground.y - obstacle.height
      const width = obstacle.width
      const height = obstacle.height

      // Main stem
      ctx.fillRect(x + width / 2 - 3, y, 6, height)

      // Arms
      if (height > 50) {
        // Left arm
        ctx.fillRect(x, y + height / 3, width / 2, 4)
        ctx.fillRect(x, y + height / 3, 4, height / 4)

        // Right arm
        ctx.fillRect(x + width / 2, y + height / 2, width / 2, 4)
        ctx.fillRect(x + width - 4, y + height / 2, 4, height / 4)
      } else {
        // Simpler cactus for smaller ones
        ctx.fillRect(x, y + height / 2, width, 4)
      }
    })

    // Draw score
    ctx.fillStyle = "#333"
    ctx.font = "20px Arial"
    ctx.fillText(`Score: ${gameState.score}`, 650, 30)

    // Draw high score
    if (highScore > 0) {
      ctx.fillText(`High Score: ${highScore}`, 650, 60)
    }

    // Draw game over message
    if (gameState.gameOver) {
      ctx.fillStyle = "#333"
      ctx.font = "bold 40px Arial"
      ctx.fillText("GAME OVER", 300, 150)
      ctx.font = "20px Arial"
      ctx.fillText("Press Space to restart", 310, 180)
    }

    // Draw start message
    if (!gameStarted && !gameState.gameOver) {
      ctx.fillStyle = "#333"
      ctx.font = "bold 30px Arial"
      ctx.fillText("Press Space to start", 280, 150)
    }
  }

  // Start or restart game
  const startGame = () => {
    // Reset game state
    gameStateRef.current = {
      dino: {
        x: 50,
        y: 200,
        width: 44,
        height: 48,
        jumping: false,
        jumpHeight: 15,
        jumpVelocity: 0,
        gravity: 0.8,
        runFrame: 0,
        frameCount: 0,
      },
      obstacles: [],
      ground: {
        y: 260,
      },
      speed: 5,
      frameCount: 0,
      score: 0,
      gameOver: false,
    }

    setScore(0)
    setGameOver(false)
    setGameStarted(true)
  }

  return (
    <div className="flex flex-col items-center">
     <h2 className="text-2xl font-semibold text-zinc-800 mb-8">
              <span className="inline-block px-3 py-1 rounded-md" style={{ backgroundColor: "rgb(253, 224, 71)" }}>Take a Break</span>
            </h2>
      <p className="text-gray-600 mb-6">Press Space or Up Arrow to jump. Avoid the obstacles!</p>

      <div className="relative border border-gray-300 rounded-lg overflow-hidden shadow-md">
        <canvas ref={canvasRef} className="bg-white" width={800} height={300} />

        {!gameStarted && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Button onClick={startGame} className="px-6 py-3 text-lg">
              {gameOver ? "Play Again" : "Start Game"}
            </Button>
          </div>
        )}
      </div>

      <div className="mt-4 flex gap-4 items-center">
        <div className="text-lg">Score: {score}</div>
        {highScore > 0 && <div className="text-lg">High Score: {highScore}</div>}
      </div>
    </div>
  )
}

