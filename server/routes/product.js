const Router = require("express");
const ProductController = require("../controllers/productController");
const router = new Router();

router.get("/", ProductController.getProducts);
router.get("/getProduct/:id", ProductController.getProductById);
router.post("/add", ProductController.addProduct);

module.exports = router;
