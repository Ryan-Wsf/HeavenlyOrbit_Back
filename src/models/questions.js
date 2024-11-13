const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Answers = require('./answers'); // Importez le modèle Answers

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

// Une question peut avoir plusieurs réponses
Questions.hasMany(Answers, { foreignKey: 'fk_id_question' });
Answers.belongsTo(Questions, { foreignKey: 'fk_id_question' });

module.exports = Questions;
