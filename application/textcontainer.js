"use strict";
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
		fill(textColor);
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

	// location = p5.Vector
	setLocation(location) {
		this.location = location;
	}
}
