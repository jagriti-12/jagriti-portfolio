"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

interface InquiryData {
    name: string;
    email: string;
    company: string;
    role: string;
    contactType: string;
    urgency: string;
    subject: string;
    message: string;
    budget: string;
    timeline: string;
}

interface InquiryErrors {
    name?: string;
    email?: string;
    company?: string;
    role?: string;
    contactType?: string;
    urgency?: string;
    subject?: string;
    message?: string;
    budget?: string;
    timeline?: string;
    submit?: string;
}

const CONTACT_TYPES = [
    { id: "job", label: "Job Opportunity", icon: "" },
    { id: "project", label: "Project Collaboration", icon: "" },
    { id: "consult", label: "Consultation", icon: "" },
    { id: "other", label: "Other", icon: "" },
];

const URGENCY = [
    { id: "low", label: "Low" },
    { id: "medium", label: "Medium" },
    { id: "high", label: "High" },
    { id: "urgent", label: "Urgent" },
];

export default function JagritiInquiryForm() {
    const [data, setData] = useState<InquiryData>({
        name: "",
        email: "",
        company: "",
        role: "",
        contactType: "",
        urgency: "medium",
        subject: "",
        message: "",
        budget: "",
        timeline: ""
    });
    const [errors, setErrors] = useState<InquiryErrors>({});
    const [submitting, setSubmitting] = useState(false);
    const [sent, setSent] = useState(false);
    const ref = useRef<HTMLFormElement | null>(null);

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        setData(prev => ({ ...prev, [e.target.name]: e.target.value }));
        const { name } = e.target;

        if (errors[name as keyof InquiryErrors]) {
            setErrors(prev => ({
                ...prev,
                [name]: ""
            }));
        }
    }

    function validate() {
        const err: any = {};
        if (!data.name.trim()) err.name = "Name is required";
        if (!data.email.trim() || !/\S+@\S+\.\S+/.test(data.email)) err.email = "Valid email required";
        if (!data.contactType) err.contactType = "Choose a contact type";
        if (!data.subject.trim()) err.subject = "Subject is required";
        if (!data.message.trim() || data.message.length < 10) err.message = "Message must be at least 10 characters";
        setErrors(err);
        return Object.keys(err).length === 0;
    }

    async function handleSubmit(e: any) {
        e.preventDefault();
        if (!validate()) {
            const first = Object.keys(errors)[0] || "name";
            const el = ref.current?.querySelector(`[name="${first}"]`);
            el && (el as HTMLElement).scrollIntoView({ behavior: "smooth", block: "center" });
            return;
        }
        setSubmitting(true);

        try {
            const res = await fetch("/api/recruiter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: data.name,
                    company: data.company,
                    role: data.role,
                    email: data.email,
                    message: `Type: ${data.contactType}\nUrgency: ${data.urgency}\nBudget: ${data.budget}\nTimeline: ${data.timeline}\n\n${data.message}`
                })
            });

            const json = await res.json();
            if (json.success) {
                setSent(true);
                setData({
                    name: "",
                    email: "",
                    company: "",
                    role: "",
                    contactType: "",
                    urgency: "medium",
                    subject: "",
                    message: "",
                    budget: "",
                    timeline: ""
                });
            } else {
                setErrors({ submit: json.error || "Failed to send" });
            }
        } catch (err) {
            console.error(err);
            setErrors({ submit: "Network/server error" });
        } finally {
            setSubmitting(false);
        }
    }

    if (sent) {
        return (
            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="p-8 rounded-2xl bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 border border-neutral-800 ">
                <div className="text-center">
                    <div className="text-4xl mb-4 items-center justify-center text-center">
                        <center><FaCheckCircle size={30} /></center>
                    </div>
                    <h3 className="text-xl font-semibold text-white"> Message sent</h3>
                    <p className="text-neutral-300 mt-2">Thanks — I will review the inquiry and respond within 24 hours.</p>
                    <button onClick={() => setSent(false)} className="mt-6 px-4 py-2 rounded bg-[var(--bg-secondary)] text-white">Send another</button>
                </div>
            </motion.div>
        );
    }

    const inputBase = "w-full px-4 py-3 rounded-lg bg-[var(--bg-primary)] border border-neutral-800 text-white placeholder-neutral-400 focus:ring-1 focus:ring-white-500 outline-none";

    return (
        <motion.form ref={ref} onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 rounded-2xl bg-[var(--bg-secondary)] border border-neutral-800 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input name="name" value={data.name} onChange={handleChange} placeholder="Your name" className={inputBase} />
                <input name="email" value={data.email} onChange={handleChange} placeholder="Your email" className={inputBase} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input name="company" value={data.company} onChange={handleChange} placeholder="Company (optional)" className={inputBase} />
                <input name="role" value={data.role} onChange={handleChange} placeholder="Role you're hiring for" className={inputBase} />
            </div>

            <div className="mb-4">
                <label className="text-sm text-neutral-300 mb-2 block">Contact Type</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {CONTACT_TYPES.map(t => (
                        <button
                            key={t.id}
                            onClick={() => setData(prev => ({ ...prev, contactType: t.id }))}
                            type="button"
                            className={`px-3 py-2 rounded-lg text-sm text-white border ${data.contactType === t.id ? "bg-gradient-to-r from-black-900 to-white-900 border border-neutral-700" : "bg-[var(--bg-primary)] border-neutral-800"}`}
                        >
                            <div className="text-xl">{t.icon}</div>
                            <div className="mt-1">{t.label}</div>
                        </button>
                    ))}
                </div>
                {errors.contactType && <p className="text-xs text-red-400 mt-2">{errors.contactType}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <select name="urgency" value={data.urgency} onChange={handleChange} className={inputBase}>
                    {URGENCY.map(u => <option key={u.id} value={u.id}>{u.label}</option>)}
                </select>
                <select name="budget" value={data.budget} onChange={handleChange} className={inputBase}>
                    <option value="">Budget (optional)</option>
                    <option value="under-5k">Under 5k</option>
                    <option value="5k-10k">5k -10k</option>
                    <option value="10k-25k">10k - 25k</option>
                    <option value="25k-plus">25K+</option>
                    <option value="Nego">Negotiate</option>
                </select>
                <select name="timeline" value={data.timeline} onChange={handleChange} className={inputBase}>
                    <option value="">Timeline (optional)</option>
                    <option value="asap">ASAP</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="1-3-months">1-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                </select>
            </div>

            <input name="subject" value={data.subject} onChange={handleChange} placeholder="Subject" className={`${inputBase} mb-4`} />

            <textarea name="message" value={data.message} onChange={handleChange} placeholder="Describe the project / job / requirements..." rows={6} className={`${inputBase} mb-2`} />
            <div className="text-xs text-neutral-400 mb-4">{data.message.length}/1000</div>

            {errors.submit && <p className="text-sm text-red-400 mb-3">{errors.submit}</p>}
            <div className="flex gap-3">
                <button type="submit" disabled={submitting} className={`px-5 py-3 rounded-lg text-white font-medium ${submitting ? "bg-[var(--bg-primary)]" : "border border-neutral-700 hover:opacity-95"}`}>
                    {submitting ? "Sending..." : "Send Message"}
                </button>
                <button type="button" onClick={() => { setData({ name: "", email: "", company: "", role: "", contactType: "", urgency: "medium", subject: "", message: "", budget: "", timeline: "" }); setErrors({}); }} className="px-4 py-3 rounded-lg border border-neutral-800 text-neutral-300">
                    Reset
                </button>
            </div>
        </motion.form>
    );
}
