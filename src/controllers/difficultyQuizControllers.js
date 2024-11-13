const { DifficultyQuiz } = require('../models');

exports.createDifficultyQuiz = async (req, res, next) => {
    try {
        const { name_difficulty_quiz } = req.body;
        const difficultyQuiz = await DifficultyQuiz.create({ name_difficulty_quiz });
        res.status(201).json({ message: 'Difficulty Quiz created', difficultyQuizId: difficultyQuiz.id });
    } catch (error) {
        next(error);  // Passer l'erreur au middleware d'Express
    }
}

exports.getDifficultyQuiz = async (req, res, next) => {
    try {
        const { id } = req.params;
        const difficultyQuiz = await DifficultyQuiz.findByPk(id);
        if (!difficultyQuiz) {
            return res.status(404).json({ message: 'Difficulty Quiz not found' });
        }
        res.status(200).json({ message: 'Difficulty Quiz found', difficultyQuiz });
    } catch (error) {
        next(error);  // Passer l'erreur au middleware d'Express
    }
}

exports.getAllDifficultyQuiz = async (req, res, next) => {
    try {
        const difficultyQuiz = await DifficultyQuiz.findAll();
        res.status(200).json({ message: 'All Difficulty Quiz found', difficultyQuiz });
    } catch (error) {
        next(error);  // Passer l'erreur au middleware d'Express
    }
}

