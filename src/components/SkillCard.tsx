"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SkillCardProps {
    name: string;
    icon: React.ReactNode;
    color: string;
}

export default function SkillCard({ name, icon, color }: SkillCardProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="group relative"
        >
            <div
                className="relative bg-neutral-900/40 backdrop-blur-md rounded-2xl border border-neutral-800 p-8 flex flex-col items-center justify-center aspect-square transition-all duration-300 hover:scale-105 hover:border-transparent"
                style={{
                    boxShadow: `0 0 0 rgba(${color}, 0)`,
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 30px rgba(${color}, 0.4), 0 0 60px rgba(${color}, 0.2)`;
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 0 rgba(${color}, 0)`;
                }}
            >
                {/* Icon Container */}
                <div className="text-6xl mb-4 transition-transform duration-300 group-hover:scale-110">
                    {icon}
                </div>

                {/* Skill Name */}
                <h3 className="text-base font-semibold text-neutral-200 text-center">
                    {name}
                </h3>
            </div>
        </motion.div>
    );
}
