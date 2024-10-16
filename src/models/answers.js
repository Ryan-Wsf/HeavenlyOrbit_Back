const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Answers = sequelize.define('Answers', {
    fk_id_question: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Questions',
            key: 'id'
        },
        validate: {
            notEmpty: true
        }
    },
    text_answer: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    is_correct_answer: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
});

module.exports = Answers;
