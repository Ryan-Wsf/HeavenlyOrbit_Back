const express = require('express');
const router = express.Router();
const quizzesControllers = require('../controllers/quizzesControllers');

router.post('/createQuiz', quizzesControllers.createQuiz);
router.get('/getQuiz/:id', quizzesControllers.getQuiz);
router.get('/getAllQuizzes/:id', quizzesControllers.getAllQuiz);

module.exports = router;