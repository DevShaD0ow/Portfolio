<script>
async function sendMessage() {
  const message = document.getElementById("message").value;

  try {
    const response = await fetch("/api/sendDiscord", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });

    const data = await response.json();
    alert(data.success ? "Message envoyé !" : "Erreur : " + data.error);
    if (data.success) document.getElementById("message").value = "";
  } catch (err) {
    alert("Erreur réseau : " + err.message);
  }
}
</script>