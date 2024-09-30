const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Categories = sequelize.define('Categories', {
    name_category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },

    image_category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
});

module.exports = Categories;