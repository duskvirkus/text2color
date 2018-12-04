class TextToColor {

	constructor() {
		this.analyzer = null;
    this.analyzers = [];
		this.setup = false;
	}

  loadAnalyzer(analyzer, name, creator) {
    this.analyzers.push({
      analyzer: analyzer,
			name: name,
      creator: creator
    });
		let button = new Button(name, select('#analyzerButtons'));
		button.setAction(() => {
			textToColor.setAnalyzerByName(name);
		});
		analyzerButtons.push(button);
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
