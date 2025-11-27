import { motion } from "framer-motion";
import { EducationItem } from "./edu-data";

export default function EduItem({ item }: { item: EducationItem }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-soft hover:shadow-glow transition"
        >
            <h3 className="text-xl font-semibold">{item.degree}</h3>
            <p className="text-sm text-slate-400">{item.institution}</p>
            <p className="text-xs mt-1 text-slate-500">{item.duration}</p>

            <ul className="mt-3 list-disc list-inside text-slate-300 text-sm flex flex-col gap-1">
                {item.details?.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
        </motion.div>
    );
}
