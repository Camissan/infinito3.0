var tower;
var game;
var gameov;
var ghost,ghostphoto;
var towerphoto;
var door;
var doordosGroup;
var doorphoto;
var barra;
var barraphoto;
var barrareGroup;
var contador=0;
function preload(){
  
  towerphoto=loadImage("tower.png");
  doorphoto=loadImage("door.png");
  barraphoto=loadImage("climber.png");
  ghostphoto=loadAnimation("ghost-standing.png","ghost-jumping.png","ghost-standing.png");
  gameov=loadImage("game over.png");
}


function setup(){
  var canvas=createCanvas(displayWidth-20,displayHeight-20);
 tower=createSprite(displayWidth/2,displayHeight-50); 
  tower.addImage("tower",towerphoto);
  tower.velocityY=5
 doordosGroup = new Group();
  barrareGroup= new Group();
  ghost=createSprite(300,300,40,40);
  ghost.addAnimation("fanta",ghostphoto);
  ghost.scale=0.4;
  game=createSprite(displayWidth/2,displayHeight/2,40,40);
  game.addImage(gameov);
  game.visible=false;

}

function draw(){
  background("black");
  ghost.x=World.mouseX;
  ghost.y=World.mouseY;
  if(tower.y>600){
    
  tower.y=450;
    
  }
  if (contador===20){
    tower.velocityY=0 
    doordosGroup.velocityY=0
     game.visible=true;
   doordosGroup.setVelocityYEach(0);

  }
  
  
  doors();
  
   if(doordosGroup.isTouching(ghost)){
     fill("pink")
    text("Game Over",displayWidth/2,displayHeight/2,40,40);
     tower.velocityY=0 
    doordosGroup.velocityY=0
     game.visible=true;
   doordosGroup.setVelocityYEach(0);
  }
  
  
  
  
  
  
  drawSprites();
  
  
  
}

function doors() {

  //escribe el código aquí para aparecer las puertas
  if (frameCount % 240 === 0) {
     door = createSprite(200,100,40,10);
    door.x = Math.round(random(displayWidth/2-200,displayWidth/2+200));
    door.addImage(doorphoto);
    door.velocityY = 5;
    
     //asigna ciclo de vida a la variable
    door.lifetime = 500;
    ghost.depth = door.depth; ghost.depth +=1;
    
    
    //agrega cada nube al grupo
    doordosGroup.add(door);
   contador=contador+1
  }
  
}