import {readfile,writefile} from "../utils/fileHandler.js"
export function getTasks(req,res){
    const tasks=readfile()
    res.statusCode=200
    res.setHeader("Contant-Type","application/json")
    res.end(JSON.stringify(tasks))
}

export function addTasks(req,res){
    let body=""
    req.on("data",chunk=>body+=chunk)
    req.on("end",()=>{
        const {title}=JSON.parse(body)
        if(!title){
            res.statusCode=400
            return res.end(JSON.stringify({message:"Title is required"}))
        }
        const tasks =readfile()
        const newTask={id:Date.now().toString(),title:title,
        completed:false}
        tasks.push(newTask)
        writefile(tasks)
        res.statusCode=201
         res.setHeader("Contant-Type","application/json")
        res.end(JSON.stringify(tasks))
    })
}
export function updateTask(req,res,taskId){
    let body=""
    req.on("data",chunk=>body+=chunk)
    req.on("end",()=>{
        const {title,completed}=JSON.parse(body)
        const tasks=readfile()
        const idx=tasks.findIndex(task=>task.id===taskId)
        if(idx===-1){
            res.statusCode=404
            return res.end(JSON.stringify({message:"Task Invaild"}))
        }
        tasks[idx]={id:taskId,title,completed}
        writefile(tasks)
         res.statusCode=200
         res.setHeader("Contant-Type","application/json")
        res.end(JSON.stringify(tasks[idx]))
    })
}

export function deleteTasks(req,res,taskId){
    const tasks=readfile()
    const idx=tasks.findIndex(task=>task.id===taskId)
    if (idx===-1){
        res.statusCode=404
            return res.end(JSON.stringify({message:"Task Invaild"}))
    }
    tasks.splice(idx,1)
    writefile(tasks)
    res.statusCode=204
    res.end(JSON.stringify({message:"Task deleted "}))
}