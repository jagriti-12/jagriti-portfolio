"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { PROJECTS } from "./projects-data";
import { filterProjects } from "./filters";

export default function ProjectsSection() {
    const [selectedRole, setSelectedRole] = useState<string | null>(null);
    const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
    const [openProject, setOpenProject] = useState(null);

    const roles = ["Frontend", "AI", "Research", "UI/UX", "System Architect"];
    const tech = ["React", "Next.js", "Tailwind", "Python", "BERT", "Node.js"];

    const filtered = filterProjects(PROJECTS, selectedRole, selectedTechs);

    const toggleTech = (t: string) => {
        setSelectedTechs((prev) =>
            prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
        );
    };

    return (
        <section id="projects" className="py-20 px-6">
            <div className="mx-auto max-w-6xl">
                <h2 className="text-4xl font-bold mb-6">Projects</h2>

                {/* Filters */}
                <div className="flex flex-wrap gap-3 mb-6">
                    {roles.map((r) => (
                        <button
                            key={r}
                            onClick={() => setSelectedRole(r === selectedRole ? null : r)}
                            className={`px-3 py-1 rounded-full text-sm ${selectedRole === r ? "bg-gradient-to-r from-primary to-accent" : "bg-white/10"
                                }`}
                        >
                            {r}
                        </button>
                    ))}
                </div>

                <div className="flex flex-wrap gap-3 mb-6">
                    {tech.map((t) => (
                        <button
                            key={t}
                            onClick={() => toggleTech(t)}
                            className={`px-3 py-1 rounded-full text-sm ${selectedTechs.includes(t) ? "bg-gradient-to-r from-primary to-accent" : "bg-white/10"
                                }`}
                        >
                            {t}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {filtered.map((project) => (
                        <ProjectCard key={project.id} project={project} onOpen={setOpenProject} />
                    ))}
                </div>
            </div>

            {/* Modal */}
            <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
        </section>
    );
}