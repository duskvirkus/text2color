"use strict";
class AnalyzerCollection {

	constructor() {
		this.analyzer = null;
    this.analyzers = [];
		this.setup = false;
	}

  loadAnalyzer(analyzer, name, creator, description) {
		let analyzerToPush = new Analyzer(name, creator, description);
		analyzerToPush.setAnalyzer(analyzer);
		this.analyzers.push(analyzerToPush);
    this.randomAnalyzer();
  }

	loadTFAnalyzer(modelPath, name, creator, description) {
		let analyzerToPush = new TFAnalyzer(name, creator, description);
		analyzerToPush.setAnalyzer(modelPath);
		this.analyzers.push(analyzerToPush);
	}

  randomAnalyzer() {
    let i = int(random(this.analyzers.length));
    this.setAnalyzer(this.analyzers[i]);
  }

	analyze(s) {
		console.assert(this.analyzers.length > 0, "Need to use loadAnalyzer() method before using analyze()!");
		let analyzeMethod = this.analyzer.getAnalyzer();
		if (this.analyzer.constructor.name == 'Analyzer') {
			return analyzeMethod(s);
		} else if (this.analyzer.modelLoaded) {
			return tfAnalyze(s, this.analyzer.model);
		} else {
			return color(255);
		}
	}

	setAnalyzer(analyzer) {
		this.analyzer = analyzer;
		if (this.analyzer.constructor.name == 'TFAnalyzer') {
			this.analyzer.loadModel();
		}
	}

	setAnalyzerByName(name) {
		for (let i = 0; i < this.analyzers.length; i++) {
			if (this.analyzers[i].name == name) {
				this.setAnalyzer(this.analyzers[i]);
			}
		}
	}

}
