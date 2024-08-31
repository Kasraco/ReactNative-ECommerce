const Router = require("express");
const ProductController = require("../controllers/productController");
const router = new Router();

router.get("/", ProductController.getProducts);

module.exports = router;
