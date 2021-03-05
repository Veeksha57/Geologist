
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer,hammer2;
var plane,plane2;
var stone,stone2;
var rubber,rubber2;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
hammer=new Hammer(710,350);
plane = new Plane(600,  height,1200,20);
stone=new Stone(200,200,50,50);
rubber=new Rubber(100,150);

hammer2=new Hammer(9100,350);
stone2=new Stone(1000,100,50,50);
rubber2=new Rubber(810,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  hammer.display();
  plane.display();
  stone.display();
rubber.display();
  hammer2.display();
  stone2.display();
  rubber2.display();
 
}



