"use strict";
/**
 * Blue Velvet
 * 
 * Creates subtlety changing blueish colors.
 * 
 * @param {String} text 
 */
function blueVelvet(text) {
  colorMode(HSB, 360);
  let hue = 25;
  for (let i = 0; i < text.length; i++) {
    hue += text.charCodeAt(i);
  }
  hue = hue % 50 + 200 // convert hue to be between 200 and 250
  let brightness = randomFromNoise(100, 200);
  return color(hue, 300, brightness);
}