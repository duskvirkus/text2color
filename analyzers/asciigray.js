"use strict";

function asciiGray(s) {
  colorMode(RGB, 255);
  let gray = 0;
  for (let i = 0; i < s.length; i++) {
    gray += s.charCodeAt(i);
  }
  gray %= 256;
  return color(gray);
}