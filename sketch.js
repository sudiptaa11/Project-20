var scene, sceneImg;

var cat, catSitting, catRunning, catHappy;

var mouse, mouseTeasing, mouseHappy;

function preload() {
    //load the images here
    sceneImg = loadImage("images/garden.png");

    catSitting = loadAnimation("images/cat1.png");
    catRunning = loadAnimation("images/cat2.png","images/cat3.png");
    catHappy = loadAnimation("images/cat4.png")

    mouseStanding = loadAnimation("images/mouse4.png")
    mouseTeasing = loadAnimation("images/mouse3.png","images/mouse2.png");
    mouseHappy = loadAnimation("images/mouse1.png");
}

function setup(){
    createCanvas(1000,800);

    scene = createSprite(500,400);
    scene.addImage(sceneImg);
    
    //create tom and jerry sprites here
    cat = createSprite(700,600);
    cat.addAnimation("Cat",catSitting);
    cat.scale = 0.2;
    
    mouse = createSprite(200,600);
    mouse.addAnimation("Mouse",mouseStanding);
    mouse.scale = 0.1;
}

function draw() {

    background(255);

    //Write condition here to evalute if tom and jerry collide
    if( (mouse.x - cat.x) > (-140) ){
        cat.velocityX = 0;
        cat.addAnimation("Cat", catHappy);
        mouse.addAnimation("Mouse",mouseHappy);
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW) {
    cat.velocityX = -5;
    cat.addAnimation("Cat",catRunning);
    mouse.addAnimation("Mouse", mouseTeasing);
  }
}
