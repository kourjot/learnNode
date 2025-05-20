import {connect} from "mongoose"
const connection =async()=>{
    try{
        await connect("mongodb://127.0.0.1:27017/RBSC_AUTH")
        console.log("DB connected ")
    }catch(err){
        console.log(err.message)
    }
}

export {connection}