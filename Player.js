class Player {
  constructor(){

this.index = null;
this.distance = 0;
this.name = null;

  }

  getCount(){
  var playercount = database.ref('PlayerCount') 
   playercount.on("value",(data)=>{

PlayerCount = data.val()

   })
  }

  updateCount(count){
    
database.ref('/').update({

  PlayerCount : count

})

  }

  update(){

    var playerindex = "players/player" + this.index
    database.ref(playerindex).set({
    distance : this.distance,  
    name : this.name 

    })
    
  }

  static getplayerInfo(){

    var getplayer = database.ref('players') 
    getplayer.on("value",(data) =>{
 
 allplayers = data.val()
 
    })
   


  }
}
