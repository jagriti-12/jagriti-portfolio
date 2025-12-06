"use client";

import { Project } from "./projects-data";
import { motion } from "framer-motion";
export default function ProjectCard({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) {
    return (
        <motion.div
            whileHover={{ scale: 1.04 }}
            className="rounded-2xl p-4 bg-white/5 border border-white/10 cursor-pointer transition shadow-soft"
            onClick={() => onOpen(project)}
        >
            <div className="w-full h-40 rounded-xl overflow-hidden bg-white/10 flex items-center justify-center">
                {project.images?.[0] ? (
                    <img src={project.images[0]} className="w-full h-full object-cover" />
                ) : (
                    <p className="text-slate-400 text-xs">No Preview</p>
                )}
            </div>

            <h3 className="mt-4 text-lg font-semibold">{project.title}</h3>
            <p className="text-sm text-slate-400 line-clamp-2 mt-1">{project.short}</p>

            <div className="flex flex-wrap gap-2 text-xs mt-3">
                {project.tech.slice(0, 4).map(t => (
                    <span key={t} className="px-2 py-1 rounded bg-white/5 border border-white/10">
                        {t}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}
