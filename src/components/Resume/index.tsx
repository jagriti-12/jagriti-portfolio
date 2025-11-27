"use client";

import { useState } from "react";
import { RESUMES } from "./resume-data";
import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";

export default function ResumeSection() {
    const [active, setActive] = useState("Frontend Developer");

    const current = RESUMES.find((r) => r.role === active);

    return (
        <section id="resume" className="py-24 px-6 bg-[rgba(255,255,255,0.02)]">
            <div className="mx-auto max-w-6xl">
                <h2 className="text-4xl font-bold mb-6">Resumes</h2>

                {/* Role Selector */}
                <div className="flex gap-3 mb-10 flex-wrap">
                    {RESUMES.map((r) => (
                        <button
                            key={r.role}
                            onClick={() => setActive(r.role)}
                            className={`px-4 py-2 rounded-full text-sm ${active === r.role
                                    ? "bg-gradient-to-r from-primary to-accent"
                                    : "bg-white/10"
                                }`}
                        >
                            {r.role}
                        </button>
                    ))}
                </div>

                {/* Layout: Left = preview | Right = card info */}
                <div className="grid md:grid-cols-2 gap-10">

                    {/* PDF Preview */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="w-full h-[500px] bg-white/5 border border-white/10 rounded-xl overflow-hidden"
                    >
                        {current?.file ? (
                            <iframe
                                src={current.file}
                                className="w-full h-full"
                                title={current.role}
                            ></iframe>
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-slate-400">
                                No Preview Available
                            </div>
                        )}
                    </motion.div>

                    {/* Info Card */}
                    {current && <ResumeCard item={current} />}
                </div>
            </div>
        </section>
    );
}
