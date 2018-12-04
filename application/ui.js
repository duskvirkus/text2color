let analyzerButtons = [];

setupUI = () => {
  let resizeElements = selectAll('.resizeEvent');
  for (let i = 0; i < resizeElements.length; i++) {
    resizeElements[i].mousePressed(resizeSmooth);
  }
}

drawUI = () => {

}

calculateVerticalOffset = () => {
  verticalElements = selectAll('.verticalElement');
  let verticalOffset = 0;
  for (let i = 0; i < verticalElements.length; i++) {
    verticalOffset += verticalElements[i].height;
  }
  return verticalOffset;
}

resizeSmooth = () => {
  let smoothResize = setInterval(resize, 20);
  setTimeout(() => {
    clearInterval(smoothResize);
  }, 1000);
}

resize = () => {
	resizeCanvas(windowWidth, windowHeight - calculateVerticalOffset());
	textContainer.setLocation(createVector(width/2, height/2));
	curser.setOrigin(createVector(width/2, height/2));
}
