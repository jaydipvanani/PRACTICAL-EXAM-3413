// let jwt = require("jsonwebtoken");


// let createtoken = (data) => {
//     let token = jwt.sign(data, process.env.SECRET);
//     return token
// }


// let isLogin = (req, res, next) => {

//     try {
// let token = req.cookies["token"]
//         let header = req.headers['Authorization']

//        console.log(header);

//         // console.log(token);

//         console.log(token,"ttttttttttttttttttttttttttt");
//         if (!token) {
//             throw new Error("user not login");
//         }
//         let user = jwt.verify(token, process.env.SECRET);
//         console.log(user);
//         req.user = user;
//         next();
//     } catch (error) {
//         res.status(500).json({
//             message: error.message
//         });
//     }
// }


// let isRestrict = ([...role]) => {

//     try {
//         return (req, res, next) => {
//             if (role.includes(req.user.user.role)) {
//                 next();
//             } else {
//                 throw new Error(`${req.user.user.role} "not allowed"`)
//             }
//         }
//     } catch (error) {
//         res.status(500).json({
//             message: error.message
//         })
//     }
// }





// module.exports = { createtoken, isLogin, isRestrict }





































const jwt = require("jsonwebtoken");

const createtoken = (data) => {
    const token = jwt.sign(data, process.env.SECRET);
    return token;
}

const isLogin = (req, res, next) => {
    try {
        // let token = req.cookies["token"];
        const header = req.headers['authorization'];
        console.log("🚀 ~ isLogin ~ header:", header)
        if (!header) {
            throw new Error("User not logged in");
        }
        const token = header.split(' ')[1]; // Extract the token from the header
        if (!token) {
            throw new Error("User not logged in");
        }
        const user = jwt.verify(token, process.env.SECRET);
        req.user = user;
        next();
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}


// let isLogin = (req, res, next) => {

//     try {
//     let token = req.cookies["token"]
//        // let header = req.headers['Authorization']

//     //    console.log(header);

//         // console.log(token);

//         console.log(token,"ttttttttttttttttttttttttttt");
//         if (!token) {
//             throw new Error("user not login");
//         }
//         let user = jwt.verify(token, process.env.SECRET);
//         console.log(user);
//         req.user = user;
//         next();
//     } catch (error) {
//         res.status(500).json({
//             message: error.message
//         });
//     }
// }
let isRestrict = ([...role]) => {
    return (req, res, next) => {
        try {
            if (role.includes(req.user.user.role)) {
                next();
            } 
            else {
                throw new Error(`${req.user.user.role} "not allowed"`);
            }
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
}

module.exports = { createtoken, isLogin, isRestrict };

