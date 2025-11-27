"use client";

import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function StatsCounter({
    value,
    label
}: {
    value: number;
    label: string;
}) {
    const [count, setCount] = useState(0);
    const ref = useInView({ margin: "-100px" });

    useEffect(() => {
        if (!ref) return;

        let start = 0;
        const end = value;
        const duration = 1000;
        const step = end / (duration / 16);

        const interval = setInterval(() => {
            start += step;
            if (start >= end) {
                start = end;
                clearInterval(interval);
            }
            setCount(Math.floor(start));
        }, 16);

        return () => clearInterval(interval);
    }, [ref, value]);

    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={ref ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center"
        >
            <div className="text-3xl font-bold">{count}+</div>
            <div className="text-sm text-slate-400">{label}</div>
        </motion.div>
    );
}
