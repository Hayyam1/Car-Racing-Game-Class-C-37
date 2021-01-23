var canvas, backgroundImage;


var allplayers;
var database;
var GameState = 0;
var form,player,game;
var PlayerCount;

function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game()
  game.getState()
  game.start()
  
}


function draw(){
  if(PlayerCount === 4){

game.update(1)
if(GameState === 1){

clear()
game.play()

}

  }
}
