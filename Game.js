class Game {
  constructor(){}
  
  getState(){
   var gamestate = database.ref('GameState') 
   gamestate.on("value",function(data){

GameState = data.val()

   })
  }

  update(state){
  database.ref("/").update({

GameState : state 
    
  })  
  }

  async start(){
  
 if(GameState === 0){

player = new Player();
var play1 = await database.ref("PlayerCount").once("value")
if(play1.exists()){

PlayerCount = play1.val()
player.getCount()

}
form = new Form();
form.display();

 }   

  }
  play(){

form.hide();
Player.getplayerInfo();
if(allplayers !== undefined){

var position = 120;
for(var car in allplayers){
if(car === "player" + player.index)
fill("red");
else
fill("green");
position += 20;
text(allplayers[car].name + ":" + allplayers[car].distance,120,position);
}

}
if(keyIsDown(UP_ARROW) && player.index !== null){

player.distance += 50;
player.update();


}
  }
}
