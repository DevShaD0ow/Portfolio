"use client";
import { useEffect } from "react";
import CardSwap from "./cardSwap";

export default function FirstView() {
  useEffect(() => {
    const image = document.querySelector(".ppAcc");
    const title = document.querySelector(".portfolioTitle");
    const sub = document.querySelector(".portfolioSub");

    setTimeout(() => { image.style.opacity = "1"; image.style.transform = "translateY(0)"; }, 200);
    setTimeout(() => { title.style.opacity = "1"; title.style.transform = "translateX(0)"; }, 400);
    setTimeout(() => { sub.style.opacity = "1"; sub.style.transform = "translateX(0)"; }, 600);
  }, []);

  const cardsData = [
    { title: "<> Développement de jeux Vidéo", text: "Unreal Engine, Unity", video: "/assets/VideoDemoJeux.mp4" },
    { title: "<> Développement d'application", text: "JS, Electron, C#, WPF, Java/Android" },
    { title: "🖧 Réseau & Systèmes", text: "VLAN, DHCP, DNS, 802.1X, Windows & Linux" }
  ];

  return (
    <section id="firstView">
      <div id="bgAnimation"></div>
      <div className="content">
        <img className="ppAcc" src="/assets/photo.jpg" alt="Photo de profil" />
        <h1 className="portfolioTitle">Alexis Tirant</h1>
        <p className="portfolioSub">Étudiant UQAC – Jeux & Informatique</p>
        <ul className="wrapper">
          <li className="icon discord"><a href="https://discord.gg/cggpZ5vPuP"><i className="fab fa-discord"></i></a></li>
          <li className="icon linkedin"><a href="https://www.linkedin.com/in/alexis-tirant-386409293"><i className="fab fa-linkedin"></i></a></li>
          <li className="icon github"><a href="https://github.com/DevShaD0ow"><i className="fab fa-github"></i></a></li>
        </ul>
        <CardSwap cards={cardsData} />
      </div>
    </section>
  );
}
