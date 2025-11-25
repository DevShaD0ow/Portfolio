document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".project-card");
  console.log("Nombre de cartes trouvées :", cards.length);

  // Couleurs des tags
  const tagColors = {
    "Unreal": "#824cff",
    "Unity": "#00ffcc",
    "JavaScript": "#f7df1e",
    "C++": "#4da6ff",
    "C#": "#ff50a2ff",
    "IA": "#ff6f61",
    "Reseau": "#ffb400",
    "VR": "#1aff6eff",
    "Jeux": "#ff5733",
    "AirConsole": "#33f80bff",
    "HTML": "#ff6f61",
    "CSS": "#ffb400"
  };

  cards.forEach(card => {
    console.log("Carte trouvée :", card);

    // --- Vidéo ---
    const video = card.querySelector("video");
    const src = card.dataset.video;
    console.log("Vidéo src :", src);

    if (src) {
      video.src = src;
      video.load();
    }

    card.addEventListener("mouseenter", async () => {
      // Si c'est la carte AIS
      if (card.dataset.video.includes("AIS.mp4")) {
        video.playbackRate = 2.0; // 🎬 vitesse x2
      } else {
        video.playbackRate = 1.0; // normal pour les autres
      }

      try { await video.play(); }
      catch (err) { console.warn("Lecture vidéo impossible", err); }
    });


    card.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
    });

    // --- Tags ---
    const tagsContainer = card.querySelector(".tags");
    if (card.dataset.tags) {
      const tags = card.dataset.tags.split(",").map(t => t.trim());
      console.log("Tags pour la carte :", tags);
      tags.forEach(tag => {
        const span = document.createElement("span");
        span.className = "tag";
        span.textContent = tag;
        span.style.borderColor = tagColors[tag] || "#fff";
        span.style.color = tagColors[tag] || "#fff";
        tagsContainer.appendChild(span);
      });
    }

    // --- Clic pour ouvrir le lien ---
    if (card.dataset.link) {
      card.style.cursor = "pointer";
      card.addEventListener("click", () => {
        window.open(card.dataset.link, "_blank");
      });
    }
  });
});
