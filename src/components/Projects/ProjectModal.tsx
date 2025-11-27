"use client";

import { Project } from "./projects-data";
import { motion } from "framer-motion";

export default function ProjectModal({
    project,
    onClose
}: {
    project: Project | null;
    onClose: () => void;
}) {
    if (!project) return null;

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-[100]">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-darkBg border border-white/10 rounded-2xl p-6 max-w-lg w-full shadow-xl"
            >
                <h2 className="text-2xl font-bold">{project.title}</h2>
                <p className="text-sm text-slate-400 mt-2">{project.longDescription}</p>

                <div className="flex gap-2 mt-4 flex-wrap">
                    {project.tech.map((t) => (
                        <span key={t} className="px-2 py-1 text-xs rounded bg-white/10">
                            {t}
                        </span>
                    ))}
                </div>

                <div className="flex gap-3 mt-6">
                    {project.github && (
                        <a target="_blank" href={project.github} className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-sm">
                            GitHub
                        </a>
                    )}
                    {project.demo && (
                        <a target="_blank" href={project.demo} className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-sm">
                            Live Demo
                        </a>
                    )}
                </div>

                <button
                    onClick={onClose}
                    className="mt-6 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-sm"
                >
                    Close
                </button>
            </motion.div>
        </div>
    );
}
