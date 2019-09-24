let x; 

function  setup() {
createCanvas(400,400); 
background(0);
x = 200;
}

function draw() {
background(0);
drawEllipse(x);
if(x < 400) {
x++; 
}
else{
x = 0; 
}
}

function drawEllipse(_posX) {
this.posX = _posX;
ellipse(this.posX, 200, 100);
}