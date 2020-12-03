
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;

var rope1, rope2, rope3, rope4, rope5;

function setup() {
	canvas = createCanvas(windowWidth / 2, windowHeight / 1.5);
	engine = Engine.create();
	world = engine.world;


	bob1 = new pendulum(200,200,20,20);
	bob2 = new pendulum();
    
	rope1 = new Sling();
   
}


function draw() {
	background(0);
	Engine.run(engine);
    rectMode(CENTER);
   
	bob1.display();
    bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
}



