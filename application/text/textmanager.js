"use strict";

class TextManager {

	/**
	 * Constructor
	 * 
	 * @param {String} startingText : Optional
	 */
	constructor(startingText) {
		this.setText(startingText);
	}

	/**
	 * Set Text
	 * 
	 * Use to set text to a specific string or an empty one if called with no 
	 * arguments.
	 * 
	 * @param {String} text: Optional
	 */
	setText(text) {
		text ? this.text = text : this.text = "";
	}

	/**
	 * Get Text
	 * 
	 * Returns the string stored in the TextManager
	 */
	getText() {
		return this.text;
	}

	/**
	 * Add Letter
	 * 
	 * Adds a string with one letter to the end of the string.
	 * 
	 * @param {String} letter 
	 */
	addLetter(letter) {
		if (letter.length == 1) {
			this.text = this.text + key;
		}
	}

	/**
	 * Remove Letter
	 * 
	 * Removes the last letter in text.
	 */
	removeLetter() {
		if (this.text.length > 0) {
			this.text = this.text.substring(0, this.text.length - 1);
		}
	}

	/**
	 * Clear
	 * 
	 * Resets the text to an empty string.
	 */
	clear() {
		this.setText();
	}

}