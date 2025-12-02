"use client";
import { motion } from "framer-motion";
export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center">
            <div className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
                {/* LEFT SIDE TEXT */}
                <div>
                    <motion.h1
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.05 }}
                        className="text-4xl md:text-6xl font-extrabold leading-tight"
                    >
                        Hi, I’m <span className="text-yellow-200">Jagriti</span>
                    </motion.h1>
                    <motion.p
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.15 }}
                        className="mt-4 text-lg text-slate-300 max-w-xl"
                    >
                        Frontend Developer • AI Enthusiast • Research Writer.
                        I build beautiful, accessible interfaces and intelligent experiences.
                    </motion.p>
                    {/* Buttons */}
                    <div className="mt-6 flex gap-3">
                        <a
                            href="#resume"
                            className="px-5 py-3 rounded-2xl bg-gradient-to-r from-primary to-accent text-white font-medium shadow-lg hover:scale-105 transition"
                        >
                            View Resumes
                        </a>
                        <button
                            onClick={() => window.dispatchEvent(new Event("openChat"))}
                            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/80 transition"
                        >
                            Ask Jagriti’s AI →
                        </button>
                    </div>
                    {/* Tech Pills */}
                    <div className="mt-8 flex flex-wrap gap-3">
                        {["React", "Next.js", "Tailwind", "AI"].map((skill) => (
                            <span
                                key={skill}
                                className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/3 text-sm"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
                {/* RIGHT SIDE — 3D Avatar Video */}
                <div className="flex items-center justify-center">
                    <div className="w-72 h-90 md:w-90 md:h-106 rounded-2xl bg-neutral-900 border border-white/10 overflow-hidden shadow-xl">
                        {/* 3D Video */}
                        <video
                            src="/3d-avatar.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
