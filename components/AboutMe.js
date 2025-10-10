"use client";

import { useEffect, useRef } from "react";

export default function AboutMe() {
  const containerRef = useRef(null);

  useEffect(() => {
    const fills = containerRef.current.querySelectorAll(".fill");
    // set initial widths (from data-fill)
    fills.forEach(f => (f.style.width = f.getAttribute("data-fill") || "0%"));

    const aboutElements = containerRef.current.querySelectorAll(
      "h2, .about-desc, .skill-bar"
    );
    aboutElements.forEach(el => {
      el.style.opacity = 0;
      el.style.transform = "translateY(50px)";
    });

    let observer;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              aboutElements.forEach((el, i) => {
                el.style.transition = `opacity 0.8s ease ${i * 0.08}s, transform 0.8s ease ${i * 0.08}s`;
                el.style.opacity = 1;
                el.style.transform = "translateY(0)";
              });
              observer.disconnect();
            }
          });
        },
        { threshold: 0.25 }
      );
      observer.observe(containerRef.current);
    } else {
      // fallback: animate immediately
      aboutElements.forEach((el, i) => {
        setTimeout(() => {
          el.style.opacity = 1;
          el.style.transform = "translateY(0)";
        }, i * 100);
      });
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, []); // ← ici on ferme bien useEffect()

  return (
    <section id="aboutMe" ref={containerRef}>
      <div className="about-scroll">
        <div className="about-container">
          <h2>À propos de moi</h2>
          <p className="about-desc">
            Je m'appelle Alexis Tirant, développeur passionné par la création de
            jeux vidéo et d'applications. J'aime explorer de nouvelles
            technologies, résoudre des problèmes complexes et créer des
            expériences interactives.
          </p>

          <div className="skills">
            <div className="skill-bar">
              <span>JavaScript</span>
              <div className="bar">
                <div className="fill" data-fill="60%"></div>
              </div>
            </div>
            <div className="skill-bar">
              <span>HTML / CSS</span>
              <div className="bar">
                <div className="fill" data-fill="80%"></div>
              </div>
            </div>
            <div className="skill-bar">
              <span>Unity</span>
              <div className="bar">
                <div className="fill" data-fill="75%"></div>
              </div>
            </div>
            <div className="skill-bar">
              <span>Unreal Engine</span>
              <div className="bar">
                <div className="fill" data-fill="60%"></div>
              </div>
            </div>

            <div className="skill-bar">
              <span>C#</span>
              <div className="bar">
                <div className="fill" data-fill="80%"></div>
              </div>
            </div>
            <div className="skill-bar">
              <span>C++</span>
              <div className="bar">
                <div className="fill" data-fill="75%"></div>
              </div>
            </div>
            <div className="skill-bar">
              <span>SQL</span>
              <div className="bar">
                <div className="fill" data-fill="80%"></div>
              </div>
            </div>
            <div className="skill-bar">
              <span>Git / Perforce</span>
              <div className="bar">
                <div className="fill" data-fill="65%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
