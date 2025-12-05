// "use client";
import "./globals.css";
import { Inter } from "next/font/google";
import ContextProvider from "@/components/ContextProvider";
import type { ReactNode } from "react";
// import { useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Jagriti Sachdeva – Frontend Developer & UI/UX Designer",
  description: "Portfolio of Jagriti Sachdeva — Frontend Developer, UI/UX Designer and Data Analyst skilled in Next.js, React, Django, Figma, SQL and Data Visualization.",
  keywords: [
    "Frontend Developer",
    "UI/UX Designer",
    "React Developer",
    "Next.js Developer",
    "Chandigarh University CSE",
    "Data Analyst",
    "Portfolio",
    "UI UX Designer",
    "AI Developer",
    "Tech Stack",
    "Jagriti Sachdeva Portfolio",
    "Developer Skills",
    "Designing Methods",
    "Certifications",
    "Oracle Cloud Certification",
    "IBM AI Engineering",
    "Google UX Design",
    "Tableau Data Analytics",
    "Meta JavaScript",
  ],
  openGraph: {
    title: "Jagriti — Tech Stack",
    description:
      "Detailed technical skillset across Frontend, Backend, Data Analytics, AI/ML, and UI/UX.",
    url: "https://your-portfolio-url.com",
    siteName: "Jagriti Portfolio",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  // const [theme, setTheme] = useState("dark");
  // useEffect(() => {
  //   const saved = localStorage.getItem("theme");
  //   if (saved) setTheme(saved);
  // }, []);

  // useEffect(() => {
  //   if (theme === "light") {
  //     document.documentElement.classList.add("light");
  //   } else {
  //     document.documentElement.classList.remove("light");
  //   }
  //   localStorage.setItem("theme", theme);
  // }, [theme]);
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Jagriti Sachdeva", 
            "jobTitle": "Frontend Developer & UI/UX Designer",
            "url": "https://your-portfolio-link.com",
            "sameAs": [
            "https://github.com/jagriti-12",
            "https://linkedin.com/in/jagriti-sachdeva"
            ],
            "alumniOf": "Chandigarh University"
            }
            `}
        </script>

      </head>
      {/* <html lang="en" className={theme === "light" ? "light" : ""}> */}
      <body suppressHydrationWarning className={`${inter.className}${inter.className} bg-darkBg text-white`}>

        {/* This file runs client code */}
        <ContextProvider />

        {children}
      </body>
    </html>
  );
}
