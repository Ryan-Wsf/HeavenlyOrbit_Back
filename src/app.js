const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const categoriesRoutes = require('./routes/categoriesRoutes');
const articlesRoutes = require('./routes/articlesRoutes');
const difficultyQuizRoutes = require('./routes/difficultyQuizRoutes');
const quizzesRoutes = require('./routes/quizzesRoutes');
// const answersRoutes = require('./routes/answersRoutes');
// const questionsRoutes = require('./routes/questionsRoutes');
const errorHandler = require('./middlewares/errorHandler');
const sequelize = require('./config/database');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/categories', categoriesRoutes);
app.use('/articles', articlesRoutes);
app.use('/difficultyQuiz', difficultyQuizRoutes);
app.use('/quizzes', quizzesRoutes);
// app.use('/answers', answersRoutes);
// app.use('/questions', questionsRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

sequelize.sync( { force: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});