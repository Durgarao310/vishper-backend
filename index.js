const express = require("express")
const app = express()
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const cors = require("cors")


app.use(cors())

io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(3140, () => {
    console.log("serverlive")
})