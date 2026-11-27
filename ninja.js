
let x = 100;
let y = 100;
let velocity = 0;
let gravity = 1;
let jumpPower = -12;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  velocity += gravity;
  y += velocity;
  if (y > 100) {
    y = 100;
    velocity = 0;
  }
  if (keyIsDown (UP_ARROW) && y ==
100) {
  velocity = jumpPower;
}
if (keyIsDown (LEFT_ARROW) && y ==
100) {
  x -= 5;
}

if (keyIsDown(RIGHT_ARROW)&& y ==
100) {
  x += 5;
}
  background(10,100,200);
  drawBody(x + 100, y + 100);
  drawBandana(x, y);
  drawEyes(x, y);
  drawArms(x, y);

}

function drawBody(x,y) { //ninja
  noStroke();
  fill(36,36,36); //body black
  rect(x,y,50,50);
  rect(x+5,y+50,40,10);
  rect(x,y+60,50,70);
  rect(x,y+130,10,40);
  rect(x+40,y+130,10,40);

}


function drawArms (x,y) {
  noStroke();
  fill(36,36,36);
  rect(x+90,y+160,10,10);
  rect(x+80,y+160,10,50);
  rect(x+150,y+160,10,10);
  rect(x+160,y+160,10,50);
}


function drawBandana (x,y) {
  noStroke ();
  fill(180,37,37); //bandana red
  rect(x+100,y+110,50,10);
  rect(x+90,y+110,10,10);
  rect(x+80,y+90,10,20);
  rect(x+70,y+120,20,10);
  rect(x+70,y+80,10,10);
  rect(x+60,y+110,10,10);
}


function drawEyes (x,y) {
  noStroke ();
  fill(255,255,255); // eyes white 
  rect(x+120,y+120,10,10);
  rect(x+140,y+120,10,10);
 }
