"use strict";
// Core Application
function setupCanvas() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.parent(select('#canvasSpan'));
}

function setupObjects() {
	textManager = new TextManager(createVector(width/2, height/2), "");
	curser = new Curser(createVector(width/2, height/2));
	analyzerCollection = new AnalyzerCollection();
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
	textManager.update();
	textManager.display();
	curser.update(textManager);
	curser.display();
	backspace();
	if (testing) {
		drawTesting();
	}
}

function setColors() {
	currentColor = analyzerCollection.analyze(textManager.getText());
	brightness(currentColor) > 50 ? textColor = color(0) : textColor = color(255);
	updateInfo(currentColor);
}

function windowResized() {
	resize();
}

// Input

let backspaceCount = 31;

function keyTyped() {
	textManager.addLetter(key);
}

function backspace() {
	if (backspaceCount === 30) {
		textManager.removeAll();
	} else if (backspaceCount < 30) {
		backspaceCount++;
	}
}

function keyPressed() {
	if (keyCode === BACKSPACE) {
		textManager.removeLast();
		backspaceCount = 0;
	}
}

function keyReleased() {
	if (keyCode === BACKSPACE) {
		backspaceCount = 31;
	}
}

// User Interface

let analyzerButtons = [];
let horizontalOffset = 0;

let infoHex;
let infoRed;
let infoGreen;
let infoBlue;
let infoHue;
let infoSaturation;
let infoBrightness;

function setupUI() {
  let resizeElements = selectAll('.resizeEvent');
  for (let i = 0; i < resizeElements.length; i++) {
    resizeElements[i].mousePressed(resizeSmooth);
  }
  let infoButton = select('#infoButton');
  infoButton.mousePressed(infoPanelCollapse);
  infoHex = select('#infoHex');
  infoRed = select('#infoRed');
  infoGreen = select('#infoGreen');
  infoBlue = select('#infoBlue');
  infoHue = select('#infoHue');
  infoSaturation = select('#infoSaturation');
  infoBrightness = select('#infoBrightness');
  textFont(font);
}

function drawUI() {

}

function calculateVerticalOffset() {
  let verticalElements = selectAll('.verticalElement');
  let verticalOffset = 0;
  for (let i = 0; i < verticalElements.length; i++) {
    verticalOffset += verticalElements[i].height;
  }
  return verticalOffset;
}

function resizeSmooth() {
  let smoothResize = setInterval(resize, 20);
  setTimeout(() => {
    clearInterval(smoothResize);
  }, 1000);
}

function resize() {
	resizeCanvas(windowWidth - horizontalOffset, windowHeight - calculateVerticalOffset());
	textManager.setLocation(createVector(width/2, height/2));
	curser.setOrigin(createVector(width/2, height/2));
}

function infoPanelCollapse() {
  if (horizontalOffset == 0) {
    let easeInfoPanelIn = setInterval(() => {
      if (horizontalOffset < 250) {
        horizontalOffset += 10;
      }
    }, 10);
    setTimeout(() => {
      clearInterval(easeInfoPanelIn);
      horizontalOffset = 250;
    }, 260);
  } else {
    let easeInfoPanelOut = setInterval(() => {
      if (horizontalOffset > 0) {
        horizontalOffset -= 10;
      }
    }, 10);
    setTimeout(() => {
      clearInterval(easeInfoPanelOut);
      horizontalOffset = 0;
    }, 260);
  }
}

// c = p5 color
function updateInfo(c) {
  colorMode(RGB, 255);
  let r = red(c).toFixed(1);
  let g = green(c).toFixed(1);
  let b = blue(c).toFixed(1);
  let h = hue(c).toFixed(1);
  let s = saturation(c).toFixed(1);
  let br = brightness(c).toFixed(1);
  let hex = hexPart(r) + hexPart(g) + hexPart(b);
  infoHex.html(hex);
  infoRed.html(r);
  infoGreen.html(g);
  infoBlue.html(b);
  infoHue.html(h);
  infoSaturation.html(s);
  infoBrightness.html(br);
}

function hexPart(c) {
  let part = int(c).toString(16);
  return part.length == 1 ? "0" + part : part;
}
