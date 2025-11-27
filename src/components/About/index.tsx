"use client";

import { motion } from "framer-motion";
import StatsCounter from "./StatsCounter";

export default function AboutSection() {
    return (
        <section id="about" className="py-24 px-6 bg-[rgba(255,255,255,0.02)]">
            <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-14 items-center">

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                >
                    <div className="w-90 h-90 rounded-3xl overflow-hidden shadow-glow border border-white/10">
                        <img
                            src="/images/profile/profile.jpg" // You will add your image in this path
                            alt="Jagriti"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>

                {/* Text */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold mb-4">About Me</h2>

                    <p className="text-slate-300 leading-relaxed">
                        I'm <span className="text-accent font-medium">Jagriti Sachdeva</span>,
                        a passionate Frontend Developer, Research Writer, and AI enthusiast.
                        I love building beautiful user interfaces and combining design & engineering
                        into meaningful digital experiences.
                    </p>

                    <p className="mt-4 text-slate-400 leading-relaxed">
                        My work spans frontend apps, AI-assisted tools, research papers, technical writing,
                        and interactive systems. I’m driven, curious, and excited to bring ideas to life
                        through a blend of technology, design, and creativity.
                    </p>

                    {/* Stats */}
                    <div className="mt-8 grid grid-cols-3 gap-4">
                        <StatsCounter value={3} label="Years Exp" />
                        <StatsCounter value={12} label="Projects" />
                        <StatsCounter value={20} label="Certifications" />
                    </div>

                    {/* CTA */}
                    <div className="mt-8 flex gap-3">
                        <a
                            href="#projects"
                            className="px-5 py-3 rounded-xl bg-gradient-to-r from-primary to-accent shadow-lg hover:scale-105 transition"
                        >
                            View Projects
                        </a>

                        <button
                            onClick={() => {
                                const ev = new CustomEvent("openChat");
                                window.dispatchEvent(ev);
                            }}
                            className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
                        >
                            Chat with AI
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
