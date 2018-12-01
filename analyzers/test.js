testAnalyzer = s => {
  colorMode(RGB, 255);
  if (s.length == 0) {
    return color(255);
  } else {
    return s.length < 11 ? color(0, 0, 255 - s.length * 25) : color(0);
  }
}
