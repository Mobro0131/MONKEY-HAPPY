var monkey, stone, banana, background,ground
var monkeyImage, stoneImage, bananaImage, backgroundImage,groundImage
function preload(){
  

monkeyImage=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
jungleImage=loadImage("jungle.jpg");
  
  BananaImage=loadImage("banana.png");
  
  stoneImage=loadImage("stone.png");
  
}
  function setup() {
  createCanvas(400, 400);
    monkey=createSprite(100,300,10,10);
monkey.addAnimation("running",monkeyImage);
monkey.scale=0.15;

ground=createSprite(200,370,400,60);
}



function draw() {
  background(220);
  


  spawnStone();
  spawnBanana();


if(keyDown("space")){
  monkey.velocityY=-10 ;
  
}
monkey.velocityY=monkey.velocityY+0.5;
monkey.collide(ground);

 //scoring
  var count = Math.round(World.frameCount/4);
  text("Survival time: "+ count, 250, 100);

 drawSprites(); 
}

function spawnStone() {
  if(World.frameCount % 60 === 0) {
    stone = createSprite(400,320,10,40);
    stone.velocityX = -6;
    
    //generate random obstacles
    stone.addImage(stoneImage)
    
    //assign scale and lifetime to the obstacle           
    stone.scale = 0.1;
    stone.lifetime = 70;
  }
}

function spawnBanana() {
  if(World.frameCount % 60 === 0) {
    banana = createSprite(400,150,10,40);
    banana.velocityX = -6;
    
    //generate random obstacles
    banana.addImage(BananaImage);
    
    //assign scale and lifetime to the obstacle           
    banana.scale = 0.1;
    banana.lifetime = 70;
  }
  


}