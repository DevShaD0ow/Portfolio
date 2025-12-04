const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1443360408520888472/7reazqBgLLg0_Se0w0-44C_7FKCdGGWPEB66WRMdi0WlSRb0oQbRDMxlTqdUa1ZCP5s_';

// oui je met le webhook ici jprend le risque 
// mais je suis pas con mais si tu l'utilise tu l'es

async function sendToDiscord(name, email, message) {
  if (!name || !email || !message) {
    showToast(' Veuillez remplir tous les champs', 'error'); return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showToast(' Veuillez entrer un email valide', 'error');
    return;
  }
  // Validation de longueur minimale
  if (name.length < 2) {
    showToast('Le nom doit contenir au moins 2 caractères', 'error');
    return;
  }

  if (message.length < 10) {
    showToast('Le message doit contenir au moins 10 caractères', 'error');
    return;
  }

  if (message.length > 1000) {
    showToast('Le message est trop long (max 1000 caractères)', 'error');
    return;
  }


  const badWords = [
    ' merde ', ' connard ', ' putain ', ' encule ', ' salope ',
    ' pute ', ' con ', ' fdp ', ' ntm ', ' pd ', ' batard ',
    'fuck', ' shit ', ' bitch ', ' dick '
  ];

  const textToCheck = (name + ' ' + message).toLowerCase();
  const foundBadWord = badWords.find(word => textToCheck.includes(word));

  if (foundBadWord) {
    showToast('Langage inapproprié détecté. Soyez respectueux.', 'error');
    return;
  }
  // antispam
  if (/(.)\1{10,}/.test(message)) {
    showToast('Message suspect détecté (spam)', 'error');
    return;
  }

  try {
    const discordMessage = {
      username: '📬 Portfolio Contact',
      avatar_url: 'https://cdn.discordapp.com/embed/avatars/0.png',
      content: '<@307896022183444481>',
      embeds: [{
        author: {
          name: '✉️ Nouveau message depuis le Portfolio',
          icon_url: 'https://cdn-icons-png.flaticon.com/512/3062/3062634.png'
        },
        description: `**${name}** vous a envoyé un message`,
        color: 0xb400ff,
        fields: [
          {
            name: '👤 Nom',
            value: `\`\`\`${name}\`\`\``,
            inline: true
          },
          {
            name: '📧 Email',
            value: `\`\`\`${email}\`\`\``,
            inline: true
          },
          {
            name: '\u200b',
            value: '\u200b',
            inline: false
          },
          {
            name: '💬 Message',
            value: `>>> ${message}`
          }
        ],
        thumbnail: {
          url: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
        },
        timestamp: new Date().toISOString(),
        footer: {
          text: 'Portfolio - Alexis Tirant',
          icon_url: 'https://cdn-icons-png.flaticon.com/512/1828/1828884.png'
        }
      }]
    };

    const response = await fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(discordMessage)
    });

    if (response.ok) {
      showToast(' Message envoyé avec succès !', 'success');
      document.getElementById('contactForm').reset();
    } else {
      throw new Error(`Erreur ${response.status}: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error);
    showToast(' Erreur lors de l\'envoi du message', 'error');
  }
}

function handleContactSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('contactName').value.trim();
  const email = document.getElementById('contactEmail').value.trim();
  const message = document.getElementById('contactMessage').value.trim();

  sendToDiscord(name, email, message);
}

function showToast(message, type = 'success') {
  const existingToast = document.querySelector('.toast-notification');
  if (existingToast) existingToast.remove();
  const toast = document.createElement('div');
  toast.className = `toast-notification ${type}`;

  const icon = type === 'success'
    ? '<i class="fas fa-check-circle"></i>'
    : '<i class="fas fa-exclamation-circle"></i>';

  toast.innerHTML = `${icon}<span>${message}</span>`;

  document.body.appendChild(toast);
  setTimeout(() => {
    if (toast.parentNode) {
      toast.remove();
    }
  }, 3000);
}


