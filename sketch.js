const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var bg;
var engine, world;
var hammer;
var rubber;
var stone;
var iron;
var gameState=0;
var START=0;
var PLAY=1;
var END=2;
var gj_i;
function preload()
{
  bg=loadImage("laboratory.jpg");
  gj_i=loadImage("Good experimenting.png")
}
function setup(){
    var canvas = createCanvas(1200,600);
  
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,40)
    hammer = new Hammer(10,100);
    rubber= new Rubber(400,height-40,50,50);
    iron = new Iron(800,height-40,90,40);
    stone = new Stone(1000,height-40,90,40)


}

function draw(){
    background(bg);
    Engine.update(engine);
if(gameState===0)
{
  plane.display();

  push();
  strokeWeight(4);
  stroke("blue")
  textSize(40);
  textFont("Bernard MT Condensed");
  text("Welocome to the",width/2-50,height/2-70)

  textSize(110);
  textFont("Bernard MT Condensed");
  text("LABORATORY",width/2-200,height/2+50);
  pop();
  
  textSize(30);
  textFont("Bernard MT Condensed");
  text("Press RIGHT ARROW key to experiment",width/2-150,height/2+100)
}
if(keyCode===RIGHT_ARROW && gameState===0)
{
  gameState=1;
}
if(gameState===1)
{
    plane.display();
    hammer.display();
    rubber.display();
    iron.display();
    stone.display();
    text("Press LEFT ARROW key to finish experimenting",width/2-5,40);
}
if(keyCode===LEFT_ARROW && gameState===1)
{
  gameState=2;
}
if(gameState===2)
{
  background(gj_i);
  strokeWeight(10);
  stroke("lightgreen");
  textSize(60);
  textFont("Bernard MT Condensed")
  text("GOOD EXPERIMENTING!",width/2-200,height/2-60);
}
}