"use client"

import { useEffect, useState } from "react"

export default function LearningJourney() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleItems((prev) => new Set([...prev, index]))
          }
        })
      },
      { threshold: 0.3 },
    )

    document.querySelectorAll("[data-index]").forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const journey = [
    {
      phase: "Foundations",
      title: "STEM Excellence",
      items: [
        "School-based STEM projects",
        "Strong fundamentals in Physics & Mathematics",
        "Early coding introduction",
      ],
    },
    {
      phase: "Awakening",
      title: "AI & Tech Enthusiasm",
      items: ["Discovery of AI potential", "Participation in tech competitions", "Problem-solving mindset development"],
    },
    {
      phase: "Immersion",
      title: "Active Learning",
      items: [
        "CBSE-IBM Innovation Challenge",
        "IBM SkillsBuild certifications",
        "Model Rocketry hands-on project",
        "Real-world industry shadowing",
      ],
    },
    {
      phase: "Acceleration",
      title: "Formal Tech Education",
      items: [
        "B.Tech CSE @ VIT Chennai",
        "AI & ML specialization track",
        "IITM Data Science pathway",
        "Project-based learning",
      ],
    },
    {
      phase: "Building",
      title: "Creating Solutions",
      items: [
        "AI/ML projects",
        "Data analysis applications",
        "Open source contributions planned",
        "Internship opportunities",
      ],
    },
    {
      phase: "Launch",
      title: "Career Preparation",
      items: [
        "Advanced ML specialization",
        "Industry internships",
        "Portfolio development",
        "Technical leadership growth",
      ],
    },
  ]

  return (
    <section id="learning" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Learning Roadmap
          </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          From curiosity to expertise: the journey
        </p>

        {/* Animated timeline */}
        <div className="relative">
          {/* Background line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent opacity-30" />

          <div className="space-y-8">
            {journey.map((stage, idx) => (
              <div
                key={idx}
                data-index={idx}
                className={`transition-all duration-700 ${visibleItems.has(idx) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                <div className={`flex gap-8 ${idx % 2 === 0 ? "" : "flex-row-reverse"}`}>
                  {/* Content card */}
                  <div className="w-1/2">
                    <div className="p-6 rounded-lg bg-card border border-border hover:border-secondary/50 transition-all duration-300 hover:glow-secondary">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full">
                          {stage.phase}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-secondary mb-3">{stage.title}</h3>
                      <ul className="space-y-2">
                        {stage.items.map((item, i) => (
                          <li key={i} className="flex gap-2 text-muted-foreground">
                            <span className="text-accent">→</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Center milestone marker */}
                  <div className="w-0 flex justify-center items-start pt-6">
                    <div className="w-5 h-5 bg-gradient-to-r from-primary to-secondary rounded-full border-4 border-background shadow-lg shadow-primary/50" />
                  </div>

                  {/* Empty space */}
                  <div className="w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
