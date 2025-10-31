"use client"

import type React from "react"
import { useEffect, useState } from "react"
import RocketNav from "./rocket-nav"

const navigationItems = [
  { label: "About", href: "#about", icon: "📋" },
  { label: "Skills", href: "#skills", icon: "⚙️" },
  { label: "Projects", href: "#projects", icon: "🚀" },
  { label: "Learning", href: "#learning", icon: "📚" },
  { label: "Contact", href: "#contact", icon: "📡" },
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    document.documentElement.classList.add("light")
    document.documentElement.classList.remove("dark")
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "learning", "contact"]
      let currentSection = "hero"

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= window.innerHeight / 2) {
            currentSection = section
          }
        }
      }

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href")
    if (href?.startsWith("#")) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">DK</span>
            </span>
          </div>

          {/* Navigation items */}
          <div className="hidden md:flex gap-6 items-center">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={handleNavClick}
                className={`text-sm transition-all duration-300 relative ${
                  activeSection === item.href.slice(1)
                    ? "text-secondary font-semibold glow-text-secondary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                {activeSection === item.href.slice(1) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary" />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>

      <RocketNav />
    </nav>
  )
}
