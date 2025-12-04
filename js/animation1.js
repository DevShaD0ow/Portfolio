window.addEventListener('siteLoaded', () => {
  const image = document.querySelector(".ppAcc");
  const text = document.querySelector(".portfolioTitle");
  const text2 = document.querySelector(".portfolioSub");

  setTimeout(() => {
    if (image) image.style.opacity = "1";
    if (image) image.style.transform = "translateY(0)";
  }, 100);

  setTimeout(() => {
    if (text) text.style.opacity = "1";
    if (text) text.style.transform = "translateX(0)";
  }, 250);

  setTimeout(() => {
    if (text2) text2.style.opacity = "1";
    if (text2) text2.style.transform = "translateX(0)";
  }, 400);

  const socialIcons = document.querySelectorAll('.wrapper li.icon');
  socialIcons.forEach((icon, index) => {
    setTimeout(() => {
      icon.classList.add('visible');
    }, 550 + (index * 150));
  });
});

document.addEventListener("scroll", () => {
  const topName = document.getElementById("topName");
  const topbutton = document.getElementById("scrollTopButton");
  const firstView = document.getElementById("firstView");
  const firstViewHeight = firstView.offsetHeight;

  if (window.scrollY > firstViewHeight - 100) {
    topName.classList.add("visible");
    topbutton.classList.add("visible");
  } else {
    topName.classList.remove("visible");
    topbutton.classList.remove("visible");
  }
});

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

generateFixedSquares('#globalBgSquares', 25);

document.getElementById("scrollTopButton").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});