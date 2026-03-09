"use client";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
    const { isEnglish } = useLanguage();
    const [index, setIndex] = useState(0);
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    const specialties = [
        { fr: "Shadow", en: "Shadow" },
        { fr: "Alexis Tirant", en: "Alexis Tirant" },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % specialties.length);
        }, 2500);
        return () => clearInterval(timer);
    }, [specialties.length]);

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full flex items-center justify-center overflow-hidden"
        >
            {/* --- ANIMATED GRADIENT BACKGROUND --- */}
            <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
                {/* Sphère 1 : Violette */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-violet-600/20 blur-[120px] rounded-full"
                />

                {/* Sphère 2 : Fuchsia/Indigo */}
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, -100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-fuchsia-600/15 blur-[100px] rounded-full"
                />

                {/* Sphère 3 : Centre (pour la profondeur) */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_90%)] z-[1]" />
            </motion.div>

            {/* CONTENU PRINCIPAL */}
            <motion.div
                style={{ y: textY, opacity: opacityHero }}
                className="relative z-10 text-center space-y-8 px-4"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase text-white leading-none">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5, ease: "circOut" }}
                                className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40"
                            >
                                {isEnglish ? specialties[index].en : specialties[index].fr}
                            </motion.span>
                        </AnimatePresence>
                    </h1>

                    <motion.p className="text-lg md:text-xl font-medium tracking-[0.3em] uppercase text-violet-500 mt-4">
                        {isEnglish ? "Full Stack Developer" : "Développeur Full Stack"}
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 1, ease: "circOut" }}
                    className="h-px w-24 bg-gradient-to-r from-transparent via-violet-500 to-transparent mx-auto"
                />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="max-w-md mx-auto text-neutral-400 text-sm md:text-base font-light leading-relaxed"
                >
                    {isEnglish
                        ? "Crafting immersive digital experiences through code and design."
                        : "Créer des expériences numériques immersives à travers le code et le design."}
                </motion.div>
            </motion.div>

            {/* INDICATEUR SCROLL */}
            <motion.div
                style={{ opacity: opacityHero }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown size={32} />
                </motion.div>
            </motion.div>
        </section>
    );
}