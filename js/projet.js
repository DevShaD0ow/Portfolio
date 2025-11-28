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
    const video = card.querySelector("video");
    const src = card.dataset.video;
    let videoLoaded = false;

    // --- Tags (garder tel quel) ---
    const tagsContainer = card.querySelector(".tags");
    if (card.dataset.tags) {
      const tags = card.dataset.tags.split(",").map(t => t.trim());
      tags.forEach(tag => {
        const span = document.createElement("span");
        span.className = "tag";
        span.textContent = tag;
        span.style.borderColor = tagColors[tag] || "#fff";
        span.style.color = tagColors[tag] || "#fff";
        tagsContainer.appendChild(span);
      });
    }

    // --- LAZY LOADING VIDÉO : charge uniquement au hover ---
    card.addEventListener("mouseenter", async () => {
      // Charger la vidéo seulement si pas déjà fait
      if (!videoLoaded && src) {
        video.src = src;
        video.load();
        videoLoaded = true;
      }

      // Attendre que la vidéo soit prête avant de la lire
      if (video.readyState >= 2) {
        playVideo();
      } else {
        video.addEventListener('loadeddata', playVideo, { once: true });
      }

      function playVideo() {
        // Vitesse x2 pour AIS
        if (src.includes("AIS.mp4")) {
          video.playbackRate = 2.0;
        } else {
          video.playbackRate = 1.0;
        }

        video.play().catch(err => console.warn("Lecture vidéo impossible", err));
      }
    });

    card.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
    });

    // --- Clic pour ouvrir le lien ---
    if (card.dataset.link) {
      card.style.cursor = "pointer";
      card.addEventListener("click", () => {
        window.location.href = card.dataset.link;
      });
    }
  });
});