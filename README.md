# 🎮 Portfolio - Alexis Tirant

Portfolio personnel présentant mes projets en développement de jeux vidéo et mes compétences techniques.

## 🚀 Aperçu

Site web one-page moderne et performant mettant en avant :
- 9 projets de jeux vidéo (Unity, Unreal Engine)
- Parcours académique et professionnel
- Compétences techniques
- Formulaire de contact avec intégration Discord

**🔗 Démo** : [Votre URL de déploiement]

---

## 📁 Structure du Projet

```
Portfolio/
├── index.html              # Page principale
├── css/                    # Feuilles de style
│   ├── style.css          # Styles globaux + animations
│   ├── style.min.css      # Version minifiée (production)
│   ├── vue1.css           # Hero section
│   ├── vue2.css           # À propos / Compétences
│   ├── vue3.css           # Parcours / Timeline
│   ├── vue4.css           # Projets
│   ├── contact.css        # Formulaire de contact
│   └── project-detail.css # Pages détails projets
├── js/                     # Scripts JavaScript
│   ├── animation1.js      # Animations hero
│   ├── aboutAnimation.js  # Animations compétences
│   ├── educationAnimation.js # Timeline interactive
│   ├── projet.js          # Cartes projets + lazy loading
│   ├── projet.min.js      # Version minifiée (production)
│   ├── discord.js         # Webhook Discord
│   └── scroll.js          # Animations au scroll
├── project/                # Pages détails des 9 projets
│   ├── project-detail-ais.html
│   ├── project-detail-rop.html
│   └── ... (7 autres)
└── assets/                 # Ressources médias
    ├── images/
    │   ├── ui/            # Logo, photo de profil
    │   └── projects/      # Previews et assets par projet
    │       ├── ais/
    │       ├── rop/
    │       └── ...
    └── documents/
        └── CV_Alexis_Tirant.pdf
```

---

## 🛠️ Technologies Utilisées

### Frontend
- **HTML5** - Structure sémantique
- **CSS3** - Animations, Grid, Flexbox
- **JavaScript (Vanilla)** - Interactivité sans framework
- **GSAP** - Animations avancées

### Optimisations
- **WebP** - Format d'images moderne (-70% de poids)
- **Lazy Loading** - Chargement différé des médias
- **CSS/JS Minification** - Réduction de 35-40% de la taille
- **Preload/Preconnect** - Optimisation du chargement

### Outils
- **csso-cli** - Minification CSS
- **uglify-js** - Minification JavaScript
- **Font Awesome** - Icônes
- **Google Fonts** - Typographie (Orbitron, Inter)

---

## 📊 Performance

| Métrique | Valeur |
|----------|--------|
| **Poids initial** | ~5-8 Mo |
| **First Contentful Paint** | < 2s |
| **Time to Interactive** | < 3s |
| **Lazy loading** | 560+ Mo de vidéos |
| **Images optimisées** | WebP (-70%) |
| **CSS minifié** | -35% |
| **JS minifié** | -40% |

### Optimisations Appliquées
✅ Lazy loading des vidéos (`preload="none"`)  
✅ Lazy loading des images (`loading="lazy"`)  
✅ Conversion PNG → WebP  
✅ Minification CSS/JS  
✅ Preconnect aux CDN  
✅ Scripts avec `defer`  

---

## 🚀 Installation & Utilisation

### Prérequis
- Un serveur web (Live Server, Python SimpleHTTPServer, etc.)
- Node.js (optionnel, pour la minification)

### Développement Local

**Option 1 : Live Server (VSCode)**
```bash
# Installer l'extension "Live Server" dans VSCode
# Clic droit sur index.html → "Open with Live Server"
```

**Option 2 : Python**
```bash
# Python 3
python -m http.server 8000

# Ouvrir http://localhost:8000
```

**Option 3 : Node.js**
```bash
npx serve
```

### Build pour Production

