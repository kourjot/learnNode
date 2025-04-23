import WebSocket from "ws";
import { createServer } from "http";

const server=createServer()
const wss=new  WebSocket.Server({server})

wss.on("connection",(ws)=>{
    console.log("Client connected")

})

server.listen(3000,()=>{
    console.log("Server is listening on port 3000")
})