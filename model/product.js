const mongoose = require("mongoose");
const { Schema } = mongoose;
// schema
const productSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, min: [0, "wrong value"] },
  discountPercentage: { type: Number, min: 0, max: 50 },
  rating: { type: Number, min: 0, max: 5 },
  stock: { type: Number, required: true },
  category: { type: String, required: true },
  thumbnail: { type: String, required: true },
  images: [String],
});
exports.Product = mongoose.model("Product", productSchema);
