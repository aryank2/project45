var bird1, bird1img, bird2, bird2img, fallingBird, fallingBirdimg;
var pipe1, pipe2, pipe3, pipe4, pipe1img, pipe2img, pipe3img, pipe4img, pipe5, pipe5img, pipesGroup;
var start, startimg, play, playimg, restart, restartimg, gameover, gameoverimg ;
var bg, bgimg, ground, groundimg;
var gameState = PLAY;
var END, PLAY;
var score = 0;
var flySound, dieSound;

function preload(){
    bird1img = loadAnimation("bird1.png","bird2.png");
    fallingBirdimg = loadImage("falling.jpg");
    pipe1img = loadImage("pipe1.png");
    pipe2img = loadImage("pipe2.png");
    pipe3img = loadImage("pipe3.png");
    pipe4img = loadImage("pipe4.png");
    pipe5img = loadImage("pipe5.png");
    startimg = loadImage("start.png");
    playimg = loadImage("play.png");
    restartimg = loadImage("reset.png");
    gameoverimg = loadImage("gameover.png");
    bgimg = loadImage("background.png");
    groundimg = loadImage("ground.png");
}

function setup(){
    createCanvas(1350, 800);
    
    bg = createSprite(150, 400, 1350, 800);
    bg.addImage(bgimg);
    bg.x=bg.width/2;
    bg.velocityX=-10;

    ground = createSprite(700, 775, 1350, 25);
    ground.addImage(groundimg);
    ground.x=ground.width/2;
    ground.velocityX=-3;

    bird1 = createSprite(150, 400, 20, 20);
    bird1.addAnimation("flappy",bird1img);
    bird1.velocityY=-10;
    bird1.scale=0.3;
   // start = createSprite();
   // play
}

function draw(){
if (bg.x<0){
bg.x=bg.width/2;
}
bg.velocityX=-10;

if (keyDown("space")){
bird1.velocityY=-10;
}
bird1.velocityY=bird1.velocityY + 0.8;
bird1.velocityX=0;
drawSprites();
}