function setup() {
  createCanvas(800,400);
 wall= createSprite(400, 200, 50, 350);
 wall2=createSprite(450,200,50,350);
 wall3=createSprite(500,200,50,350);
 wall4=createSprite(550,200,50,350);
 wall5=createSprite(600,200,50,350);
}

function draw() {
  background(255,255,255);  
  wall.shapeColor="red";
  wall2.shapeColor="yellow";
  wall3.shapeColor="brown";
  wall4.shapeColor="pink";
  wall5.shapeColor="black";
  drawSprites();
}