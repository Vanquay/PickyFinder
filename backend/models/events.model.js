const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const user=new Schema(
    {
        description:{type:String, required:true},
        address:{type:String,required:true},
        locationUpload:{data:Buffer,contentType:String, required:false},
    },
    {timestamp:true}
);