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
        id: "edoc",
        title: "PHP Based - eDoc: Appointment System",
        short: "A PHP Based, doc appointment system, find > select > schedule > meet!",
        long: "A hassle free appointment booking system, Connect hassle free!",
        category: "Fullstack",
        tech: ["PHP", "SQL", "XAMPP", "CSS"],
        repo: "https://drive.google.com/drive/folders/1nwTI7CUitXQkVbK_4JD2cuawY2joo8_S?usp=sharing",
        live: "https://edoc-project.netlify.app/",
        images: ["images/projects/edoc.png"]
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
        id: "ui-booking",
        title: "Mobile UI: Restaurant Booking App",
        short: "A vibrant restaurant booking app with appetizing visuals and smooth user flow.",
        long: "To make a prior booking to the table and food using lemon app - A restaurant booking app - UI",
        category: "UI/UX",
        tech: ["Figma", "Prototype", "Fitt's Law", "Micro-Interaction"],
        repo: "https://www.figma.com/design/tVzwbKK5w9UCTInn1NZtJv/LittleLemon?node-id=0-1&p=f&t=etNKFA3qU8deWLfx-0",
        live: "https://www.figma.com/proto/tVzwbKK5w9UCTInn1NZtJv/LittleLemon?node-id=0-1&p=f&t=etNKFA3qU8deWLfx-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
        images: ["images/projects/booking.png"]
    },
    {
        id: "ride-safe-trollx",
        title: "Ride Safe | TrollX – Multi-App Ecosystem",
        short: "A unified customer-side experience combining ride safety and social engagement apps.",
        long: "Designed a combination ecosystem of three interconnected apps focusing on safe commuting and community engagement. Created seamless user flows, intuitive navigation systems, and scalable UI components ensuring consistency across platforms.",
        category: "UI/UX",
        tech: ["Figma", "Design System", "User Flow", "Wireframing", "Prototyping"],
        repo: "https://www.figma.com/design/qXt3fXMZTObvrDUhMeW8Gk/CutsomerSide?node-id=0-1&p=f&t=XvhqAM8YEJU0II2E-0",
        live: "https://www.figma.com/design/qXt3fXMZTObvrDUhMeW8Gk/CutsomerSide?node-id=0-1&p=f&t=XvhqAM8YEJU0II2E-0",
        images: ["images/projects/ride-safe.png"]
    },
    {
        id: "legal-landing",
        title: "Legal Services – Single Landing Webpage",
        short: "A modern, conversion-focused legal services landing page.",
        long: "Designed a clean and authoritative single-page website for legal services with structured information hierarchy, trust-building elements, and optimized call-to-action placements for higher engagement.",
        category: "UI/UX",
        tech: ["Figma", "Landing Page Design", "Typography System", "Conversion UX"],
        repo: "https://www.figma.com/design/kCGasBumiF8t1xe7AA5p8q/AAS?node-id=117-860&t=QzmI9NhWTSZMcJU3-0",
        live: "https://www.figma.com/design/kCGasBumiF8t1xe7AA5p8q/AAS?node-id=117-860&t=QzmI9NhWTSZMcJU3-0",
        images: ["images/projects/legal.png"]
    },
    {
        id: "pharma-ui",
        title: "Pharma Project – Healthcare Interface Design",
        short: "A structured healthcare interface focused on usability and accessibility.",
        long: "Designed a pharmaceutical management interface prioritizing accessibility, data clarity, and medical-grade UI standards. Implemented clean dashboard layouts and structured data visualization components.",
        category: "UI/UX",
        tech: ["Figma", "Healthcare UX", "Dashboard UI", "Information Architecture"],
        repo: "https://www.figma.com/design/K88D52ux2AMOk3C7whLar7/Pharma-Project?node-id=0-1&p=f&t=5Qw7Kqt9iM1jODPZ-0",
        live: "https://www.figma.com/design/K88D52ux2AMOk3C7whLar7/Pharma-Project?node-id=0-1&p=f&t=5Qw7Kqt9iM1jODPZ-0",
        images: ["images/projects/pharma.png"]
    },
    {
        id: "ladakh-travel",
        title: "Travels & Tours – Ladakh Experience Platform",
        short: "A travel booking and experience showcase platform.",
        long: "Designed an immersive travel and tour booking platform featuring structured itinerary flows, destination highlights, and user-friendly booking journeys to enhance exploration and engagement.",
        category: "UI/UX",
        tech: ["Figma", "Travel UX", "Booking Flow", "Micro-Interactions"],
        repo: "https://www.figma.com/design/fsQ9uUoNeGychwT99pkEvT/Ladakh?node-id=107-39&p=f&t=g0n7wTUA4LWCHma0-0",
        live: "https://www.figma.com/design/fsQ9uUoNeGychwT99pkEvT/Ladakh?node-id=107-39&p=f&t=g0n7wTUA4LWCHma0-0",
        images: ["images/projects/ladakh.png"]
    },
    {
        id: "workly-crm",
        title: "Workly Venture – CRM/ERP Kanban System",
        short: "A productivity-driven CRM/ERP system with Kanban workflow management.",
        long: "Designed a structured CRM/ERP dashboard integrating Kanban-based task management, workflow tracking, and enterprise data organization to enhance operational efficiency.",
        category: "UI/UX",
        tech: ["Figma", "ERP UX", "Kanban System", "Dashboard Design"],
        repo: "https://www.figma.com/design/2jnO2T4bhikCCKAYOGENYr/Workly-Venture?node-id=28-217&t=7rL4k73sKUMC3v8K-1",
        live: "https://www.figma.com/design/2jnO2T4bhikCCKAYOGENYr/Workly-Venture?node-id=28-217&t=7rL4k73sKUMC3v8K-1",
        images: ["images/projects/workly.png"]
    },
    {
        id: "fintech-app",
        title: "FinTech Budget Tracker – Mobile App",
        short: "A financial management mobile app focused on budgeting and expense tracking.",
        long: "Designed a modern fintech mobile application for budget tracking and expense management with intuitive dashboards, transaction categorization, and financial insights visualization.",
        category: "UI/UX",
        tech: ["Figma", "FinTech UX", "Mobile UI", "Data Visualization"],
        repo: "https://www.figma.com/design/CM2K5OvCCHU3Em6iMhIdhP/Finance-Management-Mobile-App-UI-UX-Kit-for-Budget-Tracker-Financial-Prototype-Design--Community-?node-id=7020-3430&t=OK4zxRU8LclBZ6fX-1",
        live: "https://www.figma.com/design/CM2K5OvCCHU3Em6iMhIdhP/Finance-Management-Mobile-App-UI-UX-Kit-for-Budget-Tracker-Financial-Prototype-Design--Community-?node-id=7020-3430&t=OK4zxRU8LclBZ6fX-1",
        images: ["images/projects/fintech.png"]
    },
    {
        id: "novotel-crm",
        title: "Novotel – Hotel Management CRM/ERP",
        short: "A hotel management CRM system with operational dashboards.",
        long: "Designed a hotel management CRM/ERP system featuring booking management, customer tracking, and operational dashboards with structured enterprise workflows.",
        category: "UI/UX",
        tech: ["Figma", "CRM System", "ERP UX", "Enterprise Dashboard"],
        repo: "https://www.figma.com/design/oMn0tgewdNmm2LODhn9FYj/Novotel---Hotel-Mgmt-Sys?node-id=0-1&t=c6qGS62gMShp0cVl-1",
        live: "https://www.figma.com/design/oMn0tgewdNmm2LODhn9FYj/Novotel---Hotel-Mgmt-Sys?node-id=0-1&t=c6qGS62gMShp0cVl-1",
        images: ["images/projects/novotel.png"]
    },
    {
        id: "creative-academy",
        title: "Creative Academy – LMS System",
        short: "A structured Learning Management System for digital education.",
        long: "Designed a scalable LMS platform including course management, student dashboards, progress tracking, and interactive learning modules with intuitive navigation.",
        category: "UI/UX",
        tech: ["Figma", "LMS Design", "User Journey Mapping", "Dashboard UI"],
        repo: "https://www.figma.com/design/mts7ZzQefExGoRyr8ETsI4/CreativeAcademy?node-id=0-1&t=SZgh7qXyUKizDslB-1",
        live: "https://www.figma.com/design/mts7ZzQefExGoRyr8ETsI4/CreativeAcademy?node-id=0-1&t=SZgh7qXyUKizDslB-1",
        images: ["images/projects/creative.png"]
    }
];
