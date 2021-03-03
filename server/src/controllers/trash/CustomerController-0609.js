const controllers = {}

// import model and sequelize
var sequelize = require('../model/database');
var Customer = require('../model/Customer');
var Role = require('../model/Role');


controllers.testdata = async (req, res) => {

  const response = await sequelize.sync().then(function(){

    // create role
    // Role.create({
    //   role:'Admin'
    // });
    //create customer
    Customer.create({
      name: 'Johanna Mar',
      email: 'juana@mail.com',
      amount: '3000',
      recordType: 'Entry',
      roleId: 1
    });

    // llamar todos los datos del cliente
    const data = Customer.findAll();
    return data;
  })
  .catch(error => {
    return error;
  });

  res.json({success : true, data : response});

}

controllers.test = ( req, res) => {

  const data = {
    name: "John Smith",
    age: 24,
    city: "Madrid"
  }

  console.log("Execute from controllers customer")
  res.json(data);

}

module.exports = controllers;