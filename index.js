const WebSocket = require("ws");
const wss = new WebSocket.Server({port:process.env.PORT || 8000});
var clients = {};
wss.on("connection", function(ws){
    var key = createRandomString(100);
    clients[key] = {ws:ws};
    ws.on("message", function(message){
        for(var client in clients){
            clients[client].ws.send(String(message));
        };
    });
    ws.on("close", function(){
        delete clients[key];
    });
});
function createRandomString(length){
    var baseString = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var output = "";
    for(var i=0;i<length;i++){
        output += baseString[Math.floor(baseString.length*Math.random())];
    };
    return output;
}