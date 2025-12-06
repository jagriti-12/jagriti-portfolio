"use client";

import { Project } from "./projects-data";

export const filterProjects = (
    projects: Project[],
    selectedRole: string | null,
    selectedTechs: string[]
) => {
    return projects.filter((p) => {
        const roleMatch = selectedRole ? p.category === (selectedRole) : true;
        const techMatch =
            selectedTechs.length === 0
                ? true
                : selectedTechs.every((t) => p.tech.includes(t));

        return roleMatch && techMatch;
    });
};
export const PROJECT_FILTERS = [
    "All",
    "Frontend",
    "Fullstack",
    "AI/ML",
    "Python",
    "Data",
];
