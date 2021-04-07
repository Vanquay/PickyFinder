const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const user=new Schema(
    {
    username:{type:String, required:true, unique:true, trim:true, minlength:5},
    password:{type:String, required:true},
    profilePicture:{data:Buffer, contentType:String, required:false},
    },
    {timestamps:true}
);