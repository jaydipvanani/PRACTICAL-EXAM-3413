let express = require("express");
const {  categoriesController } = require("../controller");
const { isLogin, isRestrict } = require("../middleware/auth");
let route = express.Router();

route.post("/addcategories",
    isLogin,
    isRestrict(["admin"]),
    categoriesController.addcategories
)
route.get("/getallcategories",
    isLogin,
    isRestrict(["admin"]),
    categoriesController.getcategories);
route.delete("/delete/:id",
    isLogin,
    isRestrict(["admin"]),
    categoriesController.deletecategories
)




module.exports = route


