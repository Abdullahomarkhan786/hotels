// const express=require('express');
// const app=express();
// app.use(express.json())

// app.post('/',(req,res)=>{
//     console.log(req.body.name)
//     res.json({
//         "msg":"yo bro"
//     })

// })
// app.listen(3000);




// const express=require('express');
// const app=express();
// app.use(express.json())
// app.get('/',(req,res)=>{
// const n=Number(req.query.n);
// res.send(sum(n))
// })

// sum=(n)=>{
//     let ans=0
//     for(let i=0;i<=n;i++){
//         ans=ans+i
//     }
//     return ans;
// }
// app.listen(3000)







// const express=require('express');
// const app=express();
// app.use(express.json())
// function sum(a, b) {
//     return a + b;
// }

// app.get('/', (req, res) => {
//     const a = Number(req.query.a);
//     const b = Number(req.query.b);
//     const ans = sum(a, b);
//     res.send(ans); // res.send prefers string or object
// });
// app.listen(3000)









// const express = require('express');
// const app = express();
// app.use(express.json());

// const user = [
//     {
//         name: "abd",
//         kidneys: [
//             { healthy: false },
//             { healthy: true }
//         ]
//     },
//     {
//         name: "alina",
//         kidneys: [
//             { healthy: true }
//         ]
//     }
// ];

// app.get('/', (req, res) => {
//     const abdKidneys = user[0].kidneys;
//     const numofKidneys = abdKidneys.length;
//     let numberOfHealthyKidneys = 0;

//     for (let i = 0; i < abdKidneys.length; i++) {
//         if (abdKidneys[i].healthy) {
//             numberOfHealthyKidneys++;
//         }
//     }

//     const numberofUnhealthykidneys = numofKidneys - numberOfHealthyKidneys;

//     res.json({
//         abdKidneys,
//         numberOfHealthyKidneys,
//         numberofUnhealthykidneys
//     });
// });
// //user can add a new kidney
// app.post("/", (req, res) => {
//     const isHealthy = req.body.isHealthy; // ✅ Define it correctly
//     user[0].kidneys.push({
//         healthy: isHealthy
//     });
//     res.json({
//         msg: "Kidney added successfully"
//     });
// });

// app.put('/', (req, res) => {
//     const kidneys = user[0].kidneys;
//     for (let i = 0; i < kidneys.length; i++) {
//         kidneys[i].healthy = true;
//     }
//     res.json({
//         message: "All kidneys set to healthy",
//         kidneys
//     });
// });


// app.listen(3000, () => {
//     console.log("Server running on port 3000");
// });









// const express = require('express');
// const app = express();

// app.get('/kidney', (req, res) => {
//     const username = req.headers.username;
//     const password = req.headers.password;
//     const kidneyId = req.query.kidneyID;

//     // Check username and password
//     if (username !== "harkirat" || password !== "pass") {
//         res.status(400).send("something wrong with input");
//         return;
//     }

//     // Check if kidneyId is not 1 or 2
//     if (kidneyId !== "1" && kidneyId !== "2") {  // Corrected to use AND (&&)
//         res.status(400).send("something again wrong");
//         return;
//     }

//     // If the above conditions are not met, send the success message
//     res.json({
//         msg: "your kidney is fine"
//     });
// });

// app.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });






// const express=require('express')
// const app=express();
// let count=0;

// counter=(req,res,next)=>{
//     count++;
//     console.log(count);
//     next()
// }
// app.use(counter)
// app.get('/',(req,res)=>{

//     res.send("yo")
// })
// app.listen(3000)






// const express = require('express');
// const app = express();

// app.get('/healthcheck', (req, res) => {
//     const username = req.headers.username;
//     const password = req.headers.password;
//     const kidneyId = parseInt(req.query.kidneyId); 

//     if (username !== 'harkirat@gmail.com' || password !== '123') {
//         return res.status(400).json({
//             msg: `Invalid username or password`
//         });
//     }

//     if (kidneyId !== 1 && kidneyId !== 2) {
//         return res.status(400).json({
//             msg: `Invalid kidney count`
//         });
//     }

//     res.json({ msg: "Your kidney is fine" });
// });

// app.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });









// const express = require('express');
// const app = express();
// app.use(express.json())
// UserCheck=(req,res,next)=>{
//     const username = req.headers.username;
//     const password = req.headers.password;
//     if (username !== 'harkirat@gmail.com' || password !== '123') {
//         return res.status(400).json({
//             msg: `Invalid username or password`
//         });
//     }
//     else{
//         next();
//     }
// }

// kidneyCheck=(req,res,next)=>{
//     const kidneyId = parseInt(req.query.kidneyId); 
//     if (kidneyId !== 1 && kidneyId !== 2) {
//         return res.status(400).json({
//             msg: `Invalid kidney count`
//         });
//     }
//     else{
//         next()
//     }

// }

// app.get('/healthcheck',UserCheck,kidneyCheck,(req, res) => {
//     res.json({ msg: "Your kidney is fine" });
// });

// app.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });






// const express = require('express');
// const app = express();
// app.use(express.json())
// let count=0;
// counter=(req,res,next)=>{
// count++;
// console.log(count)
// next()
// }
// app.get('/',counter,(req,res)=>{
//     res.send("yo man")
// })
// app.listen(3000)







// const express = require('express');
// const app = express();
// app.use(express.json())
// const zod=require('zod');

// const schema=zod.array(zod.number());

// app.post('/health',(req,res)=>{
//     const kidneys = req.body.kidneys;
//     const response=schema.safeParse(kidneys);
//     if(!response.success){
//         res.status(411).json({
//             msg: "invalid input"
//         });
//     }
//     else{
//         res.send({
//             response
//         })
//     }

// })
// app.listen(3000)





// const express=require('express')
// const app=express();
// const zod=require('zod')
// app.use(express.json())

// const schema=zod.object({
//     email:zod.string().email(),
//     password:zod.string().min(8),
//     age:zod.number(),
//     kidneys:zod.array(zod.number())
// })
// validateDetails=(req,res,next)=>{

//     const response=schema.safeParse(req.body);
//     if(!response.success){
//         return res.status(400).json({
//             msg: "Invalid input",
//         })
//     }
//     else{
//         next();
//     }


// }
// app.post('/health-checkup',validateDetails,(req,res)=>{
// res.send("hey wssup")
// })

// app.listen(3000,()=>{
//     console.log(`running on port 3000`)
// })







// const express=require('express')
// const app=express()
// const zod=require('zod')
// app.use(express.json())

// const schema=zod.object({
//     email:zod.string().email(),
//     password:zod.string().min(8)
// })
// validateInput=(req,res,next)=>{
//     const response=schema.safeParse(req.body)
//     if(!response.success){
//         res.status(400).json({
//             msg:"invalid boy"
//         })
//     }
//     else{
//         next()
//     }
// }
// app.post('/details',validateInput,(req,res)=>{
//     res.send("good boy")
// })


// app.listen(3000);







const express = require('express');
const app = express();
app.use(express.json());

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://f20210021:lv8oUb57i6P3Rece@cluster1.ijx2ur1.mongodb.net/myapp?retryWrites=true&w=majority");

const User = mongoose.model('User', {
    name: String,
    email: String,
    password: String
});

app.post('/signup', async (req, res) => {
    const { username, password, name } = req.body;
    const existingUser = await User.findOne({ email: username });

    if (existingUser) {
        res.send("User already exists");
    } else {
        const user = new User({
            name,
            email: username,
            password
        });
        
        
        await user.save();
        
        res.json({
            msg: "User created successfully"
        });
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
