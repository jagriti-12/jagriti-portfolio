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
    { name: "TypeScript", category: "Frontend", icon: "/icons/typescript.svg" },
    { name: "HTML", category: "Frontend", icon: "/icons/html.svg" },
    { name: "CSS", category: "Frontend", icon: "/icons/css.svg" },

    // Backend
    { name: "python", category: "Backend", icon: "/icons/python.svg" },
    { name: "Node.js", category: "Backend", icon: "/icons/nodejs.svg" },
    { name: "Java", category: "Backend", icon: "/icons/java.svg" },
    { name: "JavaScript", category: "Backend", icon: "/icons/javascript.svg" },
    { name: "Express.js", category: "Backend", icon: "/icons/ex.svg" },
    { name: "Django", category: "Backend", icon: "/icons/django.svg" },
    { name: "PHP", category: "Backend", icon: "/icons/php.svg" },


    // // AI / ML
    // { name: "Python", category: "AI/ML", icon: "/icons/python.svg" },
    // { name: "BERT", category: "AI/ML" },
    // { name: "TensorFlow", category: "AI/ML", icon: "/icons/tensorflow.svg" },
    // { name: "Transformers", category: "AI/ML" },

    // Data Analytics
    { name: "Pandas", category: "Data Analytics", icon: "/icons/pypandas.svg" },
    { name: "Power BI", category: "Data Analytics", icon: "/icons/bi.svg" },
    { name: "SQL", category: "Data Analytics", icon: "/icons/sql.svg" },
    { name: "Excel", category: "Data Analytics", icon: "/icons/excel.svg" },

    // UI / UX
    { name: "Figma", category: "UI/UX", icon: "/icons/figma.svg" },
    { name: "Adobe XD", category: "UI/UX", icon: "/icons/adobexd.svg" },
    { name: "Prototyping", category: "UI/UX", icon: "/icons/prototype.svg" },
    { name: "Wireframing", category: "UI/UX", icon: "/icons/wireframe.svg" },
    { name: "Adobe Creative", category: "UI/UX", icon: "/icons/adobecreative.svg" },
    { name: "Illustrations", category: "UI/UX", icon: "/icons/graphic.svg" },
    { name: "Framer", category: "UI/UX", icon: "/icons/framer.svg" },

    // Tools / DevOps
    { name: "Git", category: "Tools", icon: "/icons/git.svg" },
    { name: "GitHub", category: "Tools", icon: "/icons/github.svg" },
    { name: "Vercel", category: "Tools", icon: "/icons/vercel.svg" },
    { name: "Docker", category: "Tools", icon: "/icons/docker.svg" },
    { name: "Xampp", category: "Tools", icon: "/icons/xampp.svg" },
    { name: "Postman", category: "Tools", icon: "/icons/postman.svg" },

    // Databases (optional category)
    { name: "Mongo DB", category: "Databases", icon: "/icons/mongodb.svg" },
    { name: "Postgre SQL", category: "Databases", icon: "/icons/postgresql.svg" },
    { name: "MySQL", category: "Databases", icon: "/icons/mysql.svg" },
];
