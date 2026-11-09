import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { FeaturedProjectsSection } from "@/components/FeaturedProjectsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AdditionalProjectsSection } from "@/components/AdditionalProjectsSection";
import { PartnershipSection } from "@/components/PartnershipSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { InterestsSection } from "@/components/InterestsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-[#F4EFE7] text-[#28221E]">
      <HeroSection />
      <AboutSection />
      <FeaturedProjectsSection />
      <ProjectsSection />
      <AdditionalProjectsSection />
      <PartnershipSection />
      <SkillsSection />
      <ExperienceSection />
      <InterestsSection />
      <ContactSection />
      <Footer />
      <Chatbot />
    </main>
  );
}
