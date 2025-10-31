"use client"

import { useState } from "react"

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "AI Chatbot Prototype",
      emoji: "💬",
      objective: "Build intelligent conversational interface",
      tools: ["Python", "NLP Fundamentals", "Machine Learning"],
      phases: ["Research", "Development", "Testing"],
      result: "Functional chatbot with basic intent recognition",
      learning: "Learned fundamentals of NLP and user interaction design",
    },
    {
      id: 2,
      title: "Model Rocketry Build & Launch",
      emoji: "🚀",
      objective: "Design, build, and successfully launch model rocket",
      tools: ["Physics", "Engineering Design", "Problem Solving"],
      phases: ["Design", "Construction", "Testing", "Launch"],
      result: "Successfully launched rocket with precision calculations",
      learning: "Applied real-world physics and engineering principles",
    },
    {
      id: 3,
      title: "IBM Innovation Challenge",
      emoji: "💡",
      objective: "Develop sustainability solution concept",
      tools: ["AI/ML", "Data Analysis", "Design Thinking"],
      phases: ["Ideation", "Prototyping", "Presentation"],
      result: "Created innovative solution concept for environmental challenge",
      learning: "Collaborated with team on AI-driven sustainability ideas",
    },
  ]

  return (
    <section
      id="projects"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/30 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "5s", animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Mission Control
          </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Active and completed mission records
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`p-6 rounded-lg bg-card border border-border transition-all duration-300 text-left group cursor-pointer transform ${
                hoveredId === project.id
                  ? "scale-105 border-primary/50 glow-primary shadow-2xl"
                  : "hover:border-primary/50 hover:glow-primary"
              }`}
            >
              <div className="text-3xl mb-3 transition-transform duration-300 group-hover:scale-125 inline-block">
                {project.emoji}
              </div>
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold text-primary group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>
                <span className="text-xl opacity-50 group-hover:opacity-100 transition-opacity">◆</span>
              </div>
              <p className="text-sm text-muted-foreground">{project.objective}</p>
            </button>
          ))}
        </div>

        {activeProject && (
          <div className="p-8 rounded-lg bg-card border-2 border-primary/50 space-y-4 animate-in fade-in">
            {(() => {
              const project = projects.find((p) => p.id === activeProject)
              return (
                <>
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{project.emoji}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-secondary mb-2">{project.title}</h3>
                      <p className="text-muted-foreground">Mission Objective: {project.objective}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-primary font-semibold mb-2">Systems Used:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool, i) => (
                          <span key={i} className="px-3 py-1 bg-primary/20 text-primary rounded text-sm">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-secondary font-semibold mb-2">Development Phases:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.phases.map((phase, i) => (
                          <span key={i} className="px-3 py-1 bg-secondary/20 text-secondary rounded text-sm">
                            {phase}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-foreground font-semibold mb-1">Launch Result:</p>
                    <p className="text-muted-foreground">{project.result}</p>
                  </div>
                  <div>
                    <p className="text-foreground font-semibold mb-1">Learning Reflection:</p>
                    <p className="text-muted-foreground">{project.learning}</p>
                  </div>
                </>
              )
            })()}
          </div>
        )}
      </div>
    </section>
  )
}
