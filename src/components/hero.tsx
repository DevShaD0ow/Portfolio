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
        <div className="relative w-full h-screen flex flex-col justify-center items-center bg-[#030303] overflow-hidden">

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute top-40 md:top-70 md:-translate-y-1/2 left-1/2 -translate-x-1/2 md:left-16 md:translate-x-0 z-20 w-full max-w-[85vw] md:max-w-[500px] pointer-events-none flex justify-center md:justify-start"
            >
                <GraffitiSVG />
            </motion.div>

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

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="absolute left-8 bottom-8 md:left-16 md:bottom-10 z-30 flex flex-col gap-4 w-max max-w-[95vw]"
            >
                <div className="flex gap-3 justify-center md:justify-start">
                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/alexis-tirant-386409293/" target="_blank" className="p-2 border border-white/20 rounded-full hover:bg-white/10 transition-all text-white backdrop-blur-md bg-black/20">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                    </a>
                    {/* GitHub */}
                    <a href="https://github.com/AlexisTirant" target="_blank" className="p-2 border border-white/20 rounded-full hover:bg-white/10 transition-all text-white backdrop-blur-md bg-black/20">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    </a>
                    {/* Discord */}
                    <a href="https://discord.gg/WwyNQH3yPC" target="_blank" className="p-2 border border-white/20 rounded-full hover:bg-white/10 transition-all text-white backdrop-blur-md bg-black/20">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.4189 0 1.3332-.946 2.4189-2.1568 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.4189 0 1.3332-.946 2.4189-2.1568 2.4189z" /></svg>
                    </a>
                    {/* Instagram */}
                    <a href="https://instagram.com/alexiis.trn" target="_blank" className="p-2 border border-white/20 rounded-full hover:bg-white/10 transition-all text-white backdrop-blur-md bg-black/20">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.822a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                    </a>
                </div>

                <GlassCard>
                    <div className="relative p-6 border border-white/10 backdrop-blur-xl shadow-2xl rounded-xl">
                        <div className="flex flex-col gap-2 text-center md:text-left">
                            <h2 className="text-white text-2xl md:text-3xl font-extrabold tracking-widest uppercase whitespace-nowrap">
                                {/* La variable de traduction est placée ici : */}
                                {t.hero.jobTitle}
                            </h2>
                            <p className="text-gray-400 text-sm font-normal leading-relaxed max-w-[300px]">
                                {/* Et ici : */}
                                {t.hero.jobDesc}
                            </p>
                        </div>
                    </div>
                </GlassCard>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-0 z-10 pointer-events-none flex justify-center md:justify-end items-end h-[65vh] md:h-[85vh]"
            >
                <img
                    src='/Portfolio/assets/images/ui/photoAlexis.png'
                    alt="Alexis"
                    className="block h-full w-auto max-w-none object-contain object-bottom"
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="absolute bottom-12 md:bottom-16 left-1/2 -translate-x-1/2 z-30 animate-bounce"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                </svg>
            </motion.div>

        </div>
    );
}