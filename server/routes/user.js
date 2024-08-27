const Router = require("express");
const UserController = require("../controllers/userController");

const router = new Router();

router.get("/", UserController.getUsers);

module.exports = router;
