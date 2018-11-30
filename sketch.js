let tc;
let c;
let ttc;

let backspaceCount = 31;

setup = () => {
	createCanvas(windowWidth, windowHeight);
	tc = new TextContainer(createVector(width/2, height/2), "");
	c = new Curser(createVector(width/2, height/2));
	ttc = new TextToColor();
	ttc.setAnalyzer("CUSTOM", s => {
		let r, g, b;
		if (s.length == 0) {
			return color(255);
		} else {
			return s.length < 11 ? color(255 - s.length * 25) : color(0);
		}
	});
}

draw = () => {
	background(ttc.analyze(tc.getText()));
	tc.update();
	tc.display();
	c.update(tc);
	c.display();
	backspace();
}

keyTyped = () => {
	tc.addLetter(key);
}

backspace = () => {
	if (backspaceCount === 30) {
		tc.removeAll();
	} else if (backspaceCount < 30) {
		backspaceCount++;
	}
}

keyPressed = () => {
	if (keyCode === BACKSPACE) {
		tc.removeLast();
		backspaceCount = 0;
	}
}

keyReleased = () => {
	if (keyCode === BACKSPACE) {
		backspaceCount = 31;
	}
}

class TextContainer {

	// location = p5.Vector, s = string
	constructor(location, s) {
		this.location = location;
		this.s = s;
		this.maxSize = height/10;
		this.tSize = this.maxSize;
	}

	update() {
		this.resizeText();
	}

	display() {
		textAlign(CENTER, CENTER);
		textSize(this.tSize);
		noStroke();
		fill(0);
		text(this.s, this.location.x, this.location.y);
	}

	setTextSize(tSize) {
		this.tSize = tSize;
	}

	resizeText() {
		if (this.getWidth() > width - width/20) {
			while (this.getWidth() > width - width/20) {
				this.setTextSize(this.tSize - 1);
				textSize(this.tSize);
			}
		}
	}

	getWidth() {
		return textWidth(this.s);
	}

	getHeight() {
		return this.tSize;
	}

	addLetter(key) {
		this.s = this.s + key;
	}

	removeLast() {
		if (this.s.length > 0) {
			this.s = this.s.substring(0, this.s.length - 1);
		}
		this.setTextSize(this.maxSize);
	}

	removeAll() {
		this.s = "";
		this.setTextSize(this.maxSize);
	}

	getText() {
		return this.s;
	}
}

class Curser {

	// origin = p5.Vector
	constructor(origin) {
		this.origin = origin;
		this.location = this.origin;
		this.h = height/30;
	}

	// tc = TextContainer
	update(tc) {
		this.location = createVector(this.origin.x + this.calculateOffset(tc), this.origin.y);
		this.h = tc.getHeight()/2;
	}

	// tc = TextContainer
	calculateOffset(tc) {
		if (tc.getWidth() == 0) {
			return 0;
		} else {
			return tc.getWidth()/2 + width/200;
		}
	}

	visible() {
		if (int(frameCount/30) % 2 == 0) {
			return true;
		}
		return false;
	}

	display() {
		if (this.visible()) {
			stroke(0);
			strokeWeight(width/200);
			line(this.location.x, this.location.y - this.h, this.location.x, this.location.y + this.h);
		}
	}

}

class TextToColor {
	constructor() {
		this.analyzer = null;
		this.setup = false;
	}

	analyze(s) {
		console.assert(this.setup, "Need to use setAnalyzer() method before using analyze()!");
		return this.analyzer(s);
	}

	setAnalyzer(type, custom) {
		this.setup = true;
		if (type == "CUSTOM") {
			this.analyzer = custom;
		} else {
			this.setup = false;
		}
	}
}
