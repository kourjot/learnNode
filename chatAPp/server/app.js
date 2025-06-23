const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*', 
  },
});

const rooms = {}; 

io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);

  socket.on('join-room', ({ roomId, username }) => {
    socket.join(roomId);

    if (!rooms[roomId]) {
      rooms[roomId] = { code: '', users: {}, cursors: {} };
    }

    rooms[roomId].users[socket.id] = username;
    io.to(roomId).emit('user-list', Object.values(rooms[roomId].users));
    socket.emit('code-sync', rooms[roomId].code);

    console.log(`${username} joined room ${roomId}`);
  });

  socket.on('code-change', ({ roomId, code }) => {
    if (rooms[roomId]) {
      rooms[roomId].code = code;
      socket.to(roomId).emit('code-change', code);
    }
  });

  socket.on('cursor-move', ({ roomId, cursor }) => {
    if (rooms[roomId]) {
      rooms[roomId].cursors[socket.id] = cursor;
      socket.to(roomId).emit('cursor-update', { socketId: socket.id, cursor });
    }
  });

  socket.on('disconnect', () => {
    for (let roomId in rooms) {
      delete rooms[roomId].users[socket.id];
      delete rooms[roomId].cursors[socket.id];
      io.to(roomId).emit('user-list', Object.values(rooms[roomId].users));
    }
    console.log(`Client ${socket.id} disconnected`);
  });
});

server.listen(4000, () => {
  console.log('Server running on http://localhost:4000');
});