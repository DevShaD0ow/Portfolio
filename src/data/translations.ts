// src/data/translations.ts

export type Lang = "fr" | "en";
export type Category = "all" | "game" | "web" | "dev";

// =====================================
// STRUCTURE COMPLÈTE DES TRADUCTIONS
// =====================================

interface TranslationStructure {
    // Titres des sections
    titles: {
        parcours: string;
        skills: string;
        projects: string;
    };

    // Filtres des compétences
    filters: {
        all: string;
        game: string;
        web: string;
        dev: string;
    };

    // Timeline (parcours)
    timeline: Array<{
        title: string;
        institution: string;
        period: string;
        description: string;
    }>;

    // Projets (seulement les textes traduits)
    projects: Array<{
        title: string;
        description: string;
        tags: string[];
    }>;

    // Navigation
    nav: {
        home: string;
        journey: string;
        skills: string;
        projects: string;
    };

    // Bouton de langue
    languageButton: {
        switchTo: string;
    };
}

// =====================================
// DONNÉES NON-TRADUITES (chemins, slugs)
// =====================================

export interface ProjectMedia {
    slug: string;
    video: string;
    image: string;
}

export const projectsMedia: ProjectMedia[] = [
    {
        slug: "alone-in-space-vr",
        video: "/Portfolio/assets/images/projects/ais/AIS.webm",
        image: "/Portfolio/assets/images/projects/ais/preview.webp",
    },
    {
        slug: "relic-of-the-past",
        video: "/Portfolio/assets/images/projects/ROP/VideoROP.webm",
        image: "/Portfolio/assets/images/projects/ROP/preview.webp",
    },
    {
        slug: "third-person-shooter",
        video: "/Portfolio/assets/images/projects/tps/VideoTS.webm",
        image: "/Portfolio/assets/images/projects/tps/preview.webp",
    },
    {
        slug: "brick-buster",
        video: "/Portfolio/assets/images/projects/superai/Brick.webm",
        image: "/Portfolio/assets/images/projects/superai/preview.webp",
    },
    {
        slug: "bull-run-party",
        video: "/Portfolio/assets/images/projects/bullrun/invest.webm",
        image: "/Portfolio/assets/images/projects/bullrun/preview.webp",
    },
    {
        slug: "space-shooter",
        video: "/Portfolio/assets/images/projects/spaceshooter/SP.webm",
        image: "/Portfolio/assets/images/projects/spaceshooter/preview.webp",
    },
    {
        slug: "among-us-3d",
        video: "/Portfolio/assets/images/projects/amongUs/amongUs.webm",
        image: "/Portfolio/assets/images/projects/amongUs/preview.webp",
    },
    {
        slug: "pacman",
        video: "/Portfolio/assets/images/projects/pacman/VideoV4.webm",
        image: "/Portfolio/assets/images/projects/pacman/preview.webp",
    },
    {
        slug: "tower-defense",
        video: "/Portfolio/assets/images/projects/td/VideoTD.webm",
        image: "/Portfolio/assets/images/projects/td/preview.webp",
    },
];

// =====================================
// TRADUCTIONS FRANÇAISES
// =====================================

const fr: TranslationStructure = {
    titles: {
        parcours: "Mon Parcours",
        skills: "Mes Compétences",
        projects: "Mes Projets",
    },

    filters: {
        all: "Tout voir",
        game: "Jeux Vidéo",
        web: "Web & Front",
        dev: "DevOps & Outils",
    },

    timeline: [
        {
            title: "BUT Informatique",
            institution: "IUT d'Orsay",
            period: "Sept 2023 - Présent",
            description: "Formation en informatique avec spécialisation en développement et réseaux.",
        },
        {
            title: "Échange International",
            institution: "UQAC - Chicoutimi",
            period: "Janvier 2025 - Mai 2025",
            description: "Semestre d'échange académique au Québec pour découvrir de nouvelles méthodes.",
        },
        {
            title: "Stage en Réseaux & Sécurité",
            institution: "DGA Essais de propulseurs - Saclay",
            period: "Mai - Juillet 2025",
            description: "Administration et sécurisation des infrastructures réseaux. Application pratique en environnement de défense.",
        },
        {
            title: "Bidiplomation en Développement de Jeux",
            institution: "UQAC - Chicoutimi",
            period: "Août 2025 - Avril 2026",
            description: "Programme de double diplôme en Baccalauréat en Développement de Jeux Vidéo. Formation approfondie en game design, moteurs de jeu (Unity, Unreal), programmation gameplay, et production de jeux vidéo professionnels.",
        },
    ],

    projects: [
        {
            title: "Alone In Space - VR",
            description: "Jeu d'exploration spatiale en VR développé sous Unity.",
            tags: ["Unity", "C#", "VR"],
        },
        {
            title: "Relic of the past",
            description: "Jeu d'énigmes développé sous Unreal Engine, où le joueur alterne en temps réel le contrôle entre un humain et un robot pour résoudre des puzzles asymétriques.",
            tags: ["Unreal", "C++", "IA"],
        },
        {
            title: "Third Person Shooter",
            description: "Jeu de tir à la troisième personne où des IA utilisent des Behavior Trees et l'Environment Query System pour des décisions et des manœuvres tactiques en combat.",
            tags: ["Unreal", "C++", "IA"],
        },
        {
            title: "Brick Buster",
            description: "IA développé sous Unreal Engine, où une grue lâche des briques sur un ouvrier.",
            tags: ["Unreal", "C++", "IA"],
        },
        {
            title: "Bull Run Party",
            description: "Party game développé pour AirConsole, où des traders s'arrachent des lingots d'or dans un marché totalement instable et chaotique.",
            tags: ["AirConsole", "HTML", "CSS", "JavaScript"],
        },
        {
            title: "Space Shooter",
            description: "Jeu de type Space Shooter, développé sous Unreal Engine, il faut détruire des astéroïdes dans l'espace.",
            tags: ["Unreal", "C++", "Jeux"],
        },
        {
            title: "Among Us 3D",
            description: "Gestion de la réplication des tâches sur un serveur multijoueur et transfert des données entre niveaux.",
            tags: ["Unreal", "C++", "Réseau"],
        },
        {
            title: "PacMan",
            description: "Copie du jeu PacMan produit par Namco dans le cadre d'un TP en développement de jeux vidéo.",
            tags: ["Unreal", "C++", "IA"],
        },
        {
            title: "Tower Defense",
            description: "Jeu de type Tower Defense, développé sous Unreal Engine, où le joueur doit stopper des vagues d'ennemis en plaçant des tourelles défensives.",
            tags: ["Unreal", "C++", "Jeux"],
        },
    ],

    nav: {
        home: "Accueil",
        journey: "Parcours",
        skills: "Compétences",
        projects: "Projets",
    },

    languageButton: {
        switchTo: "🇬🇧 English",
    },
};

