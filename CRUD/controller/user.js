import {User} from "../model/user.js"
import argon2 from "argon2"
import jwt from "jsonwebtoken"
import "dotenv/config"
const singIn=async(req,res)=>{
    const {name,email,password}=req.body
    try{
        // console.log(name,email)
        if(!name || !email || !password){
            return res.status(400).json({msg:"All fileds are required"})
        }
        const finduser=await User.findOne({email})
        // console.log(finduser)
        if(finduser){
            return res.status(401).json({msg:"User already exists"})
        }
        // console.log("2")
        const hash=await argon2.hash(password)
        // console.log(hash)
        const newUser= new User({
            name,
            email,
            password:hash
        })
        await newUser.save()
        res.status(201).json({
            msg:"User created successful"
        })
    }catch(err){
        res.status(500).json({msg:"Server Error",err})
    }
}
const login =async(req,res)=>{
    const {email,password}=req.body
    try{
        // console.log(email)
       if(!email || !password){
         return res.status(400).json({msg:"All fileds are required"})
       }
       const findUser=await User.findOne({email})
    //    console.log(findUser)
       if(!findUser){
        return res.status(401).json({msg:"User already exists"})
       }
       const checkPassword=await argon2.verify(findUser.password,password)
    //    console.log(checkPassword)
       if(!checkPassword){
            // console.log("Incorrect password");
            return res.status(400).json({ message: "Incorrect email or password" });
       }
       const accessToken=jwt.sign(
        {_id:findUser._id,email:findUser.email},
        process.env.ACCESS_JWT_KEY,
        {expiresIn:"1m"}
       )
    //    console.log(accessToken)
       const refreshToken=jwt.sign(
        {_id:findUser._id,email:findUser.email},
        process.env.REFRESH_JWT_KEY,
        {expiresIn:"7days"}
       )
       res.cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: false,     
        sameSite: "strict",
        maxAge: 60 * 60 * 1000,
        });
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: false,    
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        res.status(200).json({ message: "login successful" });
    }catch(err){
        res.status(500).json({msg:"Server Error",err})
    }
}
export {singIn ,login }