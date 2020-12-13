
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var division1,division2,
division3,division4,division5,particle

function preload() {
}

function setup(){
    var canvas = createCanvas(600,796);
    engine = Engine.create();
    world = engine.world;

	

    ground = new Ground(250,770,660,20);
    division1 = new Division(60,600,10,370); 
    division2 = new Division(160,600,10,370);
    division3 = new Division(260,600,10,370);
    division4 = new Division(360,600,10,370);
    division5 = new Division(460,600,10,370);
    particle = new Particle(100,50,10,10);
}





function draw(){
    background(0);
    Engine.update(engine);
    fill("White")
    
    ground.display();

    
    division1.display();
    division2.display();
    division3.display();
    division4.display();
    division5.display();
    particle.display();
}