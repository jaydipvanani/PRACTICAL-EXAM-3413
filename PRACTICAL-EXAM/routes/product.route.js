let express = require("express");
const { categoriesController, productController } = require("../controller");
const { isLogin, isRestrict } = require("../middleware/auth");
let route = express.Router();

route.post("/addproduct",
    isLogin,
    isRestrict(["admin"]),
    productController.addproduct
)
route.get("/getproduct",
    isLogin,
    isRestrict(["user","admin"]),
    productController.getallproduct
);
route.delete("/delete/:id",
    isLogin,
    isRestrict(["admin"]),
    productController.deleteproduct
)
route.put("/update/:id",
    isLogin,
    isRestrict(["admin"]),
    productController.updateproduct
)
route.get("/logingetproduct",
    isLogin,
    isRestrict(["admin"]),
    productController.loginuserorder

)
route.get("/manual/:id",
    isLogin,
    isRestrict(["admin"]),
    productController.manual
)
route.get("/getproductbycategory/:id",
    isLogin,
    isRestrict(["user","admin"]),
    productController.filtercategories
)







module.exports = route


