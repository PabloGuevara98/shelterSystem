const mongoose = require('mongoose');

const shelterSchema = new mongoose.Schema({
  name: String,
  location: String,
  capacity: Number,
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' }]
});

const Shelter = mongoose.model('Shelter', shelterSchema);

module.exports = Shelter;
