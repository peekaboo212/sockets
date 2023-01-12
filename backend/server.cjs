const express = require('express');
const { createServer } = require("http");
const { Server } = require("socket.io")

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

io.on("connection", socket => {
    console.log(socket);
});

httpServer.listen(3000);