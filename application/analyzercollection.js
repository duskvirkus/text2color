"use strict";
class AnalyzerCollection {

	constructor() {
		this.analyzer = null;
    this.analyzers = [];
		this.setup = false;
	}

  loadAnalyzer(analyzer, name, creator) {
		this.analyzers.push(new Analyzer(analyzer, name, creator));
    this.randomAnalyzer();
  }

  randomAnalyzer() {
    let i = int(random(this.analyzers.length));
    this.setAnalyzer(this.analyzers[i]);
  }

	analyze(s) {
		console.assert(this.analyzers.length > 0, "Need to use loadAnalyzer() method before using analyze()!");
		return this.analyzer.analyzer(s);
	}

	setAnalyzer(analyzer) {
		this.analyzer = analyzer;
	}

  getCreator() {
    return this.analyzer.creator;
  }

	setAnalyzerByName(name) {
		for (let i = 0; i < this.analyzers.length; i++) {
			if (this.analyzers[i].name == name) {
				this.setAnalyzer(this.analyzers[i]);
			}
		}
	}

}
