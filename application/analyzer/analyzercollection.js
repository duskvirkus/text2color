"use strict";
/**
 * Analyzer Collection
 * 
 * Class used to keep track of all the analyzers in the application. Can load 
 * new analyzers and controls which one is currently being used.
 */
class AnalyzerCollection {

  /**
   * Constructor
   */
  constructor() {
    this.currentAnalyzer = null;
    this.analyzers = [];
  }

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
  loadFunctionalAnalyzer(name, creator, description, analyzeFunction) {
    this.analyzers.push(new FunctionalAnalyzer(name, creator, description, analyzeFunction));
  }

  /**
   * Load Trained Analyzer
   * 
   * Defines the properties of a TrainedAnalyzer. The first 3 arguments are 
   * used to create a button. The fourth argument is the path to the json file 
   * for the model.
   * 
   * Example of modelPath: './trainedanalyzers/csscolors.json'
   * 
   * @param {String} name 
   * @param {String} creator 
   * @param {String} description 
   * @param {String} modelPath 
   */
  loadTrainedAnalyzer(name, creator, description, modelPath) {
    this.analyzers.push(new TrainedAnalyzer(name, creator, description, modelPath));
  }

  /**
   * Random Analyzer
   * 
   * Will select a random analyzer from the list and set it to be the 
   * currentAnalyzer.
   */
  randomAnalyzer() {
    let i = int(random(this.analyzers.length));
    this.setAnalyzer(this.analyzers[i]);
  }

  /**
   * Analyze
   * 
   * Will take the input string and feed it through the analyzer function 
   * associated with the currentAnalyzer.
   * 
   * @param {String} inputString
   */
  analyze(inputString) {
    if (this.currentAnalyzer != null) {
      if (this.currentAnalyzer.constructor.name == 'FunctionalAnalyzer') {
        return this.currentAnalyzer.analyzeFunction(inputString);
      } else if (this.currentAnalyzer.constructor.name == 'TrainedAnalyzer' && this.currentAnalyzer.modelLoaded) {
        return this.currentAnalyzer.analyzeFunction(inputString);
      }
    }
    return color(255);
  }

  /**
   * Set Analyzer
   * 
   * Sets the currentAnalyzer.
   * 
   * @param {Analyzer} analyzer 
   */
  setAnalyzer(analyzer) {
    this.currentAnalyzer = analyzer;
    if (this.currentAnalyzer.constructor.name == 'TrainedAnalyzer') {
      this.currentAnalyzer.loadModel();
    }
  }

  /**
   * Set Analyzer By Name
   * 
   * Finds the analyzer with a given name and then calls the setAnalyzer 
   * function.
   * 
   * @param {String} name 
   */
  setAnalyzerByName(name) {
    for (let i = 0; i < this.analyzers.length; i++) {
      if (this.analyzers[i].name == name) {
        this.setAnalyzer(this.analyzers[i]);
      }
    }
  }

}