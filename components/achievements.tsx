"use client"

export default function Achievements() {
  const achievements = [
    {
      icon: "🏆",
      title: "CBSE-IBM Problem Solvers Tournament",
      description: "Winner - Identified and developed sustainable solution concept, selected for IBM 2-week internship",
      year: "2023",
    },
    {
      icon: "📚",
      title: "IBM SkillsBuild Program",
      description: "Completed comprehensive courses in AI, Cloud Computing, IoT, and Blockchain fundamentals",
      year: "2023",
    },
    {
      icon: "🚀",
      title: "Model Rocketry Program",
      description:
        "Successfully designed, built, and launched model rockets; applied physics and engineering principles",
      year: "2023",
    },
    {
      icon: "🏢",
      title: "Tata Realty Job Shadow",
      description: "Gained hands-on industry experience in real estate technology and business operations",
      year: "2024",
    },
    {
      icon: "🎓",
      title: "B.Tech CSE @ VIT Chennai",
      description: "Pursuing specialized Computer Science Engineering degree with AI & ML focus (2025-2029)",
      year: "2025",
    },
    {
      icon: "📊",
      title: "IITM Data Science Pathway",
      description: "Ongoing learning: Statistics, Python, ML algorithms, Data Analysis, and real-world projects",
      year: "2025",
    },
  ]

  return (
    <section id="achievements" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
            Recognition & Milestones
          </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Building a record of growth and achievement
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:glow-secondary group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{achievement.icon}</div>
              <span className="text-xs text-primary font-semibold">{achievement.year}</span>
              <h3 className="text-lg font-bold text-secondary mt-2">{achievement.title}</h3>
              <p className="text-sm text-muted-foreground mt-3">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
