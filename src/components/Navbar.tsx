"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const NAV_ITEMS = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Tech", href: "#tech" },
    { label: "Experience", href: "#experience" },
    { label: "Certs", href: "#certifications" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = NAV_ITEMS.map((i) => i.href.replace("#", ""));
            let curr = "";

            sections.forEach((id) => {
                const sec = document.getElementById(id);
                if (sec) {
                    const rect = sec.getBoundingClientRect();
                    if (rect.top <= 120 && rect.bottom >= 120) curr = id;
                }
            });

            setActive(curr);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        document.querySelector(href)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <nav className="fixed top-4 left-0 right-0 z-50 px-6">
            <div
                className="mx-auto max-w-6xl flex items-center justify-between
        bg-[rgba(255,255,255,0.03)] backdrop-blur-md
        rounded-2xl px-4 py-2 shadow-soft border border-white/10"
            >
                {/* LEFT SIDE */}
                <div className="flex items-center gap-4">
                    <Link href="/" className="text-lg font-bold">
                        Jagriti
                    </Link>

                    <div className="hidden md:flex items-center gap-1">
                        {NAV_ITEMS.map((item) => {
                            const isActive = active === item.href.replace("#", "");

                            return (
                                <button
                                    key={item.href}
                                    onClick={() => scrollToSection(item.href)}
                                    className={`relative text-sm px-3 py-2 transition text-white/80 hover:text-white`}
                                >
                                    {item.label}

                                    {/* Slate underline if active */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="underline"
                                            className="absolute left-0 right-0 -bottom-1 h-[2px] bg-slate-400 rounded"
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => scrollToSection("#resume")}
                        className="hidden md:inline-flex px-4 py-2 rounded-xl text-sm
            bg-[rgba(255,255,255,0.03)] border border-white/10 
            hover:scale-105 transition text-white/90"
                    >
                        View Resume
                    </button>

                    <button
                        onClick={() => window.dispatchEvent(new Event('openChat'))}
                        className="px-3 py-2 rounded-lg border border-white/10 text-sm text-white/90"
                    >
                        Jagriti’s Bot
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden p-2 rounded-full border border-white/10"
                    >
                        <svg width="18" height="18" stroke="white">
                            <path d="M3 6h14M3 12h14M3 18h14" strokeWidth="1.5" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                className="mx-auto max-w-6xl mt-2 md:hidden overflow-hidden 
        bg-[rgba(255,255,255,0.03)] backdrop-blur-md rounded-xl px-4 py-3 border border-white/10"
            >
                {NAV_ITEMS.map((item) => {
                    const isActive = active === item.href.replace("#", "");

                    return (
                        <button
                            key={item.href}
                            onClick={() => {
                                scrollToSection(item.href);
                                setOpen(false);
                            }}
                            className="relative text-left text-sm px-3 py-2 text-white/80 hover:text-white"
                        >
                            {item.label}
                            {isActive && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute left-0 right-0 -bottom-1 h-[2px] bg-slate-400 rounded"
                                />
                            )}
                        </button>
                    );
                })}
            </motion.div>
        </nav>
    );
}
