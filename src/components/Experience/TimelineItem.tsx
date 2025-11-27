import { motion } from "framer-motion";
import { ExperienceItem } from "./experience-data";

export default function TimelineItem({ item }: { item: ExperienceItem }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="relative pl-12"
        >
            {/* Line + Dot */}
            <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-gradient-to-r from-primary to-accent shadow-glow"></div>

            <h3 className="text-xl font-semibold">{item.role}</h3>
            <p className="text-sm text-slate-400">{item.company}</p>
            <p className="text-xs mt-1 text-slate-500">{item.duration}</p>

            <ul className="mt-3 list-disc list-inside text-slate-300 text-sm flex flex-col gap-1">
                {item.description.map((d, i) => (
                    <li key={i}>{d}</li>
                ))}
            </ul>
        </motion.div>
    );
}
