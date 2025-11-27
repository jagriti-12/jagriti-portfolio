export type EducationItem = {
    id: string;
    institution: string;
    degree: string;
    duration: string;
    details?: string[];
};

export const EDUCATION: EducationItem[] = [
    {
        id: "cu-btech-cse",
        institution: "Chandigarh University",
        degree: "B.E. in Computer Science & Engineering",
        duration: "2021 – 2025 | CGPA - 8.37",
        details: [
            "Studied core CS fundamentals: DSA, DBMS, OS, Networking.",
            "Built multiple projects including AI and frontend applications.",
            "Leader in academic and extracurricular technical activities."
        ]
    },
    {
        id: "school",
        institution: "Schooling",
        degree: "Science (PCM)",
        duration: "2020-2021 | Grade - 7.3",
        details: [
            "Focused on core mathematics & physics foundation.",
            "Participated in science exhibitions & competitions."
        ]
    },
    {
        id: "school2",
        institution: "DMS ",
        degree: "Xth - With IT",
        duration: "2018-2019 | Grade 84.8%",
        details: [
            "Focused on core mathematics & physics foundation.",
            "Participated in science exhibitions & competitions."
        ]
    }
];
