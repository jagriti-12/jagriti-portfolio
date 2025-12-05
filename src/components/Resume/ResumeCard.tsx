import { ResumeItem } from "./resume-data";
import { motion } from "framer-motion";

export default function ResumeCard({ item }: { item: ResumeItem }) {
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-6 bg-[rgba(255,255,255,0.03)] border border-white/10 
                       rounded-2xl shadow-soft transition"
        >
            <h3 className="text-xl font-semibold text-white">{item.role}</h3>

            <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                {item.short}
            </p>

            <div className="mt-6 flex gap-3">
                <a
                    href={item.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-[rgba(255,255,255,0.05)] 
                               border border-white/10 hover:border-yellow-200 
                               hover:text-yellow-200 text-sm transition"
                >
                    View PDF
                </a>

                <a
                    href={item.file}
                    download
                    className="px-4 py-2 rounded-lg bg-[rgba(255,255,255,0.05)] 
                               border border-white/10 hover:border-yellow-200 
                               hover:text-yellow-200 text-sm transition"
                >
                    Download
                </a>
            </div>
        </motion.div>
    );
}
