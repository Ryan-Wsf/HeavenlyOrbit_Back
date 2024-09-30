const express = require('express');
const router = express.Router();
const answersControllers = require('../controllers/answersControllers');

router.post('/createAnswer', answersControllers.createAnswer);
router.get('/getAnswer/:id', answersControllers.getAnswer);
router.get('/getAllAnswer', answersControllers.getAllAnswer);
router.get('/getAnswerByQuestion/:id', answersControllers.getAnswerByQuestion); 

module.exports = router;