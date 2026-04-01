// resume-data.ts
export type ResumeItem = {
    id: string;
    role: string;
    short: string;
    file: string;      // PDF path
    keywords: string[]; // SEO tags
};

export const RESUMES: ResumeItem[] = [
    {
        id: "web-dev",
        role: "Fullstack Developer",
        short: "Skilled in React, Next.js, Tailwind, UI/UX & responsive development.",
        file: "/resumes/Jagriti_FullstackDeveloper.pdf",
        keywords: ["React", "Next.js", "Frontend Developer", "UI UX", "Web Developer Resume"]
    },
    {
        id: "UI/UX Designer",
        role: "UI/UX Designer",
        short: "User research, Wireframes, prototyping, visual UI systems.",
        file: "/resumes/Jagriti_UI_UX_DESIGNER.pdf",
        keywords: ["Design", "Figma", "Adobe XD", "Prototyping", "UI/UX Resume"]
    },
    {
        id: "Project Manager",
        role: "Project Manager",
        short: "Experience in managing software development projects, coordinating teams, and ensuring delivery of high-quality solutions.",
        file: "/resumes/Jagriti_Project_Manager.pdf",
        keywords: ["Project Management", "Team Coordination", "Agile", "Scrum", "Project Manager Resume"]
    },
    {
        id: "python-dev",
        role: "Python Developer",
        short: "Python, Django, APIs, automation & backend scripting experience.",
        file: "/resumes/Jagriti_India_PythonDeveloper.pdf",
        keywords: ["Python", "Django", "APIs", "Backend", "Python Developer Resume"]
    },
    {
        id: "data-analyst",
        role: "Data Analyst",
        short: "Data cleaning, SQL, Power BI, Excel, visualization & reporting.",
        file: "/resumes/Jagriti_Data_Analyst.pdf",
        keywords: ["Data Analyst", "Power BI", "SQL", "Visualization Resume"]
    },
    
    // {
    //     id: "UI/UX Designer",
    //     role: "UI/UX Designer",
    //     short: "User research, Wireframes, prototyping, visual UI systems.",
    //     file: "/resumes/Jagriti_UI_UX_DESIGNER.pdf",
    //     keywords: ["Design", "Figma", "Adobe XD", "Prototyping", "UI/UX Resume"]
    // }
];