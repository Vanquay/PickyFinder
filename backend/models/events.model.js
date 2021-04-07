const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const exerciseSchema=new Schema(
    {
        description:{type:String, required:true},
        address:{type:String,required:true},
        locationUpload:{data:Buffer,contentType:String, required:false},
        peopleNeeded:{type:Number,required:true},
    },
    {timestamp:true}
);

const Exercise=mongoose.model('Exercise',exerciseSchema);
module.exports=Exercise;
