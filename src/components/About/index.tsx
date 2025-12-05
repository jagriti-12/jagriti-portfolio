"use client";

import { motion } from "framer-motion";
import StatsCounter from "./StatsCounter";

export default function AboutSection() {
    return (
        <section
            id="about"
            className="py-24 px-6 bg-[var(--bg-secondary)]"
            aria-labelledby="about-heading"
        >
            <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-14 items-center">

                {/* IMAGE */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-4"
                >
                    {/* PHOTO */}
                    <div className="w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden 
        shadow-lg border border-white/10 bg-neutral-900/20">
                        <img
                            src="/images/profile/profile.jpg"
                            alt="Jagriti"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* EDUCATION BADGE */}
                    <div className="w-80 md:w-96 py-4 px-5 rounded-2xl backdrop-blur-md bg-[var(--bg-primary)] border border-white/40 shadow-glow text-center
    ">
                        <h3 className="text-sm font-semibold text-white/90">B.E. in Computer Science Engineering</h3>
                        <p className="text-xs text-slate-400 mt-1">
                            Chandigarh University • 2021–2025
                        </p>
                        <p className="text-xs text-slate-400">
                            <b className="text-yellow-200">CGPA: 8.37</b>
                        </p>
                    </div>
                </motion.div>


                {/* TEXT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2
                        id="about-heading"
                        className="text-4xl font-bold mb-4 text-white"
                    >
                        About Me
                    </h2>

                    <p className="text-slate-300 leading-relaxed">
                        I’m <span className="font-semibold text-yellow-200">Jagriti Sachdeva</span>, a
                        Frontend Developer with a strong foundation in UI/UX design,
                        data understanding, and AI-driven development.
                        I recently completed my B.Tech in Computer Science Engineering from
                        <i className="text-yellow-100"> Chandigarh University</i>.
                    </p>

                    <p className="mt-4 text-slate-400 leading-relaxed">
                        I love crafting interfaces that balance aesthetics with functionality—
                        from interactive dashboards and smooth user flows to AI-powered tools
                        and data-driven visualizations. Outside development, I enjoy writing,
                        researching, exploring design patterns, and understanding how data
                        influences real-world decisions.
                    </p>

                    {/* STATS */}
                    <div className="mt-8 grid grid-cols-3 gap-4">
                        <StatsCounter value={1} label="Years" />
                        <StatsCounter value={12} label="Projects" />
                        <StatsCounter value={20} label="Certifications" />
                    </div>

                    {/* CTA BUTTONS */}
                    <div className="mt-8 flex gap-3">
                        <a
                            href="#projects"
                            className="px-5 py-3 rounded-xl 
                            bg-[rgba(255,255,255,0.07)] border border-white/10
                            text-white font-medium hover:scale-105 transition"
                        >
                            Explore My Work
                        </a>

                        <button
                            onClick={() => window.dispatchEvent(new Event("openChat"))}
                            className="px-5 py-3 rounded-xl bg-[rgba(255,255,255,0.05)]
                            border border-white/10 text-white hover:bg-white/10 transition"
                        >
                            Ask My AI Assistant
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
