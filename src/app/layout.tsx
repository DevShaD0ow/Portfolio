import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Alexis - Portfolio | Développeur Full Stack & Game Developer",
  description: "Portfolio d'Alexis - Développeur passionné spécialisé en développement web moderne (Next.js, React) et création de jeux vidéo. Découvrez mes projets, compétences et parcours dans l'univers IT et gaming.",
  keywords: "développeur full stack, game developer, Next.js, React, TypeScript, portfolio IT, développement web, jeux vidéo",
  authors: [{ name: "Alexis" }],
  openGraph: {
    title: "Alexis - Portfolio | Développeur Full Stack & Game Developer",
    description: "Portfolio d'Alexis - Développeur passionné spécialisé en développement web moderne et création de jeux vidéo",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}