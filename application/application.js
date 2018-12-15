"use strict";
function setupCanvas() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.parent(select('#canvasSpan'));
}

function setupObjects() {
	textContainer = new TextContainer(createVector(width/2, height/2), "");
	curser = new Curser(createVector(width/2, height/2));
	textToColor = new TextToColor();
}

function setup() {
	setupCanvas();
	setupObjects();
	loadAnalyzers();
	setupUI();
	if (testing) {
		setupTesting();
	}
	textColor = color(0);
	resize();
}

function draw() {
	drawUI();
	setColors();
	background(currentColor);
	textContainer.update();
	textContainer.display();
	curser.update(textContainer);
	curser.display();
	backspace();
	if (testing) {
		drawTesting();
	}
}

function setColors() {
	currentColor = textToColor.analyze(textContainer.getText());
	brightness(currentColor) > 50 ? textColor = color(0) : textColor = color(255);
	updateInfo(currentColor);
}

function windowResized() {
	resize();
}
