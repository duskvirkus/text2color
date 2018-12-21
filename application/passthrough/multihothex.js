"use strict";

/*
 * Conceptual Explanation
 *
 * Converts a number between 0 and 255 into an array of length 32 with two 1 
 * signifying hot values. Used in TensorFlow model to retain information while 
 * reducing number of outputs. The first 16 digits will contain one 1 to 
 * signify which section the digit is in. The second 16 will contain will 
 * contain one 1 to signify the fine grain offset within the section.
 * 
 * Examples:
 * 31 Becomes:
 * [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
 *  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
 * 120 Becomes:
 * [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
 *  0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]
 * 240 Becomes:
 * [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
 *  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
 */

/**
 * Multi Hot Hex
 * 
 * Creates hot array similar to oneHot in Tensor Flow. Just with multiple hots. 
 * in hexadecimal inspired form form.
 * 
 * @param {Number} number 
 * @param {Number} hexDigits : Optional, defaults to 2
 */
function multiHotHex(number, hexDigits) {
  if (!hexDigits) hexDigits = 2;
  let hex = number.toString(16);
  let output = [];
  while (hex.length < hexDigits) {
    let zero = 0;
    hex = zero.toString(16) + hex;
  }
  while (hex.length > hexDigits) {
    hex = hex.substring(1, hex.length);
  }
  for (let i = 0; i < hex.length; i++) {
    let hot = parseInt(hex.charAt(i), 16)
    for (let j = 0; j < 16; j++) {
      if (j == hot) {
        output.push(1);
      } else {
        output.push(0)
      }
    }
  }
  return output;
}

/**
 * Multi Hot Hex To Color
 * 
 * Converts a hot hex array into a p5.Color.
 * 
 * @param {Number[]} input 
 */
function multiHotHexToColor(input) {
  let hex = '';
  for (let i = 0; i < 6; i++) {
    let offset = i * 16;
    let record = 0;
    let index = 0;
    for (let j = 0; j < 16; j++) {
      if (input[offset + j] > record) {
        record = input[offset + j];
        index = j;
      }
    }
    hex += index.toString(16);
  }
  return hexToColor(hex);
}

/**
 * Hex To Color
 * 
 * Converts a 6 digit hexadecimal number to a p5.Color.
 * 
 * @param {String} hex : Hexadecimal number
 */
function hexToColor(hex) {
  if (hex.length != 6) return null;
  return color(parseInt(hex.substring(0, 2), 16), parseInt(hex.substring(2, 4), 16), parseInt(hex.substring(4, 6), 16));
}