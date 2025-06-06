import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["instructor", "student"],
        default:'student'
    },
    // kon kon she course me enroll hai
    enrolledCourses:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Course' // course model
        }
    ],
    photoUrl:{
        type:String,
        default:""
    }
},{timestamps:true}); // jab user register hoga to  time aa jayega

export const User = mongoose.model("User", userSchema);