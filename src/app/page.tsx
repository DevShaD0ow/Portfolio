"use client";
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";

import TimelineItem, { TimelineIntro } from "@/components/TimelineItem";
import ProjectCard from "@/components/ProjectCard";
import Nav from "@/components/nav";
import SkillBar from "@/components/SkillBar";
import ContactSection from "@/components/contact";
import AnimatedTitle from "@/components/AnimatedTitle";

import { skillsData } from "@/data/skillsData";
import { translations, Category, projectsMedia } from "@/data/translations";
import { useLanguage } from "@/context/LanguageContext";
import PopUP from "@/components/popUP";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const contentRef = useRef<HTMLDivElement>(null);
  const { isEnglish } = useLanguage();
  const currentLang = isEnglish ? "en" : "fr";
  const t = translations[currentLang];

  const [selectedProject, setSelectedProject] = useState<any>(null);

  const educationItems = t.timeline.filter(item =>
    item.institution.toLowerCase().includes("uqac") ||
    item.institution.toLowerCase().includes("lycée") ||
    item.institution.toLowerCase().includes("iut")
  );
  const experienceItems = t.timeline.filter(item => !educationItems.includes(item));

  useLayoutEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, {
        autoAlpha: 1,
        duration: 1,
        delay: 0.8,
      });

      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        gsap.to(".sticky-text-layer", {
          scrollTrigger: {
            trigger: "#parcours",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
          y: 1200,
          ease: "linear",
        });
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

      <section id="accueil" className="relative z-10">
        <AnimatedTitle />
      </section>

      <div ref={contentRef} className="relative z-20 px-6 md:px-12 lg:px-24 pb-24 pt-32 opacity-0 invisible">

        {/* --- SECTION PARCOURS --- */}
        <section id="parcours" className="mb-48 max-w-6xl mx-auto scroll-mt-24">

          <div className="flex flex-col md:flex-row-reverse gap-12 md:gap-24 relative">

            {/* COLONNE DROITE (TITRE) */}
            <div className="md:w-1/3 w-full relative z-10 mb-12 md:mb-0">
              <div className="md:sticky md:top-40">
                <div className="sticky-text-layer relative flex flex-col items-start md:items-end uppercase font-black tracking-tighter leading-none pointer-events-none select-none">

                  <h2 className="text-5xl sm:text-5xl md:text-6xl text-white opacity-[0.7]">
                    {isEnglish ? "About" : "Parcours"}
                  </h2>

                  <h2
                    className="text-4xl sm:text-5xl md:text-6xl -mt-3 sm:-mt-4 md:-mt-4 mr-0 md:mr-6"
                    style={{ WebkitTextStroke: '1px rgba(167, 139, 250, 0.5)', color: 'transparent' }}
                  >
                    {isEnglish ? "Me" : "Résumé"}
                  </h2>
                </div>
              </div>
            </div>

            {/* COLONNE GAUCHE (CONTENU) */}
            <div className="md:w-2/3 w-full space-y-24">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px w-10 bg-violet-500/50" />
                  <h3 className="text-violet-400 font-mono text-xs uppercase tracking-[0.4em]">Intro</h3>
                </div>
                <TimelineIntro isEnglish={isEnglish} />
              </div>

              {/* EXPERIENCE */}
              <div>
                <div className="flex items-center gap-4 mb-10">
                  <div className="h-px w-10 bg-violet-500/50" />
                  <h3 className="text-violet-400 font-mono text-xs uppercase tracking-[0.4em]">Experience</h3>
                </div>
                <div className="space-y-0">
                  {experienceItems.map((item, index) => (
                    <TimelineItem key={`exp-${index}`} {...item} />
                  ))}
                </div>
              </div>

              {/* EDUCATION */}
              <div>
                <div className="flex items-center gap-4 mb-10">
                  <div className="h-px w-10 bg-fuchsia-500/50" />
                  <h3 className="text-fuchsia-400 font-mono text-xs uppercase tracking-[0.4em]">Education</h3>
                </div>
                <div className="space-y-0">
                  {educationItems.map((item, index) => (
                    <TimelineItem key={`edu-${index}`} {...item} />
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- SECTION COMPÉTENCES --- */}
        <section id="competences" className="mb-40 max-w-6xl mx-auto scroll-mt-24">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-600">
            {t.titles.skills}
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((catId) => (
              <button
                key={catId}
                onClick={() => setActiveCategory(catId)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeCategory === catId
                  ? "bg-violet-600 border-violet-600 text-white shadow-[0_0_20px_rgba(124,58,237,0.3)] scale-105"
                  : "bg-neutral-900/50 border-neutral-800 text-neutral-400 hover:border-violet-500/50"
                  }`}
              >
                {t.filters[catId]}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {filteredSkills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
            ))}
          </div>
        </section>

        {/* --- SECTION PROJETS --- */}
        <section id="projets" className="max-w-7xl mx-auto scroll-mt-24 mb-32">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-600">
            {t.titles.projects}
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
                  tags={media.tags}
                  image={media.image}
                  video={media.video}
                  onClick={() => setSelectedProject({ ...projectText, ...media })}
                  slug={""}
                />
              );
            })}
          </div>
        </section>

        <ContactSection />
      </div>

      <AnimatePresence>
        {selectedProject && (
          <PopUP selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
        )}
      </AnimatePresence>
    </main>
  );
}