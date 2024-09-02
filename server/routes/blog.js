const Router = require("express");

const blogController = require("../controllers/blogController");

const routes = new Router();

// Add routes
routes.get("/", blogController.get);

module.exports = routes;
