document.addEventListener("DOMContentLoaded", () => {
  const image = document.querySelector(".ppAcc");         // ton image de profil
  const text = document.querySelector(".portfolioTitle"); // ton titre "Mon Portfolio"
  const text2 = document.querySelector(".portfolioSub");  // sous-titre éventuel

  // Animation apparition image
  setTimeout(() => {
    if (image) image.style.opacity = "1";
    if (image) image.style.transform = "translateY(0)";
  }, 200);

  // Animation apparition texte principal
  setTimeout(() => {
    if (text) text.style.opacity = "1";
    if (text) text.style.transform = "translateX(0)";
  }, 400);

  // Animation du sous-titre
  setTimeout(() => {
    if (text2) text2.style.opacity = "1";
    if (text2) text2.style.transform = "translateX(0)";
  }, 600);
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
document.addEventListener("scroll", () => {
  const topName = document.getElementById("topName");
  const firstView = document.getElementById("firstView");
  const firstViewHeight = firstView.offsetHeight;

  if (window.scrollY > firstViewHeight - 100) {
    topName.classList.add("visible");
  } else {
    topName.classList.remove("visible");
  }
});

// Sélectionne tous les boutons
const socialIcons = document.querySelectorAll('.wrapper li.icon');

// Ajoute la classe visible avec un léger décalage pour l'effet cascade
socialIcons.forEach((icon, index) => {
  setTimeout(() => {
    icon.classList.add('visible');
  }, index * 400); // chaque bouton apparaît 0.2s après le précédent
});



// carré

function generateFixedSquares(containerSelector, numberOfSquares = 5) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  for (let i = 0; i < numberOfSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('bg-square');

    const size = 40 + Math.random() * 120;
    square.style.width = size + 'px';
    square.style.height = size + 'px';
    square.style.background = `rgba(140,82,255,${0.01 + Math.random() * 0.04})`;

    square.style.top = Math.random() * 100 + '%';
    square.style.left = Math.random() * 100 + '%';

    container.appendChild(square);

    gsap.to(square, {
      x: 'random(-50,50)',
      y: 'random(-50,50)',
      rotation: 'random(-20,20)',
      opacity: 'random(0.01,0.05)',
      duration: 'random(8,15)',
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: Math.random() * 3
    });
  }
}

// Génération globale
generateFixedSquares('#globalBgSquares', 25);
