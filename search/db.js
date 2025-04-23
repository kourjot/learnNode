import {connect} from "mongoose"
const db=async()=>{
    try{
        await connect("mongodb://localhost:27017/search")
        console.log("Database connected")
    }catch(err){
        console.log(err)
    }
}
export {db}