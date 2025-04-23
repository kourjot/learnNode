import {User} from "./model.js"
import express from "express"
import {db} from "./db.js"
const app=express()

app.use(express.json())
app.get("/search",async(req,res)=>{
    const{name}=req.query
    try{
        const find=await User.find({name:name.toLowerCase()})
        res.status(200).json(find)
    }catch(err){
        console.log(err)
        res.status(500).json({error:"Internal Server Error"})
    }
})
app.get("/",async(req,res)=>{
    try{
        const find=await User.find()
        res.status(200).json({find}) 
    }catch(err){
        res.status(500).json({message:"Server Error",err})
    }
})
app.post("/add",async(req,res)=>{
    try{
        const {name}=req.body
        const newuser=new User({
            name:name
        })
        await newuser.save()
        res.status(200).json({message:"User added"})

    }catch(err){
        console.log(err)
        res.status(500).json({error:"Internal Server Error"})
    }
})

app.get("/all",async(req,res)=>{
    let {page,size,name}=req.query
    try{
        page= parseInt(page)||1
        size= parseInt(size)||5
        const skip=(page-1)*size
        const fiter={}
        if(name){
            fiter.name={ $regex: new RegExp(name, "i") }  
            
        }
       
        const find=await User.find(fiter).skip(skip).limit(size)
        const total =await User.countDocuments(fiter)
        const totalPages=Math.ceil(total/size)
      
        res.status(200).json({
            totalPages:totalPages,
            currentPage:page,
            data:find
        })


    }catch(err){
        console.log(err)
        res.status(500).json({error:"Internal Server Error"})
    }
})
app.listen(3000,()=>{
    db()
    console.log("Server is listening on port 3000")
})