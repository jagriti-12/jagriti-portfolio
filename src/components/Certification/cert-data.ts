export type Certification = {
    id: string;
    title: string;
    issuer: string;
    date: string;
    category: "Professional" | "Other";
    file?: string;   // PDF path
    image?: string;  // Preview or badge
};

export const CERTIFICATIONS: Certification[] = [
    {
        id: "oracle-2025-dev",
        title: "Oracle Cloud Infrastructure 2025 Certified Developer Professional",
        issuer: "Oracle",
        date: "2025",
        category: "Professional",
        file: "/certs/oracle_2025.pdf",
        image: "/certs/oracle_badge.png"
    },
    {
        id: "python-course",
        title: "Advanced Python Programming",
        issuer: "Udemy",
        date: "2024",
        category: "Other",
        file: "/certs/python_adv.pdf",
        image: "/certs/python_badge.png"
    },
    {
        id: "react-course",
        title: "Modern React Development",
        issuer: "Coursera",
        date: "2023",
        category: "Other",
        file: "/certs/react.pdf",
        image: "/certs/react_badge.png"
    },
];
