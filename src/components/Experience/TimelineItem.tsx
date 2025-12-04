import { motion } from "framer-motion";
import { ExperienceItem } from "./experience-data";

export default function TimelineItem({ item }: { item: ExperienceItem }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="relative pl-12 pb-8"
        >
            {/* Vertical Line */}
            <div className="absolute left-[6px] top-0 w-[2px] h-full bg-white/10"></div>

            {/* Dot */}
            <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-yellow-300 shadow-[0_0_10px_rgba(255,255,150,0.5)]"></div>

            <h3 className="text-xl font-semibold text-white">{item.role}</h3>

            <p className="text-sm text-slate-400">{item.company}</p>

            <p className="text-xs mt-1 text-slate-500">{item.duration}</p>

            {/* Category Label */}
            <span className="mt-2 inline-block px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-yellow-200">
                {item.category}
            </span>

            <ul className="mt-3 list-disc list-inside text-slate-300 text-sm flex flex-col gap-1">
                {item.description.map((d, i) => (
                    <li key={i}>{d}</li>
                ))}
            </ul>
        </motion.div>
    );
}
