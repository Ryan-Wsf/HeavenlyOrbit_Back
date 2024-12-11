const sgMail = require('@sendgrid/mail');
require('dotenv').config();


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendMailForgotPassword(email, token) {
        const link = `http://localhost:3000/reset-password?token=${token}`;

        const msg = {
        to: email, 
        from: 'heavenlyorbit@outlook.fr',
        subject: 'Reinitialisation du mot de passe',
        text: `Bonjour, clique sur le lien suivant pour réinitialiser votre mot de passe : ${link}`,
        };

        try {
            await sgMail.send(msg); // Envoi de l'email avec SendGrid
            console.log("Email envoyé")
        } catch (error) {
            console.error('Erreur SendGrid:', error.response?.body || error.message);
        }
    }

module.exports = { sendMailForgotPassword };