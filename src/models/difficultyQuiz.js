const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const DifficultyQuiz = sequelize.define('DifficultyQuiz', {
    name_difficulty_quiz: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'questions',
            key: 'id_question'
        }
    }
});

module.exports = DifficultyQuiz;