const Engine = Matter.Engine;
const Composite= Matter.Composite;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var backgroundImg;

var slingshot, gameState = "onSling";



function preload(){
    backgroundImg = loadImage("./sprites/circus-back.jpg");

    
}

function setup(){
    canvas = createCanvas(1550,600);
    engine = Engine.create();
    world = engine.world;
    ground1 = new Ground(width/2,height-10,width,20);
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

   ground1.display();

}


function keyPressed(){

}

