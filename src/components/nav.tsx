"use client";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
    { href: "#accueil", fr: "Accueil", en: "Home" },
    { href: "#parcours", fr: "Parcours", en: "Career" },
    { href: "#projets", fr: "Projets", en: "Projects" },
    { href: "#contact", fr: "Contact", en: "Contact" },
];

export default function Nav() {
    const { isEnglish, toggleLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <motion.nav
            /* Animation d'apparition : part de -100px (cachée en haut) et descend */
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95vw] max-w-6xl bg-white/[0.02] backdrop-blur-xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl md:rounded-full overflow-hidden transition-all duration-300"
        >
            <div
                className="absolute -top-10 -left-10 w-40 h-40 bg-violet-600/30 blur-[50px] pointer-events-none rounded-full"
                aria-hidden="true"
            />

            <div className="mx-auto px-6 py-3 md:py-4 flex justify-between items-center relative z-10">

                <button
                    onClick={toggleMenu}
                    className="md:hidden text-white p-2 focus:outline-none"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                <h1 className="text-xl font-black text-white opacity-80 tracking-wider">
                    ShaD<span className="text-violet-500">O</span>w
                </h1>

                <ul className="hidden md:flex justify-center flex-1 gap-8 lg:gap-16 text-xs font-bold text-gray-300 uppercase tracking-[0.2em]">
                    {NAV_ITEMS.map((item, index) => (
                        <li key={index} className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">
                            <a href={item.href}>
                                {isEnglish ? item.en : item.fr}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center">
                    <button
                        onClick={toggleLanguage}
                        className="text-xs font-bold text-white/70 hover:text-white border border-white/20 px-4 py-1.5 rounded-full hover:bg-white/10 transition-all tracking-widest"
                    >
                        {isEnglish ? "FR" : "EN"}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-white/10 bg-black/20"
                    >
                        <ul className="flex flex-col items-center py-6 gap-6 text-sm font-bold text-gray-300 uppercase tracking-[0.2em]">
                            {NAV_ITEMS.map((item, index) => (
                                <li key={index} className="w-full text-center">
                                    <a
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block py-2 w-full hover:text-white hover:bg-white/10 transition-all"
                                    >
                                        {isEnglish ? item.en : item.fr}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}