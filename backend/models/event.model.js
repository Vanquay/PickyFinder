const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const eventSchema=new Schema(
    {
        username:{type:String, required:true},
        title:{type:String, required:true},
        description:{type:String, required:true},
        address:{type:String, required:true},
        locationUpload:{type:String, required:false},
        peopleNeeded:{type:Number,required:false},
        date:{type:Date,required:true},
        comments:{type:String,required:false}
    },
    {timestamp:true}
);

const Event=mongoose.model('Event',eventSchema);
module.exports=Event;
