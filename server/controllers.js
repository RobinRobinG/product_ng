const mongoose = require('mongoose');
const Product = require('./models.js');

module.exports ={

  findAll: function(req, res) {
    Product.find({}).sort({ 'price': -1 })
      .then (data => {console.log(data)||res.json({message: "Found all Products", data:data})})
      .catch (err => {console.log(err)||res.json({message:"Error", error: err})}) 
  },
  findOne: function(req, res) {
    Product.findById(req.params.id)
      .then (data => {console.log(data)||res.json({message: "Success! findOne Product!!!", data:data})})
      .catch (err => {console.log(err)||res.json({message:"ERROR!!!", error: err})})      
  },
  add: function(req, res) {
    Product.create(req.body)
      .then((data)=>{console.log(data)||res.json({message: "Product added!", data: data})})
      .catch((err)=>{console.log(err)||res.json({message: "Error!!", error: err})})
  },
  update: function(req, res){
    Product.findOneAndUpdate({_id:req.params.id}, req.body, {upsert: true, new:true, runValidators: true })
      .then (data => {console.log(data)||res.json({message: "Product updated", data: data})})
      .catch (err => {console.log(err)||res.json({message: "Error!", error: err})})
  },
  delete: function(req, res) {
    Product.findOneAndDelete({_id:req.params.id})
      .then (data => {console.log(data)||res.json({message: "Product deleted!", data: data})})
      .catch (err => {console.log(err)||res.json({message: "Error", error: err})});
  },

// //members
// addMember: function(req, res){
//   Club.findOneAndUpdate({_id:req.params.id}, {$addToSet: {members: req.body.name}, $inc: {member_count: 1 }}, {upsert: true, new:true, runValidators: true })
//     .then (data => {console.log(data)||res.json({message: "Member updated", data: data})})
//     .catch (err => {console.log(err)||res.json({message: "Error.", error: err})})
// },
// deleteMember: function(req, res) {
//   Club.findOneAndUpdate({_id:req.params.id},{ $pullAll: {members: [req.body.name]}, $inc: {member_count: -1 }}, {new:true, runValidators: true })
//     .then (data => {console.log(data)||res.json({message: "User deleted!", data: data})})
//     .catch (err => {console.log(err)||res.json({message: "Error", error: err})});
// },


} //end of module.exports