```bash
# Installer les outils de minification
npm install -g csso-cli uglify-js

# Minifier le CSS
csso css/style.css -o css/style.min.css
csso css/contact.css -o css/contact.min.css
csso css/vue1.css -o css/vue1.min.css
csso css/vue2.css -o css/vue2.min.css
csso css/vue3.css -o css/vue3.min.css
csso css/vue4.css -o css/vue4.min.css
csso css/project-detail.css -o css/project-detail.min.css

# Minifier le JS
uglifyjs js/projet.js -o js/projet.min.js -c -m
uglifyjs js/animation1.js -o js/animation1.min.js -c -m
uglifyjs js/aboutAnimation.js -o js/aboutAnimation.min.js -c -m
uglifyjs js/educationAnimation.js -o js/educationAnimation.min.js -c -m
uglifyjs js/discord.js -o js/discord.min.js -c -m
uglifyjs js/scroll.js -o js/scroll.min.js -c -m
```

> **Note** : Pour la production, modifier les `<link>` et `<script>` dans `index.html` pour utiliser les versions `.min.css` et `.min.js`

---

## 🎯 Fonctionnalités

### 🏠 Hero Section
- Animation de la photo de profil avec effet glow
- Particules animées en arrière-plan
- Liens vers réseaux sociaux

### 👨‍💻 Section À Propos
- Barres de progression des compétences avec animation
- Design moderne avec glassmorphism

### 🎓 Parcours
- Timeline interactive verticale
- 4 événements majeurs (BUT, Échange, Stage, Bidiplomation)
- Animations au scroll

### 🎮 Projets
- 9 cartes de projets interactives
- Lecture vidéo au hover (lazy loading)
- Tags technologiques avec couleurs
- Navigation vers pages détails

### 📧 Contact
- Formulaire avec validation
- Intégration webhook Discord
- Toast notifications personnalisées
- Design responsive

---

## 🌐 Déploiement

### GitHub Pages
```bash
# Pousser sur GitHub
git add .
git commit -m "Deploy portfolio"
git push origin main

# Activer GitHub Pages dans Settings → Pages → Deploy from branch: main
```

### Netlify
1. Drag & drop le dossier sur [netlify.com](https://netlify.com)
2. Ou connecter le repo GitHub pour déploiement automatique

### Vercel
```bash
npx vercel
```

---

## 🔧 Configuration

### Webhook Discord
Pour activer les notifications de contact :
1. Créer un webhook dans votre serveur Discord
2. Modifier `js/discord.js` ligne ~3 :
```javascript
const WEBHOOK_URL = 'VOTRE_URL_WEBHOOK_ICI';
```

### Meta Tags SEO
Personnaliser dans `index.html` :
- `<title>` - Titre du site
- `<meta name="description">` - Description pour Google
- `<meta property="og:*">` - Aperçu sur réseaux sociaux

---

## 📝 Projets Présentés

1. **Alone In Space** - Jeu VR (Unity, C#)
2. **Relic of the Past** - Jeu d'énigmes (Unreal, C++)
3. **Third Person Shooter** - TPS avec IA (Unreal, C++)
4. **Brick Buster** - Super IA (Unreal, C++)
5. **Bull Run Party** - Party game (AirConsole, HTML/CSS/JS)
6. **Space Shooter** - Shoot'em up (Unreal, C++)
7. **Replication** - Système réseau (Unreal, C++)
8. **PacMan** - Clone (Unreal, C++)
9. **Tower Defense** - Stratégie (Unreal, C++)

---

## 📄 Licence

© 2025 Alexis Tirant - Tous droits réservés

---

## 👤 Contact

- **LinkedIn** : [Alexis Tirant](https://www.linkedin.com/in/alexis-tirant-386409293)
- **GitHub** : [DevShaD0ow](https://github.com/DevShaD0ow)
- **Discord** : [Serveur](https://discord.gg/cggpZ5vPuP)
- **Email** : [via formulaire de contact](index.html#contact)

---

## 🙏 Remerciements

- **GSAP** - Animations fluides
- **Font Awesome** - Icônes
- **Google Fonts** - Typographies Orbitron & Inter
- **UQAC** - Formation en développement de jeux vidéo

---

**Made with 💜 by DevShaD0ow™**
