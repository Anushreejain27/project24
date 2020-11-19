
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  var ballo={
  restitution:0.3,
  friction:0.5,
  isStatic:true,
  density:1.2




  }






     Matter.Bodies.circle(40,670,10,ballo)



  
ball1=new ball(30,670,15,15)
  

ground=new line(400,690,800,20)
 line1=new line(600,630,20,100)
 line2=new line(700,630,20,100)
 line3=new line(650,680,100,20)



   
	Engine.run(engine);
  
}

function keyPressed(){
	if (keyCode === UP_ARROW){

      Matter.Body.applyForce(ball1.body, ball1.body.position, {x:400,y:-6700});

	}
}








function draw() {
  
  background(0);

//ellipseMode(RADIUS)
//fill("red")
//ellipse(ball1.position.x,ball1.position.y,15,15)

text(mouseX+","+mouseY,mouseX,mouseY);
textSize(30)
fill("yellow")
text("press the up arrow key to throw the ball in the dustbin",25,100);

ground.display()
line1.display()
line2.display()  
line3.display()
ball1.display()
keyPressed()
  drawSprites();
 
}








