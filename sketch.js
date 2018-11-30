let tc;
let c;

setup = () => {
	createCanvas(windowWidth, windowHeight);
	tc = new TextContainer(createVector(width/2, height/2), "");
	c = new Curser(createVector(width/2, height/2));
}

draw = () => {
	background(255);
	tc.display();
	c.update(tc);
	c.display();
}

class TextContainer {

	// location = p5.Vector, s = string
	constructor(location, s) {
		this.location = location;
		this.s = s;
		this.tSize = height/15;
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

	getWidth() {
		if (this.s.length > 0) {
			return textWidth(this.s);
		} else {
			return 0;
		}
	}

	getHeight() {
		return this.tSize;
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
