require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../models');


exports.register = async (req, res, next) => {
    try {
        const { email, password, lastname, name } = req.body;
        console.log(email, password, lastname, name);
        const user = await User.create({ email_user: email, pass_user: password, lastname_user: lastname, name_user: name });
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '90d' });
        res.status(201).json({ message: 'User Created', userId: user.id, token });
    } catch (error) {
        next(error);  
    }
}

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email_user: email } });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        const isValid = await user.comparePassword(password);
        if (!isValid) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '90d' });
        res.status(200).json({ token });
    } catch (error) {
        next(error);  // Passer l'erreur au middleware d'Express
    }
}

