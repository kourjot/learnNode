import jwt from "jsonwebtoken"
import "dotenv/config"
const authToken=(req,res,next)=>{
    
    const token=req.cookies.accessToken
    
    if (!token) {
        return res.status(401).json({ msg: "Access denied. No token provided." });
    }
    try{
     const decoded=jwt.verify(token,process.env.ACCESS_JWT_KEY)
     req.user = decoded;
     next()
    }catch(err){
        return res.status(401).json({ msg: "Invalid or expired token." });
    }
}

export {authToken}