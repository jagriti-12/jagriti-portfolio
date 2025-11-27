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
        <section id="contact" className="min-h-screen flex items-center justify-center">Contact (work in progress)</section>
      </main>

      <ChatWidget />
    </>
  );
}
