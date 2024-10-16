# HeavenlyOrbit Backend

Ce repository contient le code backend pour l'application HeavenlyOrbit, une plateforme dédiée à l'exploration spatiale et à l'éducation en astronomie.

## Technologies utilisées

- Node.js
- Express.js
- Sequelize (ORM)
- MySQL
- JWT pour l'authentification

## Structure du projet

src 
├── config/ 
│ └── database.js 
├── controllers/ 
├── middlewares/ 
├── models/ 
├── routes/ 
└── app.js


## Installation

1. Clonez ce repository
2. Installez les dépendances :

    ```
    npm install

    ```

3. Créez un fichier `.env` à la racine du projet avec les variables suivantes :

    ```
    DB_NAME=database_name
    DB_USER=database_user
    DB_PASS=database_password
    DB_HOST=database_host
    JWT_SECRET=jwt_secret
    PORT=3000

    ```


## Lancement du serveur

```
npm run dev

```


Le serveur démarrera sur `http://localhost:3000` (ou le port spécifié dans votre fichier .env).

## API Endpoints

- Auth
  - POST `/auth/register` : Inscription d'un nouvel utilisateur
  - POST `/auth/login` : Connexion d'un utilisateur

- Categories
  - POST `/categories/createCategory`
  - GET `/categories/getCategory/:id`
  - GET `/categories/getAllCategory`
  - GET `/categories/getCategoryByArticle/:id`

- Articles
  - POST `/articles/createArticle`
  - GET `/articles/getArticle/:id`
  - GET `/articles/getAllArticle`
  - GET `/articles/getArticleByCategory/:id`

- DifficultyQuiz
  - POST `/difficultyQuiz/createDifficultyQuiz`
  - GET `/difficultyQuiz/getDifficultyQuiz/:id`
  - GET `/difficultyQuiz/getAllDifficultyQuiz`
  - GET `/difficultyQuiz/getDifficultyQuizByQuestion/:id`

- Quizzes
  - POST `/quizzes/createQuiz`
  - GET `/quizzes/getQuiz/:id`
  - GET `/quizzes/getAllQuiz`
  - GET `/quizzes/getQuizByDifficulty/:id`

- Questions
  - POST `/questions/createQuestion`
  - GET `/questions/getQuestion/:id`
  - GET `/questions/getAllQuestion`
  - GET `/questions/getQuestionByQuiz/:id`

- Answers
  - POST `/answers/createAnswer`
  - GET `/answers/getAnswer/:id`
  - GET `/answers/getAllAnswer`
  - GET `/answers/getAnswerByQuestion/:id`

## Modèles de données

Le projet utilise Sequelize comme ORM et définit les modèles suivants :

- User
- Categories
- Articles
- DifficultyQuiz
- Quizzes
- Questions
- Answers

Chaque modèle correspond à une table dans la base de données MySQL.

## Authentification

L'authentification est gérée via JWT (JSON Web Tokens). Le middleware d'authentification se trouve dans `src/middlewares/auth.js`.

## Gestion des erreur.s

Un middleware de gestion des erreurs globales est implémenté dans `src/middlewares/errorHandler.js`
