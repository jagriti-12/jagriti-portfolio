// Projects/projects-data.ts

export type Project = {
    id: string;
    title: string;
    short: string;
    long?: string;
    category: string;
    tech: string[];
    repo?: string;
    live?: string;
    images?: string[];
};

export const PROJECTS: Project[] = [
    {
        id: "employee-dashboard",
        title: "Employee Task Management Dashboard",
        short: "A React + Node.js dashboard for managing tasks, teams & analytics.",
        long: "A fully interactive dashboard featuring task tracking, user authentication, team panels, analytics widgets, and role-based features.",
        category: "Fullstack",
        tech: ["React", "Tailwind", "Node.js", "MongoDB"],
        repo: "https://github.com/jagriti-12/employee-task-dashboard",
        images: ["/projects/dashboard_1.png"]
    },
    {
        id: "news-aggregator",
        title: "Basic News Aggregator Website",
        short: "A simple news aggregator app built using APIs.",
        category: "Frontend",
        tech: ["HTML", "CSS", "JavaScript"],
        repo: "https://github.com/jagriti-12/news-aggregator",
        images: ["/projects/news.png"]
    },
    {
        id: "deepfake-detector",
        title: "Deep Fake Visages Detector",
        short: "A Python ML system to detect deepfake images using CNN.",
        long: "Developed a convolutional model that identifies facial forgeries using OpenCV and TensorFlow pipelines.",
        category: "AI/ML",
        tech: ["Python", "TensorFlow", "OpenCV"],
        repo: "https://github.com/jagriti-12/deepfake-detector",
        images: ["/projects/deepfake.png"]
    },
    {
        id: "emotion-analysis",
        title: "Emotion & Mental State Analyzer",
        short: "BERT-based emotional text classification model.",
        long: "Designed NLP pipelines using BERT & Transformers for emotional context extraction and sentiment profiling.",
        category: "AI/ML",
        tech: ["Python", "Transformers", "BERT"],
        repo: "https://github.com/jagriti-12/emotion-and-mental-state-analysis",
        images: ["/projects/emotion.png"]
    },
    {
        id: "portfolio",
        title: "Personal Animated Portfolio",
        short: "Your current high-end portfolio built in Next.js with 3D model & AI assistant.",
        category: "Frontend",
        tech: ["Next.js", "Tailwind", "Framer Motion"],
        repo: "https://github.com/jagriti-12/jagriti-portfolio",
        images: ["/projects/portfolio.png"]
    },
    {
        id: "sql-dev",
        title: "SQL Developer Practice Repo",
        short: "Full SQL practice set including joins, triggers, procedures.",
        category: "SQL",
        tech: ["Oracle SQL", "PL/SQL"],
        repo: "https://github.com/jagriti-12/SQL-Developer",
    },
    {
        id: "java-dev",
        title: "Java Practice Projects",
        short: "Object-oriented Java practice problems & mini tools.",
        category: "Java",
        tech: ["Java", "OOP", "DSA"],
        repo: "https://github.com/jagriti-12/JAVA-Developer",
    },
    {
        id: "python-dev",
        title: "Python Developer Repository",
        short: "Python scripts for automation, data processing & problem solving.",
        category: "Python",
        tech: ["Python", "Pandas", "Automation"],
        repo: "https://github.com/jagriti-12/PythonDeveloper",
    }
];
