"use strict";
/**
 * Select Button
 * 
 * This is a class that extends Button and is used to select an button that 
 * already exists within the html.
 */
class SelectButton extends Button {

  /**
   * Constructor
   * 
   * Takes a string that selects an html element using the p5.dom select 
   * function.
   * 
   * Example: '#informationButton'
   * 
   * @param {String} selector 
   */
  constructor(selector) {
    super(select(selector));
  }

}