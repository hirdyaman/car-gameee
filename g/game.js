class Game{
constructor(){


}
getstate(){



    database.ref('gamestate').on("value",function(data){
        gamestate=data.val()
    })
}
updatestate(state){
    database.ref("/").update({
    gamestate:state
    })

}start(){
if(gamestate===0)
{
player=new Player()
player.getcount()
form=new Form()
form.display()
car1 = createSprite(100,200);
car1.addImage(car1image)
car2 = createSprite(300,200);
car3 = createSprite(500,200);
car4 = createSprite(700,200);
cars = [car1, car2, car3, car4];
car2.addImage(car2image)
car3.addImage(car3image)
car4.addImage(car4image)
}
}
play(){
    player.getinfo()
    background("yellow")
    image(trackimage,0,-displayHeight*4,displayWidth,displayHeight*5)
 
if(allPlayers!==undefined){
var index =0
var x=0
var y=0
for(var plr in allPlayers){
index=index+1
x=x+200
y=displayHeight -allPlayers[plr].distance
cars[index-1].x=x
cars[index-1].y=y
if(index===player.index){
cars[index-1].shapeColor="red"
fill("red")
ellipse(x,y,60,60)
camera .position.x=displayWidth/2
camera.position.y=cars[index-1].y

}
}
}
 if(keyDown(UP_ARROW)){
player.distance=player.distance+10
player.update()

 }
 if(player.distance>4100){
gamestate=2
console.log(gamestate)
 }
 drawSprites()
}
}
