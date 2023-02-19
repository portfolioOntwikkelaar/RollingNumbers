function setup() {
    createCanvas(1200, 800);
    textAlign(CENTER, CENTER);
    rectMode(CENTER);
    angleMode(DEGREES);
}

function draw() {
    background(0);

    var amount = 7;
    var spacing = 20;
    var radius = 90;

    for (var i = 0; i < amount; i++) {
        createNumberRing(radius + spacing * i, 70 + 30 * i, i);
    }

    drawTitleText();
    drawSubtitleText();
    drawWebsite();
}

function createNumberRing(radius, amount, seed) {
    randomSeed(seed);
    var randomNumbers = [];
    for (var i = 0; i <= amount; i++) {
        randomNumbers.push(parseInt(random(9), 10));
    }
    var spacing = 360 / amount;

    push();
    translate(width / 2, height / 2);
    var rotSpeed = 0.45;
    rotate(frameCount * random(-rotSpeed, rotSpeed));

    for (var i = 0; i < amount; i++) {
        push();
        rotate(i * spacing);
        var num = new Num(randomNumbers[i], 2 + radius, 4, 90, random(50, 255));
        num.render();
        pop();
    }

    pop();
}

function Num(msg, x, y, rot, clr) {
    this.x = x;
    this.y = y;
    this.rot = rot;
    this.msg = msg;
    this.color = clr;

    this.render = function() {
        push();
        fill(this.color);
        translate(this.x, this.y);
        rotate(this.rot);
        text(this.msg, 0, 0);
        pop();
    }
}

function drawTitleText() {
    push();
    translate(width / 2, height / 2);

    var scaleFactor = 0.5;
    var maxLimit = 200;
    if (frameCount < maxLimit) {
        var currentScale = map(frameCount, 0, maxLimit, 0, scaleFactor);
        scale(1.5 + currentScale);
    } else {
        scale(1.5 + scaleFactor);
    }

    strokeWeight(0.2);
    stroke(15);
    fill(0, 150, 130);
    rect(600, 200, 10, 900);

    fill(255);
    noStroke();
    textFont('Arial');
    text('', 0, 0);
    pop();
}

function drawSubtitleText() {
    push();

    translate(width/2, height/2 + 50);
    scale(1.3);

    push();
    fill('#ed225d');
    textFont('Arial');
    var msg = '';
    text(msg, 0, 0);
    pop();

    pop();
}

function drawWebsite() {
    push();

    translate(width/2, height * 0.95);
    scale(1.2);

    push();

    textFont('Verdana');
    var msg = '';
    fill('#ed225d');
    textSize(12);
    text(msg, 0, 0);
    pop();

    pop();
}
