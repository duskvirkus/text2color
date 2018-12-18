"use strict";

// emulating static variable
let buttonCount = 0;

/**
 * Button
 * 
 * Class that is used to keep track of a button on the html page. Can be used 
 * to create a new button or select an existing button.
 */
class Button {

  /**
   * Constructor
   * 
   * Pass in a p5.Element that is a button. Use CreateButton and SelectButton 
   * for easier use.
   * 
   * @param {p5.Element} button 
   */
  constructor(button) {
    this.button = button;
  }

  /**
   * Add Default Classes
   * 
   * Adds some basic bootstrap classes to the button to style it.
   */
  addDefaultClasses() {
    this.button.addClass('btn');
    this.button.addClass('btn-light');
    this.button.addClass('m-1');
  }

  /**
   * Set Description
   * 
   * Will set the description property for the button. Used as the main text 
   * for tooltip.
   * 
   * @param {String} description 
   */
  setDescription(description) {
    this.description = description;
  }

  /**
   * Set Creator
   * 
   * Sets the creator property for the button. If tooltip is added will show up 
   * after description in the tool tip.
   * 
   * @param {String} creator 
   */
  setCreator(creator) {
    this.creator = creator;
  }

  /**
   * Add Tooltip
   * 
   * Will add the html attributes needed to use a bootstrap tool tip. Must use 
   * setDescription before using this function. Placement can be used to define 
   * which side of the button the tooltip appears on.
   * 
   * @param {Number} placement Optional: 0 = bottom, 1 = left, 2 = right
   */
  addTooltip(placement) {
    if (this.description) {
      this.button.attribute('data-toggle', 'tooltip');
      this.button.attribute('data-html', 'true');
      if (placement) {
        if (placement == 0) {
          this.button.attribute('data-placement', 'bottom');
        } else if (placement == 1) {
          this.button.attribute('data-placement', 'left');
        } else if (placement == 2) {
          this.button.attribute('data-placement', 'right');
        }
      }
      if (this.creator) {
        this.button.attribute('title', `${this.description}<br><small>Created by ${this.creator}</small>`);
      } else {
        this.button.attribute('title', this.description);
      }

    } else {
      console.log(`INFO: tooltip for ${this} was not added because there was no description. Please use setDescription() before enableTooltip().`)
    }
  }

  /**
   * Set Parent
   * 
   * Defines what html element the button is placed within.
   * 
   * @param {p5.Element} parent 
   */
  setParent(parent) {
    this.button.parent(parent);
  }

  /**
   * Set Action
   * 
   * Pass in a function that will be called when button is pressed.
   * 
   * @param {function} action 
   */
  setAction(action) {
    this.button.mousePressed(action);
  }
}