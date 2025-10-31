"use client"

import { useEffect, useRef, useState } from "react"

interface RocketPosition {
  x: number
  y: number
  rotation: number
}

export default function RocketNav() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    let time = 0
    let mouseX = canvas.width / 2
    let mouseY = canvas.height / 2
    let rocketX = canvas.width / 2
    let rocketY = canvas.height / 2
    let rocketVelX = 0
    let rocketVelY = 0

    // Mouse tracking for interactive drift
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
    }

    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY / windowHeight
      setScrollProgress(scrolled)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    // Particle system for exhaust
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      life: number
      maxLife: number
    }> = []

    const drawRocket = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.016

      const loopDuration = 4
      const normalizedTime = (time % loopDuration) / loopDuration
      const targetX =
        normalizedTime < 0.5 ? normalizedTime * 2 * canvas.width : (1 - (normalizedTime - 0.5) * 2) * canvas.width
      const targetY = canvas.height / 2

      // Gentle acceleration physics
      const dx = targetX - rocketX
      const dy = targetY - rocketY
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance > 5) {
        const speed = 0.08
        rocketVelX += (dx / distance) * speed
        rocketVelY += (dy / distance) * speed
      }

      // Apply drag
      rocketVelX *= 0.92
      rocketVelY *= 0.92

      rocketX += rocketVelX
      rocketY += rocketVelY

      // Cursor proximity drift
      const cursorDx = mouseX - rocketX
      const cursorDy = mouseY - rocketY
      const cursorDist = Math.sqrt(cursorDx * cursorDx + cursorDy * cursorDy)

      if (cursorDist < 200) {
        const repulse = 0.015
        rocketVelX -= (cursorDx / cursorDist) * repulse
        rocketVelY -= (cursorDy / cursorDist) * repulse
      }

      // Calculate rotation
      const rocketRotation = Math.atan2(rocketVelY, rocketVelX)

      // Draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.life -= 1
        p.vy += 0.1

        const alpha = (p.life / p.maxLife) * 0.6
        ctx.fillStyle = `rgba(255, 107, 107, ${alpha})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2)
        ctx.fill()

        if (p.life <= 0) {
          particles.splice(i, 1)
        }
      }

      // Create exhaust particles
      if (Math.random() < 0.35) {
        particles.push({
          x: rocketX - Math.cos(rocketRotation) * 10,
          y: rocketY - Math.sin(rocketRotation) * 10,
          vx: (Math.random() - 0.5) * 2 - Math.cos(rocketRotation) * 2.5,
          vy: (Math.random() - 0.5) * 2 - Math.sin(rocketRotation) * 2.5,
          life: 40,
          maxLife: 40,
        })
      }

      const gradient = ctx.createRadialGradient(rocketX, rocketY, 0, rocketX, rocketY, 25)
      gradient.addColorStop(0, "rgba(108, 92, 231, 0.4)")
      gradient.addColorStop(1, "rgba(108, 92, 231, 0)")
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(rocketX, rocketY, 25, 0, Math.PI * 2)
      ctx.fill()

      // Rocket body
      ctx.save()
      ctx.translate(rocketX, rocketY)
      ctx.rotate(rocketRotation)

      ctx.fillStyle = "#6c5ce7"
      ctx.beginPath()
      ctx.moveTo(12, 0)
      ctx.lineTo(-8, -6)
      ctx.lineTo(-4, 0)
      ctx.lineTo(-8, 6)
      ctx.closePath()
      ctx.fill()

      ctx.fillStyle = "#3cd4c5"
      ctx.beginPath()
      ctx.moveTo(-4, -4)
      ctx.lineTo(-8, -2)
      ctx.lineTo(-8, 2)
      ctx.lineTo(-4, 4)
      ctx.closePath()
      ctx.fill()

      ctx.restore()

      requestAnimationFrame(drawRocket)
    }

    drawRocket()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-16" />
}
