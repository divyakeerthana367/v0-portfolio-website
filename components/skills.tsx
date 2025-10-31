"use client"

import { useState } from "react"

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)

  const skillCategories = [
    {
      name: "Languages",
      emoji: "💻",
      skills: ["Python", "HTML/CSS", "JavaScript"],
      level: 85,
    },
    {
      name: "AI & ML",
      emoji: "🧠",
      skills: ["Machine Learning Fundamentals", "Deep Learning Basics", "Data Analysis"],
      level: 70,
    },
    {
      name: "Data Science",
      emoji: "📊",
      skills: ["Data Visualization", "Statistical Analysis", "Problem Solving"],
      level: 75,
    },
    {
      name: "Soft Skills",
      emoji: "🚀",
      skills: ["Team Collaboration", "Problem Solving", "Communication"],
      level: 90,
    },
  ]

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-72 h-72 bg-secondary rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Systems Deck</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Current system diagnostics and capabilities
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredSkill(idx)}
              onMouseLeave={() => setHoveredSkill(null)}
              className={`p-6 rounded-lg bg-card border border-border transition-all duration-500 group cursor-pointer transform ${
                hoveredSkill === idx
                  ? "scale-105 border-secondary/80 glow-secondary shadow-2xl"
                  : "hover:border-secondary/50 hover:glow-secondary"
              }`}
            >
              <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-125 inline-block">
                {category.emoji}
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-bold text-secondary mb-2">{category.name}</h3>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500 opacity-70 group-hover:opacity-100"
                    style={{ width: `${category.level}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">{category.level}% Nominal</p>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li
                    key={i}
                    className="text-sm text-muted-foreground flex items-center gap-2 group-hover:text-foreground transition-colors"
                  >
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
