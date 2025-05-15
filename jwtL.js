
// const express = require("express");
// const jwt = require("jsonwebtoken");
// const jwtPassword = "123456";

// const app = express();
// app.use(express.json());

// const ALL_USERS = [
//     {
//         username: "harkirat@gmail.com",
//         password: "123",
//         name: "harkirat singh",
//     },
//     {
//         username: "raman@gmail.com",
//         password: "123321",
//         name: "Raman singh",
//     },
//     {
//         username: "priya@gmail.com",
//         password: "123321",
//         name: "Priya kumari",
//     },
// ];

// function userExists(username, password) {
//     for(let i=0;i<=ALL_USERS.length;i++){
//         if(ALL_USERS[i].username==username && ALL_USERS[i].password==password){
//             return true;
//         }
//     }
//     return false;
// }

// app.post("/signin", function (req, res) {
//     console.log(req.body);  // Log the body to check its structure
//     const username = req.body.username;
//     const password = req.body.password;

//     if (!username || !password) {
//         return res.status(400).json({ msg: "Username and password are required." });
//     }

//     if (!userExists(username, password)) {
//         return res.status(403).json({
//             msg: "User doesn't exist in our in-memory DB",
//         });
//     }

//     const token = jwt.sign({ username: username }, jwtPassword);
//     return res.json({ token });
// });



// app.get("/users", function (req, res) {
//     const token = req.headers.authorization;
//     // try {
//     //     const decoded = jwt.verify(token, jwtPassword);
//     //     const username = decoded.username;
//     //     // return a list of users other than this username
//     // } catch (err) {
//     //     return res.status(403).json({
//     //         msg: "Invalid token",
//     //     });
//     // }

//     //return a list of users other than this username

//     try {
//         const decoded = jwt.verify(token, jwtPassword);
//         const username = decoded.username;

//         const filteredUsers = ALL_USERS.filter((user) => user.username !== username);

//         res.json({
//             users: filteredUsers,
//         });
//     } catch (err) {
//         return res.status(403).json({
//             msg: "Invalid token",
//         });
//     }
// });

// app.listen(3000, () => {
//     console.log("Server running on port 3000");
// });







// const jwt=require('jsonwebtoken');
// const content={
//     "name":"harkirat",
//     "accountNumber":123123,

// }
// const newToken=jwt.sign(content,"secret")
// console.log(newToken)

// const abc=jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaGFya2lyYXQiLCJhY2NvdW50TnVtYmVyIjoxMjMxMjMsImlhdCI6MTc0Njc1MzE3Mn0.GXo-fibtB_qpQozUa7zAksH_YUpHRSdB1Ih969leyY8","secret")
// console.log(abc)



// try{
//     let a;
//     console.log(a.length)

// }
// catch(err){
// console.log("dum")
// }






// const express = require('express');
// const app = express();
// const zod = require('zod')
// app.use(express.json())
// const jwt = require('jsonwebtoken')

// const Schema = zod.object({
//     email: zod.string().email(),
//     password: zod.string().min(6)
// })

// validateData = (req, res, next) => {
//     const response = Schema.safeParse(req.body)
//     if (!response.success) {
//         return res.send("error")
//     }
//     else {
//         req.validateData = response.data;
//         next()
//     }
// }
// app.post('/signin', validateData, (req, res) => {
//     const username = req.validateData.email;
//     const password = req.validateData.password
//     const token = jwt.sign({email:username}, "secret", { expiresIn: '1h' })
//     console.log(token)
// })
// app.listen(3000)






// const jwt=require("jsonwebtoken")
// function decodeJwt(token){
//     const decoded=jwt.decode(token);
//     if(decoded){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(decodeJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDY3NTU0NzgsImV4cCI6MTc0Njc1OTA3OH0.zKXBVkU9qCkr18Q3xV8Sv5eN7dWy8hwKXLFDGzDagIQ"))







// const jwt=require('jsonwebtoken')
// const jwtPassword="secret"

// function verifyJwt(token){
//     let ans=true;
//     try{
//         jwt.verify(token,jwtPassword);
//     }catch(err){
//         ans=false;
//     }
//     return ans;
// }
// console.log(verifyJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDY3NTUzNzcsImV4cCI6MTc0Njc1ODk3N30.9kvMeJdGyXFbuF_A0nef_V1Ye7RwxAsudwpTQsKVp0U"))





