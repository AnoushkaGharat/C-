var cat, catImage, catSneak, catHappy;

var mouse, mouseImage, mouseTaunt, mouseHappy;

var garden, gardenImage;

function preload() {
    //load the images here
    gardenImage = loadImage("images/garden.png");
    catImage = loadImage("images/cat4.png");
    mouseImage = loadImage("images/mouse2.png");
    mouseTaunt = loadImage("images/mouse3.png");
    
    catSneak = loadAnimation("images/cat2.png","images/cat3.png");
    
    catHappy = loadAnimation("images/cat1.png");
    mouseHappy = loadAnimation("images/mouse1.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(500,400,1000,800);
    garden.addImage("images/garden",gardenImage);

    cat = createSprite(850,600,50,59);
    cat.addImage("images/cat4.png",catImage);
    cat.scale = 0.2;

    mouse = createSprite(250,600,50,59);
    mouse.addImage("images/mouse2.png",mouseImage);
    mouse.scale = 0.2;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
     mouse.addAnimation("Happy do lucky",mouseHappy);
     mouse.changeAnimation("Happy do lucky",mouseHappy);
     cat.addAnimation("oh cool",catHappy);
     cat.changeAnimation("oh cool",catHappy);
     cat.velocityX = 0;
    }

    drawSprites();
}


function keyPressed(){
//For moving and changing animation write code here
 if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("taunt",mouseTaunt);
    mouse.changeAnimation("taunt");
   mouse.frameDelay = 25;
 }

 if(keyCode === LEFT_ARROW){
    cat.addAnimation("catRunning",catSneak);
    cat.changeAnimation("catRunning");
    cat.velocityX = -2;
}


}