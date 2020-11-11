//DICHIARO IL PACKAGE SOCKET.IO
let socket = io();


//AD OGNI CONNESSIONE DI UN CLIENT IL SERVER RICONOSCE
//IL MESSAGGIO CONNECTION E NOI FACCIAMO PARTIRE LA FUNZIONE
//newConnection
socket.on("connect", newConnection);
socket.on("mouseBroadcast", drawOtherMouse)

function newConnection(){
  console.log("your id: " + socket.id)
}

function drawOtherMouse(data){
  fill('red')
  ellipse(data.x,data.y, 15)
}

function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  background('yellow')
  // put setup code here
}

function draw() {
  // put drawing code here
}


function mouseMoved(){
  fill(255)
  ellipse(mouseX,mouseY,15);
  //create the message
  let message = {
    x: mouseX,
    y: mouseY,
  };

//send the message to the server
socket.emit("mouse", message)
}
