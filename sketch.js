var sprite1, sprite2;

function setup() {
  createCanvas(800,400);
  sprite1=createSprite(50,150,50,50);
  sprite1.velocityX=9
  sprite1.shapeColor=("blue");
  sprite2=createSprite(800,150,65,75);
  sprite2.velocityX=-9
  

  
}

function draw() {
  background(255,255,255); 
  //sprite1.x=mouseX;
  //sprite1.y=mouseY; 

  if(isTouching(sprite1,sprite2)){


    sprite1.shapeColor=("yellow");
    sprite2.shapeColor=("red");
  }

else{sprite1.shapeColor=("blue");
     sprite2.shapeColor=("blue");}
     bounceOff(sprite1,sprite2)

  drawSprites();
}



