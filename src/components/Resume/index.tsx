"use client";

import { useState } from "react";
import { RESUMES } from "./resume-data";
import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";

export default function ResumeSection() {
    const [active, setActive] = useState(RESUMES[0].id);
    const current = RESUMES.find((r) => r.id === active);

    return (
        <section id="resume" className="py-24 px-6 bg-[var(--bg-secondary)]">
            <div className="mx-auto max-w-6xl">

                {/* SEO META */}
                <meta name="description" content="Download tailored resumes for Web Development, Java, Python, and Data Analyst roles." />
                <meta name="keywords" content={current?.keywords.join(", ")} />

                <h2 className="text-4xl font-bold mb-6 text-white">Resumes</h2>

                {/* TABS */}
                <div className="flex gap-6 mb-10 border-b border-white/10 pb-2 overflow-x-auto">
                    {RESUMES.map((r) => (
                        <button
                            key={r.id}
                            onClick={() => setActive(r.id)}
                            className={`pb-2 text-sm relative transition ${
                                active === r.id
                                    ? "text-yellow-200 font-semibold"
                                    : "text-slate-400 hover:text-white"
                            }`}
                        >
                            {r.role}

                            {active === r.id && (
                                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-200 rounded-full"></span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Preview + Card */}
                <div className="grid md:grid-cols-2 gap-12 items-start">

                    {/* LEFT: PDF PREVIEW */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-[520px] rounded-xl overflow-hidden bg-[rgba(255,255,255,0.03)] border border-white/10 shadow-inner"
                    >
                        {current?.file ? (
                            <iframe
                                src={current.file}
                                className="w-full h-full"
                                title={`${current.role} Resume`}
                                aria-label={`${current.role} Resume Preview`}
                            />
                        ) : (
                            <div className="flex items-center justify-center h-full text-slate-400">
                                No Preview Available
                            </div>
                        )}
                    </motion.div>

                    {/* RIGHT: INFO CARD */}
                    {current && <ResumeCard item={current} />}
                </div>
            </div>
        </section>
    );
}