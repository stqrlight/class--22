function setup() {
  createCanvas(800,400);
 fixrectangle = createSprite (300,200,50,20) ;
 movingrectangle = createSprite (500,200,20,50) ;
 fixrectangle.shapeColor = "green"
 movingrectangle.shapeColor = "green"
}
function draw() {
  background(255,255,255);
  movingrectangle.x = World.mouseX ;
  movingrectangle.y = World.mouseY ;
 if (isTouching (movingrectangle,fixrectangle)) 
 {
  fixrectangle.shapeColor = "red"
  movingrectangle.shapeColor = "red"
 }
 else 
 {
  fixrectangle.shapeColor = "green"
  movingrectangle.shapeColor = "green"
 }
  drawSprites();
}
function isTouching () {

  if (movingrectangle.x - fixrectangle.x < fixrectangle.width / 2 + movingrectangle.width / 2
    && fixrectangle.x - movingrectangle.x < fixrectangle.width / 2 + movingrectangle.width / 2
    && movingrectangle.y - fixrectangle.y < fixrectangle.height / 2 + movingrectangle.height / 2
    && fixrectangle.y - movingrectangle.y < fixrectangle.height / 2 + movingrectangle.height / 2) 

  {
  return true ;  
  }
  else
  {
 return false ;  
  }





}