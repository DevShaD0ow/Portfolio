import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { Syne } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-syne",
});
export const metadata: Metadata = {
  title: "Alexis - Portfolio",
  description: "Portfolio d'Alexis - Développeur passionné spécialisé en développement web moderne (Next.js, React) et création de jeux vidéo. Découvrez mes projets, compétences et parcours dans l'univers IT et gaming.",
  keywords: "développeur full stack, game developer, Next.js, React, TypeScript, portfolio IT, développement web, jeux vidéo",
  authors: [{ name: "Alexis" }],
  openGraph: {
    title: "Alexis - Portfolio",
    description: "Portfolio d'Alexis - Développeur passionné spécialisé en développement web moderne et création de jeux vidéo",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={syne.variable}>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}