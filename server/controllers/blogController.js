const Blog = require("../models/blogModel");

const get = async (req, res) => {
  const result = await Blog.find().sort({ createdAt: -1 });

  res.json(result);
};

module.exports = { get };
