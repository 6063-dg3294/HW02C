function setup() {
    createCanvas(600, 600);
   background(240,240,240);
}

function draw() {
    fill(232,60,151);
    strokeWeight(0);
    quad(20, 30, 200, 30, 200, 200, 20, 200);
    strokeWeight(0);
    quad(200, 30, 380, 35, 390, 205, 205, 200);
    strokeWeight(0);
    quad(20, 210, 200, 200, 200, 400, 20, 400);
    strokeWeight(0);
    quad(205, 210, 390, 210, 400, 400, 200, 400);
    strokeWeight(0);
    quad(400, 400, 600, 400, 600, 600, 400, 600);

}
