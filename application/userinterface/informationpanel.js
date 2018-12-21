"use strict";
/**
 * Information Panel Class
 * 
 * Used to keep track of all spans in the information panel on the html page. 
 * Update is used to set the html to display the correct numbers for the 
 * currentColor.
 */
class InformationPanel {

  /**
   * Constructor
   * 
   * Pass in string with the id of each span in the information panel on the 
   * html page.
   * 
   * Example: '#infoHex'
   * 
   * @param {String} hexSelector 
   * @param {String} redSelector 
   * @param {String} greenSelector 
   * @param {String} blueSelector 
   * @param {String} hueSelector 
   * @param {String} saturationSelector 
   * @param {String} brightnessSelector 
   */
  constructor(hexSelector, redSelector, greenSelector, blueSelector, hueSelector, saturationSelector, brightnessSelector) {
    this.hex = select(hexSelector);
    this.red = select(redSelector);
    this.green = select(greenSelector);
    this.blue = select(blueSelector);
    this.hue = select(hueSelector);
    this.saturation = select(saturationSelector);
    this.brightness = select(brightnessSelector);
    this.panelWidth = 0;
    this.panelWidthMax = 250;
    this.informationPanelCollapse = this.informationPanelCollapse.bind(this);
  }

  /**
   * Update
   * 
   * Will update the html of all spans in the information panel on the html 
   * page using the color passed to the update function.
   * 
   * @param {p5.Color} c 
   */
  update(c) {
    colorMode(RGB, 255);
    let r = red(c).toFixed(1);
    let g = green(c).toFixed(1);
    let b = blue(c).toFixed(1);
    this.hex.html(this.calculateHex(r, g, b));
    this.red.html(r);
    this.green.html(g);
    this.blue.html(b);
    this.hue.html(hue(c).toFixed(1));
    this.saturation.html(saturation(c).toFixed(1));
    this.brightness.html(brightness(c).toFixed(1));
  }

  /**
   * Calculate Hex
   * 
   * Takes in rgb values and returns a string with the hex code of the color.
   * 
   * @param {Number} r 
   * @param {Number} g 
   * @param {Number} b 
   */
  calculateHex(r, g, b) {
    return this.calculateHexPart(r) + this.calculateHexPart(g) + this.calculateHexPart(b);
  }

  /**
   * Calculate Hex Part
   * 
   * Takes in a single number and return a two digit hexadecimal number.
   * 
   * @param {Number} c 
   */
  calculateHexPart(c) {
    let part = int(c).toString(16);
    return part.length == 1 ? "0" + part : part;
  }

  /**
   * Information Panel Collapse
   * 
   * Will gradually increase or decrease panel width based on the size when 
   * this function is called.
   */
  informationPanelCollapse() {
    if (this.panelWidth == 0) {
      let easeInformationPanelIn = setInterval(() => {
        if (this.panelWidth < this.panelWidthMax) {
          this.panelWidth += 10;
        }
      }, 10);
      setTimeout(() => {
        clearInterval(easeInformationPanelIn);
        this.panelWidth = this.panelWidthMax;
      }, (this.panelWidthMax + 10));
    } else {
      let easeInformationPanelOut = setInterval(() => {
        if (this.panelWidth > 0) {
          this.panelWidth -= 10;
        }
      }, 10);
      setTimeout(() => {
        clearInterval(easeInformationPanelOut);
        this.panelWidth = 0;
      }, (this.panelWidth + 10));
    }
  }

  /**
   * Get Panel Width
   */
  getPanelWidth() {
    return this.panelWidth;
  }

}