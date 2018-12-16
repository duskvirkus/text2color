"use strict";

async function loadTfModel(path) {
	return await tf.loadModel(path);
}

function tfAnalyze(s, model) {
  return tf.tidy(() => {
    let input = [];
    input.push(hashText(s));
    let predictInput = tf.tensor2d(input);
    let prediction = model.predict(predictInput)
    let output = prediction.dataSync(); // TODO switch to promise
    tf.dispose(predictInput);
    return multiHotHexToColor(output);
  });
}

class TFAnalyzer extends Analyzer {

  constructor(name, creator, description) {
    super(name, creator, description);
    this.modelLoaded = false;
  }

  setAnalyzer(modelPath) {
    this.modelPath = modelPath;
  }

  loadModel() {
    loadTfModel(this.modelPath)
  		.then((model) => {
  			this.model = model;
  			//this.model.summary();
  			this.modelLoaded = true;
        return;
  		})
  		.catch(error => console.log(error));
  }

}
