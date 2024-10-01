const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Questions = sequelize.define('Questions', {
    question: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },

    fk_id_quizzes: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'quizzes',
            key: 'id'
        }
    }
});

module.exports = Questions;