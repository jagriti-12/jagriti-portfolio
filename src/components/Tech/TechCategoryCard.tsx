// components/tech/TechCategoryCard.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { TechItem } from "./tech-data";

export default function TechCategoryCard({
    category,
    items,
}: {
    category: string;
    items: TechItem[];
}) {
    const [flipped, setFlipped] = useState(false);

    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.25 }}
            className="relative w-full h-48 sm:h-56 rounded-2xl cursor-pointer"
            onClick={() => setFlipped((p) => !p)}
            style={{
                perspective: "1200px",
            }}
        >
            <motion.div
                className="absolute inset-0 rounded-2xl bg-[var(--bg-primary)] border border-white/10 shadow-md"
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{
                    transformStyle: "preserve-3d",
                }}
            >
                {/* FRONT SIDE */}
                <div
                    className="absolute inset-0 p-6 flex flex-col justify-between"
                    style={{
                        backfaceVisibility: "hidden",
                    }}
                >
                    <div className="flex items-center justify-between">
                        <div className="text-xl font-semibold text-white">
                            {category}
                        </div>

                        {/* CATEGORY ICON / MINIMAL SYMBOL */}
                        <div className="text-slate-400 opacity-60">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M6 9l6 6 6-6"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>

                    <div className="text-sm text-slate-400">
                        {items.length} skills
                    </div>
                    <div className="text-xs text-slate-500">(Tap to flip)</div>
                </div>

                {/* BACK SIDE */}
                <div
                    className="absolute inset-0 p-4 grid grid-cols-2 gap-2 overflow-y-auto bg-[var(--bg-primary)] rounded-2xl border border-white/10 custom-scroll"
                    style={{
                        transform: "rotateY(180deg)",
                        backfaceVisibility: "hidden",
                    }}
                >
                    {items.map((it) => (
                        <div
                            key={it.name}
                            className="flex items-center gap-3 px-3 py-2 bg-[rgba(255,255,255,0.04)] border border-white/10 rounded-md hover:bg-white/10 transition"
                        >
                            {it.icon ? (
                                <img
                                    src={it.icon}
                                    alt={it.name}
                                    className="w-5 h-5 object-contain"
                                />
                            ) : (
                                <div className="w-5 h-5 rounded-sm bg-white/10" />
                            )}
                            <span className="text-white text-sm">{it.name}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
}
