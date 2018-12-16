"use strict";
class Curser {

	// origin = p5.Vector
	constructor(origin) {
		this.origin = origin;
		this.location = this.origin;
		this.h = height/30;
	}

	update(textManager) {
		this.location = createVector(this.origin.x + this.calculateOffset(textManager), this.origin.y);
		this.h = textManager.getHeight()/2;
	}

	calculateOffset(textManager) {
		if (textManager.getWidth() == 0) {
			return 0;
		} else {
			return textManager.getWidth()/2 + 8;
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
			strokeCap(PROJECT);
			stroke(textColor);
			strokeWeight(4);
			line(this.location.x, this.location.y - this.h, this.location.x, this.location.y + (this.h + 10));
		}
	}

	// origin = p5.Vector
	setOrigin(origin) {
		this.origin = origin;
	}

}
