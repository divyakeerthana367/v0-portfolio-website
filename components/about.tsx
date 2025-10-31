"use client"

export default function About() {
  const timeline = [
    {
      year: "2023",
      title: "CBSE-IBM Problem Solver Winner",
      description: "Identified and solved real-world sustainability challenge, selected for 2-week IBM internship",
    },
    {
      year: "2023",
      title: "IBM SkillsBuild Journey",
      description: "Completed courses in AI, Cloud Computing, IoT, and Blockchain fundamentals",
    },
    {
      year: "2023",
      title: "Model Rocketry Project",
      description: "Designed, built, and successfully launched model rockets; applied physics and engineering",
    },
    {
      year: "2024",
      title: "Tata Realty Job Shadow",
      description: "Gained industry experience in real estate technology and business operations",
    },
    {
      year: "2025",
      title: "VIT Chennai - B.Tech CSE",
      description: "Pursuing Computer Science Engineering specialization, focusing on AI & ML track",
    },
    {
      year: "2025",
      title: "IITM DS Learning Path",
      description: "Ongoing: Data Science pathway - Statistics, Python, ML algorithms, Data Analysis",
    },
  ]

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Mission Profile
          </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Learning, experimenting, and improving every day
        </p>

        <div className="mb-16">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary" />

            {/* Timeline items */}
            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <div key={idx} className={`flex gap-8 ${idx % 2 === 0 ? "" : "flex-row-reverse"}`}>
                  {/* Content */}
                  <div className="w-1/2">
                    <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:glow-primary">
                      <span className="text-primary font-bold text-lg">{item.year}</span>
                      <h3 className="text-lg font-semibold text-secondary mt-2">{item.title}</h3>
                      <p className="text-muted-foreground mt-2">{item.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="w-0 flex justify-center items-start pt-8">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background" />
                  </div>

                  {/* Empty space */}
                  <div className="w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Personal note */}
        <div className="p-8 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
          <p className="text-lg text-foreground leading-relaxed">
            I'm a curious learner driven by the intersection of AI and real-world problem-solving. Currently on a
            mission to master data science while exploring AI applications. My journey spans traditional academics,
            hands-on engineering projects, innovation challenges, and practical internship experiences. I believe in
            learning by doing and am passionate about transforming ideas into tangible solutions.
          </p>
        </div>
      </div>
    </section>
  )
}
