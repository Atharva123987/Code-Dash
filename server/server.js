const express = require('express')
const app = express();
const http = require('http')
const cors = require('cors')
const {Server} = require('socket.io')

app.use(cors())

const server = http.createServer(app);
const io = new Server(server, {
    cors:{
        origin:"http://localhost:3000",
        methods:["GET","POST"],
    }
})

var userList = []
io.on("connection",(socket)=>{
    console.log(`User connected : ${socket.id}`)

    socket.on("join_room",(data)=>{
        socket.join(data[0]);
        console.log(`User : ${data[1]} joined room: ${data[0]}`);
        userList.push(data[1])
        socket.to(data[0]).emit("receive_room",userList)
    })
    
    
    

    socket.on("disconnect",()=>{
        console.log("User Disconnected",socket.id);
    })
})

server.listen(3001, ()=>{
    console.log("Listening on port 3001")
})