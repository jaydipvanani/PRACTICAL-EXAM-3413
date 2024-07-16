let mongoose = require("mongoose");


function connectDB() {
    mongoose
        .connect(process.env.DB_URL)
        .then(() => {
            console.log("Data base connect succesfully");
        })
        .catch((error) => {
            console.log("error is :", error);
        })
}


module.exports = connectDB;