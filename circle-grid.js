function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  for (var x = 10; x <= 390; x = x + 10) {
		for (var y = 10; y <= 390; y = y + 10) {
    ellipse(x, y, 10, 10);
  }
}
}
