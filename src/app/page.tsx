import { HeroSection } from "@/components/HeroSection"
import ParticleBackground from "@/components/ParticleBackground"
import { AboutSection } from "@/components/AboutSection"
import { SkillsSection } from "@/components/SkillsSection"
import { ProjectsSection } from "@/components/ProjectsSection"
import { AchievementsSection } from "@/components/AchievementsSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"
import { Chatbot } from "@/components/Chatbot"

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <ParticleBackground />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
      <Chatbot />
    </main>
  );
}
