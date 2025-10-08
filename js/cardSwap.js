class CardSwap {
  constructor(container, cards, options = {}) {
    this.container = container;
    this.cards = cards;
    this.options = Object.assign({
      width: 400,
      height: 300,
      cardDistance: 60,
      verticalDistance: 50,
      delay: 4000,
      skewAmount: 3,
    }, options);
    this.refs = [];
    this.order = Array.from({ length: cards.length }, (_, i) => i);
    this.init();
  }

  init() {
    this.container.classList.add("card-swap-container");
    this.container.style.width = this.options.width + "px";
    this.container.style.height = this.options.height + "px";
    this.container.style.overflow = "visible";

    this.cards.forEach((card, i) => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
        <h3>${card.title}</h3>
        <div class="card-divider"></div>
        ${card.text ? `<p class="card-subtext">${card.text}</p>` : ''}
        ${card.video 
          ? `<div class="card-videos">
              <video 
                autoplay 
                muted 
                loop 
                playsinline 
                disablePictureInPicture 
                controlsList="nodownload noremoteplayback"
              >
                <source src="${card.video}" type="video/mp4">
                Votre navigateur ne supporte pas la vidéo.
              </video>
            </div>` 
          : ''
        }
      `;
      this.container.appendChild(div);
      this.refs.push(div);
    });

    this.placeAll();
    this.startSwapping();
  }

  makeSlot(i) {
    const { cardDistance, verticalDistance } = this.options;
    const total = this.refs.length;
    return {
      x: i * cardDistance,
      y: -i * verticalDistance,
      z: -i * cardDistance * 1.5,
      zIndex: total - i
    };
  }

  placeAll() {
    this.refs.forEach((el, i) => {
      const slot = this.makeSlot(i);
      this.placeNow(el, slot, this.options.skewAmount);
    });
  }

  placeNow(el, slot, skew) {
    gsap.set(el, {
      x: slot.x,
      y: slot.y,
      z: slot.z,
      xPercent: -50,
      yPercent: -50,
      skewY: skew,
      transformOrigin: "bottom right",
      zIndex: slot.zIndex,
      force3D: true
    });
  }

  startSwapping() {
    this.interval = setInterval(() => this.swap(), this.options.delay);
  }

  swap() {
    if (this.order.length < 2) return;

    const [front, ...rest] = this.order;
    const elFront = this.refs[front];

    const tl = gsap.timeline();

    tl.to(elFront, { y: "+=500", duration: 1.5, ease: "power2.inOut" });

    rest.forEach((idx, i) => {
      const el = this.refs[idx];
      const slot = this.makeSlot(i);
      tl.set(el, { zIndex: slot.zIndex });
      tl.to(el, { x: slot.x, y: slot.y, z: slot.z, duration: 1, ease: "power2.inOut" }, "-=1");
    });

    const backSlot = this.makeSlot(this.refs.length - 1);
    tl.set(elFront, { zIndex: backSlot.zIndex });
    tl.to(elFront, { x: backSlot.x, y: backSlot.y, z: backSlot.z, duration: 1.2, ease: "elastic.out(1,0.75)" });

    tl.call(() => {
      this.order = [...rest, front];
    });
  }
}

window.CardSwap = CardSwap;

// ==========================
// Initialisation séparée
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  new CardSwap(document.getElementById('card-container'), [
    { 
      title: "&lt;/&gt; Développement de jeux Vidéo", 
      text: "Unreal Engine, Unity",
      video: "./assets/VideoDemoJeux.mp4" 
    },
    { 
      title: "&lt;/&gt; Développement d'application", 
      text: "React, JavaScript, CSS..." 
    },
    { 
      title: "🖧 Réseau", 
      text: "Travaillons ensemble !" 
    }
  ]);
});
