const { userSchema } = require("../models")


let register = (body) => {
    return userSchema.create(body);
}

let findname = (email) => {
    return userSchema.findOne({ email: email })
}

let getuser = () => {
    return userSchema.find()
}
let deleteuser = (id) => {
    return userSchema.findByIdAndDelete(id)
}

let updateuser = (id, body) => {
    return userSchema.findByIdAndUpdate(id, body)
}

module.exports = { register, findname, getuser, deleteuser, updateuser }