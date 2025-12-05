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
        role: "Frontend Developer",
        short: "Skilled in React, Next.js, Tailwind, UI/UX & responsive development.",
        file: "/resumes/frontend.pdf",
        keywords: ["React", "Next.js", "Frontend Developer", "UI UX", "Web Developer Resume"]
    },
    {
        id: "java-dev",
        role: "Java Developer",
        short: "Core Java, OOP, JDBC, SQL, Spring concepts & backend architecture.",
        file: "/resumes/Jagriti_Java_Developer.pdf",
        keywords: ["Java", "Backend", "OOP", "Java Developer Resume"]
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
    {
        id: "UI/UX Designer",
        role: "UI/UX Designer",
        short: "User research, Wireframes, prototyping, visual UI systems.",
        file: "/resumes/Jagriti_UI_UX_DESIGNER.pdf",
        keywords: ["Design", "Figma", "Adobe XD", "Prototyping", "UI/UX Resume"]
    },
    // {
    //     id: "UI/UX Designer",
    //     role: "UI/UX Designer",
    //     short: "User research, Wireframes, prototyping, visual UI systems.",
    //     file: "/resumes/Jagriti_UI_UX_DESIGNER.pdf",
    //     keywords: ["Design", "Figma", "Adobe XD", "Prototyping", "UI/UX Resume"]
    // }
];