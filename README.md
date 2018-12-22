# Text2Color

Text2Color is a creative tool for converting text to colors in a intentional semi-random way. It was designed to assist artists and designers in generating ideas for color schemes when undertaking new projects. It was inspired by [Community Clouds](https://github.com/CodingTrain/CommunityClouds) and [Adobe Color](https://color.adobe.com). It's designed to be easy to contribute to this project. Just check out the how to contribute section before working on awesome your improvements.

## Technologies Used

The Text2Color project is a purely front-end single page web application. It uses a number of JavaScript libraries including [p5.js](https://p5js.org/), [p5.js DOM](https://p5js.org/reference/#/libraries/p5.dom), [tensorflow.js](https://js.tensorflow.org/), [jQuery](https://jquery.com/), and [popper.js](https://popper.js.org/). Popper and jQuery are primarly included to support [Bootstrap](http://getbootstrap.com/).

## How to Contribute

There are 3 ways to contribute. You don't need much coding experiece to contribute, but I've you've never coded I suggest you check out [Dan Shiffman's excellent introduction to coding series that uses p5.js](https://www.youtube.com/watch?v=yPWkPOfnGsw&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA) and if you've never used github he has a [series on that too](https://www.youtube.com/watch?v=BCQHnlnPusY&list=PLRqwX-V7Uu6ZF9C0YMKuns9sLDzK6zoiV).

### Things to Keep in Mind

Please use the [Beautify](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify) extention for VS Code to match formating. As well as a tab size of 2 spaces.

### Add a Functional Analyzer

Adding a functional analyzer is fairly simple. You'll create a method in a new js file under the `functionalanalyzers` folder. The method must take in a string and returns a p5 color. Then import it into the `index.html` page and add it to the `loadAnalyzers()` method in `application > core > loadanalyzers.js`. For full instructions on the process see the section below.

#### Step by Step Instructions

Coming Soon

### Add a Trained Analyzer

Trained analyzers are trained neural networks created in TensorFlow.js. They have 16 inputs created by hashing the text input and 96 outputs that represent a color. Feel free to create your own networks that match this specification, see a following section for tips on doing this. But if you'd like to jump straight into creating a network without knowing much if anything about TensorFlow.js, please use the [Text 2 Color Contributer Tools](https://github.com/figraham/text2colorcontributortools) to do this. Once you've trained a network save it and add it to the `trainedanalyzers` folder and the `loadAnalyers()` method in `application > core > loadanalyzers.js`. For full instructions on this please see the following section.

#### Step by Step Instructions

Coming Soon

#### Tips for Making Your Own Networks

Use the functions in `application > passthrough` for conveting input and output. As said above to work with the application as it currently is designed the network must have 16 inputs and 96 outputs. If you'd like to expand the possiblities go for it just make sure application remains backwards compatable with current networks.

### Improve Application

If you'd like to work on an issue or have an idea for a new feature feel free to go for it. Just comment on the issue before hand so multiple people don't end up working on the same thing. If you'd like to work on a new feature open a new issue with the label possible feature.