"use client";

import { useState } from "react";
import TechCard from "./TechCard";
import { TECH_STACK } from "./tech-data";
import { motion } from "framer-motion";

export default function TechSection() {
    const categories = ["All", "Frontend", "AI/ML", "Tools"];
    const [selected, setSelected] = useState("All");

    const filtered =
        selected === "All"
            ? TECH_STACK
            : TECH_STACK.filter((t) => t.category === selected);

    return (
        <section id="tech" className="py-24 px-6">
            <div className="mx-auto max-w-6xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-8"
                >
                    Tech Stack
                </motion.h2>

                {/* Filters */}
                <div className="flex flex-wrap gap-3 mb-10">
                    {categories.map((c) => (
                        <button
                            key={c}
                            onClick={() => setSelected(c)}
                            className={`px-4 py-2 rounded-full text-sm ${selected === c
                                ? "bg-secondary text-white"
                                : "bg-white/10 text-slate-300"
                                }`}
                        >
                            {c}
                        </button>
                    ))}
                </div>

                {/* Tech Grid */}
                <motion.div
                    layout
                    className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                    {filtered.map((item) => (
                        <TechCard key={item.name} item={item} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
