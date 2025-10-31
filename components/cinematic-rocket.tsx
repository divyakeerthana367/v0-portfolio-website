"use client"

import { useEffect, useRef, useState } from "react"

interface RocketTrajectory {
  scrollProgress: number
  rocketX: number
  rocketY: number
  rotation: number
}

export default function CinematicRocket({ scrollProgress = 0 }: { scrollProgress?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const updateDimensions = () => {
      setDimensions({
        width: canvas.offsetWidth,
        height: canvas.offsetHeight,
      })
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || dimensions.width === 0) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = dimensions.width
    canvas.height = dimensions.height

    let animationFrameId: number
    let time = 0

    const drawRocket = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Starting position (bottom center)
      const startX = canvas.width / 2
      const startY = canvas.height

      // Rocket main body size
      const rocketWidth = 60
      const rocketHeight = 140

      // Animation parameters
      const baseFlameOscillation = Math.sin(time * 0.15) * 20 + 50

      // Draw rocket at fixed center position with launch animation
      const rocketY = startY - baseFlameOscillation * 3
      const rocketX = startX

      // Slight horizontal wobble during launch
      const wobble = Math.sin(time * 0.1) * 8

      ctx.save()
      ctx.translate(rocketX + wobble, rocketY)

      // Main rocket body with metallic gradient
      const bodyGradient = ctx.createLinearGradient(
        -rocketWidth / 2,
        -rocketHeight / 2,
        -rocketWidth / 2,
        rocketHeight / 2,
      )
      bodyGradient.addColorStop(0, "#ffffff")
      bodyGradient.addColorStop(0.3, "#e8eaed")
      bodyGradient.addColorStop(0.5, "#6c5ce7")
      bodyGradient.addColorStop(0.7, "#e8eaed")
      bodyGradient.addColorStop(1, "#ffffff")

      ctx.fillStyle = bodyGradient
      ctx.fillRect(-rocketWidth / 2, -rocketHeight / 2, rocketWidth, rocketHeight)

      // Rocket nose cone (red)
      ctx.fillStyle = "#ff6b6b"
      ctx.beginPath()
      ctx.moveTo(-rocketWidth / 2, -rocketHeight / 2)
      ctx.lineTo(rocketWidth / 2, -rocketHeight / 2)
      ctx.lineTo(0, -rocketHeight / 2 - 40)
      ctx.closePath()
      ctx.fill()

      // Nose cone inner glow
      ctx.strokeStyle = "rgba(255, 255, 255, 0.4)"
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(0, -rocketHeight / 2 - 35, 8, 0, Math.PI * 2)
      ctx.stroke()

      // Left fin
      ctx.fillStyle = "rgba(60, 212, 197, 0.85)"
      ctx.beginPath()
      ctx.moveTo(-rocketWidth / 2, rocketHeight / 4)
      ctx.lineTo(-rocketWidth, rocketHeight / 2)
      ctx.lineTo(-rocketWidth / 2, rocketHeight / 3)
      ctx.closePath()
      ctx.fill()

      // Right fin
      ctx.beginPath()
      ctx.moveTo(rocketWidth / 2, rocketHeight / 4)
      ctx.lineTo(rocketWidth, rocketHeight / 2)
      ctx.lineTo(rocketWidth / 2, rocketHeight / 3)
      ctx.closePath()
      ctx.fill()

      // Window details on body
      ctx.fillStyle = "#3cd4c5"
      ctx.beginPath()
      ctx.arc(0, -rocketHeight / 4, 6, 0, Math.PI * 2)
      ctx.fill()

      ctx.fillStyle = "rgba(108, 92, 231, 0.3)"
      ctx.beginPath()
      ctx.arc(0, -rocketHeight / 4, 8, 0, Math.PI * 2)
      ctx.fill()

      // MAIN EXHAUST SYSTEM - Hot gas trail
      const flameHeight = baseFlameOscillation
      const flameWidth = rocketWidth * 0.7

      // Primary flame (orange-red)
      const flameGradient = ctx.createLinearGradient(0, rocketHeight / 2, 0, rocketHeight / 2 + flameHeight)
      flameGradient.addColorStop(0, "rgba(255, 107, 107, 0.9)")
      flameGradient.addColorStop(0.4, "rgba(255, 155, 40, 0.6)")
      flameGradient.addColorStop(1, "rgba(255, 190, 11, 0)")

      ctx.fillStyle = flameGradient
      ctx.beginPath()
      ctx.moveTo(-flameWidth / 2, rocketHeight / 2)
      ctx.lineTo(flameWidth / 2, rocketHeight / 2)
      ctx.quadraticCurveTo(flameWidth * 0.7, rocketHeight / 2 + flameHeight * 0.6, 0, rocketHeight / 2 + flameHeight)
      ctx.quadraticCurveTo(-flameWidth * 0.7, rocketHeight / 2 + flameHeight * 0.6, -flameWidth / 2, rocketHeight / 2)
      ctx.closePath()
      ctx.fill()

      // Inner flame (bright yellow-white)
      const innerFlameGradient = ctx.createLinearGradient(0, rocketHeight / 2, 0, rocketHeight / 2 + flameHeight * 0.7)
      innerFlameGradient.addColorStop(0, "rgba(255, 220, 100, 0.9)")
      innerFlameGradient.addColorStop(0.5, "rgba(255, 200, 50, 0.5)")
      innerFlameGradient.addColorStop(1, "rgba(255, 190, 11, 0)")

      ctx.fillStyle = innerFlameGradient
      ctx.beginPath()
      ctx.moveTo(-flameWidth * 0.4, rocketHeight / 2)
      ctx.lineTo(flameWidth * 0.4, rocketHeight / 2)
      ctx.quadraticCurveTo(
        flameWidth * 0.3,
        rocketHeight / 2 + flameHeight * 0.5,
        0,
        rocketHeight / 2 + flameHeight * 0.7,
      )
      ctx.quadraticCurveTo(-flameWidth * 0.3, rocketHeight / 2 + flameHeight * 0.5, -flameWidth * 0.4, rocketHeight / 2)
      ctx.closePath()
      ctx.fill()

      // Glow effect around flame
      ctx.strokeStyle = "rgba(255, 107, 107, 0.3)"
      ctx.lineWidth = 8
      ctx.lineCap = "round"
      ctx.beginPath()
      ctx.moveTo(-flameWidth / 2 - 10, rocketHeight / 2)
      ctx.lineTo(0, rocketHeight / 2 + flameHeight + 20)
      ctx.lineTo(flameWidth / 2 + 10, rocketHeight / 2)
      ctx.stroke()

      ctx.restore()

      time += 1
      animationFrameId = requestAnimationFrame(drawRocket)
    }

    drawRocket()
    return () => cancelAnimationFrame(animationFrameId)
  }, [dimensions])

  return <canvas ref={canvasRef} className="w-full h-96 md:h-screen" />
}
