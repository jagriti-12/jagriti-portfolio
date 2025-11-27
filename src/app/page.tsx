import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ChatWidget from "@/components/ChatWidget/ChatWidget";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Hero />
        {/* Placeholder anchors for future sections */}
        <section id="about" className="min-h-screen flex items-center justify-center">About (work in progress)</section>
        <section id="projects" className="min-h-screen flex items-center justify-center">Projects (work in progress)</section>
        <section id="tech" className="min-h-screen flex items-center justify-center">Tech (work in progress)</section>
        <section id="experience" className="min-h-screen flex items-center justify-center">Experience (work in progress)</section>
        <section id="certifications" className="min-h-screen flex items-center justify-center">Certifications (work in progress)</section>
        <section id="resume" className="min-h-screen flex items-center justify-center">Resume (work in progress)</section>
        <section id="contact" className="min-h-screen flex items-center justify-center">Contact (work in progress)</section>
      </main>

      <ChatWidget />
    </>
  );
}
