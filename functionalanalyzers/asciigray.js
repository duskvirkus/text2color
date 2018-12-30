"use strict";
/**
 * ASCII Gray
 * 
 * Calculates a gray value based on ASCII codes of characters.
 * 
 * @param {String} text 
 */
function asciiGray(text) {
  colorMode(RGB, 255);
  let gray = 0;
  for (let i = 0; i < text.length; i++) {
    gray += text.charCodeAt(i);
  }
  gray %= 256;
  return color(gray);
}