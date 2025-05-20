import {Schema,model} from "mongoose"
const userSchema=new Schema({
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    role:{
        type:String,enum:["admin","user"],defult:"user"
    }
})

const User=model("User",userSchema)
export {User}