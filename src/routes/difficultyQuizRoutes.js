const express = require('express');
const router = express.Router();
const difficultyQuizControllers = require('../controllers/difficultyQuizControllers');

router.post('/createDifficultyQuiz', difficultyQuizControllers.createDifficultyQuiz);
router.get('/getDifficultyQuiz/:id', difficultyQuizControllers.getDifficultyQuiz);
router.get('/getAllDifficultyQuiz', difficultyQuizControllers.getAllDifficultyQuiz);
router.get('/getDifficultyQuizByQuestion/:id', difficultyQuizControllers.getDifficultyQuizByQuestion);

module.exports = router;