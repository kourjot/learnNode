import express from "express"
import multer from "multer"
import v2 from "cloudinary"
import path from "path"
import fs from "fs"

const app=express()
v2.config({
    cloud_name:'div73bxig',
    api_key:'934178561787478',
    api_secret:'s6RYiLHbAaMlM5N2EBYByjDtIJo'
})
const uploadDir="uploads"
if(!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir)
}
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads/")
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+file.originalname)
    }
})
const upload=multer({storage:storage})

app.post("/upload",upload.single("image"),async(req,res)=>{
    if(!req.file){
        return res.status(400).json({
            msg:"No file"
        })
    }
    try{
        const x=await v2.uploader.upload(req.file.path)
        return res.json({
            msg:"file upload",
            fileurl:x.secure_url
        })
    }catch(err){
        console.log("Error in file ",err)
        return res.status(500).json({
            err:"File upload failed"
        })
    }
})

app.listen(4000,()=>{
    console.log("server is runnig on 3000 port")
})