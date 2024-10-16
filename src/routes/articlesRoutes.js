const express = require('express');
const router = express.Router();
const articlesControllers = require('../controllers/articlesControllers');

router.post('/createArticle', articlesControllers.createArticle);
router.get('/getArticle/:id', articlesControllers.getArticle);
router.get('/getAllArticle', articlesControllers.getAllArticle);

module.exports = router;