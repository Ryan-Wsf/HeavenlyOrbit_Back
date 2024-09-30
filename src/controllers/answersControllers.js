const Answers = require('../models');

exports.createAnswer = async (req, res, next) => {
    try {
        const { fk_id_question, text_answer, is_correct_answer } = req.body;
        const answer = await Answers.create({ fk_id_question, text_answer, is_correct_answer });
        res.status(201).json({ message: 'Answer created', answerId: answer.id });
    } catch (error) {
        next(error);  // Passer l'erreur au middleware d'Express
    }
}

exports.getAnswer = async (req, res, next) => {
    try {
        const { id } = req.params;
        const answer = await Answers.findByPk(id);
        if (!answer) {
            return res.status(404).json({ message: 'Answer not found' });
        }
        res.status(200).json({ message: 'Answer found', answer });
    } catch (error) {
        next(error);  // Passer l'erreur au middleware d'Express
    }
}

exports.getAllAnswer = async (req, res, next) => {
    try {
        const answer = await Answers.findAll();
        res.status(200).json({ message: 'All answer found', answer });
    } catch (error) {
        next(error);  // Passer l'erreur au middleware d'Express
    }
}

exports.getAnswerByQuestion = async (req, res, next) => {
    try {
        const { id } = req.params;
        const answer = await Answers.findAll({ where: { fk_id_question: id } });
        res.status(200).json({ message: 'Answer found', answer });
    } catch (error) {
        next(error);  // Passer l'erreur au middleware d'Express
    }
}