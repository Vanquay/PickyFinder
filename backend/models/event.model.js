const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const eventSchema=new Schema(
    {
        username:{type:String, required:true},
        title:{type:String, required:true},
        category:{type:String,required:true},
        description:{type:String, required:true},
        address:{type:String, required:true},
        locationUpload:{type:String, required:false},
        peopleNeeded:{type:Number,required:true},
        date:{type:Date,required:true}
    },
    {timestamp:true}
);

const Event=mongoose.model('Event',eventSchema);
module.exports=Event;
