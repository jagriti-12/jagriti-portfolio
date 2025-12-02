// "use client";
import "./globals.css";
import { Inter } from "next/font/google";
import ContextProvider from "@/components/ContextProvider";
// import { useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jagriti | Portfolio",
  description: "AI-powered portfolio website of Jagriti Sachdeva",
};

export default function RootLayout({ children }) {
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
    {/* <html lang="en" className={theme === "light" ? "light" : ""}> */}
      <body className={`${inter.className} bg-darkBg text-white`}>

        {/* This file runs client code */}
        <ContextProvider />

        {children}
      </body>
    </html>
  );
}
