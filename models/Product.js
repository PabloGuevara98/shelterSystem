const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
  unit: String,
  quantity: Number
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
