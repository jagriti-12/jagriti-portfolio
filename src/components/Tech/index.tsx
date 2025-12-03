// components/tech/index.tsx
"use client";

import { useMemo, useEffect } from "react";
import TechCategoryCard from "./TechCategoryCard";
import { TECH_STACK, TechItem } from "./tech-data";
import { motion } from "framer-motion";

export default function TechSection() {
    const categories = useMemo(() => {
        const order = [
            "Frontend",
            "Backend",
            "AI/ML",
            "Data Analytics",
            "UI/UX",
            "Tools",
            "Databases",
        ];

        const map = new Map<string, TechItem[]>();
        TECH_STACK.forEach((t) => {
            if (!map.has(t.category)) map.set(t.category, []);
            map.get(t.category)!.push(t);
        });

        const ordered = order.concat(
            Array.from(map.keys()).filter((k) => !order.includes(k))
        );

        return ordered.map((k) => ({ name: k, items: map.get(k) ?? [] }));
    }, []);

    // ⭐ SEO — JSON-LD for skills
    useEffect(() => {
        const skills = Array.from(new Set(TECH_STACK.map((s) => s.name)));
        const jsonLd = {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Jagriti Sachdeva",
            "url":
                typeof window !== "undefined" ? window.location.href : "",
            "sameAs": [
                "https://github.com/jagriti-12",
                "https://www.linkedin.com/in/jagriti-sachdeva/",
            ],
            "jobTitle": "Frontend Developer",
            "knowsAbout": skills,
        };

        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.id = "tech-jsonld";
        script.innerHTML = JSON.stringify(jsonLd);
        document.head.appendChild(script);

        return () => {
            const s = document.getElementById("tech-jsonld");
            s?.remove();
        };
    }, []);

    return (
        <section
            id="tech"
            className="py-24 px-6 bg-[var(--bg-secondary)]"
        >
            <div className="mx-auto max-w-6xl">
                <motion.h2
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-6 text-white"
                >
                    Tech Stack
                </motion.h2>

                <p className="text-slate-400 mb-8 max-w-2xl">
                    Click any category to explore detailed skills & tools.
                </p>

                {/* ⭐ 4 CARDS PER ROW */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat) => (
                        <TechCategoryCard
                            key={cat.name}
                            category={cat.name}
                            items={cat.items}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
