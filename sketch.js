var PLAY  = 1;
var END  = 1;
gameState = PLAY;
var monkey , monkey_running;
var bananas ,bananaImage, obstacles, obstacleImage;
var FoodGroup,ObstacleGroup;
var score;
var ground, invisibleGround;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function bananas(){
  if (World.frameCount%80===0){
    var bananas = createSprite(400,Math.round(random(120, 200),20,20));
    bananas.velocityX = -4;
    bananas.addImage(bananaImage);
    bananas.lifetime = 105;
    FoodGroup.add(bananas);
    bananas.scale = 0.13;
  }
}

function  obstacles(){
  if (World.frameCount%300===0){
    var obstacles = createSprite(400,275,20,20);
    obstacles.velocityX = -4;
    obstacles.addImage(obstacleImage);
    obstacles.lifetime = 105;
    obstacles.scale = 0.1;
  }
}

function setup() {
  
  monkey = createSprite(50,230,20,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(200,300,800,20);
  
  ground.scale = 1;
  score = 0;
  
  FoodGroup = new Group();
  ObstaclesGroup = new Group();
  
  console.log("Hi ma'am :D");
}

function draw() {
  background(180);
  
  if (keyDown("space")){
    monkey.velocityY = -8;
  }
  if (monkey.isTouching(FoodGroup)){
    FoodGroup.destroyEach();
}
  monkey.velocityY = monkey.velocityY + 2;
  monkey.collide(ObstaclesGroup);
  monkey.collide(ground);
  ground.velocityX = -5;
  ground.x = ground.width /2;
  
  bananas();
  obstacles();
  drawSprites();
}