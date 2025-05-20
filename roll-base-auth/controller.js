import {User} from "./model.js"
import argon2 from "argon2"
import jwt from "jsonwebtoken"
import "dotenv/config"
const signIn=async(req,res)=>{

    const {username,password}=req.body
    try{
        const role="user"
        const hash=await argon2.hash(password)
        const newUser=new User({
            username,
            password:hash,
            role:role
        })
        await newUser.save()
        res.send("user created successfully")
    }catch(err){
        console.log(err.meassage)
        res.status(500).json({msg:err})
    }
}

const login=async(req,res)=>{
    const {username,password}=req.body
    try{
        const findUser=await User.findOne({username})
        // console.log(findUser)
        if(!findUser){
            return res.send("not found")
        }
        const ismatch=await argon2.verify(findUser.password,password)
        const token=jwt.sign({
            
            id:findUser._id,
            role:findUser.role
        },process.env.JWT_KEY)
        res.json({token:token})
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

const getprofile=async(req,res)=>{
    try{
        const finduser=await User.findById(req.user.id)
        res.send(finduser)

    }catch(err){
        res.send(err)
    }
}
const getAdmin=async(req,res)=>{
    const findUser=await User.findById(res.user.id)
    res.send(findUser)
}
const getData=async(req,res)=>{
    try{
        const response=await fetch("https://jsonplaceholder.typicode.com/posts")
        const data=await response.json()
        const {sortBy ,order}=req.query
        if(sortBy){
            data.sort((a,b)=>{
                if(order==="desc"){
                    return b[sortBy].toString().localeCompare(a[sortBy].toString())
                }else{
                    return a[sortBy].toString().localeCompare(b[sortBy].toString())
                }
            })
        }
        res.send(data)

    }catch(err){
        res.send(err)
    }
}
export { signIn,login,getprofile,getAdmin,getData}