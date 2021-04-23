const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

function setup() {
  createCanvas(800,400);
  
  engine=Engine.create()
  world=engine.world;

  var options={isStatic:true}
  ground=Bodies.rectangle(400,380,1000,20,options)
  World.add(world,ground)

  var options={restitution:1}
ball=Bodies.circle(400,200,20,options)
World.add(world,ball)
}

function draw() {
  background("black");  
  Engine.update(engine)
  fill("green")
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,1000,20)
  fill("blue")
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  drawSprites();
}