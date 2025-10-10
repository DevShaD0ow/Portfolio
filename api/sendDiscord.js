export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  const { message } = req.body;
  if (!message || message.trim() === "") {
    return res.status(400).json({ error: "Message vide" });
  }

  const webhookURL = process.env.DISCORD_WEBHOOK;

  try {
    await fetch(webhookURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: message })
    });

    res.status(200).json({ success: true, msg: "Message envoyé sur Discord !" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur serveur" });
  }
}
