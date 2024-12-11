const express = require('express');
const router = express.Router();
const categoriesMoreControllers = require('../controllers/categoriesMoreControllers');

router.post('/createCategoryMore', categoriesMoreControllers.createCategoryMore);
router.get('/getCategoryMore/:id', categoriesMoreControllers.getCategoryMore);
router.get('/getAllCategoryMore', categoriesMoreControllers.getAllCategoryMore);

module.exports = router;