const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const UserQuizzResults = sequelize.define('user_quizz_results', {
    fk_id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id_user'
        }
    },

    fk_id_quiz: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'quizzes',
            key: 'id_quiz'
        }
    },

    score_result: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = UserQuizzResults;