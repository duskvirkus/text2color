class Curser {

	// origin = p5.Vector
	constructor(origin) {
		this.origin = origin;
		this.location = this.origin;
		this.h = height/30;
	}

	update(textContainer) {
		this.location = createVector(this.origin.x + this.calculateOffset(textContainer), this.origin.y);
		this.h = textContainer.getHeight()/2;
	}

	calculateOffset(textContainer) {
		if (textContainer.getWidth() == 0) {
			return 0;
		} else {
			return textContainer.getWidth()/2 + width/200;
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
			stroke(textColor);
			strokeWeight(width/200);
			line(this.location.x, this.location.y - this.h, this.location.x, this.location.y + (this.h + 10));
		}
	}

	// origin = p5.Vector
	setOrigin(origin) {
		this.origin = origin;
	}

}
