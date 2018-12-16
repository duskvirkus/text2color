"use strict";
function loadAnalyzers() {
  analyzerCollection.loadTFAnalyzer('./tfanalyzers/csscolors.json', 'CSS Colors', 'Fi Graham');
  analyzerCollection.loadAnalyzer(visualEquivalentDigit, "VED", "Fi Graham");
  analyzerCollection.loadAnalyzer(asciiGray, "asciigray", "Fi Graham");
}
