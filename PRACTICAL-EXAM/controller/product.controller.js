const { name } = require("ejs");
const { productServices } = require("../services");



let addproduct = async (req, res) => {


    try {
        let body = req.body
        // console.log("🚀 ~ addcategories ~ body:", body)
        let user = req.user.user._id


        let data = {
            name: body.name,
            price: body.price,
            category: body.category,
            createdBy: user

        }
        // console.log("🚀 ~ addproduct ~ user:", user)

        let result = await productServices.addproduct(data);


        if (!result) {
            throw new Error("some thing went wrong")
        }

        res.status(201).json({
            message: "add product succesfully",
            data: result

        })


    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }

}

let getallproduct = async (req, res) => {
    try {
        let result = await productServices.getallproduct();


        if (!result) {
            throw new Error("something went wrong");
        }
        else {
            res.status(200).json({
                message: "get product data succesfully",
                result
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

let deleteproduct = async (req, res) => {
    try {
        let { id } = req.params
        let result = await productServices.deleteproduct(id);
        if (!result) {
            throw new Error("this product not found");
        } else {
            res.status(200).json({
                message: "product deleted successfully",
                result: result,
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })

    }
}


let updateproduct = async (req, res) => {
    try {
        let { id } = req.params
        console.log(id);
        let body = req.body
        let userupdatedata = await productServices.updateproduct(id, body);
        res.status(201).json({
            message: "update product successfully",
            result: req.body,
            prevdata: userupdatedata

        })
    } catch (error) {
        res.status(501).json({
            message: `something went wrong ${error.message}`
        })

    }
}


const loginuserorder = async (req, res) => {

    try {
        let user = req.user.user._id
        // console.log("🚀 ~ getorderuser ~ user:", user)

        let result = await productServices.getorderloginuser(user)
        console.log("🚀 ~ loginuserorder ~ result:", result)
        //console.log(result)

        res.status(200).json({
            message: "order get success",
            result: result
        })



    } catch (error) {
        res.status(500).json({
            message: error.message,
        })

    }


};

let filtercategories = async (req, res) => {
    try {
        let { id } = req.params
        console.log("🚀 ~ filtercategories ~ id:", id)
        let result = await productServices.filtercategories(id);
        if (!result) {
            throw new Error("something went wrong");
        } else {
            res.status(200).json({
                message: "filter get successfully",
                result: result,
            })
        }
    } catch (error) {

    }
}


const manual = async (req, res) => {

    try {
        let { id } = req.params
        // let user = req.user.user._id
        // console.log("🚀 ~ getorderuser ~ user:", user)

        let result = await productServices.getorderloginuser(id)
        console.log("🚀 ~ loginuserorder ~ result:", result)
        //console.log(result)

        res.status(200).json({
            message: "order get success",
            result: result
        })



    } catch (error) {
        res.status(500).json({
            message: error.message,
        })

    }


};

module.exports = { addproduct, updateproduct, deleteproduct, getallproduct, loginuserorder, filtercategories, manual }