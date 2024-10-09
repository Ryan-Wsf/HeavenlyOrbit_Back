const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcryptjs');

const User = sequelize.define('Users', {
    lastname_user: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: true
        }
    },

    name_user: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: true
        }
    },

    email_user: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: true
        },
        unique: true
    },

    pass_user: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },

    isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    }
});

User.beforeCreate(async (user) => {
    const salt = await bcrypt.genSalt(10);
    user.pass_user = await bcrypt.hash(user.pass_user, salt);
});

User.prototype.comparePassword = function (pass_user) {
    return bcrypt.compare(pass_user, this.pass_user);
};

module.exports = User;