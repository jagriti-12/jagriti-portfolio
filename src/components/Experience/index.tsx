"use client";

import { useState } from "react";
import { EXPERIENCE } from "./experience-data";
import TimelineItem from "./TimelineItem";

export default function ExperienceSection() {
    const categories = ["All", "Frontend", "AI/ML", "UI/UX"];
    const [selected, setSelected] = useState("All");

    const filtered =
        selected === "All"
            ? EXPERIENCE
            : EXPERIENCE.filter((e) => e.category === selected);

    return (
        <section id="experience" className="py-24 px-6 bg-[var(--bg-primary)]">
            <div className="mx-auto max-w-5xl">
                <h2 className="text-4xl font-bold mb-8 text-white">Experience</h2>

                {/* Filters */}
                <div className="flex gap-3 mb-10 flex-wrap">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelected(cat)}
                            className={`px-4 py-2 rounded-full text-sm transition border ${selected === cat
                                ? "bg-[var(--bg-secondary)] text-white border-white/20"
                                : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Timeline */}
                <div className="relative border-l border-white/10 pl-4">
                    {filtered.map((item) => (
                        <TimelineItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
