"use strict";
// Core Application
let textManager;
let textDisplayer;
let analyzerCollection;
let canvas;
let textColor;
let currentColor;
let font;
let informationPanel;

function preload() {
  font = loadFont('./fonts/OpenSans-Regular.ttf');
}

/**
 * Setup Canvas
 * 
 * Sets the canvas variable to a new canvas with the size of windowWidth and 
 * windowHeight. Then places the canvas in the #canvasSpan on the html page.
 */
function setupCanvas() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent(select('#canvasSpan'));
}

/**
 * Setup Objects
 * 
 * Creates the textManager, textDisplayer, and analyzerCollection with 
 * textDisplayer at centered within the canvas. The analyzerCollection is empty.
 */
function setupObjects() {
  textManager = new TextManager();
  textDisplayer = new TextDisplayer(textManager, createVector(width / 2, height / 2));
  analyzerCollection = new AnalyzerCollection();
}

/**
 * Setup
 * 
 * This is the setup method that p5 calls at the one time after page is loaded. 
 * In this case it sets up the canvas, all the objects, loads in the Analyzers 
 * the User Interface, and sets textColor to black to avoid an error, and the 
 * calls the resize function to resize the canvas to account for the navbar at 
 * the top of the page.
 */
function setup() {
  setupCanvas();
  setupObjects();
  loadAnalyzers();
  analyzerCollection.randomAnalyzer();
  setupUI();
  textColor = color(0);
  resize();
}

/**
 * Draw
 * 
 * Called by p5 continuously after setup unless told otherwise. Will update the 
 * currentColor variable, update and display both the textManager and curser, 
 * and run the backspace function.
 */
function draw() {
  setColor();
  background(currentColor);
  textDisplayer.display();
  backspace();
}

/**
 * Set Color
 * 
 * Gets a color from the TODO
 */
function setColor() {
  currentColor = analyzerCollection.analyze(textManager.getText());
  if (brightness(currentColor) > 50) {
    textDisplayer.setTextColor(color(0));
  } else {
    textDisplayer.setTextColor(color(255));
  }
  informationPanel.update(currentColor);
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
    textManager.clear();
  } else if (backspaceCount < 30) {
    backspaceCount++;
  }
}

function keyPressed() {
  if (keyCode === BACKSPACE) {
    textManager.removeLetter();
    backspaceCount = 0;
  }
}

function keyReleased() {
  if (keyCode === BACKSPACE) {
    backspaceCount = 31;
  }
}

// User Interface

let informationButton;

function setupUI() {
  let resizeElements = selectAll('.resizeEvent');
  for (let i = 0; i < resizeElements.length; i++) {
    resizeElements[i].mousePressed(resizeSmooth);
  }
  informationPanel = new InformationPanel('#infoHex', '#infoRed', '#infoGreen', '#infoBlue', '#infoHue', '#infoSaturation', '#infoBrightness');
  informationButton = new SelectButton('#informationButton');
  informationButton.setDescription('Color Information');
  informationButton.addTooltip(1);
  informationButton.setAction(informationPanel.informationPanelCollapse);
  textFont(font);
}

function calculateVerticalOffset() {
  let verticalElements = selectAll('.verticalElement');
  let verticalOffset = 0;
  for (let i = 0; i < verticalElements.length; i++) {
    verticalOffset += verticalElements[i].height;
  }
  return verticalOffset;
}

function calculateHorizontalOffset() {
  return informationPanel.getPanelWidth();
}

function resizeSmooth() {
  let smoothResize = setInterval(resize, 20);
  setTimeout(() => {
    clearInterval(smoothResize);
  }, 1000);
}

function resize() {
  resizeCanvas(windowWidth - calculateHorizontalOffset(), windowHeight - calculateVerticalOffset());
  textDisplayer.setOrigin(createVector(width / 2, height / 2))
}