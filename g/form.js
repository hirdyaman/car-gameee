class Form{
constructor(){
this.input=createInput("enter your name")
this.button=createButton("play")
this.reset=createButton('reset')
this.title=createElement("h2","car racing game")
}
 display(){
this.input.position(130,160)
this.button.position(250,200)
this.reset.position(windowWidth-200,50)
this.title.position(130,0)
this.reset.mousePressed(()=>{
database.ref('/').update({
 players:null,
 playercount:0,
 gamestate:0
})

})
this.button.mousePressed(()=>{
this.input.hide()
this.button.hide()
player.name =this.input.value()
playercount=playercount+1
player.index=playercount
player.update(player.name)
player.updatecount(playercount)
var greeting =createElement("h4","hello"+player.name)
greeting.position(200,200)
})

 }











}
