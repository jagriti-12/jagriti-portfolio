"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [status, setStatus] = useState(""); // NEW

    const handle = (e: any) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    async function submit(e: any) {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            });

            const data = await res.json();

            if (data.success) {
                setStatus("Message sent successfully!");
                setForm({ name: "", email: "", message: "" });
            } else {
                setStatus("Failed to send message.");
            }
        } catch (err) {
            setStatus("Server error — try again.");
        }
    }

    return (
        <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 bg-white/5 border border-white/10 rounded-2xl p-6"
        >
            <h3 className="text-xl font-semibold">Contact Me</h3>

            <input
                name="name"
                value={form.name}
                onChange={handle}
                placeholder="Your Name"
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
                rows={5}
                placeholder="Your Message"
                className="px-4 py-2 rounded-lg bg-white/10 border border-white/10 outline-none"
            />

            <button
                type="submit"
                className="px-4 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-sm font-semibold hover:scale-105 transition"
            >
                Send Message
            </button>

            {status && (
                <p className="text-sm text-white/60 mt-1">{status}</p>
            )}
        </motion.form>
    );
}
