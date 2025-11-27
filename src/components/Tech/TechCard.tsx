"use client";

import { motion } from "framer-motion";
import { TechItem } from "./tech-data";

export default function TechCard({ item }: { item: TechItem }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white/5 border border-white/10 rounded-2xl shadow-soft hover:shadow-glow transition cursor-pointer flex flex-col items-center gap-4"
        >
            <div className="w-16 h-16 flex items-center justify-center">
                <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
            </div>

            <div className="text-center">
                <h3 className="text-sm font-semibold">{item.name}</h3>
                <p className="text-xs text-slate-400">{item.category}</p>
            </div>
        </motion.div>
    );
}
