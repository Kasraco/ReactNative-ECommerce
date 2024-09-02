const Router = require("express");

const blogController = require("../controllers/blogController");

const routes = new Router();

// Add routes
routes.get("/", blogController.get);
routes.get("/getBlog/:id", blogController.getBlog);
routes.post("/addBlog", blogController.addBlog);
routes.put("/updateBlog/:id", blogController.updateBlog);
routes.delete("/deleteBlog/:id", blogController.deleteBlog);

module.exports = routes;
