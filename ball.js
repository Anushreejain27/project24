class ball{
constructor (x,y,r){
var ball_opt={
    restitution:0.3,
    friction:0.5,
    isStatic:false,
    density:1.2
  




}


this.body=Bodies.circle(x,y,r,ball_opt)
this.radius=r
World.add(world,this.body)


















}

display(){
    var ballpos=(this.body.position) 
    
    translate(ballpos.x,ballpos.y)
    ellipseMode(RADIUS)
    fill("blue")
    
 
    ellipse(0,0,this.radius,this.radius)
   
    }
    
    

























}













