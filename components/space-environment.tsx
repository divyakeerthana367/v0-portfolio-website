"use client"

import { useEffect, useRef } from "react"

export default function SpaceEnvironment() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener("mousemove", handleMouseMove)

    // Create animated planets with hover effects
    const planets = [
      { x: "8%", y: "12%", size: "140px", color: "#ff6b6b", opacity: 0.7, duration: 25, glow: "#ff6b6b" },
      { x: "88%", y: "65%", size: "200px", color: "#3cd4c5", opacity: 0.5, duration: 30, glow: "#3cd4c5" },
      { x: "12%", y: "78%", size: "110px", color: "#6c5ce7", opacity: 0.6, duration: 35, glow: "#6c5ce7" },
      { x: "92%", y: "28%", size: "95px", color: "#ffbe0b", opacity: 0.4, duration: 28, glow: "#ffbe0b" },
      { x: "5%", y: "45%", size: "70px", color: "#ff85a1", opacity: 0.5, duration: 40, glow: "#ff85a1" },
      { x: "80%", y: "15%", size: "85px", color: "#95e1d3", opacity: 0.45, duration: 32, glow: "#95e1d3" },
    ]

    planets.forEach((planet, idx) => {
      const element = document.createElement("div")
      element.className = "absolute rounded-full pointer-events-auto cursor-pointer group"
      element.style.cssText = `
        left: ${planet.x};
        top: ${planet.y};
        width: ${planet.size};
        height: ${planet.size};
        background: radial-gradient(135deg, ${planet.color} 0%, rgba(0,0,0,0.4) 100%);
        opacity: ${planet.opacity};
        animation: float-planet ${planet.duration}s ease-in-out infinite;
        box-shadow: inset -15px -15px 40px rgba(0,0,0,0.6), 0 0 50px ${planet.glow}55, 0 0 100px ${planet.glow}22;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      `

      element.addEventListener("mouseenter", () => {
        element.style.transform = "scale(1.15) translateZ(0)"
        element.style.boxShadow = `inset -15px -15px 40px rgba(0,0,0,0.6), 0 0 80px ${planet.glow}88, 0 0 150px ${planet.glow}55`
      })
      element.addEventListener("mouseleave", () => {
        element.style.transform = "scale(1)"
        element.style.boxShadow = `inset -15px -15px 40px rgba(0,0,0,0.6), 0 0 50px ${planet.glow}55, 0 0 100px ${planet.glow}22`
      })

      container.appendChild(element)
    })

    // Create orbital systems with moons
    const orbitalSystems = [
      { x: "25%", y: "35%", orbitSize: 150, moonSize: 12, color: "#a8e6cf", duration: 20 },
      { x: "70%", y: "50%", orbitSize: 120, moonSize: 10, color: "#ffd3b6", duration: 25 },
    ]

    orbitalSystems.forEach((system) => {
      const orbit = document.createElement("div")
      orbit.className = "absolute pointer-events-none"
      orbit.style.cssText = `
        left: ${system.x};
        top: ${system.y};
        width: ${system.orbitSize}px;
        height: ${system.orbitSize}px;
        border: 1px dashed rgba(108, 92, 231, 0.15);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        animation: orbit-fade ${system.duration * 2}s ease-in-out infinite;
      `
      container.appendChild(orbit)

      const moon = document.createElement("div")
      moon.className = "absolute rounded-full pointer-events-none"
      moon.style.cssText = `
        width: ${system.moonSize}px;
        height: ${system.moonSize}px;
        background: ${system.color};
        box-shadow: 0 0 15px ${system.color};
        animation: orbit-moon ${system.duration}s linear infinite;
        left: calc(${system.x} + ${system.orbitSize / 2}px);
        top: ${system.y};
      `
      container.appendChild(moon)
    })

    // Create satellites (higher altitude) with pulse effects
    for (let i = 0; i < 5; i++) {
      const satellite = document.createElement("div")
      satellite.className = "absolute pointer-events-none"
      satellite.style.cssText = `
        width: 6px;
        height: 6px;
        background: #3cd4c5;
        border-radius: 50%;
        box-shadow: 0 0 12px #3cd4c5, 0 0 20px rgba(60, 212, 197, 0.3);
        animation: orbit-satellite ${18 + i * 8}s linear infinite, satellite-pulse ${3 + i * 0.5}s ease-in-out infinite;
        left: calc(50% - 3px);
        top: calc(25% + ${i * 80}px);
      `
      container.appendChild(satellite)
    }

    // Create high-speed comets with trail effects
    for (let i = 0; i < 4; i++) {
      const comet = document.createElement("div")
      comet.className = "absolute pointer-events-none"
      comet.style.cssText = `
        width: 5px;
        height: 5px;
        background: #ffbe0b;
        border-radius: 50%;
        box-shadow: 0 0 20px #ffbe0b, 0 0 40px rgba(255, 190, 11, 0.4);
        animation: comet-travel ${25 + i * 10}s linear infinite;
        left: 0;
        top: calc(${15 + i * 20}%);
        filter: drop-shadow(-8px 0 8px rgba(255, 190, 11, 0.3));
      `
      container.appendChild(comet)
    }

    // Create meteors with enhanced trails
    for (let i = 0; i < 4; i++) {
      const meteor = document.createElement("div")
      meteor.className = "absolute pointer-events-none"
      meteor.style.cssText = `
        width: 3px;
        height: 3px;
        background: #ff85a1;
        border-radius: 50%;
        box-shadow: 0 0 10px #ff85a1;
        animation: meteor-fall ${15 + i * 12}s linear infinite;
        left: calc(${20 + i * 30}%);
        top: -10px;
      `
      container.appendChild(meteor)
    }

    for (let i = 0; i < 3; i++) {
      const booster = document.createElement("div")
      booster.className = "absolute pointer-events-auto cursor-pointer"
      booster.style.cssText = `
        width: 12px;
        height: 12px;
        background: radial-gradient(circle, #ff6b6b, #ff0000);
        border-radius: 50%;
        left: calc(${30 + i * 25}%);
        top: calc(${40 + i * 15}%);
        box-shadow: 0 0 20px #ff6b6b, inset -2px -2px 5px rgba(0,0,0,0.5);
        animation: booster-pulse ${2 + i * 0.3}s ease-in-out infinite;
        transition: transform 0.3s ease;
      `

      booster.addEventListener("mouseenter", () => {
        booster.style.transform = "scale(1.5)"
        booster.style.boxShadow = "0 0 40px #ff6b6b, inset -2px -2px 5px rgba(0,0,0,0.5)"
      })
      booster.addEventListener("mouseleave", () => {
        booster.style.transform = "scale(1)"
        booster.style.boxShadow = "0 0 20px #ff6b6b, inset -2px -2px 5px rgba(0,0,0,0.5)"
      })

      container.appendChild(booster)
    }

    const blackHole = document.createElement("div")
    blackHole.className = "absolute pointer-events-none"
    blackHole.style.cssText = `
      width: 80px;
      height: 80px;
      left: 15%;
      top: 20%;
      opacity: 0.4;
    `
    blackHole.innerHTML = `
      <div style="
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: radial-gradient(circle at 30% 30%, rgba(0,0,0,0.8), rgba(0,0,0,0.95), #000);
        box-shadow: 0 0 40px rgba(0,0,0,0.7), inset 0 0 30px rgba(0,0,0,0.9);
        animation: black-hole-spin 4s linear infinite;
      ">
        <div style="
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2px solid rgba(60, 212, 197, 0.2);
          animation: black-hole-orbit 3s linear infinite;
        "></div>
      </div>
    `
    container.appendChild(blackHole)

    const wormhole = document.createElement("div")
    wormhole.className = "absolute pointer-events-none"
    wormhole.style.cssText = `
      width: 100px;
      height: 100px;
      right: 10%;
      bottom: 25%;
      opacity: 0.3;
    `
    wormhole.innerHTML = `
      <div style="
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: conic-gradient(
          from 0deg,
          #6c5ce7 0deg,
          #3cd4c5 90deg,
          #6c5ce7 180deg,
          #3cd4c5 270deg,
          #6c5ce7 360deg
        );
        animation: wormhole-spin 2s linear infinite;
      "></div>
    `
    container.appendChild(wormhole)

    const aurora = document.createElement("div")
    aurora.className = "absolute pointer-events-none"
    aurora.style.cssText = `
      width: 200%;
      height: 300px;
      left: -50%;
      top: 10%;
      opacity: 0.15;
      animation: aurora-wave 4s ease-in-out infinite;
    `
    aurora.innerHTML = `
      <div style="
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, 
          transparent 0%,
          #3cd4c5 25%,
          #6c5ce7 50%,
          #3cd4c5 75%,
          transparent 100%);
        filter: blur(30px);
      "></div>
    `
    container.appendChild(aurora)

    for (let i = 0; i < 8; i++) {
      const asteroid = document.createElement("div")
      asteroid.className = "absolute pointer-events-auto cursor-pointer"
      const size = 4 + Math.random() * 8
      asteroid.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        background: rgba(200, 200, 200, ${0.4 + Math.random() * 0.3});
        border-radius: ${Math.random() > 0.5 ? "50%" : "30%"};
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: asteroid-drift ${20 + Math.random() * 40}s linear infinite;
        opacity: ${0.3 + Math.random() * 0.4};
        transition: transform 0.3s ease;
      `

      asteroid.addEventListener("mouseenter", () => {
        asteroid.style.transform = "scale(1.4) rotate(180deg)"
        asteroid.style.opacity = "0.8"
      })
      asteroid.addEventListener("mouseleave", () => {
        asteroid.style.transform = "scale(1)"
        asteroid.style.opacity = `${0.3 + Math.random() * 0.4}`
      })

      container.appendChild(asteroid)
    }

    for (let i = 0; i < 60; i++) {
      const dust = document.createElement("div")
      dust.className = "absolute rounded-full pointer-events-none"
      const dustSize = 1 + Math.random() * 2.5
      const randomX = Math.random() * 100
      const randomY = Math.random() * 100
      dust.style.cssText = `
        width: ${dustSize}px;
        height: ${dustSize}px;
        background: rgba(255, 255, 255, ${0.2 + Math.random() * 0.6});
        left: ${randomX}%;
        top: ${randomY}%;
        animation: dust-float ${15 + Math.random() * 30}s ease-in-out infinite;
        opacity: ${0.1 + Math.random() * 0.5};
      `

      const dustElement = dust as HTMLElement & { randomX: number; randomY: number }
      dustElement.randomX = randomX
      dustElement.randomY = randomY

      container.appendChild(dust)
    }

    for (let i = 0; i < 3; i++) {
      const nebula = document.createElement("div")
      nebula.className = "absolute pointer-events-none rounded-full blur-3xl"
      nebula.style.cssText = `
        width: ${400 + i * 250}px;
        height: ${300 + i * 200}px;
        background: conic-gradient(
          from ${i * 120}deg,
          rgba(108, 92, 231, 0.08) 0deg,
          rgba(60, 212, 197, 0.06) 90deg,
          rgba(255, 107, 107, 0.04) 180deg,
          rgba(108, 92, 231, 0.08) 360deg
        );
        left: ${15 + i * 40}%;
        top: ${20 + i * 25}%;
        animation: nebula-drift ${40 + i * 25}s ease-in-out infinite, nebula-rotate ${60 + i * 30}s linear infinite;
        opacity: ${0.3 + i * 0.15};
      `
      container.appendChild(nebula)
    }

    const constellations = [
      {
        x: "15%",
        y: "20%",
        points: [
          [0, 0],
          [30, 15],
          [15, 40],
        ],
      },
      {
        x: "75%",
        y: "70%",
        points: [
          [0, 0],
          [40, 20],
          [35, 50],
          [10, 45],
        ],
      },
      {
        x: "40%",
        y: "10%",
        points: [
          [0, 0],
          [25, 10],
          [30, 35],
          [5, 30],
        ],
      },
    ]

    constellations.forEach((constellation) => {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
      svg.setAttribute("viewBox", "0 0 100 100")
      svg.setAttribute("width", "180")
      svg.setAttribute("height", "180")
      svg.setAttribute(
        "style",
        `
        position: absolute;
        left: ${constellation.x};
        top: ${constellation.y};
        pointer-events: auto;
        opacity: 0.3;
        cursor: pointer;
        transition: opacity 0.3s ease;
      `,
      )

      // Draw constellation lines
      for (let i = 0; i < constellation.points.length - 1; i++) {
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line")
        line.setAttribute("x1", String(constellation.points[i][0] * 3))
        line.setAttribute("y1", String(constellation.points[i][1] * 3))
        line.setAttribute("x2", String(constellation.points[i + 1][0] * 3))
        line.setAttribute("y2", String(constellation.points[i + 1][1] * 3))
        line.setAttribute("stroke", "rgba(108, 92, 231, 0.6)")
        line.setAttribute("stroke-width", "0.8")
        svg.appendChild(line)
      }

      // Draw constellation points
      constellation.points.forEach((point) => {
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle")
        circle.setAttribute("cx", String(point[0] * 3))
        circle.setAttribute("cy", String(point[1] * 3))
        circle.setAttribute("r", "2")
        circle.setAttribute("fill", "rgba(60, 212, 197, 0.8)")
        svg.appendChild(circle)
      })

      svg.addEventListener("mouseenter", () => {
        svg.style.opacity = "0.8"
      })
      svg.addEventListener("mouseleave", () => {
        svg.style.opacity = "0.3"
      })

      container.appendChild(svg)
    })

    const spaceStation = document.createElement("div")
    spaceStation.className = "absolute pointer-events-auto cursor-pointer"
    spaceStation.style.cssText = `
      left: 75%;
      top: 8%;
      width: 100px;
      height: 50px;
      opacity: 0.25;
      animation: station-rotate 30s linear infinite;
      transition: opacity 0.3s ease;
    `
    spaceStation.innerHTML = `
      <svg viewBox="0 0 100 50" style="width: 100%; height: 100%; fill: none; stroke: rgba(60, 212, 197, 0.6); stroke-width: 0.8;">
        <rect x="35" y="20" width="30" height="15" />
        <circle cx="10" cy="25" r="8" />
        <circle cx="90" cy="25" r="8" />
        <line x1="20" y1="25" x2="35" y2="25" />
        <line x1="65" y1="25" x2="80" y2="25" />
        <line x1="50" y1="15" x2="50" y2="5" />
        <line x1="50" y1="35" x2="50" y2="45" />
      </svg>
    `

    spaceStation.addEventListener("mouseenter", () => {
      spaceStation.style.opacity = "0.6"
    })
    spaceStation.addEventListener("mouseleave", () => {
      spaceStation.style.opacity = "0.25"
    })

    container.appendChild(spaceStation)

    const shuttle = document.createElement("div")
    shuttle.className = "absolute pointer-events-auto cursor-pointer"
    shuttle.style.cssText = `
      left: 20%;
      top: 60%;
      width: 80px;
      height: 40px;
      opacity: 0.2;
      animation: shuttle-glide 25s ease-in-out infinite;
      transition: opacity 0.3s ease;
    `
    shuttle.innerHTML = `
      <svg viewBox="0 0 100 50" style="width: 100%; height: 100%; fill: none; stroke: rgba(255, 190, 11, 0.6); stroke-width: 1;">
        <path d="M 20 30 L 30 15 L 70 15 L 80 30 L 70 35 L 30 35 Z" />
        <polygon points="30,15 35,10 40,15" />
        <circle cx="35" cy="32" r="3" />
        <circle cx="65" cy="32" r="3" />
      </svg>
    `

    shuttle.addEventListener("mouseenter", () => {
      shuttle.style.opacity = "0.6"
    })
    shuttle.addEventListener("mouseleave", () => {
      shuttle.style.opacity = "0.2"
    })

    container.appendChild(shuttle)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{
        zIndex: 0,
      }}
    >
      <style>{`
        @keyframes float-planet {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-40px) scale(1.08); }
        }

        @keyframes satellite-pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        @keyframes orbit-satellite {
          0% { transform: rotate(0deg) translateX(90px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(90px) rotate(-360deg); }
        }

        @keyframes orbit-moon {
          0% { transform: rotate(0deg) translateX(var(--orbit-size)) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(var(--orbit-size)) rotate(-360deg); }
        }

        @keyframes orbit-fade {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.25; }
        }

        @keyframes comet-travel {
          0% {
            left: -30px;
            opacity: 0;
            filter: blur(0px);
          }
          5% {
            opacity: 1;
            filter: blur(1px);
          }
          85% {
            opacity: 1;
            filter: blur(1px);
          }
          100% {
            left: 100vw;
            opacity: 0;
            filter: blur(12px);
          }
        }

        @keyframes meteor-fall {
          0% {
            top: -20px;
            opacity: 0;
            transform: rotate(-45deg);
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            top: 100vh;
            opacity: 0;
            transform: rotate(-45deg);
          }
        }

        @keyframes booster-pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.2); opacity: 1; }
        }

        @keyframes black-hole-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes black-hole-orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }

        @keyframes wormhole-spin {
          from { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          to { transform: rotate(360deg) scale(1); }
        }

        @keyframes aurora-wave {
          0%, 100% { transform: translateX(0) skewX(0deg); opacity: 0.15; }
          50% { transform: translateX(20px) skewX(5deg); opacity: 0.25; }
        }

        @keyframes asteroid-drift {
          0% { transform: translateX(0px) rotate(0deg); opacity: 0.3; }
          25% { opacity: 0.5; }
          50% { transform: translateX(50px) rotate(180deg); opacity: 0.4; }
          75% { opacity: 0.35; }
          100% { transform: translateX(0px) rotate(360deg); opacity: 0.3; }
        }

        @keyframes dust-float {
          0% { transform: translateY(0px) translateX(0px); opacity: 0.1; }
          50% { transform: translateY(-40px) translateX(30px); opacity: 0.4; }
          100% { transform: translateY(0px) translateX(0px); opacity: 0.1; }
        }

        @keyframes nebula-drift {
          0% { transform: translate(0px, 0px); }
          50% { transform: translate(30px, -15px); }
          100% { transform: translate(0px, 0px); }
        }

        @keyframes nebula-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes station-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes shuttle-glide {
          0% { left: 20%; top: 60%; }
          50% { left: 70%; top: 40%; }
          100% { left: 20%; top: 60%; }
        }
      `}</style>
    </div>
  )
}
