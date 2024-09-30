const Articles = require('../models');

exports.createArticle = async (req, res, next) => {
    try {
        const { title_article, content_article, detailed_content_article, image_article, id_parent, fk_id_category } = req.body;
        const article = await Articles.create({ title_article, content_article, detailed_content_article, image_article, id_parent, fk_id_category });
        res.status(201).json({ message: 'Article created', articleId: article.id });
    } catch (error) {
        next(error);  // Passer l'erreur au middleware d'Express
    }
}

exports.getArticle = async (req, res, next) => {
    try {
        const { id } = req.params;
        const article = await Articles.findByPk(id);
        if (!article) {
            return res.status(404).json({ message: 'Article not found' });
        }
        res.status(200).json({ message: 'Article found', article });
    } catch (error) {
        next(error);  // Passer l'erreur au middleware d'Express
    }
}

exports.getAllArticle = async (req, res, next) => {
    try {
        const article = await Articles.findAll();
        res.status(200).json({ message: 'All article found', article });
    } catch (error) {
        next(error);  // Passer l'erreur au middleware d'Express
    }
}

exports.getArticleByCategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        const article = await Articles.findAll({ where: { fk_id_category: id } });
        res.status(200).json({ message: 'Article found', article });
    } catch (error) {
        next(error);  // Passer l'erreur au middleware d'Express
    }
}