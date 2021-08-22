const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const socketio = require("socket.io");
const io = socketio(server);
const PORT = process.env.PORT || 5000;

const router = require('./router/router');

app.use(express.json())
app.use(router)


server.listen(PORT, () => {
  console.log("Server is Running");
});
