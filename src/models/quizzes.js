const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Quizzes = sequelize.define('Quizzes', {
    title_quizz: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },

    fk_difficulty_quiz: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'difficulty_quizzes',
            key: 'id'
        }
    }
});

module.exports = Quizzes;