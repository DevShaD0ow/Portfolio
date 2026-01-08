"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SkillBarProps {
    name: string;
    percentage: number;
}

export default function SkillBar({ name, percentage }: SkillBarProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full bg-neutral-900/30 px-5 py-4 rounded-xl border border-neutral-800 backdrop-blur-sm hover:border-violet-500/30 transition-all duration-500"
        >
            <div className="flex justify-between mb-2 items-end">
                <span className="text-base font-medium text-neutral-200">{name}</span>
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-sm font-bold text-neutral-400"
                >
                    {percentage}%
                </motion.span>
            </div>

            <div className="w-full bg-neutral-800 rounded-full h-2 overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                    className="bg-gradient-to-r from-violet-500 to-fuchsia-600 h-full rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]"
                />
            </div>
        </motion.div>
    );
}