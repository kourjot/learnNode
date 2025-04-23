import {Schema,model} from 'mongoose';
const userSchema=new Schema({
    name:{
        type:String
    },
    age:{
        type:String
    }

})
const User=model("User",userSchema)
export {User}