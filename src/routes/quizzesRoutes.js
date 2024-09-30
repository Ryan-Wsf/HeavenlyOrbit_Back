const express = require('express');
const router = express.Router();
const quizzesControllers = require('../controllers/quizzesControllers');

router.post('/createQuiz', quizzesControllers.createQuiz);
router.get('/getQuiz/:id', quizzesControllers.getQuiz);
router.get('/getAllQuiz', quizzesControllers.getAllQuiz);
router.get('/getQuizByDifficulty/:id', quizzesControllers.getQuizByDifficulty);

module.exports = router;