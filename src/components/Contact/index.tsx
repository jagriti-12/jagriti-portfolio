"use client";

import ContactForm from "./ContactForm";
import RecruiterForm from "./RecruiterForm";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
    return (
        <section id="contact" className="py-24 px-6">
            <div className="mx-auto max-w-6xl">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-10"
                >
                    Contact
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-10">
                    <ContactForm />
                    <RecruiterForm />
                </div>

                {/* Socials */}
                <div className="mt-16 flex items-center gap-6 justify-center">
                    <a
                        href="https://github.com/jags-jagriti"
                        target="_blank"
                        className="text-3xl text-white hover:text-accent transition"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/jagriti-sachdeva/"
                        target="_blank"
                        className="text-3xl text-white hover:text-accent transition"
                    >
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </section>
    );
}
