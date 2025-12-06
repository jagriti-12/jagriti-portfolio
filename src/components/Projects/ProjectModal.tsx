"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Project } from "./projects-data";

export default function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
    return (
        <AnimatePresence>
            {project && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-[200] p-6"
                >
                    <motion.div
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 40, opacity: 0 }}
                        className="bg-white/5 border border-white/10 rounded-2xl p-6 max-w-2xl w-full shadow-xl"
                    >
                        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                        <p className="text-slate-300">{project.long ?? project.short}</p>

                        {project.images && (
                            <div className="grid gap-3 mt-4">
                                {project.images.map((img, i) => (
                                    <img key={i} src={img} className="rounded-lg border border-white/10" />
                                ))}
                            </div>
                        )}

                        <div className="flex gap-3 mt-6">
                            {project.repo && (
                                <a href={project.repo} target="_blank"
                                    className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-sm">
                                    GitHub Repo
                                </a>
                            )}
                            {project.repo && (
                                <a href={project.live} target="_blank"
                                    className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-sm">
                                    Preview
                                </a>
                            )}
                        </div>
                        <button
                            onClick={onClose}
                            className="mt-6 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-sm"
                        >
                            Close
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
