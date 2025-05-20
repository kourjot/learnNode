import http from "http"
const server=http.createServer((req,res)=>{
    if(req.url==="/health-check"&& req.method==="GET"){
        res.writeHead(200,{"Contant-Type":"application/json"})
        res.end(JSON.stringify({status:"ok"}))
    }else{
        res.writeHead(404,{"Contant-Type":"application/json"})
        res.end(JSON.stringify({error:"Not Found"}))
    }
})

server.listen(3000,()=>{
    console.log("Server is runnin on http://localhost:3000")
})