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
    
    fk_difficulty_quizz: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'difificulty_quizz',
            key: 'id_difficulty_quizz'
        }
    }
});

module.exports = Quizzes;