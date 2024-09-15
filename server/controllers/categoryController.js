const Category = require("../models/categoryModel");

const getAll = async (req, res) => {
  const result = await Category.find().sort({ categoryAt: -1 });
  res.json(result);
};

const getCate = async (req, res) => {
  try {
    const cateid = req.params.id;
    if (!cateid)
      res.json({ success: false, message: "Category ID is missing." });

    const result = await Category.findById(cateid).sort({ categoryAt: -1 });
    if (!result) res.json({ success: false, message: "Category not found." });

    res.status(200).json({
      result,
    });
  } catch (error) {
    console.log(error);
  }
};

const addCategory = async (req, res) => {
  try {
    const { title, mainimg } = req.body;

    switch (true) {
      case !title:
        return res.json({ success: false, message: "title is require" });
    }

    const data = await new Category({
      title,
      mainimg,
    });

    await data.save();

    res.status(200).json({
      success: true,
      message: `category ${data.title} is save to database`,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateCategory = async (req, res) => {
  try {
    const cateId = req.params.id;
    const updateData = req.body;

    const result = await Category.findByIdAndUpdate(cateId, updateData);
    if (!result) {
      res.json({
        success: false,
        message: "The requested category could not be found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "The category has been updated successfully",
      updateDate: result,
    });
  } catch (error) {}
};

const deleteCate = async (req, res) => {
  try {
    const cateid = req.params.id;
    if (!cateid)
      res.json({ success: false, message: "Category ID is missing." });

    const result = await Category.findByIdAndDelete(cateid);
    if (!result) res.json({ success: false, message: "Category not found." });

    res.status(200).json({
      success: true,
      message: "The category deleted successfully",
      updateDate: result,
    });
  } catch (error) {}
};

module.exports = {
  getAll,
  getCate,
  addCategory,
  updateCategory,
  deleteCate,
};
