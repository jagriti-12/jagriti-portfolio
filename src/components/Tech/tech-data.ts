// components/tech/tech-data.ts
export type TechItem = {
    name: string;
    category: string;
    icon?: string; // optional path if you have icons
};

export const TECH_STACK: TechItem[] = [
    // Frontend
    { name: "React", category: "Frontend", icon: "/icons/react.svg" },
    { name: "Next.js", category: "Frontend", icon: "/icons/nextjs.svg" },
    { name: "Tailwind", category: "Frontend", icon: "/icons/tailwind.svg" },
    { name: "TScript", category: "Frontend", icon: "/icons/typescript.svg" },
    { name: "HTML", category: "Frontend", icon: "/icons/html.svg" },
    { name: "CSS", category: "Frontend", icon: "/icons/css.svg" },

    // Backend
    { name: "Node.js", category: "Backend", icon: "/icons/nodejs.svg" },
    { name: "Express.js", category: "Backend" },
    { name: "Django", category: "Backend", icon: "/icons/django.svg" },
    { name: "Postgres", category: "Backend" },
    { name: "MySQL", category: "Backend" },

    // AI / ML
    { name: "Python", category: "AI/ML", icon: "/icons/python.svg" },
    { name: "BERT", category: "AI/ML" },
    { name: "TensorFlow", category: "AI/ML", icon: "/icons/tensorflow.svg" },
    { name: "Transformers", category: "AI/ML" },

    // Data Analytics
    { name: "Pandas", category: "Data Analytics" },
    { name: "Power BI", category: "Data Analytics" },
    { name: "SQL", category: "Data Analytics" },
    { name: "Excel", category: "Data Analytics" },

    // UI / UX
    { name: "Figma", category: "UI/UX", icon: "/icons/figma.svg" },
    { name: "Prototyping", category: "UI/UX" },
    { name: "Wireframing", category: "UI/UX" },

    // Tools / DevOps
    { name: "Git", category: "Tools", icon: "/icons/git.svg" },
    { name: "Vercel", category: "Tools", icon: "/icons/vercel.svg" },
    { name: "Docker", category: "Tools" },

    // Databases (optional category)
    { name: "MongoDB", category: "Databases" },
    { name: "SQLite", category: "Databases" },
];
