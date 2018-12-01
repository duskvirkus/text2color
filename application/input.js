let backspaceCount = 31;

keyTyped = () => {
	textContainer.addLetter(key);
}

backspace = () => {
	if (backspaceCount === 30) {
		textContainer.removeAll();
	} else if (backspaceCount < 30) {
		backspaceCount++;
	}
}

keyPressed = () => {
	if (keyCode === BACKSPACE) {
		textContainer.removeLast();
		backspaceCount = 0;
	}
}

keyReleased = () => {
	if (keyCode === BACKSPACE) {
		backspaceCount = 31;
	}
}
