export const JAGRITI_CONTEXT = {
    about: {
        name: "Jagriti Sachdeva",
        title: "Frontend Developer | AI Researcher | Technical Writer",
        summary:
            "Frontend engineer with experience in React, Next.js, NLP research, and technical writing."
    },

    roles: [
        "Frontend Developer",
        "AI/ML Engineer",
        "Technical Writer",
        "Researcher",
        "System Architect"
    ],

    skills: {
        frontend: [
            "React",
            "Next.js",
            "Tailwind",
            "TypeScript",
            "UI/UX",
            "Responsive Design"
        ],
        backend: ["Node.js", "Express.js"],
        ai: ["BERT", "Transformers", "Deep Learning", "NLP"],
        tools: ["Git", "Figma", "Postman", "Vercel"]
    },

    projects: [
        {
            id: "dashboard",
            title: "Employee Task Management Dashboard",
            description: "Role-based dashboard with task automation and analytics.",
            tech: ["React", "Tailwind", "Node.js"],
            highlight: "Filtering, analytics, responsive layouts."
        },
        {
            id: "deepfake",
            title: "Deepfake Visage Detector",
            description:
                "Detects manipulated facial images using CNN-based models and OpenCV.",
            tech: ["Python", "OpenCV", "TensorFlow"],
            highlight: "Major team project with high detection accuracy."
        },
        {
            id: "emotion",
            title: "Emotion & Mental State Analyzer (BERT)",
            description:
                "NLP system that classifies emotions and predicts sentiment intensity.",
            tech: ["Python", "Transformers"],
            highlight: "Research-driven project with multilingual support."
        }
    ],

    freelanceProjects: [
        {
            title: "Portfolio Website (Client)",
            description:
                "Designed and developed a modern portfolio using React + animations.",
            tech: ["React", "Tailwind", "GSAP"]
        },
        {
            title: "Landing Page for a Business",
            description:
                "Clean UI/UX landing page with form handling and responsiveness.",
            tech: ["HTML", "CSS", "JavaScript"]
        },
        {
            title: "AI Blog Writing Tool",
            description:
                "Created an AI-assisted blog generator for long-form content.",
            tech: ["Python", "NLP"]
        }
    ],

    experience: [
        {
            role: "Frontend Developer Intern",
            company: "—",
            year: "2023",
            description: "Worked with React, UI building, API integration."
        },
        {
            role: "Technical Writer (Freelance)",
            company: "—",
            year: "2024",
            description:
                "Created technical documentation, research-based writing, and knowledge articles."
        },
        {
            role: "AI Research Assistant",
            company: "—",
            year: "2024",
            description:
                "Worked on BERT-based emotion models and NLP dataset preparation."
        }
    ],

    education: [
        {
            degree: "B.Tech Computer Science Engineering",
            university: "Chandigarh University",
            year: "2023",
            cgpa: "8.0"
        }
    ],

    resumes: [
        { role: "Frontend Developer", file: "/resumes/frontend.pdf" },
        { role: "AI/ML Engineer", file: "/resumes/ai.pdf" },
        { role: "Researcher", file: "/resumes/research.pdf" }
    ]
};
