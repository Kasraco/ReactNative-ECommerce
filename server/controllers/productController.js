const Product = require("../models/productModel");

const getProducts = async (req, res) => {
  const users = await Product.find().sort({ createAt: -1 });
  res.json(users);
};

const addProduct = async (req, res) => {
  try {
    const {
      title,
      desc,
      price,
      discount,
      mainImg,
      model,
      quantity,
      speciality,
      category,
      sendingType,
    } = req.body;

    switch (true) {
      case !title:
        res.status(500).json({ error: "title is require" });
      case !desc:
        res.status(500).json({ error: "desc is require" });
      case !price:
        res.status(500).json({ error: "price is require" });
    }

    const data = await new Product({
      title,
      desc,
      price,
      discount,
      mainImg,
      model,
      quantity,
      speciality,
      category,
      pcode: createPCode(10),
      sendingType,
    });

    await data.save();

    res.status(200).json({
      success: true,
      massage: `the ${data.title} with  pcode =  ${data.pcode} save to database`,
      data,
    });
  } catch (error) {
    console.log(error);
  }
};

const getProductById = async (req, res) => {
  const result = await Product.findById(req.params.id);

  res.json(result);
};

const update = async (req, res) => {
  const productid = req.params.id;
  const updateProduct = req.body;
  const result = await Product.findByIdAndUpdate(productid, updateProduct);

  res.status(200).json({
    success: true,
    massage: `the ${updateProduct.title} with  pcode =  ${updateProduct.pcode} is update`,
    result,
  });
};

// Create Product Code
const createPCode = (len) => {
  let result = "";
  while (result.length < len) result += Math.random().toString(36).substring(2);
  console.log(result);
  return result.substring(0, len);
};

module.exports = { getProducts, addProduct, getProductById, update };
