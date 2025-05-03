import {Schema,model} from  "mongoose"
const blogSchema=new Schema({
    title:{
        name:String,
        required:true,
        
    }
})