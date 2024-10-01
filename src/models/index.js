const User = require('./users');
const Categories = require('./categories');
const Articles = require('./articles');
const DifficultyQuiz = require('./difficultyQuiz');
const Quizzes = require('./quizzes');
const Questions = require('./questions');
const Answers = require('./answers');

// Questions.belongsTo(Quizzes);
// Answers.belongsTo(Questions);
// Articles.belongsTo(Categories);
// Categories.hasMany(Articles);
// DifficultyQuiz.belongsTo(Questions);
// UserQuizzResults.belongsTo(User);
// UserQuizzResults.belongsTo(Quizzes);
// Quizzes.hasMany(Questions);
// Questions.hasMany(Answers);


module.exports = {
    User,
    Categories,
    Articles,
    DifficultyQuiz,
    Quizzes,
    Answers,
    Questions
}