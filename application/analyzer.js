"use strict";
/**
 * Analyzer Class
 *
 * Contains fields associated with an analyzer function. 
 *
 * Will create a button that is placed in the #analyzerButtons span on the html 
 * page. The button triggers an event in the analyzerCollection that sets the 
 * currentAnalyzer to whichever analyzer the button is associated with.
 */
class Analyzer {

  /**
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
    // this.button = new Button(this.name, this.creator, this.description, select('#analyzerButtons'));
    this.button.setAction(() => { // TODO see if this can be done with dynamiclly
      analyzerCollection.setAnalyzerByName(this.name);
    });
  }

  /**
   * 
   * @param {function} analyzer 
   */
  setAnalyzer(analyzer) {
    this.analyzer = analyzer;
  }

  /**
   * returns function stored in this.analyzer
   */
  getAnalyzer() {
    return this.analyzer;
  }

}