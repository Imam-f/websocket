const WebSocket = require("ws");
const wss = new WebSocket.Server({
    port:'8080'
});

connetionlist = []

wss.on("connection", socket => {
    socket.on("message", message => {
        console.log(message);
        socket.send("Hello "+ JSON.parse(message).dttext);
    });
    connetionlist.push(socket);

    setInterval(() => {
        console.log("interval" + connetionlist.length);
        connetionlist[0].send("periodic");
    },3000);
});
