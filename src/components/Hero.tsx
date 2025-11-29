"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center">
            <div className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <motion.h1 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.05 }} className="text-4xl md:text-6xl font-extrabold leading-tight">
                        Hi, I’m <span className="bg-clip-text text-yellow-200 bg-gradient-to-r from-primary to-accent">Jagriti</span>
                    </motion.h1>

                    <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.15 }} className="mt-4 text-lg text-slate-300 max-w-xl">
                        Frontend Developer • AI Enthusiast • Research Writer. I build beautiful, accessible interfaces and intelligent experiences.
                    </motion.p>

                    <div className="mt-6 flex gap-3">
                        <a href="#resume" className="px-5 py-3 rounded-2xl bg-gradient-to-r from-primary to-accent text-white font-medium shadow-lg hover:scale-105 transition">
                            View Resumes
                        </a>
                        <button
                            onClick={() => window.dispatchEvent(new Event("openChat"))}
                            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/80 transition border-white-100"
                        >
                            Ask Jagriti’s AI →
                        </button>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/3 text-sm"> React </span>
                        <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/3 text-sm"> Next.js </span>
                        <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/3 text-sm"> Tailwind </span>
                        <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/3 text-sm"> AI </span>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    {/* Placeholder for 3D avatar or image */}
                    <div className="w-72 h-72 rounded-3xl bg-gradient-to-tr from-white/6 to-white/3 flex items-center justify-center shadow-glow">
                        <svg width="160" height="160" viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="48" stroke="rgba(255,255,255,0.08)" strokeWidth="1" /><text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" fill="rgba(255,255,255,0.6)" fontSize="8">3D Avatar</text></svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
