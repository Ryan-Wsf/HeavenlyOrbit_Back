const express = require('express');
const router = express.Router();
const authController = require ( "../controllers/authControllers")

// Route pour envoyer un email
router.post('/send-email', authController.sendMail);

module.exports = router;
