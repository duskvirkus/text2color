setupCanvas = () => {
	canvas = createCanvas(windowWidth, windowHeight - 56);
}

setupObjects = () => {
	textContainer = new TextContainer(createVector(width/2, height/2), "");
	curser = new Curser(createVector(width/2, height/2));
	textToColor = new TextToColor();
}

setup = () => {
	setupCanvas();
	setupObjects();
	loadAnalyzers();
	setupUI();
	if (testing) {
		setupTesting();
	}
}

draw = () => {
	drawUI();
	background(textToColor.analyze(textContainer.getText()));
	textContainer.update();
	textContainer.display();
	curser.update(textContainer);
	curser.display();
	backspace();
	if (testing) {
		drawTesting();
	}
}
