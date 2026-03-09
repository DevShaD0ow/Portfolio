"use client";
import { motion } from "framer-motion";
import { useState } from "react";

interface SkillIconProps {
    name: string;
    slug: string; // Le nom exact pour Simple Icons (ex: "unrealengine")
    color: string;
}

export default function SkillIcon({ name, slug, color }: SkillIconProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center justify-center p-4 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-violet-500/50 transition-all duration-300 aspect-square w-24 md:w-32 group cursor-default overflow-hidden"
        >
            {/* Logo via Simple Icons CDN */}
            <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 transition-all duration-500 flex items-center justify-center">
                <img
                    src={`https://cdn.simpleicons.org/${slug}/${isHovered ? color.replace('#', '') : '666'}`}
                    alt={name}
                    className="w-full h-full object-contain transition-all duration-300"
                    style={{
                        filter: isHovered ? `drop-shadow(0 0 10px ${color}66)` : "none"
                    }}
                />
            </div>

            {/* Label */}
            <motion.span
                initial={{ opacity: 0.4 }}
                animate={isHovered ? { opacity: 1, y: -2 } : { opacity: 0.4, y: 0 }}
                className="absolute bottom-3 text-[9px] md:text-[11px] font-bold uppercase tracking-wider text-white text-center px-2"
            >
                {name}
            </motion.span>

            {/* Glow de fond au hover */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                style={{ backgroundColor: color }}
            />
        </motion.div>
    );
}