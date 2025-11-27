export type TechItem = {
    name: string;
    category: string;
    icon: string; // we will store icon paths in public/icons/
};

export const TECH_STACK: TechItem[] = [
    // Frontend
    { name: "React", category: "Frontend", icon: "/icons/react.svg" },
    { name: "Next.js", category: "Frontend", icon: "/icons/nextjs.svg" },
    { name: "Tailwind", category: "Frontend", icon: "/icons/tailwind.svg" },

    // AI / ML
    { name: "Python", category: "AI/ML", icon: "/icons/python.svg" },
    { name: "BERT", category: "AI/ML", icon: "/icons/bert.svg" },
    { name: "TensorFlow", category: "AI/ML", icon: "/icons/tensorflow.svg" },

    // Tools / Others
    { name: "Git", category: "Tools", icon: "/icons/git.svg" },
    { name: "Figma", category: "Tools", icon: "/icons/figma.svg" },
    { name: "Vercel", category: "Tools", icon: "/icons/vercel.svg" },
];
