export interface Certification {
    id: string;
    title: string;
    issuer: string;
    date: string;
    category:
    | "Cloud"
    | "Programming"
    | "AI/ML"
    | "UI/UX"
    | "Data Analytics"
    | "Specializations";
    file?: string;
    image?: string;
};

export const CERTIFICATIONS: Certification[] = [
    // CLOUD CERTIFICATIONS
    {
        id: "oci-ds-2025",
        title: "Oracle Cloud Infrastructure 2025 – Certified Data Science Professional",
        issuer: "Oracle",
        date: "2025",
        category: "Cloud",
        image: "/certs/oracle_badge.png",
        file: "/certs/oracle_2025.pdf"
    },
    {
        id: "oci-dev-2025",
        title: "Oracle Cloud Infrastructure 2025 – Certified Developer Professional",
        issuer: "Oracle",
        date: "2025",
        category: "Cloud",
        image: "/certs/oracle_dev.png",
        file: "/certs/oracle_dev.pdf"
    },

    // PROGRAMMING CERTIFICATIONS
    {
        id: "meta-mobile-js",
        title: "Mobile Development & JavaScript - Professional",
        issuer: "Meta",
        date: "2024",
        category: "Programming",
        image: "/certs/meta_mobile.png",
        file: "/certs/meta_mobile.pdf"
    },
    {
        id: "mta-webdev",
        title: "Microsoft Technology Associate – Web Development",
        issuer: "Microsoft",
        date: "2022",
        category: "Programming",
        image: "/certs/mta_webdev.png",
        file: "/certs/mta_webdev.pdf"
    },
    {
        id: "hackerrank-java-basic",
        title: "Java (Basic)",
        issuer: "HackerRank",
        date: "2025",
        category: "Programming",
        image: "/certs/hr_java.png",
        file: "/certs/hr_java.pdf"
    },
    {
        id: "hackerrank-sql-basic",
        title: "SQL (Basic)",
        issuer: "HackerRank",
        date: "2025",
        category: "Programming",
        image: "/certs/hr_sql.png",
        file: "/certs/hr_sql.pdf"
    },
    {
        id: "hackerrank-sql-intermediate",
        title: "SQL (Intermediate)",
        issuer: "HackerRank",
        date: "2025",
        category: "Programming",
        image: "/certs/hr_sql2.png",
        file: "/certs/hr_sql2.pdf"
    },
    {
        id: "hackerrank-python",
        title: "Python Certification",
        issuer: "HackerRank",
        date: "2025",
        category: "Programming",
        image: "/certs/hr_python.png",
        file: "/certs/hr_python.pdf"
    },
    {
        id: "infosys-typescript",
        title: "TypeScript Certification",
        issuer: "Infosys Springboard",
        date: "2023",
        category: "Programming",
        image: "/certs/ts.png",
        file: "/certs/ts.pdf"
    },
    // AI / ML CERTIFICATIONS
    {
        id: "ibm-fsdev",
        title: "IBM Full Stack Software Developer - Professional",
        issuer: "IBM",
        date: "2024",
        category: "AI/ML",
        image: "/certs/ibm_fs.png",
        file: "/certs/ibm_fs.pdf"
    },
    {
        id: "ibm-mlpy",
        title: "Machine Learning with Python",
        issuer: "IBM",
        date: "2024",
        category: "AI/ML",
        image: "/certs/ml_python.png",
        file: "/certs/ml_python.pdf"
    },
    {
        id: "ibm-django",
        title: "Django Application Development with SQL & Databases",
        issuer: "IBM",
        date: "2023",
        category: "AI/ML",
        image: "/certs/ibm_django.png",
        file: "/certs/ibm_django.pdf"
    },
    {
        id: "google-python",
        title: "Crash Course on Python - Professional",
        issuer: "Google",
        date: "2023",
        category: "Programming",
        image: "/certs/google_python.png",
        file: "/certs/google_python.pdf"
    },
    {
        id: "ibm-python-ai",
        title: "Python for Data Science, AI & Development",
        issuer: "IBM",
        date: "2023",
        category: "AI/ML",
        image: "/certs/ibm_python.png",
        file: "/certs/ibm_python.pdf"
    },

    // DATA ANALYTICS / VISUALIZATION
    {
        id: "ucdavis-Va",
        title: "Visual Analytics with Tableau",
        issuer: "University of California, Davis",
        date: "2023",
        category: "Data Analytics",
        image: "/certs/tableau.png",
        file: "/certs/tableau.pdf"
    },
    {
        id: "ucdavis-Tab",
        title: "Data Visualization with Tableau - Project",
        issuer: "University of California, Davis",
        date: "2023",
        category: "Data Analytics",
        image: "/certs/dv_tab.png",
        file: "/certs/dv_tab.pdf"
    },
    {
        id: "ucdavis-dv",
        title: "Data Visualization with Tableau - Professional",
        issuer: "University of California, Davis",
        date: "2023",
        category: "Data Analytics",
        image: "/certs/dv.png",
        file: "/certs/dv.pdf"
    },
    {
        id: "meta-ux-principles",
        title: "Principles of UX/UI Design - Professional",
        issuer: "Meta",
        date: "2023",
        category: "UI/UX",
        image: "/certs/meta_ux.png",
        file: "/certs/meta_ux.pdf"
    },
    {
        id: "google-ux-foundations",
        title: "Foundations of UI/UX Design - Professional",
        issuer: "Google",
        date: "2023",
        category: "UI/UX",
        image: "/certs/google_ux.png",
        file: "/certs/google_ux.pdf"
    },

    // SPECIALIZATIONS
    {
        id: "google-project-mgmt",
        title: "Google Project Management Specialization",
        issuer: "Google",
        date: "2024",
        category: "Specializations",
        image: "/certs/google_pm.png",
        file: "/certs/google_pm.pdf"
    },
    {
        id: "ibm-ai-engineering",
        title: "IBM AI Engineering Specialization",
        issuer: "IBM",
        date: "2024",
        category: "Specializations",
        image: "/certs/ibm_ai.png",
        file: "/certs/ibm_ai.pdf"
    },
    {
        id: "learnquest-java",
        title: "Java as a Second Language — Specialization",
        issuer: "LearnQuest",
        date: "2023",
        category: "Specializations",
        image: "/certs/lq_java.png",
        file: "/certs/lq_java.pdf"
    }
];
