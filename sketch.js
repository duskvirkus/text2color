let tc;
let c;

let backspaceCount = 31;

setup = () => {
	createCanvas(windowWidth - 45, windowHeight);
	tc = new TextContainer(createVector(width/2, height/2), "");
	c = new Curser(createVector(width/2, height/2));
}

draw = () => {
	background(255);
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
