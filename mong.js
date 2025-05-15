// const express = require("express");
// const jwt = require("jsonwebtoken");
// const mongoose = require("mongoose");
// const jwtPassword = "123456";

// mongoose.connect(
//     "your_mongo_url",
// );

// const User = mongoose.model("User", {
//     name: String,
//     username: String,
//     pasword: String,
// });

// const app = express();
// app.use(express.json());

// function userExists(username, password) {
//     // should check in the database
// }

// app.post("/signin", async function (req, res) {
//     const username = req.body.username;
//     const password = req.body.password;

//     if (!userExists(username, password)) {
//         return res.status(403).json({
//             msg: "User doesnt exist in our in memory db",
//         });
//     }

//     var token = jwt.sign({ username: username }, "shhhhh");
//     return res.json({
//         token,
//     });
// });

// app.get("/users", function (req, res) {
//     const token = req.headers.authorization;
//     try {
//         const decoded = jwt.verify(token, jwtPassword);
//         const username = decoded.username;
//         // return a list of users other than this username from the database
//     } catch (err) {
//         return res.status(403).json({
//             msg: "Invalid token",
//         });
//     }
// });

// app.listen(3000);








// const express = require('express');
// const app = express();
// app.use(express.json());

// const mongoose = require('mongoose');

// mongoose.connect("mongodb+srv://f20210021:lv8oUb57i6P3Rece@cluster1.ijx2ur1.mongodb.net/myapp?retryWrites=true&w=majority")

// const User = mongoose.model('User', {
//     name: String,
//     email: String,
//     Password: String
// });
// app.post("/signup",async (req, res) => {
//     const username=req.body.username;
//     const password=req.body.password;
//     const name=req.body.name;
    
//     const existinguser = await User.findOne({ email: username });
//     if (existinguser) {
//         return res.status(400).send("username already exists");
//     }
//     else{
//     const user = new User({
//         name: name,
//         email: username,
//         Password: password
//     });
    
//     user.save();
//     res.json({
//         "msg":"user created successfully"
//     })

//     }
// })

// app.listen(3000, () => {
//     console.log("Server running on port 3000");
// });













const express = require('express');
const app = express();
app.use(express.json());

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://f20210021:lv8oUb57i6P3Rece@cluster1.ijx2ur1.mongodb.net/myapp?retryWrites=true&w=majority")

const UserSchema=new mongoose.Schema({
    email:String,
    password:String,
    purchasedCourses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }]
})
const User=mongoose.model('User',UserSchema);
// In Mongoose, a model is used to interact with a MongoDB collection. 
// By default, Mongoose takes the model name, lowercases 
// it and pluralizes it to form the collection name.
//  For example, the model User becomes the users collection in the database. 
// You can also manually set the collection name
//  if needed. model User helps with crud operation in users 
// collection


const CourseSchema=new mongoose.Schema({
    title:String,
    price:5999
})
const Course=mongoose.model('Course',CourseSchema)






