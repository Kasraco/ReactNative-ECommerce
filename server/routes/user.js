const Router = require("express");
const UserController = require("../controllers/userController");
const requireSignIn = require("../helper/AuthMiddleWare");

const router = new Router();

router.get("/", UserController.getUsers);
router.post("/register", UserController.register);

router.post("/login", UserController.login);
router.get("/mobileProfile", requireSignIn, UserController.mobileProfile);
router.get("/Manager", requireSignIn, UserController.Manager);
router.put("/forgetPass", UserController.forgetPassword);
router.post("/", UserController.createFirstUser);

module.exports = router;
