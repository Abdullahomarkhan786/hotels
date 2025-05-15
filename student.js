const mongoose=require('mongoose');
const studentSchema=new Schema({
    studentName:{ type:String,required:true},
    age:{type:Number,required:true},
})
const Student=mongoose.model('Student',studentSchema)
module.exports=Student;