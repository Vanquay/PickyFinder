const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const eventSchema=new Schema(
    {
        username:{type:String, required:true},
        title:{type:String, required:true},
        description:{type:String, required:true},
        address:{type:String, required:true},
        locationUpload:{data:Buffer,contentType:String, required:false},
        peopleNeeded:{type:Number,required:true},
    },
    {timestamp:true}
);

const Exercise=mongoose.model('Event',eventSchema);
module.exports=Exercise;
