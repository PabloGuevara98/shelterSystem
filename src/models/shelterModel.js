// models/shelterModel.js
import mongoose from 'mongoose';

const shelterSchema = new mongoose.Schema({
  name: String,
  address: String,
  capacity: Number,
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
});

const Shelter = mongoose.model('Shelter', shelterSchema);

export default Shelter;
