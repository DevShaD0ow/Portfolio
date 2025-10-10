"use client";
import { useState } from "react";

export default function ContactView() {
  const [message, setMessage] = useState("");

  const sendMessage = async () => {
    try {
      const res = await fetch("/api/sendDiscord", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message })
      });
      const data = await res.json();
      alert(data.success ? "Message envoyé !" : "Erreur : " + data.error);
      if (data.success) setMessage("");
    } catch (err) {
      alert("Erreur réseau : " + err.message);
    }
  };

  return (
    <section id="contact-view">
      <div className="contact-container">
        <h2>Contacte-moi</h2>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Écris ton message..."
          required
        />
        <button onClick={sendMessage}>Envoyer</button>
      </div>
    </section>
  );
}
