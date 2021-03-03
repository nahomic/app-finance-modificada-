const controllers = {}

// import model and sequelize
const sequelize = require('../model/database');
const Customer = require('../model/Customer');
const Role = require('../model/Role');

// para migrar por si no tiene tablas
sequelize.sync()

controllers.delete = async (req,res) => {

  // parameter post
  const { id } = req.body;
  // delete sequelize
  const del = await Customer.destroy({
    where: { id: id }
  })
  res.json({success:true, deleted:del, message:"Deleted successful"});

}

controllers.update = async (req, res) => {
  // parameter id get
  const { id } = req.params;
  // parameter post
  const { name, email, amount, recordType, role } = req.body;
  // update data
  const data = await Customer.update({
    name: name,
    email:email,
    amount:amount,
    recordType:recordType,
    roleId:role
  },{
    where: { id: id}
  })
  .then( function (data){
    return data;
  })
  .catch(error => {
    return error;
  })

  res.json({ success:true, data: data, message: "Updated successful"});

}

controllers.get = async (req, res) => {
  const { id } = req.params;
  const data = await Customer.findAll({
    where: { id: id},
    include: [ Role ]
  })
  .then( function(data){
    return data;
  })
  .catch(error => {
    return error;
  })
  res.json({success:true, data:data});
}

controllers.list = async (req,res) => {
  const data = await Customer.findAll({
    include: [ Role ]
  })
  .then(function(data){
    return data;
  })
  .catch(error =>{
    return error;
  })
  res.json({ success: true, data:data });
}

controllers.create = async (req,res) => {

  // DATA parametros desde post
  const {name, email, amount, recordType, role } = req.body;
  console.log("ROle es ==>"+role)
  //create
  const data = await Customer.create({
    name:name,
    email:email,
    amount:amount,
    recordType:recordType,
    roleId:role
  })
  .then(function(data){
    return data;
  })
  .catch(error=>{
    console.log(error)
    return error;
  })
  // return res
  res.status(200).json({
    success:true,
    message:"I save successfully",
    data:data
  })

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

