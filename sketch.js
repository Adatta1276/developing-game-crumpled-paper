

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var PAPER1,DP1,DP2,DP3,GROUND;
var BG;
var dustbin,DI;

 function preload() {
	BG = loadImage("iimgs/classroom.png");
	DI = loadImage("iimgs/dustbingreen.png");
 }

function setup() {
	createCanvas(800, 700);  //midpoint of canvas is 400x,350y

	dustbin = createSprite(635,568.5,4.5,110);
	/*dustbin.addImage(DI);*/
	dustbin.scale = 0.75;
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	  
	PAPER1 = new Paper(70,650,30);
	GROUND = new Ground(400,697,803,10);
	DP1 = new D1(562,637,4.5,110);
	DP2 = new D2(649,690,170,4.5);
	DP3 = new D3(732,637,4.5,110);



	Engine.run(engine);



  
}


function draw() {
	background(0);
	Engine.update(engine);
	rectMode(CENTER);
	/* console.log(World.mouseX);
	console.log(World.mouseY); */

	console.log(PAPER1.x);
	console.log(PAPER1.y);

  keyPressed();
  
  drawSprites();
 
  PAPER1.display();
  GROUND.display();
  DP1.display();
  DP2.display();
  DP3.display();
}

function keyPressed() {
	if(keyWentDown(UP_ARROW)) {
        Matter.Body.applyForce(PAPER1.body,PAPER1.body.position,{x:43,y:-33});
	}
}
