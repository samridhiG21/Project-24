const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stick1 , stick2 , stick3 , ground;


function setup() {
	createCanvas(1000, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(500,550,1000,30);

	paperObject = new Paper(100, 525);

	stick1 = new Stick(950,495,15,100);
	stick2 = new Stick(785,495,15,100);
	stick3 = new Stick(867.7,538,150,15);

	Engine.run(engine);
  
}

function draw() {

	Engine.update(engine);

 
    background(0);

	ground.display();
	paperObject.display();
	stick1.display();
	stick2.display();
	stick3.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		console.log("hi");
		console.log(paperObject.body.position)
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:185,y:-85});
	}
}

