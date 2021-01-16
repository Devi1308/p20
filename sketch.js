var  Tom , tomImg;
var Jerry , jerryImg;
var ground,groundImg;

function preload() {
    //load the images here
    tomImg=loadImage("tomOne.png");
    jerryImg=loadImage("jerryOne.png");
    groundImg=loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    Tom=createSprite(800,300,30,30);
    Tom.addImage(tomImg);
    Tom.scale=0.1;

    Jerry=createSprite(600,300,30,30);
    Jerry.addImage(jerryImg);
    Jerry.scale=0.1;

    ground=createSprite(0,800,1000,800);
    ground.addImage(groundImg);
    ground.scale=1;
    ground.x=ground.width/2;
    ground.velocityX=-2;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(ground.x<0) {
        ground.x=ground.width/2;
      }
      
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
