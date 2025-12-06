"use client";
import { useState } from "react";
import { PROJECTS } from "./projects-data";
import { PROJECT_FILTERS } from "./filters";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import type { Project } from "./projects-data";
export default function ProjectsSection() {
    const [active, setActive] = useState("All");
    const [openProject, setOpenProject] = useState<Project | null>(null);
    const filtered =
        active === "All"
            ? PROJECTS
            : PROJECTS.filter(p => p.category === active);
    return (
        <section id="projects" className="py-24 px-6">
            <div className="mx-auto max-w-6xl">
                <h2 className="text-4xl font-bold mb-6">Projects</h2>
                {/* Filters */}
                <div className="flex gap-4 mb-10 flex-wrap border-b border-white/10 pb-2">
                    {PROJECT_FILTERS.map(f => (
                        <button
                            key={f}
                            onClick={() => setActive(f)}
                            className={`pb-1 text-sm relative ${active === f
                                ? "text-yellow-200 font-semibold"
                                : "text-slate-400 hover:text-white"
                                }`}
                        >
                            {f}
                            {active === f && (
                                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-200"></span>
                            )}
                        </button>
                    ))}
                </div>
                {/* Grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filtered.map(p => (
                        <ProjectCard key={p.id} project={p} onOpen={setOpenProject} />
                    ))}
                </div>
                <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
            </div>
        </section>
    );
}