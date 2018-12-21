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
    'Fi Graham',
    'Tensor flow model trained on the color names defined by CSS Color Module.',
    './trainedanalyzers/csscolors.json'
  );
  analyzerCollection.loadFunctionalAnalyzer(
    'Character Look Converter',
    'Fi Graham',
    'Calculates color based on how a character looks. Inspired by L337 speak.',
    characterLookConverter
  );
  analyzerCollection.loadFunctionalAnalyzer(
    'ASCII Gray',
    'Fi Graham',
    'Calculates a gray value based on ASCII codes of characters.',
    asciiGray
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