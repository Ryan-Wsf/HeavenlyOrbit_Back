const { CategoriesMore } = require('../models');

exports.createCategoryMore = async (req, res, next) => {
    try {
        const { name_category_more, image_category_more, text_category_more } = req.body;
        const categoryMore = await CategoriesMore.create({ name_category_more, image_category_more, text_category_more });
        res.status(201).json({ message: 'Category more created', categoryMoreId: categoryMore.id });
    } catch (error) {
        next(error);  // Passer l'erreur au middleware d'Express
    }
}

exports.getCategoryMore = async (req, res, next) => {
    try {
        const { id } = req.params;
        const categoryMore = await CategoriesMore.findByPk(id);
        if (!categoryMore) {
            return res.status(404).json({ message: 'Category more not found' });
        }
        res.status(200).json({ message: 'Category more found', categoryMore });
    } catch (error) {
        next(error);  // Passer l'erreur au middleware d'Express
    }
}

exports.getAllCategoryMore = async (req, res, next) => {
    try {
        const categoryMore = await CategoriesMore.findAll();
        res.status(200).json({ message: 'All category more found', categoryMore });
    } catch (error) {
        next(error);  // Passer l'erreur au middleware d'Express
    }
}


