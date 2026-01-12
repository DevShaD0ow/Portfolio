"use client";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

import TimelineItem from "@/components/TimelineItem";
import ProjectCard from "@/components/ProjectCard";
import Nav from "@/components/nav";
import SkillBar from "@/components/SkillBar";
import ContactSection from "@/components/contact";
import AnimatedTitle from "@/components/AnimatedTitle";

import { skillsData } from "@/data/skillsData";
import { translations, Category, projectsMedia } from "@/data/translations";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const contentRef = useRef<HTMLDivElement>(null);
  const { isEnglish } = useLanguage();
  const currentLang = isEnglish ? "en" : "fr";
  const t = translations[currentLang];

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, {
        autoAlpha: 1,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, []);

  const filteredSkills = skillsData.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  const categories: Category[] = ["all", "game", "web", "dev"];

  return (
    <main className="min-h-screen bg-black font-sans text-neutral-200 overflow-x-hidden selection:bg-violet-500/30 selection:text-violet-200">

      <Nav />

      {/* 2. SECTION TITRE SVG */}
      <section id="accueil" className="relative z-10">
        <AnimatedTitle />
      </section>

      {/* 3. LE CONTENU */}
      <div
        ref={contentRef}
        className="relative z-20 px-6 md:px-12 lg:px-24 pb-24 -mt-20 opacity-0 invisible bg-gradient-to-b from-transparent via-black to-black"
      >
        {/* --- SECTION PARCOURS --- */}
        <section id="parcours" className="mb-32 max-w-4xl mx-auto scroll-mt-24 pt-20">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 pt-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-600 ">
              {t.titles.parcours}
            </span>
          </h2>
          <div className="space-y-4">
            {t.timeline.map((item, index) => (
              <TimelineItem
                key={index}
                title={item.title}
                institution={item.institution}
                period={item.period}
                description={item.description}
              />
            ))}
          </div>
        </section>

        {/* --- SECTION COMPÉTENCES --- */}
        <section id="competences" className="mb-32 max-w-6xl mx-auto scroll-mt-24">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-600">
              {t.titles.skills}
            </span>
          </h2>

          {/* Filtres de catégories */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {categories.map((catId) => (
              <button
                key={catId}
                onClick={() => setActiveCategory(catId)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeCategory === catId
                  ? "bg-violet-600 border-violet-600 text-white shadow-[0_0_15px_rgba(124,58,237,0.5)] scale-105"
                  : "bg-neutral-900/50 border-neutral-800 text-neutral-400 hover:border-violet-500/50 hover:text-neutral-200"
                  }`}
              >
                {t.filters[catId]}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-[300px] content-start">
            {filteredSkills.map((skill, index) => (
              <SkillBar
                key={`${skill.name}-${index}`}
                name={skill.name}
                percentage={skill.percentage}
              />
            ))}
          </div>
        </section>

        {/* --- SECTION PROJETS --- */}
        <section id="projets" className="max-w-7xl mx-auto scroll-mt-24 mb-32">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-600">
              {t.titles.projects}
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.projects.map((projectText, index) => {
              const media = projectsMedia[index];
              if (!media) return null;
              return (
                <ProjectCard
                  key={index}
                  title={projectText.title}
                  description={projectText.description}
                  tags={projectText.tags}
                  image={media.image}
                  video={media.video}
                  slug={media.slug}
                />
              );
            })}
          </div>
        </section>

        {/* --- SECTION CONTACT --- */}
        <ContactSection />

      </div>
    </main>
  );
}