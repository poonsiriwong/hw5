function setup() {
  createCanvas(400, 400);
}

var x = [];
var y = [];

function draw() {
  background(220);
	
	x.push(200); // equivalent to append(x, mouseX)
  y.push(200); // equivalent to append(y, mouseY)

  for (var i = 0; i < x.length; i = i + 10) {
    ellipse(x[i], y[i], 1 + (x.length - i));
  }

  x = x.slice(-390); // keep the last 50 x values
  y = y.slice(-390); // keep the last 50 y values
}
