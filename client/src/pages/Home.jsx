import { Navbar } from "../components/Navbar";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { TestimonialSection } from "../components/Testimonial";
import SEO from "../components/SEO";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SEO 
        title="Louay Awadh - Full Stack Developer | React & JavaScript Expert"
        description="Professional portfolio of Louay Awadh - Full Stack Developer specializing in React, JavaScript, Tailwind CSS, and modern web technologies. View projects and get in touch."
        url="https://louayfullstack.onrender.com/"
      />
      {/* Theme Toggle */}
      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <TestimonialSection />
        <ContactSection />
        
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
