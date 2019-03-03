function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (var i = 10; i <= 190; i = i + 10) {
    line(i, 10, i, i * 2);
  }
	
	  for (var i = 200; i <= 390; i = i + 10) {
    line(i, 10, i, 390);
  }
} 
