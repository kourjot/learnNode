import http from "http"
import {getTasks,addTasks,updateTask,deleteTasks} from "./routes/tasks.js"
import url from "url"
const server=http.createServer((req,res)=>{
    const {method,url:requestUrl}=req
    const parseUrl=url.parse(requestUrl,true)
    const {pathname}=parseUrl
    res.setHeader("Contant-Type","application/json")
    if(method==="GET" && pathname==="/tasks"){
        getTasks(req,res)
    }else if(method==="POST" && pathname==="/tasks"){
        addTasks(req,res)
    }else if(method==="PUT" && pathname.startsWith("/tasks")){
        const taskId=pathname.split("/")[2]
        updateTask(req,res,taskId)
    }else if(method==="DELETE"&& pathname.startsWith("/tasks")){
        const taskId=pathname.split("/")[2]
        deleteTasks(req,res,taskId)
    }else{
        res.statusCode=404
        res.end(JSON.stringify({message:"not found"}))
    }
    
})
server.listen(3000,()=>{
    console.log("Server is runnint on http://localhost:3000")
})