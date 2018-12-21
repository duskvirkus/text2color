"use strict";
/**
 * Analyzer Class
 *
 * Keeps track of data associated with an analyzer. Not meant to be 
 * instantiated. Use FunctionalAnalyzer or TrainedAnalyzer.
 *
 * Will create a button that is placed in the #analyzerButtons span on the html 
 * page. The button triggers an event in the analyzerCollection that sets the 
 * currentAnalyzer to whichever analyzer the button is associated with.
 */
class Analyzer {

  /**
   * Constructor
   * 
   * @param {String} name 
   * @param {String} creator 
   * @param {String} description 
   */
  constructor(name, creator, description) {
    this.name = name;
    this.creator = creator;
    this.description = description;
    this.button = null;
    this.addButton();
  }

  /**
   * Creates a button that when pressed will set the currentAnalyzer to 
   * whatever analyzer the button is associated with.
   */
  addButton() {
    this.button = new CreateButton(this.name, select('#analyzerButtons'));
    this.button.setDescription(this.description);
    this.button.setCreator(this.creator);
    this.button.addTooltip();
    this.button.setAction(() => {
      analyzerCollection.setAnalyzerByName(this.name);
    });
  }

}