// =====================================
// TRADUCTIONS ANGLAISES
// =====================================

const en: TranslationStructure = {
    titles: {
        parcours: "My Journey",
        skills: "My Skills",
        projects: "My Projects",
    },

    filters: {
        all: "View All",
        game: "Game Dev",
        web: "Web & Front",
        dev: "DevOps & Tools",
    },

    timeline: [
        {
            title: "Associate Degree in CS",
            institution: "IUT of Orsay",
            period: "Sept 2023 - Present",
            description: "Computer science training with a specialization in development and networks.",
        },
        {
            title: "International Exchange",
            institution: "UQAC - Chicoutimi",
            period: "January 2025 - May 2025",
            description: "Academic exchange semester in Quebec to discover new methodologies.",
        },
        {
            title: "Network & Security Intern",
            institution: "DGA Propellant Testing - Saclay",
            period: "May - July 2025",
            description: "Administration and securing of network infrastructures. Practical application in a defense environment.",
        },
        {
            title: "Dual Degree in Game Development",
            institution: "UQAC - Chicoutimi",
            period: "August 2025 - Future",
            description: "Dual degree program for a Bachelor's in Video Game Development. In-depth training in game design, game engines (Unity, Unreal), gameplay programming, and professional video game production.",
        },
    ],

    projects: [
        {
            title: "Alone In Space - VR",
            description: "VR space exploration game developed with Unity.",
            tags: ["Unity", "C#", "VR"],
        },
        {
            title: "Relic of the past",
            description: "Puzzle game developed with Unreal Engine, alternating control between a human and a robot to solve asymmetric puzzles.",
            tags: ["Unreal", "C++", "AI"],
        },
        {
            title: "Third Person Shooter",
            description: "Third-person shooter where AI uses Behavior Trees and Environment Query System for tactical combat decisions.",
            tags: ["Unreal", "C++", "AI"],
        },
        {
            title: "Brick Buster",
            description: "AI developed with Unreal Engine, where a crane drops bricks on a worker.",
            tags: ["Unreal", "C++", "AI"],
        },
        {
            title: "Bull Run Party",
            description: "Party game for AirConsole, where traders fight for gold bars in a chaotic and unstable market.",
            tags: ["AirConsole", "HTML", "CSS", "JavaScript"],
        },
        {
            title: "Space Shooter",
            description: "Space Shooter game developed with Unreal Engine, where you destroy asteroids in space.",
            tags: ["Unreal", "C++", "Games"],
        },
        {
            title: "Among Us 3D",
            description: "Management of task replication on a multiplayer server and data transfer between levels.",
            tags: ["Unreal", "C++", "Network"],
        },
        {
            title: "PacMan",
            description: "Clone of the Pac-Man game by Namco, created as part of a video game development assignment.",
            tags: ["Unreal", "C++", "AI"],
        },
        {
            title: "Tower Defense",
            description: "Tower Defense game developed with Unreal Engine, where the player stops waves of enemies by placing turrets.",
            tags: ["Unreal", "C++", "Games"],
        },
    ],

    nav: {
        home: "Home",
        journey: "Journey",
        skills: "Skills",
        projects: "Projects",
    },

    languageButton: {
        switchTo: "🇫🇷 Français",
    },
};

// =====================================
// EXPORT
// =====================================

export const translations: Record<Lang, TranslationStructure> = {
    fr,
    en,
};