function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  

  slider = createSlider(1,50,25, 1);
  button = createButton('Borrar');
  colorPicker = createColorPicker('#ed225d');

  slider.position(60,15);
  button.position(200,20);
  colorPicker.position(265, 15);

  button.mousePressed(() => background(255));
}

function draw() {
  push();
  noStroke();
  fill(200);
  rect(0, 0, windowWidth, windowHeight/16);
  fill(colorPicker.color())
  circle(30,30,slider.value());
  pop();
}

function mousePressed(){
  if( mouseY > windowHeight/16){
    push();
    fill(colorPicker.color());
    stroke(colorPicker.color());
    circle(mouseX,mouseY,slider.value());
    pop();
  }    
}

function mouseDragged(){
  if( mouseY > windowHeight/16){
    push();
    stroke(colorPicker.color());
    strokeWeight(slider.value());
    line(mouseX, mouseY, pmouseX, pmouseY);
    pop();
  }  
}