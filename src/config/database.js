const Sequelize = require('sequelize');
require ('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS, {
        host: process.env.DB_HOST,
        dialect: 'postgres'
    }
)

(async () => {
    try {
      await sequelize.authenticate();
      console.log('Connexion à PostgreSQL réussie !');
    } catch (error) {
      console.error('Impossible de se connecter à PostgreSQL :', error);
    }
})();

module.exports = sequelize;