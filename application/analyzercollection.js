"use strict";
/**
 * Analyzer Collection
 * 
 * Class used to keep track of all the analyzers in the application. Can load 
 * new analyzers and controls which one is currently being used.
 */
class AnalyzerCollection {

	/**
	 * constructor
	 */
	constructor() {
		this.currentAnalyzer = null;
		this.analyzers = [];
		this.setup = false;
	}

	/**
	 * 
	 * @param {function} analyzer 
	 * @param {String} name 
	 * @param {String} creator 
	 * @param {String} description 
	 */
	loadAnalyzer(analyzer, name, creator, description) {
		let analyzerToPush = new Analyzer(name, creator, description);
		analyzerToPush.setAnalyzer(analyzer);
		this.analyzers.push(analyzerToPush);
		this.randomAnalyzer();
	}

	/**
	 * 
	 * @param {String} modelPath 
	 * @param {String} name 
	 * @param {String} creator 
	 * @param {String} description 
	 */
	loadTFAnalyzer(modelPath, name, creator, description) {
		let analyzerToPush = new TFAnalyzer(name, creator, description);
		analyzerToPush.setAnalyzer(modelPath);
		this.analyzers.push(analyzerToPush);
	}

	/**
	 * Will select a random analyzer from the list and set it to be the 
	 * currentAnalyzer.
	 */
	randomAnalyzer() {
		let i = int(random(this.analyzers.length));
		this.setAnalyzer(this.analyzers[i]);
	}

	/**
	 * Will take the input string and feed it through the analyzer function 
	 * associated with the currentAnalyzer.
	 * 
	 * @param {String} inputString
	 */
	analyze(inputString) {
		console.assert(this.analyzers.length > 0, "Need to use loadAnalyzer() method before using analyze()!");
		let analyzeMethod = this.currentAnalyzer.getAnalyzer();
		if (this.currentAnalyzer.constructor.name == 'Analyzer') {
			return analyzeMethod(inputString);
		} else if (this.currentAnalyzer.modelLoaded) {
			return tfAnalyze(inputString, this.currentAnalyzer.model);
		} else {
			return color(255);
		}
	}

	/**
	 * Sets the currentAnalyzer.
	 * 
	 * @param {Analyzer} analyzer 
	 */
	setAnalyzer(analyzer) {
		this.currentAnalyzer = analyzer;
		if (this.currentAnalyzer.constructor.name == 'TFAnalyzer') {
			this.currentAnalyzer.loadModel();
		}
	}

	/**
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