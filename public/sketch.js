//DICHIARO IL PACKAGE SOCKET.IO
let socket = io();
let myColor = 'white';


//AD OGNI CONNESSIONE DI UN CLIENT IL SERVER RICONOSCE
//IL MESSAGGIO CONNECTION E NOI FACCIAMO PARTIRE LA FUNZIONE
//newConnection
socket.on("connect", newConnection);
socket.on("mouseBroadcast", drawOtherMouse)
socket.on("color", setColor);


function setColor(assignedColor){
  myColor = assignedColor;
}





function newConnection(){
  console.log("your id: " + socket.id)
}

function drawOtherMouse(data){
  push()
  fill(data.color)
  ellipse(data.x,data.y, 15)
  pop()
}

function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  background("#FFFF00")
  fill(myColor)
  textSize(30)
  textAlign(CENTER)
  text('Welcome' + myColor, width/2,height/2)

  // put setup code here
}

function newPlayer(newPlayerColor){
  console.log(newPlayerColor)

  fill('purple')
  rectMode(CENTER,CENTER);
  noStroke()
  rect(width/2,height/2,400,40)
  fill(newPlayerColor)
  textSize(30);
  textAlign(CENTER,CENTER)
  text('New player joined: '+ newPlayerColor, width/2,height/2)
  pop()
}

function draw() {
  // put drawing code here
}


function mouseMoved(){
  push()
  fill(myColor)
  ellipse(mouseX,mouseY,15);
  pop()
  //create the message
  let message = {
    x: mouseX,
    y: mouseY,
    color: myColor,
  };

//send the message to the server
socket.emit("mouse", message)
}
