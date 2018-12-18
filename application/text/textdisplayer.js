"use strict";
/**
 * Text Displayer
 * 
 * Will display the contents of a TextManager and Curser. Keeps track of the 
 * origin where the text should be displayed.
 */
class TextDisplayer {

  /**
   * Constructor
   * 
   * @param {TextManager} textManager 
   * @param {p5.Vector} origin 
   */
  constructor(textManager, origin) {
    this.textManager = textManager;
    this.origin = origin;
    this.textSizeMax = height / 10;
    this.textSize = this.textSizeMax;
    this.textColor = color(0);
  }

  /**
   * Display
   */
  display() {
    this.updateTextSize();
    textAlign(CENTER, CENTER);
    textSize(this.textSize);
    noStroke();
    fill(this.textColor);
    text(this.textManager.getText(), this.origin.x, this.origin.y);
    this.displayCurser();
  }

  /**
   * Display Curser
   * 
   * Will use the frame count to make the curser blink and render curser based 
   * on the textSize with an offset except for when text is empty.
   */
  displayCurser() {
    if (int(frameCount / 30) % 2 == 0) {
      let offset = 8;
      if (this.textManager.getText().length == 0) {
        offset = 0;
      }
      text('|', this.origin.x + this.getTextWidth() / 2 + offset, this.origin.y - this.textSize / 10);
    }
  }

  /**
   * Update Text Size
   * 
   * Checks to see if the text is too large to fit on the screen with some 
   * space around it. If so it will make it smaller. Also checks to see if the 
   * text is too small and will increase the size until it reaches textSizeMax.
   */
  updateTextSize() {
    if (this.getTextWidth() > width - width / 20) {
      while (this.getTextWidth() > width - width / 20) {
        this.setTextSize(this.textSize - 1);
      }
    } else if (this.textSize < this.textSizeMax) {
      while (this.getTextWidth() < width - width / 10 && this.textSize < this.textSizeMax) {
        this.setTextSize(this.textSize + 1);
      }
    }
  }

  /**
   * Set Text Size
   * 
   * @param {Number} size 
   */
  setTextSize(size) {
    this.textSize = size;
  }

  /**
   * Get Text Width
   * 
   * Returns the width of the text if displayed at the current textSize
   */
  getTextWidth() {
    textSize(this.textSize);
    return textWidth(this.textManager.getText());
  }

  /**
   * Set Text Color
   * 
   * @param {p5.Color} color 
   */
  setTextColor(color) {
    this.textColor = color;
  }

  /**
   * Set Text Size Max
   * 
   * @param {Number} size 
   */
  setTextSizeMax(size) {
    this.textSizeMax = size;
  }

  /**
   * Set Origin
   * 
   * @param {p5.Vector} origin 
   */
  setOrigin(origin) {
    this.origin = origin;
  }

}