"use client";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
    const { isEnglish } = useLanguage();
    const [index, setIndex] = useState(0);

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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring" as const, stiffness: 100 },
        },
    };

    return (
        <div className="relative flex items-center justify-center w-screen h-screen bg-gradient-to-br from-black via-black to-gray-900 text-white overflow-hidden">

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col md:flex-row items-center justify-center gap-8 px-4 z-10"
            >
                <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="relative"
                >
                    <motion.div
                        animate={{ boxShadow: ["0 0 30px rgba(139,92,246,0.3)", "0 0 60px rgba(139,92,246,0.6)", "0 0 30px rgba(139,92,246,0.3)"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="rounded-full"
                    >
                        <img
                            src="/Portfolio/assets/images/ui/pp.webp"
                            alt="Alexis Tirant"
                            className="w-40 h-40 md:w-60 md:h-60 rounded-full border-2 border-violet-500 object-cover"
                        />
                    </motion.div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start justify-center text-center md:text-left">
                    {/* 2. Titre animé */}
                    <motion.div variants={itemVariants} className="flex items-center justify-center md:justify-start gap-2 text-3xl font-semibold tracking-wider h-12 w-full">
                        <span className="whitespace-nowrap">
                            {isEnglish ? "I'm" : "Je suis"}
                        </span>

                        <div className="relative overflow-hidden h-full flex items-center w-[200px] md:w-[300px]">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={index}
                                    initial={{ y: 40, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -40, opacity: 0 }}
                                    transition={{ duration: 0.5, ease: "circOut" }}
                                    className="absolute text-violet-500 whitespace-nowrap font-bold"
                                >
                                    {isEnglish ? specialties[index].en : specialties[index].fr}
                                </motion.span>
                            </AnimatePresence>
                        </div>
                    </motion.div>

                    {/* 3. Sous-titre */}
                    <motion.p variants={itemVariants} className="text-2xl font-semibold tracking-wider mt-2">
                        {isEnglish ? "Welcome to My Portfolio" : "Bienvenue dans mon Portfolio"}
                    </motion.p>

                    {/* 4. Description */}
                    <motion.p variants={itemVariants} className="text-lg font-semibold tracking-wider opacity-60 mt-2 max-w-lg break-words leading-relaxed">
                        {isEnglish ? "Hi i'm " : "Salut je suis "}
                        <span className="font-bold opacity-100 text-violet-500">ShaDow</span>
                        {isEnglish ? " - a Full Stack Developer." : " - un Développeur Full Stack."}

                        <br className="my-2 block" />

                        {isEnglish
                            ? "I challenge myself to bring ideas to life. Scroll down to see more about me."
                            : "J'aime me défier pour donner vie aux idées. Faites défiler pour en connaitre plus sur moi."}
                    </motion.p>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown size={32} className="text-violet-500 opacity-80" />
                </motion.div>
            </motion.div>
        </div>
    );
}