export interface ExperienceItem {
    id: string;
    role: string;
    company: string;
    duration: string;
    description: string[];
    category: string;
}
export const EXPERIENCE = [
    {
        id: "pm-bringletech",
        company: "BringleTech Pvt. Ltd.",
        role: "Project Manager",
        duration: "Nov 2025 – April 2026",
        category: "Project Manager",
        description: [
            "Managed end-to-end project execution, including requirement gathering, task planning, and sprint coordination across cross-functional teams.",

            "Defined project workflows, timelines, and deliverables to ensure efficient resource utilization and on-time delivery.",

            "Facilitated team collaboration and mentored junior members, improving productivity and adherence to best practices.",

            "Worked closely with stakeholders and developers to translate business requirements into structured, scalable solutions."
        ]
    },
    {
        id: "uiux-bringletech",
        company: "BringleTech Pvt. Ltd.",
        role: "UI/UX Designer | UI/UX Trainer",
        duration: "May 2025 – April 2026",
        category: "UI/UX",
        description: [
            "Designed intuitive, user-centered web and mobile interfaces using research-driven design principles and modern UI systems.",

            "Conducted UX research including user flows, wireframes, and usability improvements to enhance product engagement and accessibility.",

            "Delivered structured UI / UX training sessions, mentoring students and junior designers on design thinking, prototyping, and usability best practices.",
            "Collaborated closely with developers and stakeholders to translate business requirements into scalable and visually cohesive design solutions."
        ]
    },
    {
        id: "nxtservices-fullstack",
        company: "Nxt Services",
        role: "Full Stack Developer",
        duration: "Dec 2024 – May 2025",
        category: "Frontend",
        description: [
            "Developing full-stack web apps using Next.js, Node.js, PostgreSQL and Tailwind.",
            "Created modular UI components and optimized API routes.",
            "Designed scalable backend systems with authentication and secure role-based routing.",
            "Improved performance through caching, code-splitting and optimization strategies.",
            "Collaborated with design teams to ship responsive, modern interfaces."
        ]
    },
    {

        id: "medoc-pm",
        company: "Medoc Pvt. Ltd.",
        role: "Project Manager Intern",
        duration: "Aug 2023 – May 2024",
        category: "Project Manager",
        description: [
            "Coordinated cross - functional teams of developers and designers to ensure timely delivery of project milestones within defined scope and budget.",
            "Assisted in sprint planning, requirement gathering, and progress tracking using Agile methodologies to improve workflow transparency.",
            "Monitored project timelines, identified bottlenecks, and proactively mitigated risks to maintain delivery efficiency.",
            "Communicated with stakeholders to gather feedback, document requirements, and align deliverables with business objectives."
        ]
    },
    {
        id: "grownity-uiux",
        company: "Grownity",
        role: "UI/UX Designer",
        duration: "Aug 2022 – Dec 2023",
        category: "UI/UX",
        description: [
            "Reduced render time of user buddy lists by 75% through optimized UI layouts.",
            "Designed scalable Figma component libraries for rapid development.",
            "Conducted UX analysis to refine flows and improve navigation experience.",
            "Delivered responsive prototypes improving user clarity and engagement.",
            "Maintained consistent design systems aligned with brand identity."
        ]
    },

    {
        id: "coincent-intern",
        company: "Coincent",
        role: "Web Development Intern",
        duration: "Oct 2023 – Dec 2023",
        category: "Frontend",
        description: [
            "Developed a PHP-based Doctor Dashboard with role-based UIs.",
            "Applied advanced HTML5, CSS3 and JavaScript for responsive layouts.",
            "Implemented structured components and reusable UI modules.",
            "Delivered high-quality tasks with clean documentation and precision."
        ]
    },

    {
        id: "coincent-trainee",
        company: "Coincent",
        role: "Web Developer Trainee",
        duration: "Feb 2022 – Mar 2022",
        category: "Frontend",
        description: [
            "Completed intensive training in HTML, CSS and responsive design.",
            "Built multiple static web pages following modern web standards.",
            "Strengthened fundamentals in accessibility, media queries and layout systems."
        ]
    },

    {
        id: "ai-research",
        company: "Independent Research",
        role: "Researcher — Emotion & Mental State Analysis",
        duration: "2024 – 2025",
        category: "AI/ML",
        description: [
            "Researched BERT and RoBERTa models for emotion classification.",
            "Created preprocessing pipelines and dataset workflows.",
            "Conducted ML experiments and comparative model evaluations.",
            "Developed AI dashboards for psychological signal interpretation."
        ]
    },
];
