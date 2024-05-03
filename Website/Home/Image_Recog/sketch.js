let clearButton;
let canvas;
let doodleClassifier;
let resultsDiv;

function setup() {
  canvas = createCanvas(400, 400);
  canvas.parent('canvas-container'); // Set canvas parent
  clearButton = createButton('Clear Canvas');
  clearButton.mousePressed(clearCanvas);
  clearButton.addClass('clear-button');
  background(255);
  doodleClassifier = ml5.imageClassifier('DoodleNet', modelReady);
  resultsDiv = createDiv('Model loading');
  resultsDiv.addClass('results-container');
}

function modelReady() {
  console.log('Model loaded');
  doodleClassifier.classify(canvas, gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  let content = `${results[0].label} ${nf(100 * results[0].confidence, 2, 1)}%<br/>
                 ${results[1].label} ${nf(100 * results[1].confidence, 2, 1)}%`;
  resultsDiv.html(content);
  doodleClassifier.classify(canvas, gotResults);
}

function clearCanvas() {
  background(255);
}

function draw() {
  if (mouseIsPressed) {
    strokeWeight(16);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
