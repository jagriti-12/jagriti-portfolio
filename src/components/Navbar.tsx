"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

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
    const pathname = usePathname?.() ?? "/";

    return (
        <nav className="fixed top-4 left-0 right-0 z-50 px-6">
            <div className="mx-auto max-w-6xl flex items-center justify-between bg-[rgba(255,255,255,0.03)] backdrop-blur-md rounded-2xl px-4 py-2 shadow-soft">
                <div className="flex items-center gap-4">
                    <Link href="/" className="text-lg font-bold">
                        Jagriti
                    </Link>

                    <div className="hidden md:flex items-center gap-2">
                        {NAV_ITEMS.map((n) => (
                            <a
                                key={n.href}
                                href={n.href}
                                className="text-sm px-3 py-2 rounded hover:bg-white/5 transition"
                            >
                                {n.label}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={() => {
                            // analytics placeholder
                            console.info("analytics: resume_cta_click");
                            window?.scrollTo({ top: document.querySelector("#resume")?.getBoundingClientRect().top ?? 0, behavior: "smooth" });
                        }}
                        className="hidden md:inline-flex px-4 py-2 rounded-2xl bg-gradient-to-r from-primary to-accent text-sm font-medium shadow-lg transform hover:scale-105 transition"
                    >
                        View Resume
                    </button>

                    <button
                        onClick={() => {
                            // open chat widget using event
                            const ev = new CustomEvent("openChat");
                            window.dispatchEvent(ev);
                        }}
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/8 text-sm"
                    >
                        Chat
                    </button>

                    <button
                        className="md:hidden p-2 rounded-full border border-white/6"
                        onClick={() => setOpen((s) => !s)}
                        aria-label="menu"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                className="mx-auto max-w-6xl overflow-hidden mt-2 md:hidden bg-[rgba(255,255,255,0.02)] rounded-xl px-4 py-3"
            >
                <div className="flex flex-col gap-2">
                    {NAV_ITEMS.map((n) => (
                        <a key={n.href} href={n.href} className="text-sm px-3 py-2 rounded hover:bg-white/5 transition">
                            {n.label}
                        </a>
                    ))}
                </div>
            </motion.div>
        </nav>
    );
}
