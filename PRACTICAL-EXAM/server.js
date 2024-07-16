require("dotenv").config()
let http = require("http");
let express = require("express");
const connectDB = require("./db/connectDB");
const bodyParser = require("body-parser");
let cors = require("cors");
let cookieParser = require("cookie-parser")
const routes = require("./routes");
let app = express();





//cors
app.use(
    cors({
        origin: "*"
    })
);




// ejs file set
app.set("view engine", "ejs");

//for json-body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

//cookies
app.use(cookieParser());

//routes
app.use("/v1", routes);

//ejs file set route
app.get("/", (req, res) => {
    res.render("login");
});

app.get("/", (req, res) => {
    res.render("register");
});




//connect data base
connectDB();

//create-server
http.createServer(app).listen(process.env.PORT, () => {
    console.log(`server started on ${process.env.PORT}`);
})