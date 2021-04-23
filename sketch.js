const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine, world;
var object, ball;
function setup() {
 var canvas= createCanvas(400,400);
engine=Engine.create();
world=engine.world
var object_options={
isStatic:true
}
var ball_options={
  restitution:1.0
  }
object=Bodies.rectangle(200,100,50,50,object_options)
ball=Bodies.circle(200,100,20,ball_options);
World.add(world,ball);
World.add(world,object)
console.log(object.position.x)
}

function draw() {
  background(0);
  Engine.update(engine)
  rectMode(CENTER)
  ellipseMode(CENTER)
  ellipse(ball.position.x,ball.position.y,20,20);
  rect(object.position.x,object.position.y,50,50);
}