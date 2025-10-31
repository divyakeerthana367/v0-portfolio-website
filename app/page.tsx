import Navigation from "@/components/navigation"
import ScrollToTop from "@/components/scroll-to-top"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Achievements from "@/components/achievements"
import LearningJourney from "@/components/learning-journey"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="w-full">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <LearningJourney />
      <Contact />
      <ScrollToTop />
    </main>
  )
}
