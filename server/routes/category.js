const Router = require("express");
const categoryController = require("../controllers/categoryController");

// import all controllers
// import SessionController from './app/controllers/SessionController';

const routes = new Router();
routes.get("/", categoryController.getAll);
routes.get("/getCate/:id", categoryController.getCate);
routes.post("/addcategory", categoryController.addCategory);
routes.put("/updatecategory/:id", categoryController.updateCategory);
routes.delete("/deletecategory/:id", categoryController.deleteCate);

module.exports = routes;
