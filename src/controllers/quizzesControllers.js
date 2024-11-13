const { Quizzes } = require('../models');

exports.createQuiz = async (req, res, next) => {
    try {
        const { title_quizz, fk_difficulty_quiz } = req.body;
        const quizz = await Quizzes.create({ title_quizz, fk_difficulty_quiz });
        res.status(201).json({ message: 'Quizz created', quizzId: quizz.id });
    } catch (error) {
        next(error);  // Passer l'erreur au middleware d'Express
    }
}

exports.getQuiz = async (req, res, next) => {
    try {
        const { id } = req.params;
        const quizz = await Quizzes.findByPk(id);
        if (!quizz) {
            return res.status(404).json({ message: 'Quizz not found' });
        }
        res.status(200).json({ message: 'Quizz found', quizz });
    } catch (error) {
        next(error);  // Passer l'erreur au middleware d'Express
    }
}

exports.getAllQuiz = async (req, res, next) => {
    try {
        const quizz = await Quizzes.findAll();
        res.status(200).json({ message: 'All quizz found', quizz });
    } catch (error) {
        next(error);  // Passer l'erreur au middleware d'Express
    }
}

exports.getQuizByDifficulty = async (req, res, next) => {
    try {
        const { id } = req.params;
        const quizz = await Quizzes.findAll({ where: { fk_difficulty_quiz: id } });
        res.status(200).json({ message: 'Quizz found', quizz });
    } catch (error) {
        next(error);  // Passer l'erreur au middleware d'Express
    }
}

