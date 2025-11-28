import "./globals.css";
import { Inter } from "next/font/google";
import ContextProvider from "@/components/ContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jagriti | Portfolio",
  description: "AI-powered portfolio website of Jagriti Sachdeva",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-darkBg text-white`}>
        
        {/* This file runs client code */}
        <ContextProvider />

        {children}
      </body>
    </html>
  );
}
