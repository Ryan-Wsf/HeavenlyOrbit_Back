const Questions = require('../models');

exports.createQuestion = async (req, res, next) => {
    try {
        const { question, fk_id_quizzes } = req.body;
        const questionCreate = await Questions.create({ question, fk_id_quizzes });
        res.status(201).json({ message: 'Question created', questionId: questionCreate.id });
    } catch (error) {
        next(error);  // Passer l'erreur au middleware d'Express
    }
}

exports.getQuestion = async (req, res, next) => {
    try {
        const { id } = req.params;
        const question = await Questions.findByPk(id);
        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }
        res.status(200).json({ message: 'Question found', question });
    } catch (error) {
        next(error);  // Passer l'erreur au middleware d'Express
    }
}

exports.getAllQuestion = async (req, res, next) => {
    try {
        const question = await Questions.findAll();
        res.status(200).json({ message: 'All question found', question });
    } catch (error) {
        next(error);  // Passer l'erreur au middleware d'Express
    }
}

exports.getQuestionByQuiz = async (req, res, next) => {
    try {
        const { id } = req.params;
        const question = await Questions.findAll({ where: { fk_id_quizzes: id } });
        res.status(200).json({ message: 'Question found', question });
    } catch (error) {
        next(error);  // Passer l'erreur au middleware d'Express
    }
}