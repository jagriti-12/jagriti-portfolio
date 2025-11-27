export type ExperienceItem = {
    id: string;
    company: string;
    role: string;
    duration: string;
    description: string[];
    category: string; // used for filtering
};

export const EXPERIENCE: ExperienceItem[] = [
    {
        id: "twinline-interview",
        company: "Twinline Business Solution",
        role: "PL/SQL + Oracle Intern (Interview Prep)",
        duration: "2025",
        description: [
            "Prepared core PL/SQL basics, queries, joins & DB fundamentals.",
            "Gained understanding of Oracle RDBMS, basic DBA, indexing & views.",
            "Practiced analytical reasoning and SQL writing."
        ],
        category: "Database"
    },
    {
        id: "emotion-research",
        company: "Independent Research",
        role: "Researcher — Emotion & Mental State Analysis",
        duration: "2024–2025",
        description: [
            "Researched transformers (BERT, RoBERTa) for emotion classification.",
            "Built datasets and pipelines for text-based psychological inference.",
            "Published research papers with deep learning experimentation."
        ],
        category: "AI/ML"
    },
    {
        id: "frontend-react",
        company: "Freelance",
        role: "Frontend Developer",
        duration: "2022–2024",
        description: [
            "Designed responsive React-based web interfaces.",
            "Worked with Tailwind, Framer Motion & API integrations.",
            "Focused on clean UX, animations & mobile-first builds."
        ],
        category: "Frontend"
    },
    {
        id: "content-writing",
        company: "Freelance",
        role: "Technical Writer",
        duration: "2023–2024",
        description: [
            "Drafted structured documentation & tutorials for clients.",
            "Worked on research papers, blog articles & UI/UX writing.",
            "Specialized in simplifying complex technical concepts."
        ],
        category: "Writing"
    }
];
