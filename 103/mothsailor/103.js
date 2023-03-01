function setup() {
  
  var canvas = createCanvas(windowWidth * 0.98, windowHeight * 0.97);
  background(255);
  stroke(100);
  strokeWeight(2);
        
  var numLines = random(5, 30);

  var scribble       = new Scribble();
  scribble.bowing    = 0.0;
  scribble.roughness = 10;

  for (var i = 0; i < numLines; i++){
    var x = random(10, width - 10);
    scribble.scribbleLine(x, 0, x, height);
  }
}

function draw() {
  
}
  
