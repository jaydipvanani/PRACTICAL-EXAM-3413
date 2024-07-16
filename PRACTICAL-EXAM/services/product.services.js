const { productSchema } = require("../models");



let addproduct = (body) => {
    return productSchema.create(body);
}

let findproduct = (name) => {
    return productSchema.findOne({ name: name })
}

let getallproduct = () => {
    return productSchema.find().populate([
        {
            path: "category",
            select: "name"
        },

        {
            path: "createdBy",
            select: "email",

        }
    ])

}

let getorderloginuser = (id) => {
    return productSchema.find({ createdBy: id })
    .populate([
        {
            path: "category",
            select: "name"
        },

        {
            path: "createdBy",
            select: "email",

        }
    ])
}


let filtercategories = (id) => {
    return productSchema.find({ category: id }).populate([
        {
            path: "category",
            select: "name"
        },

        {
            path: "createdBy",
            select: "email",

        }
    ])
}



let deleteproduct = (id) => {
    return productSchema.findByIdAndDelete(id)
}

let updateproduct = (id, body) => {
    return userSchema.findByIdAndUpdate(id, body)
}



module.exports = { addproduct, getallproduct, findproduct, deleteproduct, updateproduct, getorderloginuser, filtercategories }