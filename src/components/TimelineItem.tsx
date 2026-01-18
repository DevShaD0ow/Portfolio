"use client";
import { motion } from "framer-motion";
import { User } from "lucide-react";

// --- 1. COMPOSANT D'INTRODUCTION (Le point Violet) ---
interface TimelineIntroProps {
    isEnglish: boolean;
}

export function TimelineIntro({ isEnglish }: TimelineIntroProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-10 pb-12 border-l border-white/5"
        >
            {/* Le point violet Lumineux */}
            <span className="absolute -left-[6px] top-2 h-3 w-3 rounded-full bg-violet-600 shadow-[0_0_10px_rgba(139,92,246,0.5)]" />

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md border-violet-500">
                <div className="flex items-center gap-3 mb-4 text-violet-400">
                    <User size={18} />
                    <span className="text-xs font-mono uppercase tracking-widest font-bold">About Me</span>
                </div>
                <p className="text-lg md:text-xl text-neutral-300 leading-relaxed font-light">
                    <span className="text-white font-medium italic">
                        {isEnglish ? "Developer & Designer " : "Développeur & Designer "}
                    </span>
                    {isEnglish
                        ? "focused on crafting immersive digital experiences. I blend technical logic with aesthetic precision to build tools and games."
                        : "passionné par la création d'expériences numériques immersives. Je mélange logique technique et précision esthétique pour créer."}
                </p>
            </div>
        </motion.div>
    );
}

// --- 2. COMPOSANT ITEM CLASSIQUE (Le point Noir) ---
interface TimelineItemProps {
    title: string;
    institution: string;
    period: string;
    description: string;
}

export default function TimelineItem({ title, institution, period, description }: TimelineItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
            className="group relative pl-10 pb-12 border-l border-white/5 last:border-0 last:pb-0"
        >
            {/* Le point noir classique */}
            <span className="absolute -left-[6px] top-2.5 h-3 w-3 rounded-full bg-black border border-white/20 group-hover:border-violet-500 group-hover:bg-violet-600 transition-all duration-300 shadow-sm" />

            <div className="flex flex-col mb-1">
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-1 group-hover:text-violet-400/60 transition-colors">
                    {period}
                </span>
                <h3 className="text-xl font-bold text-neutral-100 group-hover:text-violet-400 transition-colors">
                    {title}
                </h3>
            </div>

            <div className="text-sm font-medium text-neutral-400 mb-4 uppercase tracking-wide">
                {institution}
            </div>

            <p className="text-neutral-500 text-sm leading-relaxed group-hover:text-neutral-400 transition-colors not-italic">
                {description}
            </p>
        </motion.div>
    );
}