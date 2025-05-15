// const express = require('express');

// const app = express();

// app.use(express.json());

// app.get('/route-handler',(req,res)=>{
//     res.json({
//         name:"abd",
//         age:22
//     })
// })
// app.get('/', (req, res) => {
//     res.send("hey");
// });


// app.post('/conversations', (req, res) => {
//     console.log(req.body.msg); // Logs the incoming JSON body
//     res.send({
//         msg: "hey"
//     });
// });

// app.listen(3000, () => {
//     console.log('Server listening on port 3000');
// });






// function sum(n){
//     let ans=0;
//     for(let i=0;i<=n;i++){
//         ans=ans+i
//     }
//     return ans;
// }

// app.get('/', (req, res) => {
//     const n = Number(req.query.n);
//     const ans = sum(n);
//     res.send(ans.toString()); // res.send expects string or object
// });

// app.listen(3000)





// function sum(a, b) {
//     return a + b;
// }

// app.get('/', (req, res) => {
//     const a = Number(req.query.a);
//     const b = Number(req.query.b);
//     const ans = sum(a, b);
//     res.send(ans.toString()); // res.send prefers string or object
// });

// app.listen(3000)









// const express = require('express');
// const app = express();

// const user = [{
//     name: "harkirat",
//     kidneys: [{
//         healthy: false
//     }]
// }];

// app.use(express.json()); // ✅ Correct usage with ()
// //user can check how many kidneys he has
// app.get('/', (req, res) => {
//     const harkiratkidneys = user[0].kidneys;
//     const numofkidneys = harkiratkidneys.length;
//     let numberOfHealthyKidneys = 0;

//     for (let i = 0; i < harkiratkidneys.length; i++) {
//         if (harkiratkidneys[i].healthy) {
//             numberOfHealthyKidneys++;
//         }
//     }

//     const numberofUnhealthykidneys = numofkidneys - numberOfHealthyKidneys;

//     res.json({
//         harkiratkidneys,
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

// //user can replace a kidney and make it healthy
// app.put("/", (req, res) => {
//     for (let i = 0; i < user[0].kidneys.length; i++) {
//         user[0].kidneys[i].healthy = true;
//     }
//     res.json({})
// })


// //user can delete a kidney
// // user can delete all unhealthy kidneys
// app.delete("/", (req, res) => {
//     if (isThereAtleastOneUnhealthyKidney) {
//         const newKidneys = [];

//         for (let i = 0; i < user[0].kidneys.length; i++) {
//             if (user[0].kidneys[i].healthy) {
//                 newKidneys.push({
//                     healthy: true
//                 });
//             }
//         }

//         user[0].kidneys = newKidneys;

//         res.json({ msg: "All unhealthy kidneys removed ✅" });

//     }
//     else {
//         res.status(411).json({
//             msg: "you have no bad"
//         })

//     }


// });

// function isThereAtleastOneUnhealthyKidney() {
//     let atleastOneUnhealthy = false;
//     for (let i = 0; i < user[0].kidneys.length; i++) {
//         if (!users[0].kidneys[i].healthy) {
//             atleastOneUnhealthy = true;
//         }
//     }
//     return atleastOneUnhealthy
// }

// app.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });







const express=require('express')
const fs=require('fs')
const app=express();

app.get("/files/:fileName",(req,res)=>{
    const name=req.params.fileName
    console.log(name)
    fs.readFile(name,"utf-8",(err,data)=>{
        res.json({
            data
        })

    })
})
app.listen(3000)