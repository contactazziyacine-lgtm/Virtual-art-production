# Virtual Art Production — Site Web

Site vitrine de **Virtual Art Production**, agence de production audiovisuelle en Algérie : spots publicitaires, films corporate, visites virtuelles 360°, captation drone, motion design et création de sites web.

Interface multilingue **FR / AR / EN** (avec support RTL pour l'arabe), design éditorial inspiré de l'identité visuelle de Trafigura, et galerie de visites virtuelles 360° interactive.

---

## Stack technique

- **React 18** + **react-router-dom 6**
- **react-scripts 5** (Create React App)
- **framer-motion** — animations & lightbox de la galerie
- **react-intersection-observer** — révélations au défilement
- **react-helmet-async** — SEO par page
- **lucide-react** — iconographie
- **@emailjs/browser** — envoi des formulaires (avec repli `mailto:`)

---

## Démarrage

Prérequis : **Node.js 18+** et **npm**.

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer en développement (http://localhost:3000)
npm start

# 3. Générer le build de production (dossier /build)
npm run build
```

---

## Structure du projet

```
virtual-art-prod/
├── public/
│   ├── index.html              # Fonts (Archivo / Inter / Cairo), métas
│   └── assets/                 # logo + logos clients
├── src/
│   ├── App.jsx                 # Routes
│   ├── index.js                # Point d'entrée
│   ├── config.js               # Clés EmailJS + liens réseaux sociaux
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation fixe, switch de langue
│   │   ├── Footer.jsx          # Pied de page + crédit images
│   │   ├── Cover.jsx           # Image robuste (repli dégradé si erreur)
│   │   ├── Reveal.jsx          # Animation d'apparition au scroll
│   │   ├── Clients.jsx         # Bandeau clients défilant
│   │   ├── ServiceIcon.jsx     # Icônes de services
│   │   ├── WhatsAppFloat.jsx   # Bouton WhatsApp flottant
│   │   └── Seo.jsx             # Balises SEO
│   ├── pages/
│   │   ├── Home.jsx            # Accueil (héro photographique)
│   │   ├── About.jsx           # À propos + équipe
│   │   ├── Services.jsx        # Détail des services
│   │   ├── Portfolio.jsx       # Galerie + visites virtuelles 360°
│   │   ├── Blog.jsx            # Articles
│   │   ├── Contact.jsx         # Contact + carte + formulaire
│   │   ├── Devis.jsx           # Formulaire de devis multi-sections
│   │   └── NotFound.jsx        # 404
│   ├── data/
│   │   └── covers.js           # URLs des images + dégradés de repli
│   ├── i18n/
│   │   ├── translations.js     # Textes FR / AR / EN
│   │   └── LanguageContext.jsx # Contexte de langue
│   ├── lib/
│   │   └── sendForm.js         # Envoi EmailJS / mailto
│   └── styles/
│       └── global.css          # Système de design (couleurs, typo, layout)
├── .gitignore
├── package.json
└── package-lock.json
```

---

## Configuration

### Formulaires (devis & contact)

Renseignez vos clés **EmailJS** dans `src/config.js` pour activer l'envoi réel :

```js
export const EMAILJS = {
  serviceId: 'service_xxxxxxx',
  templateId: 'template_xxxxxxx',
  publicKey: 'AbCdEfGhIjKlMnOp',
};
```

Tant que ces champs restent vides, les formulaires basculent automatiquement sur l'application e-mail du visiteur (`mailto:`) — **le site fonctionne dès le départ, sans configuration**.

### Réseaux sociaux

Ajoutez vos liens dans `src/config.js` (`SOCIAL`). Une icône sans lien est désactivée.

---

## Images

Les visuels du site sont des photographies réelles de sites algériens (Constantine, Tlemcen, Alger), servies via **Wikimedia Commons** (licence CC BY-SA, créditée dans le pied de page). Chaque image possède un **dégradé de repli** : si une photo ne charge pas, l'aperçu ne casse jamais.

Pour passer en production avec votre propre banque d'images, remplacez simplement les URLs dans **`src/data/covers.js`** — tout le site suit automatiquement.

---

## Déploiement

Le build statique (`npm run build`) se déploie sur n'importe quel hébergeur statique :

- **Vercel** / **Netlify** : connecter le dépôt, commande de build `npm run build`, dossier de sortie `build`.
- **GitHub Pages** : publier le contenu du dossier `build`.

---

## Licence

Projet propriétaire — Virtual Art Production. Tous droits réservés.
