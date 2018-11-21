const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
mongoose.connect('mongodb://localhost/mean-belt-3',{ useNewUrlParser: true });
mongoose.Promise = global.Promise;
autoIncrement.initialize(mongoose.connection);

// create a schema
const ProductSchema = new mongoose.Schema({
  name: { 	type: String,
            required: [true, 'Name is required'],
            minlength: [3,'Name must be at least 3 characters long!']},
  price: {  type: Number,
            default: 0,
            min: [0,'Price must be greater than or equal to 0!'],
            required: [true, 'Price is required']},
  qty: 	{   type: Number,
            default: 0,
            min: [0,'Price must be greater than or equal to 0!'],
            required: [true, 'Qty is required']},
}, {timestamps: true});

// Mongoose plugin that auto-increments any ID field on your schema every time a document is saved.
ProductSchema.plugin(autoIncrement.plugin, 'Product');

// we need to create a model using the schema
const Product = mongoose.model('Product', ProductSchema);

// make this available to our users in our Node applications
module.exports = Product;
