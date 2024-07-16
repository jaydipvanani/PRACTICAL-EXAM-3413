const { categoriesServices } = require("../services");


// let addcategories = async (req, res) => {


//     try {
//         let body = req.body
//         // console.log("🚀 ~ addcategories ~ body:", body)
//         let name = body.name
//         console.log("🚀 ~ addcategories ~ name:", name)


//         let duplicate = await categoriesServices.findcategories(name);
//         if (duplicate) {
//             throw new Error(`${duplicate.name}"this categaries is already exist"`)
//         }

//         let result = await categoriesServices.addcategories(body);


//         if (!result) {
//             throw new Error("some thing went wrong")
//         }

//         res.status(201).json({
//             message: "add categories  succesfully",
//             data: result

//         })


//     } catch (error) {
//         res.status(500).json({
//             message: error.message,
//         })
//     }

// }


let addcategories = async (req, res) => {

    try {
        let body = req.body



        let result = await categoriesServices.addcategories(body);



        res.status(201).json({
            message: "add categories  succesfully",
            data: result

        })


    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
}

let getcategories = async (req, res) => {
    try {
        let result = await categoriesServices.getallcategories();


        if (!result) {
            throw new Error("something went wrong");
        }
        else {
            res.status(200).json({
                message: "get categories data succesfully",
                result
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

let deletecategories = async (req, res) => {
    try {
        let { id } = req.params
        let result = await categoriesServices.deletecategories(id);
        if (!result) {
            throw new Error("this categorie not found");
        } else {
            res.status(200).json({
                message: "categories deleted successfully",
                result: result,
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })

    }
}

module.exports = { addcategories, getcategories, deletecategories }