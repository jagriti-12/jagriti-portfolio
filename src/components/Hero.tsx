"use client";
import { motion } from "framer-motion";
export default function Hero() {
    return (
        <header id="hero" className="min-h-screen flex items-center">
            <div className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
                {/* LEFT CONTENT */}
                <div>
                    <motion.h1
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.05 }}
                        className="text-4xl md:text-6xl font-extrabold leading-tight text-[var(--text-primary)]"
                    >
                        Hi, I’m <span className="text-yellow-200">Jagriti</span>
                    </motion.h1>
                    <motion.p
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.15 }}
                        className="mt-4 text-lg text-[var(--text-secondary)] max-w-xl"
                    >
                        <strong>Frontend Developer • UI/UX Designer • Data Analyst</strong>
                        <br /><br />
                        Recent Computer Science graduate from
                        <i> <u>Chandigarh University</u></i> exploring the realm of
                    <strong> frontend development, user experience design, and data insights.</strong>
                </motion.p>
                {/* CTA Buttons */}
                <div className="mt-6 flex gap-3">
                    <a
                        href="#resume"
                        className="px-5 py-4 rounded-2xl bg-[var(--bg-secondary)] text-[var(--text-primary)] text-m border border-gray-700 font-semibold shadow-lg hover:scale-105 transition"
                    >
                        View Resumes
                    </a>
                    <button
                        onClick={() => window.dispatchEvent(new Event("openChat"))}
                        className="px-6 py-3 rounded-2xl bg-[var(--bg-secondary)] text-[var(--text-primary)] font-semibold border border-gray-700 hover:scale-105 transition"
                    >
                        Ask Jagriti’s AI →
                    </button>
                </div>
                {/* Skill Pills */}
                <div className="mt-8 flex flex-wrap gap-3">
                    {["Next.js", "Django", "Python", "AI", "Figma", "SQL", "PowerBi"].map((skill) => (
                        <span
                            key={skill}
                            className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 text-sm text-[var(--text-secondary)] backdrop-blur-sm border border-white/10"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
            {/* RIGHT — 3D MODEL */}
            <div className="flex items-center justify-center">
                <div className="w-72 h-90 md:w-90 md:h-120 rounded-2xl overflow-hidden">
                    <img
                        src="/3dmodel.png"
                        alt="Jagriti 3D avatar representing Frontend Developer and UI/UX Designer"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
        </header >
    );
}