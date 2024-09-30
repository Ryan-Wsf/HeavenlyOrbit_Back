const express = require('express');
const router = express.Router();
const questionsControllers = require('../controllers/questionsControllers');

router.post('/createQuestion', questionsControllers.createQuestion);
router.get('/getQuestion/:id', questionsControllers.getQuestion);
router.get('/getAllQuestion', questionsControllers.getAllQuestion);
router.get('/getQuestionByQuiz/:id', questionsControllers.getQuestionByQuiz);

module.exports = router;