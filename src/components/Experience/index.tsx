"use client";

import { useState } from "react";
import { EXPERIENCE } from "./experience-data";
import TimelineItem from "./TimelineItem";
import Script from "next/script";

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
                <h2 id="experience-heading" className="text-4xl font-bold mb-8 text-white">Experience</h2>

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
                <div className="">
                    {filtered.map((item) => (
                        <TimelineItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
            <Script
                id="experience-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Jagriti Sachdeva",
                        "jobTitle": "Frontend Developer | UI/UX Designer | Full Stack Developer | AI Researcher",
                        "url": "https://your-portfolio-url.com",
                        "image": "https://your-portfolio-url.com/images/profile/profile.jpg",
                        "worksFor": EXPERIENCE.map((exp) => ({
                            "@type": "Organization",
                            "name": exp.company
                        })),
                        "hasOccupation": EXPERIENCE.map((exp) => ({
                            "@type": "Occupation",
                            "name": exp.role,
                            "description": exp.description.join(" "),
                            "startDate": exp.duration.split("–")[0].trim(),
                            "endDate": exp.duration.includes("Present")
                                ? "Present"
                                : exp.duration.split("–")[1]?.trim()
                        }))
                    })
                }}
            />
        </section>
    );
}
