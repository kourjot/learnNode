import {Task } from "../model/model.js"

const taskCreate=async(req,res)=>{
    const {task}=req.body
    try{  
        if(!task){
            res.status(400).json({msg:"Task is required"})
        }
        const findTaks=await Task .findOne({task})
        if(findTaks){
            return res.status(401).json({msg:"Task already exists"})
        }
        const newTask=new Task ({
            task
        })
        await newTask.save()
        res.status(201).json({msg:"Task created successful"})
    }catch(err){
        res.status(500).json({msg:"Server Error",err})
    }
}
const getTask=async(req,res)=>{
    const {status}=req.query
    try{
     let filterd;
        if(status){
            filterd=Task.filter((i)=>i.status===status)
            
        }
        res.status(200).json({filterd})
        
    }catch(err){
        res.status(500).json({msg:"Server Error",err})
    }
}

export {taskCreate, getTask}