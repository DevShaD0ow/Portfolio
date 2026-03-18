"use client";
import { GlassCard } from "./GlassCard";
import GraffitiSVG from "./Animations/GraffitiSVG";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function Hero() {
    const { isEnglish } = useLanguage();
    const currentLang = isEnglish ? "en" : "fr";
    const t = translations[currentLang];

    return (
        <div className="relative w-full h-[100dvh] flex flex-col justify-center items-center bg-[#030303] overflow-hidden">

            {/* --- CONTENEUR PRINCIPAL RESPONSIVE --- */}
            {/* On utilise flex-col par défaut (mobile) pour que le texte soit SOUS le graffiti */}
            <div className="relative z-20 flex flex-col items-center justify-center gap-8 min-[970px]:block min-[970px]:w-full min-[970px]:h-full">

                {/* --- 1. LE GRAFFITI --- */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    // Mobile: position relative pour suivre le flux | Desktop: absolute
                    className="relative min-[970px]:absolute min-[970px]:top-1/3 min-[970px]:-translate-y-1/2 min-[970px]:left-16 w-full max-w-[85vw] md:max-w-[500px] pointer-events-none flex justify-center min-[970px]:justify-start"
                >
                    <GraffitiSVG />
                </motion.div>

                {/* --- 2. BLOC SOCIALS + GLASSCARD --- */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    // Mobile: suit le flux sous le graffiti | Desktop: fixé en bas à gauche
                    className="relative min-[970px]:absolute min-[970px]:bottom-8 min-[970px]:left-16 flex flex-col gap-4 w-fit px-4 min-[970px]:px-0"
                >
                    {/* Les icônes */}
                    <div className="flex gap-3 justify-center min-[970px]:justify-start">
                        <a href="https://www.linkedin.com/in/alexis-tirant-386409293/" target="_blank" className="p-3 border border-white/20 rounded-full hover:bg-white/10 transition-all text-white backdrop-blur-md bg-black/20">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                        </a>
                        <a href="https://github.com/DevShaD0ow" target="_blank" className="p-3 border border-white/20 rounded-full hover:bg-white/10 transition-all text-white backdrop-blur-md bg-black/20">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                        </a>
                        <a href="https://www.instagram.com/alexiis.trn/" target="_blank" className="p-3 border border-white/20 rounded-full hover:bg-white/10 transition-all text-white backdrop-blur-md bg-black/20">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.822a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                        </a>
                        <a href="https://discord.gg/53S4qPDb38" target="_blank" className="p-3 border border-white/20 rounded-full hover:bg-white/10 transition-all text-white backdrop-blur-md bg-black/20">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.29a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.196.373.29a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.419-2.157 2.419z" /></svg>
                        </a>
                    </div>

                    <div className="w-fit">
                        <GlassCard>
                            <div className="relative p-6 border border-white/10 backdrop-blur-xl shadow-2xl rounded-xl">
                                <div className="flex flex-col gap-2 text-center min-[970px]:text-left">
                                    <h2 className="text-white text-2xl md:text-3xl font-extrabold tracking-widest uppercase">
                                        {t.hero.jobTitle}
                                    </h2>
                                    <p className="text-gray-400 text-sm font-normal leading-relaxed max-w-[300px]">
                                        {t.hero.jobDesc}
                                    </p>
                                </div>
                            </div>
                        </GlassCard>
                    </div>
                </motion.div>
            </div>

            {/* --- 3. HALO VIOLET --- */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute pointer-events-none rounded-full"
                style={{
                    width: '900px',
                    height: '900px',
                    bottom: '-150px',
                    right: '-150px',
                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0) 60%)',
                    filter: 'blur(100px)',
                    zIndex: 0
                }}
            />

            {/* --- 4. IMAGE (Masquée sous 970px) --- */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="absolute bottom-0 right-0 z-10 pointer-events-none hidden min-[970px]:flex justify-end items-end h-[85vh] w-full"
            >
                <img
                    src='/Portfolio/assets/images/ui/photoAlexis.png'
                    alt="Alexis"
                    className="block h-full w-auto max-w-none object-contain object-bottom"
                />
            </motion.div>

            {/* --- 5. FLECHE SCROLL --- */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                </svg>
            </motion.div>

        </div>
    );
}