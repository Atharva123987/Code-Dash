const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const { v4: uuidv4 } = require('uuid');

// Create a unique identifier for each room
const roomId = uuidv4();



// Create the room using the identifier
io.on('connection', (socket) => {
  socket.on('join', (roomId) => {
    socket.join(roomId);
  });
});



const socket = io();
socket.emit('join', roomId);


io.on('connection', (socket) => {
  // When a user joins the room
  socket.on('join', () => {
    socket.join(roomName);
    console.log(`User ${socket.id} joined the room ${roomName}`);

    // Notify all users in the room
    io.to(roomName).emit('userJoined', socket.id);
  });

  // When a user sends a message
  socket.on('message', (message) => {
    console.log(`User ${socket.id} sent a message: ${message}`);

    // Broadcast the message to all users in the room except the sender
    socket.to(roomName).emit('message', { sender: socket.id, message });
  });

  // When a user leaves the room
  socket.on('disconnect', () => {
    console.log(`User ${socket.id} left the room ${roomName}`);

    // Notify all users in the room
    io.to(roomName).emit('userLeft', socket.id);
  });
});

// Start the server
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
