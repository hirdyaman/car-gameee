class Player{
    constructor(){
    this.index=null
    this.name=null
    this.distance=0
    }
    getcount(){
    
    
    
        database.ref('playercount').on("value",function(data){
            playercount=data.val()
        })
    }
    update(){
        var playerindex="players/player"+this.index
        database.ref(playerindex).set({
        name:this.name,
        distance:this.distance    
        })    }
    updatecount(count){
        database.ref("/").update({
        playercount:count
        })
    }
    }
