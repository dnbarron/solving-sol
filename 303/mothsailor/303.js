function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  
  gutter = 400;
  sqsize = width/2 - gutter;
  translate(sqsize/2 + gutter/2, height/2);
  rectMode(CENTER);
  stroke(0);
  noFill();
  square(0, 0, sqsize);
  circle(0, 0, sqsize);
  triangle(0, -sqsize/2, -sqsize/2, sqsize/2, sqsize/2, sqsize/2);
  
  // second part
  
  translate(sqsize + gutter*.5, 0);
  rect(0, 0, sqsize - 50, sqsize);
  // trapezium
  quad(-sqsize/2, -sqsize/2, sqsize/2, -sqsize/2, 
       sqsize/2 + 100, sqsize/2, -sqsize/2 - 100, sqsize/2);
  // paralellogram
  quad(-sqsize/2, -sqsize/2, sqsize/2+100 , -sqsize/2,
       sqsize/2, sqsize/2, -sqsize/2 - 100, sqsize/2);
}

function draw() {
  
}