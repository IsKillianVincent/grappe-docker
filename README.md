# TP Docker - Dockerisation d'un projet 3 tiers

## Sommaire

- [Objectif du TP](#objectif-du-tp)
  - [Consignes](#consignes)
  - [Date limite de rendu](#date-limite-de-rendu)
- [Structure du projet](#structure-du-projet)
- [Installation et Lancement](#installation-et-lancement)
- [Conclusion](#conclusion)

## Objectif du TP

Le but de ce projet est de dockeriser un projet existant utilisant une architecture 3 tiers (Base de données, API backend, Frontend). L’objectif est de rendre l’application facilement déployable à l’aide de Docker, en testant un environnement de développement et de production simple et rapide à mettre en place.

### Consignes
1. **Dockerisation complète du projet** (Backend et Frontend dans le même dépôt ou via un monorepo).
2. **Gestion des Dockerfiles** pour chaque service nécessaire.
3. **Configuration d’un fichier `docker-compose.yml`** pour orchestrer l'ensemble des services.
4. **Réalisation d’un README clair et détaillé** pour expliquer la mise en place du projet.

### Date limite de rendu :
Le projet doit être rendu avant le **dimanche 12 janvier à 23h59**.

---

## Structure du projet

Ce projet est divisé en trois services principaux :

- **_Base de données (MySQL)_** : Une instance MySQL pour gérer les données du projet.
- **_Backend (Node.js avec Express)_** : Une API simple en Node.js, exposée sur un port dédié.
- **_Frontend (React)_** : Une application React pour l'interface utilisateur, fonctionnant sur un autre port.

L'ensemble des services sont gérés via Docker et Docker Compose pour simplifier leur gestion et leur exécution.

---

## Installation et Lancement

1. **Cloner le dépôt** :
   Clonez ce projet sur votre machine locale à l’aide de la commande suivante :
   ```bash
   git clone https://github.com/IsKillianVincent/grappe-docker.git
   ```
2. **Se rendre dans le dossier du projet** : Accédez au répertoire du projet cloné :
    ```bash
    cd grappe-docker
    ```
3. **Lancer les services Docker** : Utilisez Docker Compose pour construire et démarrer tous les services :
    ```bash
    docker-compose up --build
    ```
Une fois les conteneurs démarrés, vous pouvez accéder à :
 - Backend : _http://localhost:5001_
 - Frontend : _http://localhost:3000_
 - Base de données : _localhost:3306_

## Conclusion
Ce projet m'a permis de découvrir la puissance de Docker et de comprendre à quel point il est simple de dockeriser une architecture 3 tiers avec un backend, un frontend et une base de données. 
L'utilisation de Docker Compose pour orchestrer les différents services a grandement simplifié la mise en place et m'a permis de tester rapidement l'application dans un environnement contrôlé. 
Bien que ce projet soit relativement simple, il ouvre la voie à l'exploration de nouvelles technologies et de différentes stacks, et je suis impatient de pouvoir étendre et tester ce projet avec de nouveaux outils à l'avenir.

[© KillianVINCENT ©](https://github.com/IsKillianVincent/grappe-docker "Fait le 09/01/2025 à 15h30")