"use client"

import { useEffect, useState } from "react"
import CinematicRocket from "./cinematic-rocket"
import SpaceEnvironment from "./space-environment"

export default function Hero() {
  const [showContent, setShowContent] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorGlow, setCursorGlow] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setShowContent(true)

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight
      setMousePosition({ x, y })

      setCursorGlow({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <SpaceEnvironment />

      <div className="absolute inset-0 z-[1]">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-secondary/5 opacity-40" />
        <div className="absolute inset-0 starfield opacity-30" />
      </div>

      <div className="absolute inset-0 z-[1] bg-black/25" />

      <div
        className="fixed pointer-events-none z-[0] w-96 h-96 bg-primary/30 rounded-full blur-3xl opacity-30 transition-opacity"
        style={{
          left: `${cursorGlow.x - 192}px`,
          top: `${cursorGlow.y - 192}px`,
        }}
      />

      <div
        className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-25 animate-pulse z-[1]"
        style={{
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
        }}
      />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-25 animate-pulse z-[1]"
        style={{
          transform: `translate(${-mousePosition.x * 20}px, ${-mousePosition.y * 20}px)`,
        }}
      />

      <div className="absolute inset-0 z-[2] flex items-end justify-center pointer-events-none">
        <CinematicRocket />
      </div>

      <div className="relative z-[10] max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
        <h1
          className={`text-5xl sm:text-7xl font-bold mb-6 transition-all duration-1000 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-secondary drop-shadow-lg hover:scale-105 transition-transform duration-300 inline-block">
            DIVYA KEERTHANA S
          </span>
          <style>{`
            span {
              filter: drop-shadow(0 0 20px rgba(108, 92, 231, 0.5)) drop-shadow(0 0 40px rgba(60, 212, 197, 0.3)) drop-shadow(0 2px 8px rgba(0, 0, 0, 0.8));
              text-shadow: 0 0 30px rgba(108, 92, 231, 0.4), 0 0 60px rgba(60, 212, 197, 0.2);
            }
          `}</style>
        </h1>

        <p
          className={`text-lg sm:text-2xl text-white mb-4 transition-all duration-1000 delay-200 font-semibold drop-shadow-xl ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{
            textShadow: "0 0 20px rgba(60, 212, 197, 0.4), 0 2px 4px rgba(0, 0, 0, 0.9)",
          }}
        >
          Aspiring AI & Data Science Engineer on a learning mission.
        </p>

        <p
          className={`text-base sm:text-lg text-gray-100 mb-12 max-w-2xl mx-auto transition-all duration-1000 delay-300 drop-shadow-lg ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{
            textShadow: "0 0 15px rgba(60, 212, 197, 0.3), 0 2px 4px rgba(0, 0, 0, 0.9)",
          }}
        >
          Exploring technology, building projects, and preparing for launch.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-400 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <a
            href="#about"
            className="px-8 py-3 bg-primary hover:bg-primary/80 text-primary-foreground rounded-full font-semibold transition-all duration-300 glow-primary hover:glow-primary shadow-lg hover:shadow-xl hover:scale-110 active:scale-95"
          >
            Initiating Launch Sequence
          </a>
          <a
            href="#projects"
            className="px-8 py-3 border-2 border-secondary text-white hover:bg-secondary/20 rounded-full font-semibold transition-all duration-300 shadow-lg backdrop-blur-sm hover:scale-110 active:scale-95"
          >
            Mission Control
          </a>
        </div>

        <div
          className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-500 ${showContent ? "opacity-100" : "opacity-0"}`}
        >
          <div className="flex flex-col items-center gap-2 animate-bounce-slow">
            <span className="text-white text-sm font-semibold drop-shadow-lg">Scroll for launch details</span>
            <div className="animate-bounce text-white drop-shadow-lg">↓</div>
          </div>
        </div>
      </div>
    </section>
  )
}
