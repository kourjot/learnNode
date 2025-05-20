import fs from "fs"
export function logger(req,res,next){
    const start=Date.now()
    res.on("finish",()=>{
        const duration =Date.now()-start
        const log=`"method:${req.method} ,url:${req.url} - statusCode:${res.statusCode}- DUration:${duration}"\n`
    fs.appendFileSync("logger.js",log)
    })
    
  
    next()
}
