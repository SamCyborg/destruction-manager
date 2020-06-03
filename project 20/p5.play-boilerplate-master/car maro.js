var car,wall;
var speed,weight;
var destruction;

function setup() {
  createCanvas(1600,400);
  car=createSprite(50,200,50,50);
  car.shapeColor=color(255,255,255);
  wall=createSprite(1250,250,60,300);
  wall.shapeColor=color(80,80,80);
  speed=random(55,90);
  weight=random(400,1500);
   
  car.velocityX=speed;  
}

function draw() {
  background(0,0,0);
   
  if (wall.x-car.x < car.width/2+wall.width/2) {
    car.velocityX=0;
    destruction=0.5 * weight * speed * speed/22500;

    if(destruction<100){
    car.shapeColor=color(0, 255, 0);
    }

    if(destruction<180 && destruction>100){
    car.shapeColor=color(230, 230, 0);
    }

    if(destruction>180){
    car.shapeColor=color(255, 0, 0);
    }
  }
  
  drawSprites();
}