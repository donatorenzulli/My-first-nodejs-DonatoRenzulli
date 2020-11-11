console.log("node js is running");

let express = require("express");
let socket = require("socket.io");


let app = express();

let port = 3000;

let  server = app.listen(port);

app.use(express.static("public"))

let io = socket(server);

//AD OGNI CONNESSIONE DI UN CLIENT IL SERVER RICONOSCE
//IL MESSAGGIO CONNECTION E NOI FACCIAMO PARTIRE LA FUNZIONE
//newConnection
io.on("connection", newConnection);

function newConnection(socket){
  console.log("new connection: " + socket.client.id)

  socket.on("mouse", mouseMessage)

function mouseMessage(dataReceived){
  console.log(dataReceived)
}

}
