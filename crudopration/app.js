import express from "express"
import {logger} from "./middleware.js"
import morgan from "morgan"
const app=express()
app.use(express.json())
app.use(morgan("dev"))
// app.use(logger)
app.get("/",(req,res)=>{
    
    res.send("jot kour")
})
app.post("/",(req,res)=>{
    console.log(req.body)
    res.send("Data posted")
})
app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000")
})