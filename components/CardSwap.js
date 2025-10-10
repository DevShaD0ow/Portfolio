// components/CardSwap.js
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CardSwap({ cards = [], options = {} }) {
  const containerRef = useRef(null);
  const opts = Object.assign({
    width: 400,
    height: 300,
    cardDistance: 60,
    verticalDistance: 50,
    delay: 4000,
    skewAmount: 3,
  }, options);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let refs = [];
    let order = cards.map((_, i) => i);
    let intervalId = null;

    container.style.width = opts.width + "px";
    container.style.height = opts.height + "px";
    container.style.position = "relative";
    container.style.overflow = "visible";

    // create card elements
    cards.forEach((card, i) => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
        <h3>${card.title}</h3>
        <div class="card-divider"></div>
        ${card.text ? `<p class="card-subtext">${card.text}</p>` : ''}
        ${card.video ? `<div class="card-videos"><video muted loop playsinline preload="metadata"><source src="${card.video}" type="video/mp4"></video></div>` : ''}
      `;
      container.appendChild(div);
      refs.push(div);
    });

    // helper to compute slot
    const makeSlot = (i) => {
      const total = refs.length;
      return {
        x: i * opts.cardDistance,
        y: -i * opts.verticalDistance,
        z: -i * opts.cardDistance * 1.5,
        zIndex: total - i
      };
    };

    const placeNow = (el, slot, skew = opts.skewAmount) => {
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
    };

    // initial placement
    refs.forEach((el, i) => {
      placeNow(el, makeSlot(i));
    });

    // swap function
    const swap = () => {
      if (order.length < 2) return;
      const [front, ...rest] = order;
      const elFront = refs[front];
      const tl = gsap.timeline();

      tl.to(elFront, { y: "+=500", duration: 1.5, ease: "power2.inOut" });

      rest.forEach((idx, i) => {
        const el = refs[idx];
        const slot = makeSlot(i);
        tl.set(el, { zIndex: slot.zIndex });
        tl.to(el, { x: slot.x, y: slot.y, z: slot.z, duration: 1, ease: "power2.inOut" }, "-=1");
      });

      const backSlot = makeSlot(refs.length - 1);
      tl.set(elFront, { zIndex: backSlot.zIndex });
      tl.to(elFront, { x: backSlot.x, y: backSlot.y, z: backSlot.z, duration: 1.2, ease: "elastic.out(1,0.75)" });

      tl.call(() => {
        order = [...rest, front];
      });
    };

    // start auto swap only on wide screens
    const startIfLarge = () => {
      if (window.innerWidth >= 768 && !intervalId) {
        intervalId = setInterval(swap, opts.delay);
        container.style.display = "block";
      } else if (window.innerWidth < 768) {
        if (intervalId) clearInterval(intervalId);
        intervalId = null;
        container.style.display = "none";
      }
    };

    startIfLarge();
    window.addEventListener("resize", startIfLarge);

    // cleanup
    return () => {
      window.removeEventListener("resize", startIfLarge);
      if (intervalId) clearInterval(intervalId);
      // kill GSAP tweens on children
      gsap.killTweensOf(refs);
      container.innerHTML = "";
    };
  }, [cards, opts.cardDistance, opts.delay, opts.height, opts.skewAmount, opts.verticalDistance, opts.width]);

  return <div ref={containerRef} className="card-swap-container" />;
}
