class plinko{
    constructor(x,y){
    var papers={
    restitution:1,
    friction:0,
    isStatic:true
    
    }
    this.r=10;
    this.body=Bodies.circle(x,y,this.r,papers)
    World.add(world,this.body);
    
    
    
    }
    display(){
    var pos=this.body.position
    var angle=this.body.angle
    push()
    translate (pos.x,pos.y)
    rotate(angle)
    imageMode(CENTER);
    ellipseMode(RADIUS)
    fill ("blue")
    ellipse(0,0,this.r,this.r)
    pop()
    
    }
    
    
    
    }