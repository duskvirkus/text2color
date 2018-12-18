"use strict";
/**
 * Create Button
 * 
 * This is a class that extends button and is intended for creating a new 
 * button.
 */
class CreateButton extends Button {

  /**
   * Constructor
   * 
   * Takes a name which is the text that will appear in the button and a parent 
   * which is the p5.Element that the button will be inserted into.
   * 
   * @param {String} name 
   * @param {p5.Element} parent 
   */
  constructor(name, parent) {
    super(createButton(name));
    this.addDefaultClasses();
    this.setParent(parent);
  }

}