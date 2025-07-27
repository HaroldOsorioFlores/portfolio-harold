import HeroSection from '@/components/hero-section';
import SkillsSection from '@/components/skills-section';
import ProjectsSection from '@/components/projects-section';
import ContactSection from '@/components/contact-section';
import FloatingCTA from '@/components/floating-cta';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <ThemeToggle />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <FloatingCTA />
    </main>
  );
}
