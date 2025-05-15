
// const fs=require('fs')
// fs.writeFile("b.txt","hey",function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("done");
        
//     }
// })





// const fs=require('fs')
// fs.appendFile("b.txt","hey",function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("done");
        
//     }
// })






const notes=require('./server.js')
var age=notes.age;
var result=notes.addNumber(12,13)
console.log(age)
console.log(result);
