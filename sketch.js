function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  

  slider = createSlider(1,50,25, 1);
  button = createButton('Borrar');

  slider.position(15,15);
  button.position(150,15);

  button.mousePressed(() => background(255));
}

function draw() {
  push();
  noStroke();
  fill(200);
  rect(0, 0, windowWidth, windowHeight/16);
  pop();
}

function mouseDragged(){
  if( mouseY > windowHeight/16){
    strokeWeight(slider.value());
    line(mouseX, mouseY, pmouseX, pmouseY);
  }  
}