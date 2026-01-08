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
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 py-4 md:py-6 flex justify-between items-center">

                <button
                    onClick={toggleMenu}
                    className="md:hidden text-white p-2 focus:outline-none"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                <ul className="hidden md:flex justify-center flex-1 gap-12 lg:gap-24 text-sm font-bold text-violet-500 uppercase tracking-widest">
                    {NAV_ITEMS.map((item, index) => (
                        <li key={index} className="hover:text-violet-400 transition-colors">
                            <a href={item.href}>
                                {isEnglish ? item.en : item.fr}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center">
                    <button
                        onClick={toggleLanguage}
                        className="text-xs text-white/50 hover:text-white border border-white/20 px-3 py-1 rounded hover:bg-white/10 transition-colors tracking-tighter"
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
                        className="md:hidden bg-black/95 border-b border-white/10 overflow-hidden"
                    >
                        <ul className="flex flex-col items-center py-8 gap-6 text-lg font-bold text-violet-500 uppercase tracking-[0.2em]">
                            {NAV_ITEMS.map((item, index) => (
                                <li key={index} className="w-full text-center">
                                    <a
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block py-2 w-full hover:bg-white/5 transition-colors"
                                    >
                                        {isEnglish ? item.en : item.fr}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}