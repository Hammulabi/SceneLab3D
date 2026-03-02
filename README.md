# 🧪 SceneLab – 3D Web Learning Studio

**SceneLab** est le prototype d’un MVP de site web de création 3D, réalisé dans le cadre d’un **cours UX/UI** en collaboration avec:
- Thomas 
- Clement
- Yanis
 
Il s’agit d’une plateforme expérimentale pensée pour apprendre à **construire des scènes 3D pour le web par le code**, de manière progressive, guidée et compréhensible.

> *Comme Godot, tu construis ta scène avec des objets et du code.  
> Mais au lieu de faire un jeu, tu crées des expériences 3D pour le web.*

---

## 🎓 Contexte académique

Ce projet a été conçu et réalisé dans le cadre d’un **cours UX/UI**, avec pour objectif principal la réflexion autour de l’expérience utilisateur appliquée à un domaine technique complexe : la **3D web**.

SceneLab est à la fois un **prototype fonctionnel** et un **travail de conception UX/UI**, centré sur la pédagogie, la progressivité et la compréhension des concepts fondamentaux de la 3D.

---

## ✨ Vision

La création 3D pour le web est souvent perçue comme opaque et difficile d’accès.  
SceneLab cherche à démystifier ce processus en montrant **comment une scène 3D est réellement construite**, plutôt que de se limiter à une manipulation visuelle abstraite.

L’objectif est de créer un **pont naturel entre le code, la 3D et le web**, accessible aux débutants tout en restant pertinent pour des profils techniques.

---

## 🎯 Objectifs pédagogiques

SceneLab vise à permettre aux utilisateurs de comprendre la structure d’une scène 3D, de manipuler la 3D par le code déclaratif, de découvrir Blender comme une étape logique du workflow et de publier facilement des expériences 3D sur le web.

---

## 🚀 Fonctionnalités du MVP

### Création 3D orientée code (inspiration Godot)

Les scènes sont construites à partir de code déclaratif, dans une logique proche de Godot. Chaque objet possède des propriétés explicites (position, rotation, scale, matériau, interactions) et s’inscrit dans une hiérarchie parent/enfant. L’interface accompagne l’utilisateur afin de rendre visible le lien entre le code et le rendu 3D.

---

### Assistant de scène intégré

Un assistant guide l’utilisateur lors de la création de sa première scène en générant automatiquement la caméra, la lumière et les objets de base. Il vérifie la visibilité de la scène et propose des ajustements simples pour améliorer la lisibilité et la compréhension de la construction de la scène.

---

### Templates et recettes 3D web

SceneLab propose des templates codés prêts à l’emploi, tels que des landing pages 3D, des animations liées au scroll ou des interactions hover et click. Chaque template inclut une démonstration, une explication pédagogique et le code complet de la scène, organisé de manière claire.

---

### Pont pédagogique avec Blender

Les modèles 3D peuvent être importés via des fichiers `.glb` ou `.gltf`. SceneLab analyse automatiquement les modèles et propose des corrections simples comme le scale, le pivot ou l’optimisation. Des guides d’export Blender et des exercices basiques facilitent la prise en main.

---

### Mode “Designer” (maquette)

Un mode visuel permet de manipuler les objets et d’ajuster des animations simples. Chaque action est traduite en code, afin de rendre explicite le lien entre manipulation visuelle et logique technique.

---

### Interactions web natives

Les interactions sont pensées pour le web dès la conception. Il est possible de lier le scroll à la caméra, d’utiliser les interactions souris et de connecter une interface HTML à des objets 3D. SceneLab est orienté création de sites et d’expériences web, et non moteur de jeu.

---

### Tutoriels interactifs et progression

L’onboarding repose sur une scène déjà codée que l’utilisateur modifie progressivement. Des tutoriels interactifs guident la découverte des concepts clés tout en laissant la possibilité de les ignorer pour les utilisateurs plus avancés.

---

### Performance et bonnes pratiques

SceneLab sensibilise aux bonnes pratiques de la 3D web grâce à un score de performance, des presets web et mobile, ainsi qu’un mode d’optimisation visant à ancrer de bons réflexes dès le début.

---

### Partage et collaboration

Les projets peuvent être partagés par lien, forkés et commentés. Des snapshots de versions permettent de suivre l’évolution d’une scène et de collaborer simplement.

---

## 🧱 Stack technique (prévisionnelle)

- React  
- React Three Fiber  
- Three.js  
- WebGL  
- GLTF / GLB  

---

## 🧠 Philosophie du projet

SceneLab repose sur une idée simple : apprendre la 3D web en comprenant ce que l’on fait, plutôt qu’en utilisant des outils opaques. La plateforme privilégie la lisibilité, la pédagogie et la cohérence entre le visuel et le code afin de poser des bases solides et transférables vers des outils professionnels.

---

## 📌 En résumé

SceneLab est un prototype de MVP qui vise à apprendre Blender de manière progressive, à comprendre la structure d’une scène 3D, à manipuler la 3D par le code et à publier directement des expériences 3D sur le web.

> *Build scenes like Godot.  
> Design experiences for the web.*
