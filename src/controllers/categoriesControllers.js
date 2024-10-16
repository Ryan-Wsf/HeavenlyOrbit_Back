const Categories = require('../models');

exports.createCategory = async (req, res, next) => {
    try {
        const { name_category, image_category } = req.body;
        const category = await Categories.create({ name_category, image_category });
        res.status(201).json({ message: 'Category created', categoryId: category.id });
    } catch (error) {
        next(error);  // Passer l'erreur au middleware d'Express
    }
}

exports.getCategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        const category = await Categories.findByPk(id);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.status(200).json({ message: 'Category found', category });
    } catch (error) {
        next(error);  // Passer l'erreur au middleware d'Express
    }
}

exports.getAllCategory = async (req, res, next) => {
    try {
        const category = await Categories.findAll();
        res.status(200).json({ message: 'All category found', category });
    } catch (error) {
        next(error);  // Passer l'erreur au middleware d'Express
    }
}

