var hypnoticBall, database;
var position;
var gamestate =0,playercount=0,game,form,player;s
var car1,car2,car3,car4,cars
var allPlayers
function preload (){
  car1image=loadImage("images/car1.png")
  car2image=loadImage("images/car2.png")
  car3image=loadImage("images/car3.png")
  car4image=loadImage("images/car4.png")
  trackimage=loadImage("images/track.jpg")
  
  }
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(windowWidth,windowHeight);
  game=new Game()
  game.getstate()
  game.start()
}

function draw(){
if(playercount===4){
gamestate=1
game.updatestate(1)
}
if (gamestate===1){
game.play()

}
}

