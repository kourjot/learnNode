import jwt from "jsonwebtoken"
import "dotenv/config"
const auth=(req,res,next)=>{
    const token=req.headers["authorization"]
    // console.log(token)
    if(!token){
        return res.send("No token no entery")
    }
    const x=token.split(" ")[1]
    try{
        const decode=jwt.verify(x,process.env.JWT_KEY)
        req.user=decode
        next()

    }catch(err){
        res.send(err)
    }
}

export {auth}