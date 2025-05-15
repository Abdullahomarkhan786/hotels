// var age=24
// const addNumber=function(a,b){
//     return a+b;
// }
// module.exports={
//     age,
//     addNumber
// }


//performing crud on express and mongo (prince)

const express = require('express');
const app = express();
app.use(express.json());

const db = require('./db');

app.get('/',(req,res)=>{
    res.send("hello welcome to our hotel")
})

const personRoutes=require('./routes/personRoutes');
app.use('/person',personRoutes);


const menuItemRoutes=require('./routes/menuItemRoutes');
app.use('/menu',menuItemRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

