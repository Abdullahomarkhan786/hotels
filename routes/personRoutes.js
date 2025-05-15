const express=require('express');
const router=express.Router();
const Person = require('../models/Person');
router.post('/',async(req,res)=>{
    try{
    const data =req.body
    const newPerson=new Person(data); // model person used
    const response=await newPerson.save() //saved in db the new details of the object which satisfied the model schema
    console.log("data saved")
    res.json({response})
        
    }catch(err){
        console.log(err)

    }
})

router.get('/',async(req,res)=>{
    try{
        const data=await Person.find();
        console.log("data fetched")
        res.json({data})
            

    }catch(err){
        console.log(err)
    }
})

router.get('//:workType',async(req,res)=>{
    try{
    const workType=req.params.workType;//extract workType from url parameter
    if(workType=='chef'||workType=='manager'||workType=='waiter'){
        const response=await Person.find({work:workType});
        console.log("fetched");
        res.json({response})
        
    }else{
        res.json({
            error:"invalid work type"
        })
    }
    }catch(err){
        console.log(err)
    }
})



module.exports=router;