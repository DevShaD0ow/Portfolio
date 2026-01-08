"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type Language = "fr" | "en";

type LanguageContextType = {
    language: Language;
    toggleLanguage: () => void;
    isEnglish: boolean;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>("fr");

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "fr" ? "en" : "fr"));
    };

    const isEnglish = language === "en";

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, isEnglish }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}