import { motion } from "framer-motion";
import { ExperienceItem } from "./experience-data";

export default function TimelineItem({ item }: { item: ExperienceItem }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.1 }}
            className="relative pl-12 pb-12"
            itemScope
            itemType="https://schema.org/JobPosting"
        >
            {/* Vertical Line */}
            <div className="absolute left-[7px] top-0 w-[2px] h-full bg-white/10"></div>

            {/* Dot */}
            <div className="absolute left-0 top-2 w-3 h-3 rounded-full 
                bg-yellow-300 shadow-[0_0_12px_rgba(255,255,160,0.8)]">
            </div>

            {/* Role */}
            <h3 className="text-xl font-semibold text-white" itemProp="title">
                {item.role}
            </h3>

            {/* Company */}
            <p className="text-sm text-slate-400" itemProp="hiringOrganization">
                {item.company}
            </p>

            {/* Duration */}
            <p className="text-xs mt-1 text-slate-500" itemProp="datePosted">
                {item.duration}
            </p>

            {/* Category Tag */}
            <span className="mt-3 inline-block px-3 py-1 text-xs rounded-full 
                bg-white/5 border border-white/10 text-yellow-200 tracking-wide"
                itemProp="industry"
            >
                {item.category}
            </span>

            {/* Description */}
            <ul className="mt-4 list-disc list-inside text-slate-300 text-sm flex flex-col gap-1"
                itemProp="description"
            >
                {item.description.map((d, i) => (
                    <li key={i}>{d}</li>
                ))}
            </ul>
        </motion.div>
    );
}
