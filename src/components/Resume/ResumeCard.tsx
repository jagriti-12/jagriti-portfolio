import { ResumeItem } from "./resume-data";
import { motion } from "framer-motion";

export default function ResumeCard({ item }: { item: ResumeItem }) {
    return (
        <motion.div
            whileHover={{ scale: 1.04 }}
            className="p-5 bg-white/5 border border-white/10 rounded-2xl shadow-soft hover:shadow-glow transition"
        >
            <h3 className="text-lg font-semibold">{item.role}</h3>
            <p className="text-sm text-slate-400 mt-1">{item.short}</p>

            <div className="mt-4 flex gap-3">
                <a
                    href={item.file}
                    download
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-primary to-accent text-sm"
                >
                    Download PDF
                </a>
            </div>
        </motion.div>
    );
}
