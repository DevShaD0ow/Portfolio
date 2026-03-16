"use client";
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";

import TimelineItem, { TimelineIntro } from "@/components/TimelineItem";
import ProjectCard from "@/components/ProjectCard";
import Nav from "@/components/nav";
import ContactSection from "@/components/contact";
import PopUP from "@/components/popUP";
import SkillIcon from "@/components/SkillIcon";
import Hero from "@/components/hero";

import { skillsData } from "@/data/skillsData";
import { translations, projectsMedia } from "@/data/translations";
import { useLanguage } from "@/context/LanguageContext";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
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
      gsap.to(contentRef.current, { autoAlpha: 1, duration: 1, delay: 0.8 });
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

  return (
    <main className="min-h-screen font-sans text-neutral-200 overflow-x-hidden">
      <Nav />
      <div id="accueil" className='z-20'>
        <Hero />
      </div>

      <div ref={contentRef} className="relative z-20 px-6 md:px-12 lg:px-24 pb-24 pt-32 opacity-0 invisible">

        {/* --- SECTION PARCOURS --- */}
        <section id="parcours" className="mb-48 max-w-6xl mx-auto scroll-mt-24">
          <div className="flex flex-col md:flex-row-reverse gap-12 md:gap-24 relative">
            <div className="md:w-1/3 w-full relative z-10 mb-12 md:mb-0">
              <div className="md:sticky md:top-40">
                <div className="sticky-text-layer relative flex flex-col items-start md:items-end uppercase font-black tracking-tighter leading-none pointer-events-none select-none">
                  <h2 className="text-5xl md:text-6xl text-white opacity-[0.7]">{isEnglish ? "About" : "Parcours"}</h2>
                  <h2 className="text-4xl md:text-6xl -mt-4 mr-0 md:mr-6" style={{ WebkitTextStroke: '1px rgba(167, 139, 250, 0.5)', color: 'transparent' }}>
                    {isEnglish ? "Me" : "Résumé"}
                  </h2>
                </div>
              </div>
            </div>

            <div className="md:w-2/3 w-full space-y-24">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px w-10 bg-violet-500/50" />
                  <h3 className="text-violet-400 font-mono text-xs uppercase tracking-[0.4em]">Intro</h3>
                </div>
                <TimelineIntro isEnglish={isEnglish} />
              </div>

              <div>
                <div className="flex items-center gap-4 mb-10">
                  <div className="h-px w-10 bg-violet-500/50" />
                  <h3 className="text-violet-400 font-mono text-xs uppercase tracking-[0.4em]">Experience</h3>
                </div>
                {experienceItems.map((item, index) => <TimelineItem key={`exp-${index}`} {...item} />)}
              </div>

              <div>
                <div className="flex items-center gap-4 mb-10">
                  <div className="h-px w-10 bg-fuchsia-500/50" />
                  <h3 className="text-fuchsia-400 font-mono text-xs uppercase tracking-[0.4em]">Education</h3>
                </div>
                {educationItems.map((item, index) => <TimelineItem key={`edu-${index}`} {...item} />)}
              </div>
            </div>
          </div>
        </section>

        {/* --- COMPÉTENCES --- */}
        <section id="competences" className="max-w-6xl mx-auto px-6 py-24 space-y-24 scroll-mt-24">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-600">
            {isEnglish ? "My Tech Stack" : "Mes Compétences"}
          </h2>

          {/* JEUX VIDÉO */}
          <div>
            <h3 className="text-xl font-black uppercase tracking-[0.3em] text-white/20 mb-10 flex items-center gap-4">
              Game Dev & Engine <div className="h-px flex-1 bg-white/5" />
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {skillsData.filter(s => s.category === "game").map(skill => (
                <SkillIcon key={skill.name} {...skill} />
              ))}
            </div>
          </div>

          {/* WEB */}
          <div>
            <h3 className="text-xl font-black uppercase tracking-[0.3em] text-white/20 mb-10 flex items-center gap-4">
              Web Stack <div className="h-px flex-1 bg-white/5" />
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {skillsData.filter(s => s.category === "web").map(skill => (
                <SkillIcon key={skill.name} {...skill} />
              ))}
            </div>
          </div>

          {/* OUTILS */}
          <div>
            <h3 className="text-xl font-black uppercase tracking-[0.3em] text-white/20 mb-10 flex items-center gap-4">
              Software & Tools <div className="h-px flex-1 bg-white/5" />
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {skillsData.filter(s => s.category === "dev").map(skill => (
                <SkillIcon key={skill.name} {...skill} />
              ))}
            </div>
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
              return media ? (
                <ProjectCard
                  key={index}
                  {...projectText}
                  {...media}
                  onClick={() => setSelectedProject({ ...projectText, ...media })}
                  slug=""
                />
              ) : null;
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