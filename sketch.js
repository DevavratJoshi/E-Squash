var ball, paddle, ball1, paddle1;

function preload() {
  ball1 = loadImage("ball.png");
  paddle1 = loadImage("paddle.png");
}

function setup() {
  createCanvas(400, 400);
  ball = createSprite(50, 200, 20, 20);
  ball.addImage( ball1);

  paddle = createSprite(370, 200, 70, 2);
  paddle.addImage(paddle1);
  
    ball.velocityX = 2;
  ball.velocityY = -3;
}

function draw() {
  background(400,400);
 edges=createEdgeSprites();
  ball.bounceOff(edges[0]); 
   ball.bounceOff(paddle);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
if(paddle.y > 400){
  paddle.y = 350;
  paddle.velocityY = 0;
}
  if(paddle.y < 0){
  paddle.y = 50;
    paddle.velocityY = 0;

}

  if (keyDown(UP_ARROW)) {
    paddle.velocityY = -5;
  }

  if (keyDown(DOWN_ARROW)) {
    paddle.velocityY = 5;
  }
  drawSprites();

}