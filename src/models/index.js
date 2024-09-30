const Answers = require('./answers');
const Articles = require('./articles');
const Categories = require('./categories');
const DifficultyQuiz = require('./difficultyQuiz');
const Questions = require('./questions');
const Quizzes = require('./quizzes');
const UserQuizzResults = require('./userQuizzResults');
const Users = require('./users');

Questions.belongsTo(Quizzes);
Answers.belongsTo(Questions);
Articles.belongsTo(Categories);
Categories.hasMany(Articles);
DifficultyQuiz.belongsTo(Questions);
UserQuizzResults.belongsTo(Users);
UserQuizzResults.belongsTo(Quizzes);
Quizzes.hasMany(Questions);
Questions.hasMany(Answers);


module.exports = {
    Answers,
    Articles,
    Categories,
    DifficultyQuiz,
    Questions,
    Quizzes,
    UserQuizzResults,
    Users
}