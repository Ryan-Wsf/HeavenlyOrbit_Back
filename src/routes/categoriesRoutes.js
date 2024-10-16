const express = require('express');
const router = express.Router();
const categoriesControllers = require('../controllers/categoriesControllers');

router.post('/createCategory', categoriesControllers.createCategory);
router.get('/getCategory/:id', categoriesControllers.getCategory);
router.get('/getAllCategory', categoriesControllers.getAllCategory);

module.exports = router;