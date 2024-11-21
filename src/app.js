const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const categoriesRoutes = require('./routes/categoriesRoutes');
const articlesRoutes = require('./routes/articlesRoutes');
const difficultyQuizRoutes = require('./routes/difficultyQuizRoutes');
const quizzesRoutes = require('./routes/quizzesRoutes');
const questionsRoutes = require('./routes/questionsRoutes');
const answersRoutes = require('./routes/answersRoutes');
const errorHandler = require('./middlewares/errorHandler');
const sequelize = require('./config/database');

const app = express();

app.use(cors());
app.use(express.json());

(async () => {
    try {
      await sequelize.sync();
      console.log('Connexion à PostgreSQL réussie !');
    } catch (error) {
      console.error('Impossible de se connecter à PostgreSQL :', error);
    }
})();

app.use('/auth', authRoutes);
app.use('/categories', categoriesRoutes);
app.use('/articles', articlesRoutes);
app.use('/difficultyQuiz', difficultyQuizRoutes);
app.use('/quizzes', quizzesRoutes);
app.use('/questions', questionsRoutes);
app.use('/answers', answersRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 6543;

sequelize.sync( { force: false, alter:false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});

// export module
module.exports = app;