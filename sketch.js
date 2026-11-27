let x = 100;
let y = 100;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(90,150,200);
  drawPlayer (200,350);
  drawGrass (0,400);
}

function drawPlayer (x,y) { // red Square 
  fill (255,25,50);
  rect (x,y,50,50);
}

function drawGrass (x,y) { // grass
  fill (0,200,25);
  rect (x,y, 500,100);
}