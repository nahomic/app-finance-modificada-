const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'finance_db', // database
  'naho', // user / usuario
  'j75y5PpGFuo3XXTq', //password
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

module.exports = sequelize;
