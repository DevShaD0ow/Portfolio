"use client";
import { useLanguage } from "@/context/LanguageContext"; // Import du hook

const NAV_ITEMS = [
    { href: "#accueil", fr: "Accueil", en: "Home" },
    { href: "#parcours", fr: "Parcours", en: "Career" },
    { href: "#projets", fr: "Projets", en: "Projects" },
    { href: "#contact", fr: "Contact", en: "Contact" },
];

export default function Nav() {
    const { isEnglish, toggleLanguage } = useLanguage();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 py-6 bg-black/20 backdrop-blur-md border-b border-white/5">
            <div className="flex justify-center items-center relative">
                <ul className="flex justify-center gap-24 text-sm font-bold text-violet-700 uppercase tracking-widest">
                    {NAV_ITEMS.map((item, index) => (
                        <li key={index} className="...">
                            <a href={item.href}>
                                {isEnglish ? item.en : item.fr}
                            </a>
                        </li>
                    ))}
                </ul>

                <button
                    onClick={toggleLanguage}
                    className="absolute right-10 text-xs text-white/50 hover:text-white border border-white/20 px-2 py-1 rounded hover:bg-white/10 transition-colors"
                >
                    {isEnglish ? "FR" : "EN"}
                </button>
            </div>
        </nav>
    );
}