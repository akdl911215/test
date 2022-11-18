const express = require('express');
const app = express();

app.use("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(8080);

const WebSocket = require("ws");
const socket = new WebSocket.Server({
    port: 8081
});

socket.on("connection", function (ws, req){
    ws.on("message", function(msg) {
        console.log("user message : " + msg);
        ws.send("user message response")
    })
} )