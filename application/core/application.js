"use strict";
// ########################
// Core Application
// ########################

// ########################
// Global Variables
// ########################

let canvas;
let textManager;
let textDisplayer;
let analyzerCollection;
let currentColor;
let font;
let informationPanel;
let backspaceCount;

// ########################
// p5.js Functions
// ########################

/**
 * Preload
 * 
 * p5.js function for preloading elements before setup. Loads font.
 */
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
 * Setup
 * 
 * This is the setup method that p5 calls at the one time after page is loaded. 
 * In this case it sets up the canvas, all objects, and resizing functionality. 
 * Then calls the resize function to resize the canvas to account for the 
 * navbar at the top of the page.
 */
function setup() {
  setupCanvas();
  setupText();
  setupInformationPanel();
  setupAnalyzers();
  setupResizing();
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
  updateColor();
  background(currentColor);
  textDisplayer.display();
  updateBackspace();
}

// ########################
// Objects
// ########################

/**
 * Setup Text
 * 
 * Creates the textManager and textDisplayer. Sets the font to loaded font.
 */
function setupText() {
  textManager = new TextManager();
  textDisplayer = new TextDisplayer(textManager, createVector(width / 2, height / 2));
  textFont(font);
}

/**
 * Setup Information Panel
 * 
 * Creates the information panel. Gets the information button from html and 
 * adds functionality and tooltip.
 */
function setupInformationPanel() {
  informationPanel = new InformationPanel('#infoHex', '#infoRed', '#infoGreen', '#infoBlue', '#infoHue', '#infoSaturation', '#infoBrightness');
  let informationButton = new SelectButton('#informationButton');
  informationButton.setDescription('Color Information');
  informationButton.addTooltip(1);
  informationButton.setAction(informationPanel.informationPanelCollapse);
}

/**
 * Setup Analyzers
 * 
 * Creates analyzerCollection and loads analyzers then selects random analyzer 
 * to use.
 */
function setupAnalyzers() {
  analyzerCollection = new AnalyzerCollection();
  loadAnalyzers();
  analyzerCollection.randomAnalyzer();
}

// ########################
// Color
// ########################

/**
 * Set Color
 * 
 * Gets a color from the current analyzer. Then sets the the text color 
 * accordingly and updates the information panel.
 */
function updateColor() {
  currentColor = analyzerCollection.analyze(textManager.getText());
  if (brightness(currentColor) > 50) {
    textDisplayer.setTextColor(color(0));
  } else {
    textDisplayer.setTextColor(color(255));
  }
  informationPanel.update(currentColor);
}

// ########################
// Input
// ########################

/**
 * Setup Input
 * 
 * Sets the backspaceCounter to 31 to avoid clear being triggered immediately.
 */
function setupInput() {
  backspaceCount = 31;
}

/**
 * Backspace
 * 
 * Will clear textManager if backspaceCounter is at 30. Adding functionality 
 * the where holding down backspace clears text. Will increment 
 * backspaceCounter if it's below 30.
 */
function updateBackspace() {
  if (backspaceCount === 30) {
    textManager.clear();
  } else if (backspaceCount < 30) {
    backspaceCount++;
  }
}

/**
 * Key Typed
 * 
 * p5.js function. Adds typed key to textManager.
 */
function keyTyped() {
  textManager.addLetter(key);
}

/**
 * Key Pressed
 * 
 * p5.js function. Checks to see if key is backspace. Will remove last 
 * character in text and starts backspaceCounter.
 */
function keyPressed() {
  if (keyCode === BACKSPACE) {
    textManager.removeLetter();
    backspaceCount = 0;
  }
}

/**
 * Key Released
 * 
 * p5.js function. Checks to see if key is backspace. Will set backspaceCounter 
 * out of range for clearing text.
 */
function keyReleased() {
  if (keyCode === BACKSPACE) {
    backspaceCount = 31;
  }
}

// ########################
// Resizing
// ########################

/**
 * Setup Resizing
 * 
 * Will find all elements in html with the class resize event and add a smooth 
 * resize event to be triggered when they're pressed.
 */
function setupResizing() {
  let resizeElements = selectAll('.resizeEvent');
  for (let i = 0; i < resizeElements.length; i++) {
    resizeElements[i].mousePressed(resizeSmooth);
  }
}

/**
 * Window Resized
 * 
 * p5.js function. Triggered by browser being resized. Will call resize.
 */
function windowResized() {
  resize();
}

/**
 * Resize
 * 
 * Resizes canvas and changes textDisplayer accordingly.
 */
function resize() {
  resizeCanvas(windowWidth - calculateHorizontalOffset(), windowHeight - calculateVerticalOffset());
  textDisplayer.setOrigin(createVector(width / 2, height / 2))
}

/**
 * Resize Smooth
 * 
 * Will call resize multiple times to account for animated elements.
 */
function resizeSmooth() {
  let smoothResize = setInterval(resize, 20);
  setTimeout(() => {
    clearInterval(smoothResize);
  }, 1000);
}

/**
 * Calculate Vertical Offset
 * 
 * Finds all elements in page with verticalElement class and adds their height 
 * to the return value.
 */
function calculateVerticalOffset() {
  let verticalElements = selectAll('.verticalElement');
  let verticalOffset = 0;
  for (let i = 0; i < verticalElements.length; i++) {
    verticalOffset += verticalElements[i].height;
  }
  return verticalOffset;
}

/**
 * Calculate Horizontal Offset
 * 
 * Currently gets the width of informationPanel as it's the only horizontal 
 * element to account for.
 */
function calculateHorizontalOffset() {
  return informationPanel.getPanelWidth();
}