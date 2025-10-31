"use client"

import { useEffect, useRef } from "react"

export default function Rocket3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    let animationFrameId: number
    let rotation = 0

    const drawRocket = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.save()
      ctx.translate(canvas.width / 2, canvas.height / 2)
      rotation += 0.005

      // Simple 3D perspective illusion
      const scale = Math.sin(rotation * 2) * 0.1 + 0.9

      // Rocket body (metallic gradient)
      const gradient = ctx.createLinearGradient(-20, -60, -20, 60)
      gradient.addColorStop(0, "#6c5ce7")
      gradient.addColorStop(0.5, "#ffffff")
      gradient.addColorStop(1, "#3cd4c5")

      // Main rocket body
      ctx.fillStyle = gradient
      ctx.fillRect(-15 * scale, -50 * scale, 30 * scale, 100 * scale)

      // Rocket nose (cone)
      ctx.fillStyle = "#ff6b6b"
      ctx.beginPath()
      ctx.moveTo(0, -60 * scale)
      ctx.lineTo(-15 * scale, -40 * scale)
      ctx.lineTo(15 * scale, -40 * scale)
      ctx.closePath()
      ctx.fill()

      // Rocket fins
      ctx.fillStyle = "rgba(60, 212, 197, 0.7)"
      ctx.beginPath()
      ctx.moveTo(-15 * scale, 30 * scale)
      ctx.lineTo(-35 * scale, 50 * scale)
      ctx.lineTo(-15 * scale, 45 * scale)
      ctx.closePath()
      ctx.fill()

      ctx.beginPath()
      ctx.moveTo(15 * scale, 30 * scale)
      ctx.lineTo(35 * scale, 50 * scale)
      ctx.lineTo(15 * scale, 45 * scale)
      ctx.closePath()
      ctx.fill()

      // Rocket flame
      const flameHeight = Math.sin(rotation * 4) * 15 + 40
      ctx.fillStyle = "rgba(255, 107, 107, 0.6)"
      ctx.beginPath()
      ctx.moveTo(-10 * scale, 60 * scale)
      ctx.lineTo(10 * scale, 60 * scale)
      ctx.lineTo(0, (60 + flameHeight) * scale)
      ctx.closePath()
      ctx.fill()

      // Inner flame
      ctx.fillStyle = "rgba(255, 190, 11, 0.4)"
      ctx.beginPath()
      ctx.moveTo(-6 * scale, 60 * scale)
      ctx.lineTo(6 * scale, 60 * scale)
      ctx.lineTo(0, (60 + flameHeight * 0.7) * scale)
      ctx.closePath()
      ctx.fill()

      ctx.restore()
      animationFrameId = requestAnimationFrame(drawRocket)
    }

    drawRocket()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-64 md:h-80" />
}
