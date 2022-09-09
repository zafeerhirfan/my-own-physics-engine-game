
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball ;
var blower;
var air;

function preload(){
ball_image = loadImage("melon.png");
air = loadSound('air.wav');


}

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  ball = Bodies.circle(100,20,20);
  World.add(world,ball);
  

  blower = createImg("balloon.png");
  blower.position(90,300);
  blower.size(90,90);
  blower.mouseClicked(airblow);

  blower = createImg("balloon.png");
  blower.position(20,300);
  blower.size(90,90);
  blower.mouseClicked(airblow)

  blower = createImg("balloon.png");
  blower.position(150,300);
  blower.size(90,90);
  blower.mouseClicked(airblow)
}


function draw() 
{
  background("orange");
  Engine.update(engine);
  ellipseMode(CENTER);
 // ellipse(ball.position.x,ball.position.y,20);
 image(ball_image,ball.position.x,ball.position.y,60,60);
}

function airblow(){
Matter.Body.applyForce(ball,{x:0 , y: 0},{x:0 , y:-0.01});
air.play();
}
