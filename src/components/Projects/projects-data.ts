"use client";

export type Project = {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    image?: string;
    tech: string[];
    roles: string[];
    github?: string;
    demo?: string;
};

export const PROJECTS: Project[] = [
    {
        id: "emp-dashboard",
        title: "Employee Task Management Dashboard",
        description: "A responsive dashboard with task tracking, team panels, and analytics.",
        longDescription: `Designed and developed a responsive workspace management dashboard with real-time task state handling, filters, and an interactive UI.`,
        tech: ["React", "Tailwind", "Node.js"],
        roles: ["Frontend", "System Architect", "UI/UX"],
        github: "https://github.com/your-repo",
        demo: "https://your-demo-link",
        image: "/images/projects/dashboard.png"
    },
    {
        id: "deepfake-detector",
        title: "Deep Fake Visages Detector",
        description: "Python-based ML system to detect deepfake images using CNN layers.",
        longDescription: `A full research + engineering project with feature extraction, model experimentation, accuracy tuning, and a prototype detection script.`,
        tech: ["Python", "TensorFlow", "OpenCV"],
        roles: ["AI", "Research"],
        github: "",
        demo: "",
        image: "/images/projects/deepfake.png"
    },
    {
        id: "emotion-bert",
        title: "Emotion & Mental State Analyzer",
        description: "Text-driven emotion classification using BERT & deep learning models.",
        longDescription: `Built and fine-tuned transformer-based models (BERT, RoBERTa) for emotional state classification from textual cues.`,
        tech: ["Python", "BERT", "Transformers"],
        roles: ["AI", "Research"],
        github: "",
        demo: "",
        image: "/images/projects/emotion.png"
    },
    {
        id: "News-Aggregator",
        title: "Basic News Aggregator Website",
        description: "A simple news aggregator website using Django framework and API integrations.",
        longDescription: `Built a basic API integration website using Django framework to fetch news from different sources and display them in an organized manner.`,
        tech: ["Python", "Django", "APIs"],
        roles: ["Django", "Backend"],
        github: "",
        demo: "",
        image: "/images/projects/emotion.png"
    }
];
