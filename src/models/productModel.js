// models/productModel.js
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: String,
  type: String, // 'food', 'medicine', etc.
  quantity: Number,
  shelter: { type: mongoose.Schema.Types.ObjectId, ref: 'Shelter' }
});

const Product = mongoose.model('Product', productSchema);

export default Product;
