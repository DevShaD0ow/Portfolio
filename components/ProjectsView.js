// components/ProjectsView.js
"use client";

import { useEffect } from "react";

const projectsData = [
  { title: "Alone In Space - VR", preview: "/assets/previewAIS.png", video: "/assets/AIS.mp4", link: "https://github.com/Fan-tome14/AloneInSpace", tags: ["Unity","C#","VR"] },
  { title: "Brick Buster", preview: "/assets/previewSB1.png", video: "/assets/Brick.mp4", link: "https://github.com/DevShaD0ow/SuperBonus", tags: ["Unreal","C++","IA"] },
  { title: "Space Shooter", preview: "/assets/previewSP1.png", video: "/assets/SP.mp4", link: "https://github.com/DevShaD0ow/SpaceShooter", tags: ["Unreal","C++"] },
  { title: "Replication de tache", preview: "/assets/previewAmongUs.png", video: "/assets/amongUs.mp4", link: "https://github.com/DevShaD0ow/SpaceShooter", tags: ["Unreal","C++","Reseau"] },
  { title: "PacMan", preview: "/assets/previewPac.png", video: "/assets/amongUs.mp4", link: "https://github.com/DevShaD0ow/SpaceShooter", tags: ["Unreal","C++","IA"] },
];

export default function ProjectsView() {
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll(".project-card"));

    const tagColors = {
      "Unreal": "#824cff",
      "Unity": "#00ffcc",
      "JavaScript": "#f7df1e",
      "C++": "#4da6ff",
      "C#": "#ff50a2",
      "IA": "#ff6f61",
      "Reseau": "#ffb400",
      "VR": "#1aff6e",
    };

    cards.forEach(card => {
      const videoEl = card.querySelector("video");
      const src = card.dataset.video;
      if (src && videoEl) {
        videoEl.src = src;
        videoEl.load();
      }

      card.addEventListener("mouseenter", async () => {
        try {
          if (videoEl) await videoEl.play();
        } catch (err) { /* play may be blocked */ }
      });

      card.addEventListener("mouseleave", () => {
        if (videoEl) {
          videoEl.pause();
          videoEl.currentTime = 0;
        }
      });

      // tags
      const tagsContainer = card.querySelector(".tags");
      if (card.dataset.tags && tagsContainer) {
        const tags = card.dataset.tags.split(",").map(t => t.trim());
        tags.forEach(tag => {
          const sp = document.createElement("span");
          sp.className = "tag";
          sp.textContent = tag;
          sp.style.borderColor = tagColors[tag] || "#fff";
          sp.style.color = tagColors[tag] || "#fff";
          tagsContainer.appendChild(sp);
        });
      }

      // click open link
      if (card.dataset.link) {
        card.style.cursor = "pointer";
        card.addEventListener("click", () => window.open(card.dataset.link, "_blank"));
      }
    });

    // cleanup listeners on unmount
    return () => {
      cards.forEach(card => {
        card.replaceWith(card.cloneNode(true));
      });
    };
  }, []);

  return (
    <section id="projects-view">
      <h2 className="section-title" tag="pr">Mes Projets</h2>
      <div className="projects-container">
        {projectsData.map((p, i) => (
          <div
            key={i}
            className="project-card"
            data-tags={p.tags.join(", ")}
            data-video={p.video}
            data-link={p.link}
          >
            <img src={p.preview} alt={`Preview ${p.title}`} className="project-preview" />
            <video muted loop playsInline></video>
            <div className="card-content">
              <h3>{p.title}</h3>
              <p>{/* courte description possible */}</p>
              <div className="tags"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
