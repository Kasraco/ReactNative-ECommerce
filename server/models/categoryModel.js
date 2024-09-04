const mongoose = require("mongoose");

const category = new mongoose.Schema({
  title: String,
  mainimg: String,
  createAt: { type: Date, default: Date.now },
});

const Category = mongoose.model("Category", category);

module.exports = Category;
