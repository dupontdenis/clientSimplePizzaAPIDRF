# Client Simple Pizza

Interface web permettant de consulter les pizzas, d'afficher leurs ingrédients et de calculer leur prix. Ce dépôt contient uniquement le client : il a besoin de l'API Simple Pizza pour fonctionner.

## Prérequis : cloner et démarrer l'API

Avant d'utiliser ce client, clonez le dépôt de l'API :

```bash
git clone https://github.com/dupontdenis/simplePizzaAPIDRF.git
```

Suivez ensuite le README de ce dépôt pour installer et démarrer l'API. Le client s'attend à ce qu'elle soit accessible à l'adresse `http://127.0.0.1:8000/api`.

## Démarrer le client

Ouvrez le dossier `client` dans VS Code, puis servez `client/index.html` avec une extension de serveur local, par exemple Live Server. Le client sera alors accessible dans le navigateur.

Le navigateur doit pouvoir accéder à l'API sur `http://127.0.0.1:8000`. Si une erreur CORS apparaît, autorisez l'origine du serveur local du client dans la configuration de l'API.

## Organisation du code

Le client met en pratique la séparation des responsabilités : la configuration de l'API se trouve dans `client/config.mjs`, les appels réseau dans `client/api/`, l'affichage dans `client/views/` et le calcul du prix dans `client/utils/price.mjs`. Cette organisation garde chaque partie du code concentrée sur un rôle précis et facilite sa lecture et sa maintenance.
