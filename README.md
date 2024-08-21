# Projet Secret Santa

## Description

Ce projet est une API pour gérer des groupes et des assignations de Secret Santa. L'application permet de créer des groupes, d'ajouter des membres à des groupes, et de gérer les assignations de Secret Santa pour chaque groupe.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les outils suivants :

- [Node.js](https://nodejs.org/) (v16 ou version supérieure)
- [MongoDB](https://www.mongodb.com/try/download/community) (ou utilisez un service MongoDB cloud comme MongoDB Atlas)

## Installation

1. Clonez le dépôt :

    ```bash
    git clone https://github.com/yourusername/projet.git
    cd projet
    ```

2. Installez les dépendances :

    ```bash
    npm install
    ```

3. Configurez les variables d'environnement :

    - Renommez le fichier `.env.example` en `.env` et remplissez les valeurs nécessaires.

4. Démarrez l'application :

    ```bash
    npm start
    ```

## Routes API

### Utilisateurs (`/users`)

- **GET /users** : Récupère la liste de tous les utilisateurs.
- **POST /users** : Crée un nouvel utilisateur.

### Groupes (`/groups`)

- **GET /groups** : Récupère la liste de tous les groupes.
- **POST /groups** : Crée un nouveau groupe.

### Membres (`/memberships`)

- **GET /memberships** : Récupère la liste de toutes les adhésions.
- **POST /memberships** : Crée une nouvelle adhésion.

### Assignations Secret Santa (`/secret-santa`)

- **GET /secret-santa** : Récupère la liste de toutes les assignations Secret Santa.
- **POST /secret-santa** : Crée une nouvelle assignation Secret Santa.

## Tests

Pour exécuter les tests, utilisez la commande suivante :

```bash
npm test
