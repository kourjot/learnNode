import {connect} from "mongoose"
const conntection=async()=>{
    try{
        await connect("mongodb://localhost:27017/search")
        console.log("Connected to MongoDB")
    }catch(err){
        res.status(500).json({msg:"Error in connecting to Db",err})
    }
}

export {conntection}