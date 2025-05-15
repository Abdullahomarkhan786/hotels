// const express=require('express')
// const app=express();
// app.get('/health-checkup',(req,res)=>{
//     const username=req.headers.username;
//     const password=req.headers.password;
//     const kidneyId=req.query.kidneyId;
//     if(username!='harkirat' && password!='pass'){

//         res.status(400).json({"msg":"something wrong with input"})
//         return
//     }
//     if(kidneyId!=1 && kidneyId!=2){
//         res.status(400).json({"msg":"something wrong with input"})
//         return

//     }

//     res.json({
//         msg:"your kidney is fine"
//     })
// }
// )
// app.listen(3000);


// const express = require('express');
// const app = express();

// app.get('/health-checkup', (req, res) => {
//     const username = req.get('username'); // ✅ cleaner
//     const password = req.get('password');
//     const kidneyId = req.query.kidneyId;

//     if (username !== 'harkirat' || password !== 'pass') {
//         return res.status(400).json({ msg: "Invalid username or password" });
//     }

//     if (kidneyId !== '1' && kidneyId !== '2') {
//         return res.status(400).json({ msg: "Invalid kidneyId (must be 1 or 2)" });
//     }

//     res.json({ msg: "Your kidney is fine ✅" });
// });

// app.listen(3000, () => {
//     console.log("Server running on port 3000");
// });








//middleware

// const express = require('express');
// const app = express();

// // Middleware function
// function checkUsername(req, res, next) {
//     const username = req.headers.username;

//     if (username === 'harkirat') {
//         next(); // Go to the next handler
//     } else {
//         res.status(401).json({ msg: "Unauthorized: Invalid username" });
//     }
// }

// // Apply middleware to this route
// app.get('/welcome', checkUsername, (req, res) => {
//     res.send("Welcome, harkirat!");
// });

// app.listen(3000, () => {
//     console.log('Server running on port 3000');
// });




// const express=require('express')
// const app=express()
// let request=0
// calculate=(req,res,next)=>{
//     request++
//     console.log(request);
//     next();
// }
// app.get('/health-checkup',calculate,(req,res)=>{
// res.send("hey")
// })
// app.listen(3000)





// const express=require('express')
// const app=express()
// app.use(express.json())

// let request = 0; 
// calculate=(req,res,next)=>{
//     request++
//     console.log(request);
//     next();
// }
// app.use(calculate)
// app.get('/health-checkup',(req,res)=>{
// res.send("hey")
// })
// app.listen(3000)







// const express = require("express");

// const app = express();

// app.use(express.json());

// app.post("/health-checkup", function (req, res) {
//     // kidneys = [1, 2]
//     const kidneys = req.body.kidneys;
//     const kidneyLength = kidneys.length;
//     res.send("you have " + kidneyLength + " kidneys");
// });

// // Global error handler (catch all errors)
// app.use(function (err, req, res, next) {
//     res.json({
//         msg: "Sorry something is up with our server"
//     });
// });

// app.listen(3000);














// const express=require('express');
// const zod=require('zod')
// const app=express();
// const schema=zod.array(zod.number())
// app.use(express.json())
// app.post('/health-checkup',(req,res)=>{
//     const kidneys=req.body.kidneys;
//     const response=schema.safeParse(kidneys)
//     if(!response.success){
//         res.status(411).json({
//             msg:"invalid input"
//         })
//     }else{res.send({
//         response
//     })
// }
// })

// app.listen(3000)








// const express = require('express');
// const zod = require('zod');
// const app = express();

// const schema=zod.object({
//     email:zod.string(),
//     password:z.string(),
//     country:z.literal("IN").or(z.literal("us")),
//     kidneys:z.array(z.number())
// })
// app.use(express.json());

// app.post('/health-checkup', (req, res) => {
//     // Safely access kidneys
//     const kidneys = req.body.kidneys;
//     const response = schema.safeParse(kidneys);

//     if (!kidneys) {
//         return res.status(400).json({
//             msg: "Missing 'kidneys' in request body"
//         });
//     }


//     if (!response.success) {
//         return res.status(411).json({
//             msg: "Invalid input",
//             error: response.error
//         });
//     }

//     res.json({
//         msg: "Kidneys are valid",
//         data: response.data
//     });
// });

// app.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });









// const zod=require("zod");
// const schema=zod.array
// function validateInput(arr){
// const schema=zod.array(zod.number())
// const response=schema.safeParse(arr)
// console.log(response)
// }
// validateInput([1,2,3,"a"])


// const zod=require("zod");
// function validateInput(obj){
// const schema=zod.object({
//     email:zod.string().email(),
//     password:zod.string().min(8)

// })
// const response=schema.safeParse(obj);
// console.log(response)
// }
// validateInput({
//     email:"harkirat@gmail.com",
//     password:"1793639649846"
// })





// const express = require('express');
// const zod = require('zod');
// const app = express();

// app.use(express.json()); 
// const schema = zod.object({
//     email: zod.string().email(),
//     password: zod.string().min(8)
// });
// function validateInput(req,res,next) {
//     const response=schema.safeParse(req.body)
//     if(!response.success){
//         res.status(400).json({
//             msg:"invalid input"
//         })
//     }
//     else{
//         next()
//     }

// }
// app.post("/login",validateInput ,function (req, res) {
//     res.json({
//         msg: "Login successful!",

//     });
// });


// app.listen(3000, () => {
//     console.log("Server running on port 3000");
// });









// const express=require('express');
// const app=express()
// ageVerify=(req,res,next)=>{
//     const age=req.headers.age;
//     if(age<18){
//         res.send("less age boy")
//     }
//     else{
//         next()
//     }
// }
// app.get('/ride',ageVerify,(req,res)=>{
//     res.send("you can ride")
// })
// app.listen(3000)








// const request = require('supertest');
// const assert = require('assert');
// const express = require('express');

// const app = express();
// let errorCount = 0;

// app.get('/user', function (req, res) {
//     throw new Error("some error");
//     // 500 
//     res.status(200).json({ name: 'john' });
// });

// app.post('/user', function (req, res) {
//     res.status(200).json({ msg: 'created dummy user' });
// });

// app.get('/errorCount', function (req, res) {
//     res.status(200).json({ errorCount });
// });


// // You have been given an express server which has a few endpoints.
// // Your task is to
// // 1. Ensure that if there is ever an exception, the end user sees a status code of 404
// // 2. Maintain the errorCount variable whose value should go up every time there is an exception in any endpoint

// // error handling middleware
// app.use(function (err, req, res, next) {
//     res.status(404).send({})
//     errorCount = errorCount + 1;
// })

// module.exports = app;




const express = require('express');

const app = express();
let errorCount = 0;

app.get('/user', function (req, res) {
    throw new Error("some error"); // will throw a 500, but should be caught and handled as 404
});

app.post('/user', function (req, res) {
    res.status(200).json({ msg: 'created dummy user' });
});

app.get('/errorCount', function (req, res) {
    res.status(200).json({ errorCount });
});

app.use(function (err, req, res, next) {
    errorCount = errorCount + 1;
    res.status(404).send({});
});

module.exports = app;
