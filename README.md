# Virtual Art Prod – Site Web React

## Structure du projet

```
virtual-art-prod/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx              # Routeur principal
│   ├── index.js             # Point d'entrée React
│   ├── styles/
│   │   └── global.css       # Styles globaux
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation responsive
│   │   ├── Footer.jsx       # Pied de page
│   │   └── WhatsAppFloat.jsx # Bouton WhatsApp flottant
│   └── pages/
│       ├── Home.jsx         # Accueil
│       ├── About.jsx        # À propos
│       ├── Services.jsx     # Nos services
│       ├── Portfolio.jsx    # Portfolio filtrable
│       ├── Devis.jsx        # Formulaire de devis
│       ├── Blog.jsx         # Blog
│       └── Contact.jsx      # Contact
└── package.json
```

## Installation et lancement

```bash
# 1. Aller dans le dossier du projet
cd virtual-art-prod

# 2. Installer les dépendances
npm install

# 3. Lancer en développement
npm start
```

Le site sera accessible sur http://localhost:3000

## Build production

```bash
npm run build
```

Les fichiers optimisés seront dans le dossier `build/`.

## Personnalisation

### Coordonnées
- Modifier le numéro WhatsApp dans `src/components/WhatsAppFloat.jsx`
- Modifier les coordonnées dans `src/pages/Contact.jsx`

### Contenu
- Images et vidéos : remplacer les emojis par de vraies `<img>` ou `<video>`
- Portfolio : ajouter vos vraies réalisations dans `src/pages/Portfolio.jsx`
- Témoignages : mettre à jour dans `src/pages/Home.jsx`

### Formulaire de devis
Pour connecter le formulaire à votre backend :
- Utiliser EmailJS (`@emailjs/browser`) pour l'envoi d'emails
- Ou configurer une API REST dans `src/pages/Devis.jsx`

### Google Analytics & Meta Pixel
Ajouter dans `public/index.html` avant `</head>` :

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>

<!-- Meta Pixel -->
<script>
  !function(f,b,e,v,n,t,s){...}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'VOTRE_PIXEL_ID');
</script>
```

### Multilingue
Pour activer le multilingue (Français/Arabe/Anglais), installer :
```bash
npm install react-i18next i18next
```

## Intégration WordPress (optionnel)
Pour connecter le formulaire à WordPress, utiliser le plugin Contact Form 7
avec l'API REST ou WPForms avec Webhooks.

## Technologies utilisées
- React 18
- React Router DOM v6
- CSS Variables (pas de framework CSS externe)
- Responsive mobile-first

## Pages
| Page | Route | Description |
|------|-------|-------------|
| Accueil | `/` | Hero, services, témoignages, CTA |
| À propos | `/a-propos` | Histoire, valeurs, équipe |
| Services | `/services` | Détail de toutes les prestations |
| Portfolio | `/portfolio` | Galerie filtrable par catégorie |
| Devis | `/devis` | Formulaire de devis avancé |
| Blog | `/blog` | Articles et actualités |
| Contact | `/contact` | Formulaire + coordonnées |

## Identité visuelle
- Noir principal : `#0a0a0f`
- Bleu électrique : `#0066ff`
- Blanc : `#ffffff`
- Gris : `#8892a4`
- Font : Inter (Google Fonts)
