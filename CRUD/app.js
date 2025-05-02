import express from "express"
import {conntection} from "./config/db.js"
import {router} from "./router/router.js"
import cookieParser from "cookie-parser" 
const app=express()
app.use(express.json())
app.use(cookieParser())
app.use(router)

app.get("/",async(req,res)=>{
    res.send("hello from server")
})

app.listen(4000,()=>{
    conntection()
    console.log("Server is running on http://localhost:4000")
})