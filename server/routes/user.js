const Router = require("express");
const UserController = require("../controllers/userController");

const router = new Router();

router.get("/", UserController.getUsers);
router.post("/register", UserController.register);
router.post("/", UserController.createFirstUser);

module.exports = router;
