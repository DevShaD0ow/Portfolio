document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.querySelector("#aboutMe");
  const aboutElements = document.querySelectorAll(
    "#aboutMe h2, #aboutMe .about-desc, #aboutMe .skill-bar"
  );
  const fills = document.querySelectorAll(".fill");
  let hasAnimated = false;

  // Remplit directement les jauges dès le chargement
  fills.forEach(fill => {
    fill.style.width = fill.getAttribute("data-fill");
  });

  // Animation du contenu texte et barres
  function animateAbout() {
    aboutElements.forEach((el, i) => {
      el.style.transition = `opacity 0.8s ease ${i * 0.1}s, transform 0.8s ease ${i * 0.1}s`;
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }

  // Détection fluide du scroll
  function checkScroll() {
    const rect = aboutSection.getBoundingClientRect();
    const triggerPoint = window.innerHeight * 0.75;

    if (!hasAnimated && rect.top < triggerPoint && rect.bottom > 0) {
      hasAnimated = true;
      animateAbout();
    }

    requestAnimationFrame(checkScroll);
  }

  requestAnimationFrame(checkScroll);
});
