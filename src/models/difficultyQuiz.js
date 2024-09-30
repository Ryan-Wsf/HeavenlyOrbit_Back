const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const DifficultyQuiz = sequelize.define('difficulty_quiz', {
    name_difficulty_quiz: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = DifficultyQuiz;