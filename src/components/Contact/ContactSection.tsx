"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import JagritiInquiryForm from "./JagritiInquiryForm";

export default function ContactSection() {
    const [tab, setTab] = useState<"info" | "form">("info");

    return (
        <section className="py-16 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-white">Get in touch</h2>
                    <p className="text-neutral-400 text-sm max-w-xl mx-auto mt-3">
                        Whether it's a job, project collaboration, or a quick question — send me a message.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-10">
                    <div className="flex items-center rounded-full p-1 bg-neutral-900 border border-neutral-800">
                        <button
                            onClick={() => setTab("info")}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition ${tab === "info"
                                ? "bg-neutral-800 text-white"
                                : "text-neutral-400 hover:text-white"
                                }`}
                        >
                            Contact Info
                        </button>
                        <button
                            onClick={() => setTab("form")}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition ${tab === "form"
                                ? "bg-neutral-800 text-white"
                                : "text-neutral-400 hover:text-white"
                                }`}
                        >
                            Recruiter Inquiry
                        </button>
                    </div>
                </div>

                {/* Content */}
                <AnimatePresence mode="wait">
                    {tab === "info" ? (
                        <motion.div
                            key="info"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.25 }}
                            className="space-y-10"
                        >

                            {/* QUICK ACTIONS */}
                            <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-lg text-center ">
                                <h3 className="text-lg font-semibold text-white mb-2">Quick Actions</h3>
                                <p className="text-sm text-neutral-400 mb-4">
                                    Prefer a faster way? Use the instant buttons below.
                                </p>

                                <div className="flex items-center gap-4 justify-center ">
                                    <a
                                        href="mailto:jags.jagriti12@gmail.com"
                                        className="px-4 py-2 rounded-lg bg-neutral-800 text-white text-sm hover:opacity-80"
                                    >
                                        Send Email
                                    </a>
                                    <span className="hidden md:block text-neutral-600">|</span>
                                    <button
                                        onClick={() => setTab("form")}
                                        className="px-4 py-2 rounded-lg bg-neutral-800 text-white text-sm hover:opacity-80"
                                    >
                                        Open Inquiry Form
                                    </button>
                                    <span className="hidden md:block text-neutral-600">|</span>
                                    <div className="flex items-center gap-2">
                                        <a
                                            href="https://wa.me/919463954709"
                                            className="px-4 py-2 rounded-lg bg-neutral-800 text-white text-sm hover:opacity-80"
                                        >
                                            Connect over Whatsapp
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* BIG STRIPE — Address | Phone | Email */}
                            <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 text-center space-y-4 shadow-lg">

                                <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white font-medium text-lg tracking-wide">

                                    {/* Address */}
                                    <div className="flex items-center gap-2">
                                        <HiOutlineLocationMarker className="text-xl" />
                                        <a
                                            href="#"
                                            className="px-4 py-2 rounded-lg bg-neutral-800 text-white text-sm hover:opacity-80"
                                        >
                                            Jalandhar,Punjab,India
                                        </a>
                                    </div>

                                    <span className="hidden md:block text-neutral-600">|</span>

                                    {/* Phone */}
                                    <div className="flex items-center gap-2">
                                        <HiOutlinePhone className="text-xl" />
                                        <a
                                            href="tel:+919463954709"
                                            className="px-4 py-2 rounded-lg bg-neutral-800 text-white text-sm hover:opacity-80"
                                        >
                                            Schedule a call
                                        </a>
                                    </div>
                                    <span className="hidden md:block text-neutral-600">|</span>

                                    {/* Email */}
                                    <div className="flex items-center gap-2">
                                        <HiOutlineMail className="text-xl" />
                                        <a
                                            href="mailto:jags.jagriti12@gmail.com"
                                            className="px-4 py-2 rounded-lg bg-neutral-800 text-white text-sm hover:opacity-80"
                                        > Send Mail</a>
                                    </div>

                                </div>

                                {/* Social Icons */}


                            </div>
                            <div className="flex items-center justify-center gap-6 pt-3 text-4xl">
                                <a
                                    href="https://github.com/jagriti-12"
                                    target="_blank"
                                    className="text-2xl text-white hover:opacity-80"
                                >
                                    <FaGithub size={32} />
                                </a>

                                <a
                                    href="https://linkedin.com/in/jagriti-sachdeva"
                                    target="_blank"
                                    className="text-2xl text-white hover:opacity-80"
                                >
                                    <FaLinkedin size={32} />
                                </a>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.25 }}
                        >
                            <JagritiInquiryForm />
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
}
