const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin,dustbin2,dustbIMG, dustbin3, paper, ground;
var world;

function preload()
{
	dustbIMG = loadImage("dustbingreen.png");
}

function setup(){
	createCanvas(1240,600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	dustbin = new Dustbin(830, 470, 10, 200);
	dustbin2 = new Dustbin(970, 470, 10, 200);
	paper = new Paper(200,350,20);
	ground = new Ground (width/2,580,width,20);
	dustbin3=createSprite(900, 470, 10,10);
	dustbin3.addImage(dustbIMG);
	dustbin3.scale=0.6;
	Engine.run(engine);
}

function draw(){

	background("grey");

	paper.display();
	dustbin.display();	
	dustbin2.display();
	ground.display();
	drawSprites();
}

function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:70,y:-75});

	}


} 