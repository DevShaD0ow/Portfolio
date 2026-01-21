// src/data/translations.ts

export type Lang = "fr" | "en";
export type Category = "all" | "game" | "web" | "dev";

// =====================================
// STRUCTURES & INTERFACES
// =====================================

export interface ProjectMedia {
    video: string;
    image: string;
    github: string;
    tags: string[];
}

interface TranslationStructure {
    titles: { parcours: string; skills: string; projects: string };
    filters: { all: string; game: string; web: string; dev: string };
    timeline: Array<{ title: string; institution: string; period: string; description: string }>;
    projects: Array<{ title: string; description: string }>;
    nav: { home: string; journey: string; skills: string; projects: string };
    languageButton: { switchTo: string };
    hero: { available: string; jobTitle: string; fullstack: string; jobDesc: string };
}

// =====================================
// DONNÉES TECHNIQUES (Source de vérité)
// =====================================

export const projectsMedia: ProjectMedia[] = [
    {
        video: "/Portfolio/assets/images/projects/ais/AIS.webm",
        image: "/Portfolio/assets/images/projects/ais/preview.webp",
        github: "https://github.com/Fan-tome14/AloneInSpace",
        tags: ["Unity", "C#", "VR"]
    },
    {
        video: "/Portfolio/assets/images/projects/ROP/VideoROP.webm",
        image: "/Portfolio/assets/images/projects/ROP/preview.webp",
        github: "https://github.com/Fan-tome14/RelicOfThePast",
        tags: ["Unreal", "C++", "IA"]
    },
    {
        video: "/Portfolio/assets/images/projects/tps/VideoTS.webm",
        image: "/Portfolio/assets/images/projects/tps/preview.webp",
        github: "https://github.com/DevShaD0ow/ShooterAI",
        tags: ["Unreal", "C++", "IA"]
    },
    {
        video: "/Portfolio/assets/images/projects/superai/Brick.webm",
        image: "/Portfolio/assets/images/projects/superai/preview.webp",
        github: "https://github.com/DevShaD0ow/superIA",
        tags: ["Unreal", "C++", "IA"]
    },
    {
        video: "/Portfolio/assets/images/projects/bullrun/invest.webm",
        image: "/Portfolio/assets/images/projects/bullrun/preview.webp",
        github: "https://github.com/DevShaD0ow/Bull-Run-Party",
        tags: ["AirConsole", "HTML", "CSS", "JavaScript"]
    },
    {
        video: "/Portfolio/assets/images/projects/spaceshooter/SP.webm",
        image: "/Portfolio/assets/images/projects/spaceshooter/preview.webp",
        github: "https://github.com/DevShaD0ow/SpaceShooter",
        tags: ["Unreal", "C++", "Jeux"]
    },
    {
        video: "/Portfolio/assets/images/projects/amongUs/amongUs.webm",
        image: "/Portfolio/assets/images/projects/amongUs/preview.webp",
        github: "https://github.com/DevShaD0ow/AmongUs",
        tags: ["Unreal", "C++", "Réseau"]
    },
    {
        video: "/Portfolio/assets/images/projects/pacman/VideoV4.webm",
        image: "/Portfolio/assets/images/projects/pacman/preview.webp",
        github: "https://github.com/Fan-tome14/PacMan",
        tags: ["Unreal", "C++", "IA"]
    },
    {
        video: "/Portfolio/assets/images/projects/td/VideoTD.webm",
        image: "/Portfolio/assets/images/projects/td/preview.webp",
        github: "https://github.com/Fan-tome14/TowerDefense",
        tags: ["Unreal", "C++", "Jeux"]
    },
    {
        video: "/Portfolio/assets/images/projects/vaxe/vaxe.webm",
        image: "/Portfolio/assets/images/projects/vaxe/preview.webp",
        github: "https://vaxeinfinity.myshopify.com?password='laskeb'",
        tags: ["Web", "React", "TypeScript", "Freelance"]
    }
];

// =====================================
// TRADUCTIONS FRANÇAISES
// =====================================

