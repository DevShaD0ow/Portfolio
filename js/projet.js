document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".project-card");

  cards.forEach(card => {
    const video = card.querySelector("video");
    const src = card.dataset.video;

    if (src) {
      video.src = src;
      video.load();
    }

    card.addEventListener("mouseenter", async () => {
      try { await video.play(); } 
      catch(err) { console.warn("Lecture vidéo impossible", err); }
    });

    card.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
    });
  });

  // Tags automatiques
  const tagColors = {
    "Unreal": "#824cff",
    "Unity": "#00ffcc",
    "React": "#61dafb",
    "JavaScript": "#f7df1e",
    "C++": "#00599c",
    "C#": "#68217a",
    "CSS": "#2965f1"
  };

  document.querySelectorAll(".project-card").forEach(card => {
    const tagsContainer = card.querySelector(".tags");
    const tags = card.dataset.tags.split(",").map(t => t.trim());
    tags.forEach(tag => {
      const span = document.createElement("span");
      span.className = "tag";
      span.textContent = tag;
      span.style.borderColor = tagColors[tag] || "#fff";
      span.style.color = tagColors[tag] || "#fff";
      tagsContainer.appendChild(span);
    });
  });
});
