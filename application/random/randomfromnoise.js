"use strict";
/**
 * Random From Noise
 * 
 * Maps noise to bounds. If no bounds are specified then return value will be 
 * between 0 and 1. If bound1 is specified return value will be between 0 and 
 * bound1. If both bounds are specified return value will be between bound1 and 
 * bound2.
 * 
 * @param {Number} bound1 : Optional
 * @param {Number} bound2 : Optional
 */
function randomFromNoise(bound1, bound2) {
  let min;
  let max;
  if (typeof bound1 === 'number' && typeof bound2 === 'number') {
    min = bound1;
    max = bound2;
  } else if (typeof bound1 === 'number') {
    min = 0;
    max = bound1;
  } else {
    min = 0;
    max = 1;
  }
  return map(noise(frameCount * 0.01), 0, 1, min, max);
}