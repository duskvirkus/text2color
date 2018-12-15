"use strict";
let backspaceCount = 31;

function keyTyped() {
	textContainer.addLetter(key);
}

function backspace() {
	if (backspaceCount === 30) {
		textContainer.removeAll();
	} else if (backspaceCount < 30) {
		backspaceCount++;
	}
}

function keyPressed() {
	if (keyCode === BACKSPACE) {
		textContainer.removeLast();
		backspaceCount = 0;
	}
}

function keyReleased() {
	if (keyCode === BACKSPACE) {
		backspaceCount = 31;
	}
}
