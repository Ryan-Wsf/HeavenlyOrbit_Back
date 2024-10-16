const { Questions, Answers } = require('../models');

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
        const question = await Questions.findByPk(id, {
            include: [{ model: Answers }]  // Inclure les réponses associées
        });
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
        // Récupérer l'id du quizz
        const { id } = req.params;
        const questions = await Questions.findAll({
            where: { fk_id_quizzes: id },
            include: [{ model: Answers }]  // Inclure les réponses associées à chaque question
        });
        res.status(200).json({ message: 'All questions found', questions });
    } catch (error) {
        next(error);  // Passer l'erreur au middleware d'Express
    }
}
