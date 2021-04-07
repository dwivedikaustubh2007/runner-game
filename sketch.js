var PLAY = 1;
var END = 0;
var gameState = PLAY;
var background,backgroundImg;
var helicopter,helicopterImg;
var missileImg;
var ground,groundImg;
var cloudImg
var gameOverImg;
var missileGroup 
var cloudsGroup;


function preload(){
backgroundImg=loadImage("background.png");
helicopterImg=loadImage("helicopter.png");
missileImg=loadImage("missile.png");
 groundImg=loadImage("ground.png"); 
 cloudImg=loadImage("cloud.png");
  gameOverImg=loadImage("gameOver.png");
}

function setup() {
createCanvas(windowWidth,windowHeight);

  
helicopter=createSprite(70,100);
helicopter.addImage(helicopterImg);
helicopter.scale=0.3;
  
  gameOver=createSprite(300,250);
  gameOver.addImage(gameOverImg);
  

  missileGroup=new Group();
  cloudsGroup=new Group();
}

function draw() {
  background(backgroundImg);
  
  if(gameState===PLAY){
 
   if(keyDown("space")){
  helicopter.velocityY=-5;
  }
    
  helicopter.velocityY=helicopter.velocityY+0.8;  
  gameOver.visible=false;  
  
  
   
  if(missileGroup.isTouching(helicopter)){
   gameState = END; 
  }
    
  missile();
  spawnClouds();
  
  }else if(gameState===END){
    gameOver.visible=true;
    missileGroup.velocityX=0;
    cloudsGroup.velocityX=0;
    
  }
  drawSprites();
}


function missile(){
 if(World.frameCount%80===0){
 var missile=createSprite(width-5,200,50,50);
  missile.addImage(missileImg);
  missile.scale=0.2; 
  missile.y=Math.round(random(10,350));
  missile.velocityX=-8;
  missile.lifetime=300;
   
   missileGroup.add(missile);
  }
  
 
}

function spawnClouds(){
 
  if(frameCount % 60===0){
    var cloud=createSprite(width-5,600,20,20);
    cloud.addImage(cloudImg);
    cloud.scale=0.5;
    cloud.y=Math.round(random(100,220));
    cloud.velocityX=-5;
    cloud.lifetime=300;
    
    cloudsGroup.add(cloud);
  } 
}