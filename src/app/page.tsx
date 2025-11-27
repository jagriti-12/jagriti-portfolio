import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ChatWidget from "@/components/ChatWidget/ChatWidget";
import ProjectsSection from "@/components/Projects";
import AboutSection from "@/components/About";
import TechSection from "@/components/Tech";



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
        <section id="experience" className="min-h-screen flex items-center justify-center">Experience (work in progress)</section>
        <section id="certifications" className="min-h-screen flex items-center justify-center">Certifications (work in progress)</section>
        <section id="resume" className="min-h-screen flex items-center justify-center">Resume (work in progress)</section>
        <section id="contact" className="min-h-screen flex items-center justify-center">Contact (work in progress)</section>
      </main>

      <ChatWidget />
    </>
  );
}
