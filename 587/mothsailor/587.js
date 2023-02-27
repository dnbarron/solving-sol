function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  
  noFill();
  translate(width/2, height/2);
 line(0, -height/2, 0, height/2);
 line(-height/2, 0, height/2, 0);
  circle(0, 0, height);
 
  let r = height/2;
  
  for (let i = 0; i < 11; i++){
    let angle = random(-PI, PI);
    line(r * cos(angle), r * sin(angle), 
    r * cos(angle - PI), r * sin(angle - PI));
  }
}

function draw() {
  
}