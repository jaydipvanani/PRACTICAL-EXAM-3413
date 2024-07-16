const { createtoken } = require("../middleware/auth");
const { userServices } = require("../services");
let bcrypt = require("bcryptjs")

let register = async (req, res) => {
    try {


        let body = req.body
        let email = body.email
        let duplicate = await userServices.findname(email);
        if (duplicate) {
            throw new Error(`${duplicate.email}"this  user alredy exist"`)
        }


        let userdata = await userServices.register(body);


        res.status(201).json({
            message: "user create successfully",
            result: userdata,
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })

    }
}

let getuser = async (req, res) => {
    try {
        let users = await userServices.getuser();

        res.status(200).json({
            message: "get all user success",
            result: users,
        });
    } catch (error) {
        res.status(404).json({
            message: "network error"
        })
    }
}


let userlogin = async (req, res) => {

    try {
        let { email, password, role } = req.body

        let user = await userServices.findname(email)
        if (!user) {
            throw new Error("user not found");
        }
        let response = await bcrypt.compare(password, user.password)


        if (!response) {
            throw new Error("password not match")
        }

        let token = createtoken({ user });
        console.log("🚀 ~ userlogin ~ token:", token)
        res.cookie("token", token)
        res.status(201).json({
            message: "user login success",
            data: user,
            token: token

        })

    }
    catch (error) {
        res.status(500).json({
            message: error.message,
        });

    }
}


let updateuser = async (req, res) => {
    try {
        let { id } = req.params
        console.log(id);
        let body = req.body
        let userupdatedata = await userServices.updateuser(id, body);
        res.status(201).json({
            message: "update user successfully",
            result: req.body,
            prevdata: userupdatedata

        })
    } catch (error) {
        res.status(501).json({
            message: `something went wrong ${error.message}`
        })

    }
}


let deleteuser = async (req, res) => {
    try {
        let { id } = req.params
        console.log(id);

        let userdaletedata = await userServices.deleteuser(id);

        console.log(userdaletedata);


        res.status(200).json({
            message: "user deleted success",
            result: userdaletedata
        });

    } catch (error) {
        res.status(404).json({
            message: "something went wrong",
        });
    }
}

module.exports = { register, getuser, userlogin, updateuser, deleteuser }
