const { categoriesSchema } = require("../models")


let addcategories = (body) => {
    return categoriesSchema.create(body);
}

let findcategories = (name) => {
    return categoriesSchema.findOne({ name: name })
}

let getallcategories = () => {
    return categoriesSchema.find()

}

let deletecategories = (id) => {
    return categoriesSchema.findByIdAndDelete(id)
}

module.exports = { addcategories, findcategories, getallcategories, deletecategories }