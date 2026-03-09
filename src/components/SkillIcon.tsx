"use client";
import { motion } from "framer-motion";
import { useState } from "react";

interface SkillIconProps {
    name: string;
    slug?: string;
    image?: string;
    color: string;
}

export default function SkillIcon({ name, slug, image, color }: SkillIconProps) {
    const [isHovered, setIsHovered] = useState(false);

    const getCleanColor = (hex: string) => {
        let clean = hex.replace('#', '');
        if (clean.length === 3) clean = clean.split('').map(c => c + c).join('');
        return clean;
    };

    const activeColor = getCleanColor(color);
    const idleColor = "666666";

    return (
        <motion.div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center justify-center p-2 md:p-4 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-violet-500/50 transition-all duration-300 aspect-square w-[100px] md:w-32 group cursor-default overflow-hidden"
        >
            <div
                className="relative z-10 w-8 h-8 md:w-12 md:h-12 flex items-center justify-center transition-all duration-500"
                // On remonte l'icône un peu plus (-14px) pour laisser de la place au gros texte
                style={{ transform: isHovered ? "translateY(-14px) scale(0.8)" : "translateY(0px) scale(1)" }}
            >
                {image ? (
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-contain transition-all duration-300"
                        style={{
                            filter: isHovered ? `drop-shadow(0 0 10px #${activeColor}66)` : "grayscale(1) opacity(0.4)"
                        }}
                    />
                ) : (
                    <img
                        src={`https://cdn.simpleicons.org/${slug}/${isHovered ? activeColor : idleColor}`}
                        alt={name}
                        className="w-full h-full object-contain transition-all duration-300"
                        style={{ filter: isHovered ? `drop-shadow(0 0 10px #${activeColor}66)` : "none" }}
                    />
                )}
            </div>

            <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={isHovered ? { opacity: 1, y: 8 } : { opacity: 0, y: 15 }}
                className="absolute bottom-2 left-0 right-0 text-center px-2 leading-tight"
            >                <span className="text-[10px] md:text-sm font-black uppercase tracking-tighter text-white block">
                    {name}
                </span>
            </motion.span>
        </motion.div>
    );
}