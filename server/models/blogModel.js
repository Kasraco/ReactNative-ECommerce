const mongoose = require("mongoose");
const { title } = require("process");
const blog = new mongoose.Schema({
  title: String,
  desces: String,
  shortdesc: String,
  writer: String,
  category: String,
  mainimg: String,
  createdAt: { type: Date, default: Date.now },
});

const Blog = mongoose.model("Blog", blog);

module.exports = Blog;
