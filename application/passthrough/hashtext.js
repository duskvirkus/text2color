"use strict";
/**
 * Hash Text
 * 
 * A simple text hasher to create input for TensorFlow models. Unless there's a 
 * reason don't specify hashSize.
 * 
 * @param {String} text 
 * @param {Number} hashSize : Optional 16 by default
 */
function hashText(text, hashSize) {
  if (!hashSize) hashSize = 16;
  let hashed = [];
  for (let i = 0; i < hashSize; i++) {
    hashed[i] = 0;
  }
  for (let i = 0; i < text.length; i++) {
    hashed[i % hashSize] += text.charCodeAt(i);
  }
  return hashed;
}