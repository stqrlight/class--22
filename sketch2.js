const Engine = Matter.Engine ;
const World = Matter.World ;
const Bodies = Matter.Bodies ;

var engine , world , bodies ;

function setup () {
createCanvas (800,800)

engine = Engine.create () ; 
world = engine.world ;

bodies = Bodies.circle (200,200,20) ; 
World.add (world,bodies) ;


}

function draw () {
background (0) ;
Engine.update (engine) ;
ellipse (bodies.position.x,bodies.position.y,20,20) ;
drawSprites () ;
}