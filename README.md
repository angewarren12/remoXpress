# RemoXpress - Site Web Officiel

Site web de présentation pour RemoXpress, la première application mobile de service de dépannage et remorquage en Côte d'Ivoire.

## À propos du projet

RemoXpress est une application mobile innovante qui révolutionne le service de dépannage et remorquage en Côte d'Ivoire. Ce site web présente les fonctionnalités de l'application, ses avantages et comment l'utiliser.

## Technologies utilisées

- HTML5
- Tailwind CSS
- JavaScript
- Font Awesome
- AOS (Animate On Scroll)
- Particles.js

## Structure du site

- **Page d'accueil** : Présentation générale de RemoXpress et ses avantages
- **Page Services** : Détail des services offerts par l'application
- **Page À propos** : Information sur l'équipe et la mission de RemoXpress
- **Page Contact** : Formulaire de contact et informations de contact

## Déploiement sur Netlify

Ce site est configuré pour être facilement déployé sur Netlify. Pour déployer :

1. Créez un compte sur [Netlify](https://www.netlify.com/) si vous n'en avez pas déjà un
2. Cliquez sur "New site from Git"
3. Connectez votre compte GitHub, GitLab ou Bitbucket
4. Sélectionnez le dépôt contenant ce site
5. Configurez les options de déploiement (les paramètres par défaut fonctionneront grâce au fichier netlify.toml)
6. Cliquez sur "Deploy site"

## Développement local

Pour travailler sur ce site en local :

```bash
# Installer les dépendances
npm install

# Compiler le CSS avec Tailwind
npx tailwindcss -i ./src/input.css -o ./dist/output.css

# Lancer un serveur local
npx serve
```

## Licence

© 2025 RemoXpress. Tous droits réservés.
