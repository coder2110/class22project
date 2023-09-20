
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
var ball

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

    var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	engine = Engine.create();
	world = engine.world;

	GroundObj=new Ground (width/2,670,width,20)
	leftSide=new Ground (1100,600,20,120)

	//Create the Bodies Here.
    Matter.Bodies.circle=(100,300,10,ball_options)
    World.add(world,ball)
	Matter.Bodies.rectangle(ground)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  drawSprites();
 
}



