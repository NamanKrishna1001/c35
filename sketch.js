var database;
var playerCount=0;
var gameState=0;
var form,player,game;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  
}

function draw(){
  background("white");
  
    drawSprites();
  
}

