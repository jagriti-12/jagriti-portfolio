// components/tech/TechCategoryCard.tsx
"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { TechItem } from "./tech-data";
import clsx from "clsx";

export default function TechCategoryCard({
    category,
    items,
}: {
    category: string;
    items: TechItem[];
}) {
    const [open, setOpen] = useState(false);

    const visibleCount = useMemo(() => items.length, [items]);

    return (
        <div
            className={clsx(
                "rounded-2xl border transition-shadow",
                "bg-[var(--bg-secondary)] border-white/5",
                "overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.03)]"
            )}
            aria-expanded={open}
        >
            {/* HEADER */}
            <button
                onClick={() => setOpen((s) => !s)}
                aria-controls={`skills-${category}`}
                aria-expanded={open}
                className="w-full flex items-center justify-between px-5 py-5 text-left"
            >
                <div>
                    <div className="text-lg font-semibold text-white">{category}</div>
                    <div className="text-xs text-slate-400 mt-1">
                        {visibleCount} {visibleCount === 1 ? "skill" : "skills"}
                    </div>
                </div>

                {/* CHEVRON */}
                <div
                    className={clsx(
                        "flex items-center justify-center w-9 h-9 rounded-full",
                        open ? "rotate-180" : "rotate-0",
                        "transition-transform duration-300 text-slate-300"
                    )}
                    aria-hidden
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M6 9l6 6 6-6"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </button>

            {/* BODY */}
            <motion.div
                id={`skills-${category}`}
                initial={false}
                animate={open ? "open" : "closed"}
                variants={{
                    open: { height: "auto", opacity: 1 },
                    closed: { height: 0, opacity: 0 },
                }}
                transition={{ duration: 0.28 }}
                className="px-5 overflow-hidden"
            >
                <div className="py-4 pb-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {items.map((it) => (
                        <div
                            key={it.name}
                            className="inline-flex items-center gap-3 px-3 py-2 rounded-md 
                                       bg-[rgba(255,255,255,0.03)] border border-white/5 
                                       hover:bg-white/10 transition"
                        >
                            {it.icon ? (
                                <img
                                    src={it.icon}
                                    alt={`${it.name} icon`}
                                    className="w-5 h-5 object-contain opacity-90"
                                />
                            ) : (
                                <div className="w-5 h-5 rounded-sm bg-white/10" />
                            )}
                            <div className="text-sm text-white/90">{it.name}</div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
