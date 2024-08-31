const Product = require("../models/productModel");

const getProducts = async (req, res) => {
  const users = await Product.find().sort({ createAt: -1 });
  res.json(users);
};

module.exports = { getProducts };
