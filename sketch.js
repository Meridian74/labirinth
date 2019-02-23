var x = 0;
var y = 0;
var spacing = 20;

function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  stroke(0);
  if (random(1) < 0.5) {
    line(x, y, x + spacing, y + spacing);
  }
  else {
    line(x, y + spacing, x + spacing, y);
  }
  
  x = x + spacing;
  if (x > width - spacing) {
    x = 0;
    y = y + spacing;
  }

  if (y > height - spacing) {
    throw new Error('vége a rajzolásnak...!');
  }

}