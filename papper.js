class crumpledpaper
{
 constructor(x,y)
  {
    var options = {
        'isStatic':false,
        'density':1.5,
        'friction': 1.0,
        'restitution':0.5,
        
      }
      this.body = Bodies.circle(x,y, 40, options);
      this.radius = 70;
      
      World.add(world, this.body);  
  }
 display()
 {
    var pos = this.body.position;
    var angle = this.body.angle;
    

    push();
translate(pos.x,pos.y)
    
    rotate(angle);
    
    rectMode(CENTER);
    strokeWeight(3);
    stroke("red");
    fill("white");
    
    circle(0, 0, this.radius);


    pop();
 }

}
