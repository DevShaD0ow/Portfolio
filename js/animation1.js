document.addEventListener("DOMContentLoaded", () => {
  const image = document.querySelector(".ppAcc");         // ton image de profil
  const text = document.querySelector(".portfolioTitle"); // ton titre "Mon Portfolio"
  const text2 = document.querySelector(".portfolioSub");  // sous-titre éventuel

  // Animation apparition image
  setTimeout(() => {
    if (image) image.style.opacity = "1";
    if (image) image.style.transform = "translateY(0)";
  }, 400);

  // Animation apparition texte principal
  setTimeout(() => {
    if (text) text.style.opacity = "1";
    if (text) text.style.transform = "translateX(0)";
  }, 600);

  // Animation du sous-titre
  setTimeout(() => {
    if (text2) text2.style.opacity = "1";
    if (text2) text2.style.transform = "translateX(0)";
  }, 800);
});


window.addEventListener('load', () => {
  const aboutContainer = document.querySelector('.about-container');
  const aboutDesc = document.querySelector('.about-desc');
  const skillFills = document.querySelectorAll('.skill-bar .fill');

  // Timeline GSAP
  const tl = gsap.timeline();

  // 1️⃣ Déplacer et réduire le texte de description
  tl.to(aboutContainer, {
    duration: 1,
    x: 0,                  // reste à gauche
    y: -50,                // remonte un peu
    scale: 0.8,            // réduit légèrement
    ease: "power2.out"
  });

  // 2️⃣ Remplir les jauges progressivement
  tl.to(skillFills, {
    duration: 1.2,
    width: (i, el) => el.style.width, // prend la valeur déjà définie en HTML (ex: 90%)
    ease: "power2.out",
    stagger: 0.2
  }, "-=0.5"); // démarre légèrement avant la fin du mouvement du texte
});
