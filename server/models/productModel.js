const mongoose = require("mongoose");
const product = new mongoose.Schema({
  title: String,
  desc: String,
  shortDesc: String,
  price: Number,
  discount: Number,
  mainImg: String,
  sumImg: { type: [Object], default: [] },
  model: String,
  quantity: Number,
  speciality: String,
  category: String,
  pcode: String,
  sendingType: String,
  createAt: { type: Date, default: Date.now },
});

const Product = mongoose.model("Product", product);

module.exports = Product;
