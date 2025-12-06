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
        long: "A fully interactive dashboard featuring task tracking, user authentication, team panels, analytics widgets, and role-based features. Creds: admin@me.com | pass-(123), employee1@example.com | Pass (123)",
        category: "Frontend",
        tech: ["React", "Tailwind", "Node.js", "MongoDB"],
        repo: "https://github.com/jagriti-12/employee-task-dashboard",
        live: "https://empfrontenddashboard.netlify.app/",
        images: ["images/projects/Dashboard.png"]
    },
    {
        id: "job-application-tracker",
        title: "Personal Job-Application Tracker",
        short: "A full-stack Job Tracker app that streamlines job applications with real-time updates, intuitive UI, and organized tracking.",
        long: "The Job Tracker is a clean, efficient, and user-centric web application designed to help users seamlessly track their job applications from start to offer. Built using a modern tech stack, the platform allows users to log job details, update statuses, monitor progress, and stay organized throughout the placement or hiring cycle.",
        category: "Fullstack",
        tech: ["Django", "Tailwind", "Python", "sqlite", "MongoDB"],
        repo: "https://github.com/jagriti-12/job_tracker",
        live: "https://jagritisachdeva.pythonanywhere.com/",
        images: ["images/projects/Tracker.png"]
    },
    {
        id: "news-aggregator",
        title: "Basic News Aggregator Website",
        short: "A simple news aggregator app built using APIs.",
        category: "Python",
        tech: ["Python", "Flask", "API", "Tailwind", "JavaScript"],
        repo: "https://github.com/jagriti-12/news-aggregator",
        live: "https://basic-news-aggregator.onrender.com/",
        images: ["images/projects/news.png"]
    },
    {
        id: "rdp",
        title: "RDP: Recurring Date Picker",
        short: "To schedule events, a quick and reusable date picker system",
        long: "A reusable recurring date picker inspired by the TickTick app.Users can pick recurring schedules like daily, weekly, monthly, or yearly — with flexible custom rules and a live preview of generated dates.",
        category: "Frontend",
        tech: ["React", "Tailwind", "Jotai", "Vitest"],
        repo: "https://github.com/jagriti-12/RDP-PearlThoughts",
        live: "https://rdp-pearl-thoughts.vercel.app/",
        images: ["images/projects/rdp.png"]
    },
    {
        id: "blinkit",
        title: "Blinkit Real-Time Data Analysis",
        short: "To visualize order distribution, product demand, and location-based performance in real time.",
        long: "A BlinkIt Dashboard, which is built on top of Python, DataCleaning and PowerBI by Collecting and analyzing Blinkit dataset to study delivery time, pricing, and customer purchase behavior",
        category: "Data",
        tech: ["Power BI", "Data Visualization", "Python", "Data Cleaning"],
        repo: "https://colab.research.google.com/drive/19yLzuGHgOChim3FpjPtA4hNgplQ-HGJe?usp=sharing",
        live: "https://app.powerbi.com/groups/me/reports/36103986-b7c2-47a9-9c98-ab9c10d473c2/7913615b90256889ade8?experience=power-bi",
        images: ["images/projects/blinkit.png"]
    },
    {
        id: "zomato",
        title: "Zomato Review Sentiment Analysis ",
        short: "To visualize the collected and preprocessed restaurant dataset for classification.",
        long: "A Dashboard,  Visualized sentiment distribution and generated word clouds of common keywords.",
        category: "AI/ML",
        tech: ["Python - Pandas", "Data Visualization", "Data Cleaning", "Seaborn"],
        repo: "https://colab.research.google.com/drive/19yLzuGHgOChim3FpjPtA4hNgplQ-HGJe?usp=sharing",
        live: "https://colab.research.google.com/drive/19yLzuGHgOChim3FpjPtA4hNgplQ-HGJe?usp=sharing",
        images: ["images/projects/zomato.png"]
    },
    {
        id: "soulmap",
        title: "Mobile UI Design: Emotional Focus Prototype",
        short: "A Mobile UI Prototype - to check and track mental health.",
        long: "A Figma Prototype to track mental health state and allow them to connect with parents, guardians and consultant docs to get in touch with them in case of emergency.",
        category: "UI/UX",
        tech: ["Figma", "Prototype", "WireFrame", "Design Architecture"],
        repo: "https://www.figma.com/design/KgSrKTtFNwaRJdOwYFm7TK/SoulMap-Frontend?node-id=0-1",
        live: "https://www.figma.com/proto/KgSrKTtFNwaRJdOwYFm7TK/SoulMap-Frontend?node-id=4-3&p=f&t=zIFoCe4goRvQhJNQ-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A3&show-proto-sidebar=1",
        images: ["images/projects/soulmap.png"]
    },
    {
        id: "ui-portfolio",
        title: "AI - UI/UX Designer Portfolio Website",
        short: "AI powered UI UX Designer Portfolio Website by - FIGMA MAKE",
        long: "A Figma UI/UX portfolio website built with NO CODE and full of GenAI through Figma Make.",
        category: "UI/UX",
        tech: ["Figma", "Prototype", "WireFrame", "Design System"],
        repo: "https://typo-access-13773766.figma.site",
        live: "https://typo-access-13773766.figma.site",
        images: ["images/projects/ui-portfolio.png"]
    },
    {
        id: "ui-portfolio",
        title: "Mobile UI: Restaurant Booking App",
        short: "A vibrant restaurant booking app with appetizing visuals and smooth user flow.",
        long: "To make a prior booking to the table and food using lemon app - A restaurant booking app - UI",
        category: "UI/UX",
        tech: ["Figma", "Prototype", "Fitt's Law", "Micro-Interaction"],
        repo: "https://www.figma.com/design/tVzwbKK5w9UCTInn1NZtJv/LittleLemon?node-id=0-1&p=f&t=etNKFA3qU8deWLfx-0",
        live: "https://www.figma.com/proto/tVzwbKK5w9UCTInn1NZtJv/LittleLemon?node-id=0-1&p=f&t=etNKFA3qU8deWLfx-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
        images: ["images/projects/booking.png"]
    },
];
