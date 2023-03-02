function setup() {
  createCanvas(windowHeight, windowHeight);
  var gridSize = height/10;
  for (var  x = 0; x < width; x += gridSize) {
    for (var y = 0; y < height; y += gridSize){
      stroke(200);
      strokeWeight(1);
      square(x, y, gridSize);
      strokeWeight(3);
      var cell = 0;
      while (cell == 0) {
        var r = random();
        if (r < 0.3) {
          cell = 1;
          stroke(0);
          line(x + gridSize/2, y, x + gridSize/2, y + gridSize);
        }
        r = random();
        if (r < 0.3) {
  // diagonal lines        
          var rr = random();
          cell = 1;
          if (rr < 0.5) {
    // blue lines            
            stroke(0, 0, 255);
            line(x, y, x + gridSize, y + gridSize);
          } 
          else { 
    // red lines            
              stroke(255, 0, 0);
              line(x + gridSize, y, x , y + gridSize);
          } 
        }  
        r = random();
  // yellow line          
        if (r < 0.3){
            cell = 1;
            stroke(255, 255, 0);
            line(x, y + gridSize/2, x + gridSize, y + gridSize/2);
        }
      }
    }
  }
}

function draw() {
  
}