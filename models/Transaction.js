const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  },
  shelter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Shelter'
  },
  quantity: Number,
  date: Date
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
