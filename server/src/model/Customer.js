const Sequelize = require('sequelize');
const sequelize = require('./database');
// import Role for FK roleId
const Role = require('./Role');
// name table
const nametable = 'customer';

const Customer = sequelize.define(nametable,{

  id:{
    type:Sequelize.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  name:  Sequelize.STRING,
  email: Sequelize.STRING,
  amount: Sequelize.FLOAT,
  recorType: Sequelize.STRING,
  // LLAVE FORANEA
  roleId:{
    type: Sequelize.INTEGER,
    // this is a refence to another model
    refences: {
      model: Role,
      key: 'id'
    }
  }
})

Customer.belongsTo(Role);

module.exports = Customer
