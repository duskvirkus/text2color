"use strict";
/**
 * Trained Analyzer
 * 
 * Class for keeping track of an analyzer that was created using tensorflow. 
 * Extends the Analyzer class.
 */
class TrainedAnalyzer extends Analyzer {

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
  constructor(name, creator, description, modelPath) {
    super(name, creator, description);
    this.setModelPath(modelPath);
    this.model = null;
    this.analyzeFunction = this.analyzeFunction.bind(this);
  }

  /**
   * Set Model Path
   * 
   * @param {String} modelPath 
   */
  setModelPath(modelPath) {
    this.modelPath = modelPath;
    this.modelLoaded = false;
  }

  /**
   * Load Model
   */
  loadModel() {
    tf.loadModel(this.modelPath)
      .then((model) => {
        this.model = model;
        this.modelLoaded = true;
        return;
      })
      .catch(error => console.log(error));
  }

  /**
   * Analyze Function
   * 
   * When using a trained analyzer the analyze function is the same for all of 
   * them. The model that's used is the only thing that changes.
   * 
   * @param {String} s 
   */
  analyzeFunction(s) {
    return tf.tidy(() => {
      let input = [];
      input.push(hashText(s));
      let predictInput = tf.tensor2d(input);
      let prediction = this.model.predict(predictInput)
      let output = prediction.dataSync(); // TODO switch to promise
      tf.dispose(predictInput);
      return multiHotHexToColor(output);
    });
  }

}