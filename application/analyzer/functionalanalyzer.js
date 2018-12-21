"use strict";
/**
 * Functional Analyzer
 * 
 * This is a class that contains an Analyze function.
 */
class FunctionalAnalyzer extends Analyzer {

  /**
   * Load Functional Analyzer
   * 
   * Defines the properties of a FunctionalAnalyzer. The first 3 arguments are 
   * used to create a button. The fourth argument is the actual function used 
   * to convert text to a color.
   * 
   * @param {String} name 
   * @param {String} creator 
   * @param {String} description 
   * @param {function} analyzeFunction 
   */
  constructor(name, creator, description, analyzeFunction) {
    super(name, creator, description);
    this.setAnalyzeFunction(analyzeFunction);
  }

  /**
   * Set Analyze Function
   * 
   * @param {function} analyzeFunction 
   */
  setAnalyzeFunction(analyzeFunction) {
    this.analyzeFunction = analyzeFunction;
  }

}