"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function RecruiterForm() {
    const [form, setForm] = useState({
        name: "",
        company: "",
        role: "",
        email: "",
        message: ""
    });

    const handle = (e: any) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    return (
        <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 bg-white/5 border border-white/10 rounded-2xl p-6"
        >
            <h3 className="text-xl font-semibold">Recruiter Inquiry</h3>

            <input
                name="name"
                value={form.name}
                onChange={handle}
                placeholder="Your Name"
                className="px-4 py-2 rounded-lg bg-white/10 border border-white/10 outline-none"
            />

            <input
                name="company"
                value={form.company}
                onChange={handle}
                placeholder="Company"
                className="px-4 py-2 rounded-lg bg-white/10 border border-white/10 outline-none"
            />

            <input
                name="role"
                value={form.role}
                onChange={handle}
                placeholder="Role you're hiring for"
                className="px-4 py-2 rounded-lg bg-white/10 border border-white/10 outline-none"
            />

            <input
                name="email"
                value={form.email}
                onChange={handle}
                placeholder="Your Email"
                className="px-4 py-2 rounded-lg bg-white/10 border border-white/10 outline-none"
            />

            <textarea
                name="message"
                value={form.message}
                onChange={handle}
                rows={4}
                placeholder="Additional Requirements / Message"
                className="px-4 py-2 rounded-lg bg-white/10 border border-white/10 outline-none"
            />

            <button
                type="button"
                className="px-4 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-sm font-semibold hover:scale-105 transition"
            >
                Submit Inquiry
            </button>
        </motion.form>
    );
}
