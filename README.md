
# 🌟 WebJedi Portfolio

**Portfolio professionnel multilingue avec blog intégré** - Construit avec Next.js 15, TypeScript, et Tailwind CSS.

## ✨ Fonctionnalités

- 🌍 **Support multilingue** (Français/Anglais) avec next-intl
- 📝 **Blog intégré** avec système de contenu dynamique
- 🎨 **Design moderne** avec Tailwind CSS et composants Radix UI
- 🌙 **Mode sombre/clair** avec next-themes
- 📱 **Responsive** et optimisé mobile
- ⚡ **Performance optimisée** avec SSG et ISR
- 🗃️ **Base de données** PostgreSQL avec Prisma ORM
- 📧 **Formulaire de contact** fonctionnel
- 🔍 **SEO optimisé** avec métadonnées dynamiques

## 🛠️ Stack Technique

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Radix UI
- **Base de données**: PostgreSQL + Prisma ORM
- **Internationalisation**: next-intl
- **Déploiement**: Vercel (recommandé)

## 📁 Structure du Projet

```
app/
├── [locale]/                    # Routes localisées (fr/en)
│   ├── page.tsx                # Page d'accueil
│   ├── about/                  # À propos
│   ├── contact/                # Contact
│   ├── services/               # Services
│   │   └── [slug]/
│   ├── projects/               # Projets
│   │   └── [slug]/
│   └── blog/                   # Blog
│       └── [slug]/
├── api/                        # Routes API
│   ├── contact/               # Endpoint formulaire
│   └── auth/                  # Endpoints d'authentification
├── components/                 # Composants React
├── lib/                       # Utilitaires
├── messages/                  # Traductions
│   ├── en.json               # Anglais
│   └── fr.json               # Français
└── src/                       # Configuration
    ├── i18n.ts               # Configuration i18n
    ├── middleware.ts         # Middleware Next.js
    └── config.ts            # Configuration globale
```

## 🚀 Installation et Lancement

### Prérequis
- Node.js 18+ 
- npm ou yarn
- PostgreSQL (ou base de données compatible)

### 1. Cloner le projet
```bash
git clone https://github.com/Kaherdin/webjedi-abacus.git
cd webjedi-abacus
```

### 2. Installer les dépendances
```bash
cd app
# Avec npm
npm install

# Ou avec yarn
yarn install
```

### 3. Configuration de l'environnement
Créer un fichier `.env` dans le dossier `app/` :
```env
# Base de données
DATABASE_URL="postgresql://user:password@localhost:5432/webjedi?schema=public"

# Optionnel : NextAuth (si authentification nécessaire)
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"
```

### 4. Configuration de la base de données
```bash
# Générer le client Prisma
npx prisma generate

# Pousser le schéma vers la base de données
npx prisma db push

# Peupler la base avec des données d'exemple
npx prisma db seed
```

### 5. Lancer en développement
```bash
npm run dev
# ou
yarn dev
```

L'application sera disponible sur [http://localhost:3000](http://localhost:3000)

## 📝 Gestion du Contenu

### Ajouter des projets
Les projets sont stockés en base de données. Modifiez `scripts/seed.ts` pour ajouter vos propres projets :

```typescript
await prisma.project.create({
  data: {
    title: 'Mon Super Projet',
    description: 'Description courte',
    techStack: ['React', 'Node.js'],
    year: 2024,
    // ...autres champs
  }
})
```

### Ajouter des services
Même principe pour les services dans le fichier seed.

### Traductions
Modifiez les fichiers dans `messages/` :
- `messages/fr.json` - Traductions françaises
- `messages/en.json` - Traductions anglaises

## 🚀 Déploiement

### Sur Vercel (Recommandé)
1. Connecter votre repo GitHub à Vercel
2. Configurer les variables d'environnement
3. Déployer automatiquement

### Sur d'autres plateformes
```bash
# Build de production
npm run build

# Lancer en production
npm start
```

## 📚 Scripts Disponibles

```bash
npm run dev          # Développement
npm run build        # Build de production
npm start            # Lancer la version de production
npm run lint         # Linter ESLint
```

## 🔧 Configuration

### Langues supportées
Modifiez `src/config.ts` pour ajouter/supprimer des langues :

```typescript
export const locales = ['fr', 'en'] as const;
export const defaultLocale: Locale = 'fr';
```

### Thèmes
Le site supporte automatiquement les modes clair/sombre. Configuration dans `components/theme-provider.tsx`.

## 🤝 Contribution

1. Fork le projet
2. Créer une branche (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commit (`git commit -m 'Ajout nouvelle fonctionnalité'`)
4. Push (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Contact

**Aurélien Borst** - Web Jedi  
- Portfolio: [webjedi.vercel.app](https://webjedi.vercel.app)
- GitHub: [@Kaherdin](https://github.com/Kaherdin)

---

Développé avec ❤️ par Web Jedi
