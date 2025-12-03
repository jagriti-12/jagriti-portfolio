"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function StatsCounter({
    value,
    label
}: {
    value: number;
    label: string;
}) {

    // correct reference
    const ref = useRef(null);
    const inView = useInView(ref, { margin: "-100px", once: true });

    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) return;

        let start = 0;
        const end = value;
        const duration = 1200;
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
    }, [inView, value]);

    return (
        <motion.div
            ref={ref}
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center"
        >
            <div className="text-3xl font-bold text-white">{count}+</div>
            <div className="text-sm text-yellow-200">{label}</div>
        </motion.div>
    );
}
