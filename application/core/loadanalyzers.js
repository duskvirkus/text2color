"use strict";
/**
 * Load Analyzers
 * 
 * This function is run during setup and adds all analyzers to the 
 * analyzercollection. Please insert new analyzers at just after the last one 
 * in the list. Please follow the one of the templates defined at the bottom of 
 * this function in comments.
 */
function loadAnalyzers() {
  analyzerCollection.loadTrainedAnalyzer(
    'CSS Colors',
    'Dusk Virkus',
    'Tensor flow model trained on the color names defined by CSS Color Module.',
    './trainedanalyzers/csscolors.json'
  );
  analyzerCollection.loadFunctionalAnalyzer(
    'Character Look Converter',
    'Dusk Virkus',
    'Calculates color based on how a character looks. Inspired by L337 speak.',
    characterLookConverter
  );
  analyzerCollection.loadFunctionalAnalyzer(
    'ASCII Gray',
    'Dusk Virkus',
    'Calculates a gray value based on ASCII codes of characters.',
    asciiGray
  );
  analyzerCollection.loadFunctionalAnalyzer(
    'Blue Velvet',
    'Dusk Virkus',
    'Creates subtlety changing blueish colors.',
    blueVelvet
  );

  // Please do NOT change anything below this line.
  // Templates
  // Functional Analyzer Template
  /*
  analyzerCollection.loadFunctionalAnalyzer(
    'Analyzer Name',
    'Creator Name',
    'Short description of methodology and/or inspiration.',
    functionName
  );
  */
  // Trained Analyzer Template
  /*
  analyzerCollection.loadTrainedAnalyzer(
    'Analyzer Name',
    'Creator Name',
    'Short description of methodology and/or inspiration.',
    './trainedanalyzers/yourmodelname.json'
  );
  */
}
