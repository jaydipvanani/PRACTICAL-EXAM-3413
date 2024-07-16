let express = require("express");
let routes = express.Router();
let userRoute = require("./user.route");
let categoriesRoute = require("./categories.route")
let productRoute = require("./product.route")


routes.use("/user", userRoute);
routes.use("/categories",categoriesRoute)
routes.use("/product",productRoute)


module.exports = routes