export type ResumeItem = {
    role: string;
    short: string;     // one-line summary for UI + AI
    file: string;      // PDF link from public/resumes/
};

export const RESUMES: ResumeItem[] = [
    {
        role: "Frontend Developer",
        short: "Expert in React, Next.js, Tailwind, UI/UX, animations.",
        file: "/resumes/frontend.pdf"
    },
    {
        role: "AI / ML Engineer",
        short: "Worked with BERT, transformers, deep learning & NLP.",
        file: "/resumes/ai.pdf"
    },
    {
        role: "Researcher",
        short: "Multiple research papers in ML, NLP, and deepfake detection.",
        file: "/resumes/research.pdf"
    },
    {
        role: "Technical Writer",
        short: "Clear documentation, technical blogs, and research writing.",
        file: "/resumes/writer.pdf"
    },
    {
        role: "System Architect",
        short: "Designed dashboards, architecture diagrams & workflows.",
        file: "/resumes/architect.pdf"
    }
];
