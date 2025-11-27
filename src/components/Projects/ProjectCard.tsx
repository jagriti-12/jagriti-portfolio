"use client";

import { motion } from "framer-motion";
import { Project } from "./projects-data";

export default function ProjectCard({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) {
    return (
        <motion.div
            layout
            whileHover={{ scale: 1.03 }}
            className="p-4 bg-white/5 rounded-2xl border border-white/10 cursor-pointer shadow-soft hover:shadow-glow transition"
            onClick={() => onOpen(project)}
        >
            <div className="w-full h-40 bg-white/10 rounded-xl mb-3 flex items-center justify-center overflow-hidden">
                {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-xl" />
                ) : (
                    <span className="text-xs text-slate-400">No Image</span>
                )}
            </div>

            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-sm text-slate-400 mt-1">{project.description}</p>

            <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((t) => (
                    <span key={t} className="px-2 py-1 text-xs rounded bg-white/10">
                        {t}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}
