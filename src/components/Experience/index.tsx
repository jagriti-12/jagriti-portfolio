"use client";

import { useState } from "react";
import { EXPERIENCE } from "./experience-data";
import TimelineItem from "./TimelineItem";

export default function ExperienceSection() {
    const categories = ["All", "Frontend", "AI/ML", "Database", "Writing"];
    const [selected, setSelected] = useState("All");

    const filtered =
        selected === "All"
            ? EXPERIENCE
            : EXPERIENCE.filter((e) => e.category === selected);

    return (
        <section id="experience" className="py-24 px-6">
            <div className="mx-auto max-w-5xl">
                <h2 className="text-4xl font-bold mb-8">Experience</h2>

                {/* Filters */}
                <div className="flex gap-3 mb-10 flex-wrap">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelected(cat)}
                            className={`px-4 py-2 rounded-full text-sm ${selected === cat
                                    ? "bg-gradient-to-r from-primary to-accent"
                                    : "bg-white/10"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Timeline */}
                <div className="border-l border-white/10 pl-4 flex flex-col gap-10">
                    {filtered.map((item) => (
                        <TimelineItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
