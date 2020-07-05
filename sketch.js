var fixedRect, movingRect, object1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  object1 = createSprite(200, 200, 50, 60);
  object1.shapeColor="green";


}

function draw() {
  background(0,0,0);  

  movingRect.y=World.mouseY;
  movingRect.x=World.mouseX;

  if (isTouching(object1, movingRect)){
    object1.shapeColor="blue";
    movingRect.shapeColor="red";
  }
  else
  {
    object1.shapeColor="green";
    movingRect.shapeColor="green";
  }

  drawSprites();
}

