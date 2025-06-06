const express = require("express");
const http = require("http"); 
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app); 

const io = new Server(server);

app.use(express.static("./public"));
const user={}
io.on("connection", (socket) => {
    console.log("A user connected" ,socket.id);
    socket.on("username",(name)=>{
        user[socket.id]=name
    })
    socket.on("message from client", (data) => {
       const name = user[socket.id] || "Anonymous";
       const fullMessage = `${name}: ${data}`;
        io.emit("message from server",fullMessage);
    })
    socket.on("disconnect", () => {
        console.log("A user disconnected", socket.id);
    });
});

server.listen(3000, () => {
    console.log("Server is listening on port http://localhost:3000");
});
