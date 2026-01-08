"use client";
import { motion } from "framer-motion";

interface TimelineItemProps {
    title: string;
    institution: string;
    period: string;
    description: string;
}

export default function TimelineItem({ title, institution, period, description }: TimelineItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="group relative pl-8 pb-12 border-l border-white/10 last:border-0 last:pb-0"
        >
            <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-neutral-800 border border-white/20 group-hover:bg-violet-500 group-hover:border-violet-400 group-hover:shadow-[0_0_10px_rgba(139,92,246,0.6)] transition-all duration-300" />

            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                <h3 className="text-xl font-bold text-neutral-100 group-hover:text-violet-400 transition-colors">
                    {title}
                </h3>
                <span className="text-xs font-mono text-violet-500/80 uppercase tracking-wider mt-1 sm:mt-0">
                    {period}
                </span>
            </div>

            <div className="text-base font-medium text-neutral-400 mb-3 group-hover:text-white transition-colors">
                {institution}
            </div>

            <p className="text-sm text-neutral-500 leading-relaxed max-w-2xl group-hover:text-neutral-400 transition-colors">
                {description}
            </p>
        </motion.div>
    );
}