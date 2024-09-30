const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Articles = sequelize.define('Articles', {
    title_article: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },

    content_article: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },

    detailed_content_article: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        } 
    },

    image_article: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },

    id_parent: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },

    fk_id_category: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'categories',
            key: 'id'
        }
    }
});

module.exports = Articles;