const Sequelize = require('sequelize');
const sequelize = require('./database');

const nametable = 'role'; // nombre de la tabla

const Role = sequelize.define(nametable,{
  role: Sequelize.STRING
},
{
  // remove  createdAt y updated
  timestamps:false
});

module.exports = Role
