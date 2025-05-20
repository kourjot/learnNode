const authrize=(roles=[])=>(req,res,next)=>{
    if(!roles.includes(req.user.role)){
        return res.status(403).json("not access to this router")
    }
    next()
}

export {authrize}