const Blog = require("../models/blogModel");

const get = async (req, res) => {
  const result = await Blog.find().sort({ createdAt: -1 });

  res.json(result);
};

const addBlog = async (req, res) => {
  try {
    const { title, desc, shortdesc, writer, category, mainimg } = req.body;

    switch (true) {
      case !title:
        return res.status().json({ error: "title is require" });
      case !desc:
        return res.status().json({ error: "Description is require" });
    }

    const data = new Blog({
      title,
      desc,
      shortdesc,
      writer,
      category,
      mainimg,
    });
    await data.save();

    res.status(200).json({
      success: true,
      message: `blog ${data.title} is save in database`,
      data,
    });
  } catch (error) {
    console.log(error);
  }
};

const getBlog = async (req, res) => {
  try {
    const blogid = req.params.id;
    const result = await Blog.findById(blogid);
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

const updateBlog = async (req, res) => {
  try {
    const blogid = req.params.id;
    const blogdata = req.body;

    const result = await Blog.findByIdAndUpdate(blogid, blogdata);
    res.status(200).json({
      success: true,
      message: "update blog is success",
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blogid = req.params.id;

    const result = await Blog.findByIdAndDelete(blogid);

    if (!result) {
      res.status(404).json({
        success: false,
        message: "blog not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "delete blog is success",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { get, getBlog, addBlog, updateBlog, deleteBlog };
