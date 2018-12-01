class TextToColor {

	constructor() {
		this.analyzer = null;
    this.analyzers = [];
		this.setup = false;
	}

  loadAnalyzer(analyzer, creator) {
    this.analyzers.push({
      analyzer: analyzer,
      creator: creator
    });
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

}
