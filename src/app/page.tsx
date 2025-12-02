import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ChatWidget from "@/components/ChatWidget/ChatWidget";
import ProjectsSection from "@/components/Projects";
import AboutSection from "@/components/About";
import TechSection from "@/components/Tech";
import ExperienceSection from "@/components/Experience";
import EducationSection from "@/components/Education";
import CertificationsSection from "@/components/Certification";
import ResumeSection from "@/components/Resume";
import ContactSection from "@/components/Contact/ContactSection";
import { PROJECTS } from "@/components/Projects/project-data";

/**
 * The Home page component of the application.
 * It renders the Navbar, Hero, About, Projects, Tech, Experience, Education, Certifications, Resume, and Contact sections.
 * It also renders the ChatWidget.
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Hero />
        {/* Placeholder anchors for future sections */}
        <AboutSection />
        <ProjectsSection />
        <TechSection />
        <ExperienceSection />
        <EducationSection />
        <CertificationsSection />
        <ResumeSection />
        <ContactSection />
      </main>

      <ChatWidget />
    </>
  );
}
