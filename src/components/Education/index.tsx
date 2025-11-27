"use client";

import { EDUCATION } from "./edu-data";
import EduItem from "./EduItem";
import { motion } from "framer-motion";

export default function EducationSection() {
    return (
        <section id="education" className="py-24 px-6 bg-[rgba(255,255,255,0.02)]">
            <div className="mx-auto max-w-5xl">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-10"
                >
                    Education
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {EDUCATION.map((item) => (
                        <EduItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
