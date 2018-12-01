setupCanvas = () => {
	createCanvas(windowWidth, windowHeight);
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
	if (testing) {
		setupTesting();
	}
}

draw = () => {
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
