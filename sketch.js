var Engine = Matter.Engine,
 World = Matter.World,
 Events=Matter.Events,
 Bodies = Matter.Bodies;
var Particles =[];
var Plinko=[];
var divisions=[];
var engine;
var world;
var Ground;
var divisionsHeight = 300
var count=0;
var score=0;
var gameState="start"
var particle;
function setup() {
  createCanvas(800,800);
  engine = Engine.create();
	world = engine.world;
Ground=new ground(width/2,height,width,20);
for ( var j =40; j<=width; j=j+50)
{
Plinko.push(new plinko(j,75))
}
for ( var j =15; j<=width-10; j=j+50)
{
Plinko.push(new plinko(j,175))
}
for ( var j =40; j<=width; j=j+50)
{
Plinko.push(new plinko(j,275))
}
for ( var j =15; j<=width-10; j=j+50)
{
Plinko.push(new plinko(j,375))
}
for(var k=0;k<=width;k=k+80)
{
  divisions.push(new divison(k,height-divisionsHeight/2,10,divisionsHeight))
}





}

function draw() {
  background(25,55,65);  
  fill ("black");
textSize(20);
text("500",5,550)
text("500",80,550)
text("500",160,550)
text("500",240,550)
text("100",320,550)
text("100",400,550)
text("100",480,550)
text("200",560,550)
text("200",640,550)
text("200",720,550)
text('score'+score,20,40);
  Engine.update(engine)
Ground.display();
/*if(frameCount%60===0){
  Particles.push(new partical(random(width/2-10,width/2+10),10,10))
}
for(var j=0;j<Particles.length;j++){
  Particles[j].display();
  }*/
  for (var k=0;k<divisions.length;k++){
    divisions[k].display();
  }
  for(var i=0;i<Plinko.length;i++){
    Plinko[i].display();
  }
  if(particle!==null){
    particle.display();
  
if(particle.body.position.y>760){
if(particle.body.position.x<300){
  score=score+500
  particle=null
  if(count>=5)gameState="end";
}
else if(particle.body.position.x>301){
  score=score+100
  particle=null
  if(count>=5)gameState="end";
}
else if(particle.body.position.x>601){
  score=score+200
  particle=null
  if(count>=5)gameState="end";
}
} 
}

}

function mousePressed(){
if(gameState!=="end"){
count++;
  particle=new partical(mouseX,10,10,10);
}

}