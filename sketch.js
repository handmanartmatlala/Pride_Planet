//let church; 
//let soil; 
let politics;
let song;
var house;

function preload(){
  //church = loadModel('Church.obj')
  song = loadSound('cinematic_drone.mp3')
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
 // soil = loadImage('soil.jpg'); 
  house = loadImage('surburb_house.png');
  politics = loadImage('politics.png');
  song.loop();
}

function draw() {
  background(247, 184, 116);
  orbitControl();
  
    camera(0, 0, 0 , 0, 0, 0, 0, 1, 0);  camera(250,-130, 320, 0, 0, 1, 0, 1, 0);
  noStroke(); 
  
  push(); 
  //texture(soil); 
  fill(227, 146, 59)
  box(900, 10, 700);
  pop();
  
  //street
  translate(0, -5, 0);
  push();
  fill(196, 103, 2)
  box(80, 10, 700);
  pop();
  
  //
  //translate(-5, 0, 0);
  push();
  fill(196, 103, 2);
  box(900, 10, 80);
  pop();
  
  //building
  translate(-150,-145,-150);
  push();
  rotateY(0.8)
  texture(politics)
  plane(300,300,290); 
  pop();
  
  
  //house
  //translate(210,55,-80);
  push();
   translate(290,95,-80);
  //rotateY(0.8)
  texture(house);
  plane(150,150,110); 
  pop();
  
  
  translate(450,95,-80);
  push();
  //rotateY(0.8)
  texture(house);
  plane(150,150,110); 
  pop();
  
 
 
   
  
//  push();
//  translate(0,-10,0); 
//  scale(5); 
//  rotateX(3.125)
//  rotateY(1.6)
//  fill(212, 166, 106);
 // model(church); 
//  pop(); 
}