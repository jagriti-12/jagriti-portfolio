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

    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const handle = (e: any) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    async function submit(e: any) {
        e.preventDefault();
        setLoading(true);
        setStatus("Sending...");

        try {
            const res = await fetch("/api/recruiter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            });

            const data = await res.json();

            if (data.success) {
                setStatus("Recruiter inquiry sent successfully!");
                setForm({
                    name: "",
                    company: "",
                    role: "",
                    email: "",
                    message: ""
                });
            } else {
                setStatus("Failed to send. Please try again.");
            }
        } catch (err) {
            setStatus("Server error — try again.");
        }

        setLoading(false);
    }

    return (
        <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg"
        >
            <h3 className="text-xl font-semibold">Recruiter Inquiry</h3>

            {/* INPUT FIELDS */}
            {["name", "company", "role", "email"].map((field) => (
                <motion.input
                    key={field}
                    name={field}
                    value={(form as any)[field]}
                    onChange={handle}
                    placeholder={
                        field === "role"
                            ? "Role you're hiring for"
                            : field === "email"
                            ? "Your Email"
                            : field.charAt(0).toUpperCase() + field.slice(1)
                    }
                    whileFocus={{ scale: 1.02 }}
                    className="px-4 py-2 rounded-lg bg-white/10 border border-white/10 outline-none focus:border-primary/60 transition"
                />
            ))}

            {/* TEXTAREA */}
            <motion.textarea
                name="message"
                value={form.message}
                onChange={handle}
                rows={4}
                placeholder="Additional Requirements / Message"
                whileFocus={{ scale: 1.02 }}
                className="px-4 py-2 rounded-lg bg-white/10 border border-white/10 outline-none focus:border-primary/60 transition"
            />

            {/* BUTTON */}
            <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                type="submit"
                disabled={loading}
                className="px-4 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-sm font-semibold disabled:opacity-60 transition"
            >
                {loading ? (
                    <span className="flex items-center gap-2">
                        <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
                        Sending...
                    </span>
                ) : (
                    "Submit Inquiry"
                )}
            </motion.button>

            {/* STATUS MESSAGE */}
            {status && (
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm text-white/70"
                >
                    {status}
                </motion.p>
            )}
        </motion.form>
    );
}
