"use strict";
function loadAnalyzers() {
  analyzerCollection.loadTFAnalyzer(
    './tfanalyzers/csscolors.json',
    'CSS Colors',
    'Fi Graham',
    'Tensor flow model trained on the color names defined by CSS Color Module Level 4.'
  );
  analyzerCollection.loadAnalyzer(
    characterLookConverter,
    'Character Look Converter',
    'Fi Graham',
    'Calculates color based on how a character looks. Inspired by L337 speak.'
  );
  analyzerCollection.loadAnalyzer(
    asciiGray,
    'ASCII Gray',
    'Fi Graham',
    'Calculates a gray value based on ASCII codes of characters.'
  );
}
