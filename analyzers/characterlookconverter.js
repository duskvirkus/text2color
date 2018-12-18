"use strict";

function characterLookConverter(s) {
  if (s.length == 0) {
    colorMode(RGB, 255);
    return color(255);
  } else {
    colorMode(HSB, 100);
    let hue = s.length * 7;
    let sat = 50;
    let bri = 50;
    for (let i = 0; i < s.length; i++) {
      if (i % 3 == 0) {
        hue += characterLookDigitConverter(s.charAt(i));
      } else if (i % 3 == 1) {
        sat += characterLookDigitConverter(s.charAt(i));
      } else { // i % 3 == 2
        bri += characterLookDigitConverter(s.charAt(i));
      }
    }
    hue %= 100;
    sat %= 100;
    bri %= 100;
    return color(hue, sat, bri);
  }
}

function characterLookDigitConverter(c) {
  console.assert(c.length == 1, "Unexpected input to visualEquivalentDigitConverter() method.");
  c = c.toUpperCase();
  switch (c) {
    case 'D':
    case 'O':
    case 'U':
      return 0;
    case 'I':
    case 'L':
      return 1;
    case 'Z':
      return 2;
    case 'E':
      return 3;
    case 'A':
    case 'H':
    case 'X':
      return 4;
    case 'C':
    case 'G':
      return 6;
    case 'S':
      return 5;
    case 'F':
    case 'J':
    case 'T':
    case 'V':
    case '7':
      return 7;
    case 'B':
      return 8;
    case 'Q':
      return 9;
    case 'P':
      return 10;
    case 'R':
      return 12;
    case 'K':
      return 14;
    case 'N':
      return 71;
    case 'W':
      return 77;
    case 'M':
      return 171;
    default:
      return 0;
  }
}