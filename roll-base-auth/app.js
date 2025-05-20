import express from "express"
import {connection} from "./db.js"
import {router} from "./router.js"
const app=express()
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("hello from backend")
})
app.use(router)
app.listen(8000,()=>{
    connection()
    console.log("Server is running on http://localhost:8000")
})