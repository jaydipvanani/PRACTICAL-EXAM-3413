let express = require("express");
const { userController } = require("../controller");
const { isLogin, isRestrict } = require("../middleware/auth");
let route = express.Router();

route.post("/register",
    userController.register
)
route.get("/getuser",
    isLogin,
    isRestrict(["admin"]),
    userController.getuser);
route.post("/login", userController.userlogin);
route.put("/updateuser/:id",
    isLogin,
    isRestrict(["user"]),
    userController.updateuser)
route.delete("/delete/:id",
    isLogin,
    isRestrict(["user"]),
    userController.deleteuser
)




module.exports = route


