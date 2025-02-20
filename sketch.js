let bgColor;
let mainHeading;
let morriganEllipse;
let erlEllipse;
let rusalkaEllipse;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgColor = color(0); // background color to black

  // Select the heading and attach a mousePressed event
  // mainHeading = select('#main-heading');
  // mainHeading.mousePressed(canvasBg);

  morriganEllipse = select('#morrigan-page');
  erlEllipse = select('#erl-page');
  rusalkaEllipse = select('#rusalka-page');

  morriganEllipse.mousePressed(highlightMorrigan);
  erlEllipse.mousePressed(highlightErl);
  rusalkaEllipse.mousePressed(highlightRusalka);
}

function canvasBg() {
  // Change background to a random color
  bgColor = color(random(255), random(255), random(255));
}

function randomColor() {
  return color(random(255), random(255), random(255));
}

function highlightMorrigan() {
  morriganEllipse.style('background-color', randomColor());
}

function highlightErl() {
  erlEllipse.style('background-color', randomColor());
}

function highlightRusalka() {
  rusalkaEllipse.style('background-color', randomColor());
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function draw() {
  background(bgColor); // Clear the canvas with the background color
  
  stroke(0,0,255); // blue
  strokeWeight(2);
  line(500,220,800,220); // left line of morrigan


  stroke(0,0,255); //blue
  strokeWeight(2);
  line(500,220,500,600); // down line of morrigan

  stroke(255); // black
  strokeWeight(2); 
  line(700,220,975,220);
  line(975,220,975,600);

  stroke(255,0,0);
  strokeWeight(2);
  line(975,220,500,600);
  line(975,600,500,600);

  
}