const fr: TranslationStructure = {
    titles: { parcours: "A propos de moi", skills: "Mes Compétences", projects: "Mes Projets" },
    filters: { all: "Tout voir", game: "Jeux Vidéo", web: "Web & Front", dev: "DevOps & Outils" },
    hero: {
        available: "Disponible pour travailler",
        jobTitle: "Développeur",
        fullstack: "Full Stack",
        jobDesc: "Conception d'interfaces innovantes & architectures robustes.",
    },
    timeline: [
        { title: "BUT Informatique", institution: "IUT d'Orsay", period: "Sept 2023 - Présent", description: "Formation en informatique avec spécialisation en développement et réseaux." },
        { title: "Échange International", institution: "UQAC - Chicoutimi", period: "Janvier 2025 - Mai 2025", description: "Semestre d'échange académique au Québec pour découvrir de nouvelles méthodes." },
        { title: "Stage en Réseaux & Sécurité", institution: "DGA Essais de propulseurs - Saclay", period: "Mai - Juillet 2025", description: "Administration et sécurisation des infrastructures réseaux." },
        { title: "Bidiplomation en Développement de Jeux", institution: "UQAC - Chicoutimi", period: "Août 2025 - Avril 2026", description: "Programme de double diplôme en Baccalauréat en Développement de Jeux Vidéo." },
    ],
    projects: [
        { title: "Alone In Space - VR", description: "Jeu d'exploration spatiale en VR développé sous Unity." },
        { title: "Relic of the past", description: "Jeu d'énigmes asymétriques entre un humain et un robot sous Unreal Engine." },
        { title: "Third Person Shooter", description: "Jeu de tir utilisant des Behavior Trees et EQS pour des décisions tactiques IA." },
        { title: "Brick Buster", description: "IA développée sous Unreal Engine : une grue lâche des briques sur un ouvrier." },
        { title: "Bull Run Party", description: "Party game AirConsole où des traders s'affrontent pour des lingots d'or." },
        { title: "Space Shooter", description: "Jeu de tir spatial classique développé avec Unreal Engine." },
        { title: "Among Us 3D", description: "Gestion de la réplication multijoueur et transfert de données entre niveaux." },
        { title: "PacMan", description: "Copie fidèle du jeu original produite sous Unreal Engine." },
        { title: "Tower Defense", description: "Système de vagues d'ennemis et placement de tourelles défensives." },
        { title: "Vaxe", description: "Micro-entreprise : Développement de sites web complets et solutions digitales sur mesure. Password: laskeb" },
    ],
    nav: { home: "Accueil", journey: "Parcours", skills: "Compétences", projects: "Projets" },
    languageButton: { switchTo: "🇬🇧 English" },
};

// =====================================
// TRADUCTIONS ANGLAISES
// =====================================

const en: TranslationStructure = {
    titles: { parcours: "About me", skills: "My Skills", projects: "My Projects" },
    filters: { all: "View All", game: "Game Dev", web: "Web & Front", dev: "DevOps & Tools" },
    hero: {
        available: "Available for work",
        jobTitle: "Developer",
        fullstack: "Full Stack",
        jobDesc: "Designing innovative interfaces & robust architectures.",
    },
    timeline: [
        { title: "Associate Degree in CS", institution: "IUT of Orsay", period: "Sept 2023 - Present", description: "Computer science training with a specialization in development and networks." },
        { title: "International Exchange", institution: "UQAC - Chicoutimi", period: "Jan 2025 - May 2025", description: "Academic exchange semester in Quebec." },
        { title: "Network & Security Intern", institution: "DGA Propellant Testing", period: "May - July 2025", description: "Administration and securing of network infrastructures." },
        { title: "Dual Degree in Game Development", institution: "UQAC - Chicoutimi", period: "Aug 2025 - Future", description: "Dual degree program for a Bachelor's in Video Game Development." },
    ],
    projects: [
        { title: "Alone In Space - VR", description: "VR space exploration game developed with Unity." },
        { title: "Relic of the past", description: "Asymmetric puzzle game between a human and a robot in Unreal Engine." },
        { title: "Third Person Shooter", description: "TPS using Behavior Trees and EQS for tactical AI decisions." },
        { title: "Brick Buster", description: "AI project: a crane dropping bricks on a worker in Unreal Engine." },
        { title: "Bull Run Party", description: "AirConsole party game where traders fight for gold bars." },
        { title: "Space Shooter", description: "Classic space shooter game developed with Unreal Engine." },
        { title: "Among Us 3D", description: "Multiplayer replication management and data transfer between levels." },
        { title: "PacMan", description: "Faithful clone of the original game produced in Unreal Engine." },
        { title: "Tower Defense", description: "Enemy wave system and defensive turret placement." },
        { title: "Vaxe", description: "Web Agency: Development of complete websites and custom digital solutions. Password: laskeb" },
    ],
    nav: { home: "Home", journey: "Journey", skills: "Skills", projects: "Projects" },
    languageButton: { switchTo: "🇫🇷 Français" },
};

export const translations: Record<Lang, TranslationStructure> = { fr, en };