const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const CategoriesMore = sequelize.define('CategoriesMore', {
    name_category_more: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },

    image_category_more: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },

    text_category_more: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
});

module.exports = CategoriesMore;