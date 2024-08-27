const Router = require("express");
const userController = require("../controllers/userController");

const router = new Router();

router.get("/", userController.getUsers);

module.exports = router;
