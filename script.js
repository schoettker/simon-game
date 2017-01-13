var settings = {
  strictMode: false
};
var game = {
  gameRunning: false,
  gameOver: false,
  computersTurn: false,
  fields: ['top-left', 'top-right', 'bot-left', 'bot-right'],
  correctSeries: [],
  playerSeries: []
};

function initGame() {
  addEL(arrOfDomElements(game.fields), 'click', playerStep);
  game.computersTurn = true;
  computerStep();
}
initGame();

function computerStep() {

  displayRounds();

  if (game.computersTurn) {
    var field = pickRandomField();
    game.computersTurn = false;
    game.correctSeries.push(field); 
  }

  console.log('Comp picks:', field);
  console.log('Correct Series:', game.correctSeries);

}
function playerStep(fieldElement, fieldNumber) {

  if (!game.computersTurn) {
    var field = getAttributeVal(fieldElement, fieldNumber);
    game.playerSeries.push(Number(attrVal));
    console.log("Player picks", field);
    console.log('Player Series:', game.playerSeries);
    checkGameState(game.playerSeries, game.correctSeries);
  }

  if (game.playerSeries.length === game.correctSeries.length) {
    game.computersTurn = true;
    nextRound();
  }

}

function nextRound() {
  // checkGameState();
  game.playerSeries = [];
  game.computersTurn ? computerStep() : null;
}

function checkGameState() {
  var everythingCorrect = compareArrays(game.playerSeries, game.correctSeries);
  console.log('The player series is equal to the Comp Series', everythingCorrect);
  if (everythingCorrect) {
    // game.playerSeries = [];
  } else {
    gameOver();
  }
}
function gameOver() {
  console.log("Game Over");
  console.log("Starting new Game..");
  game.correctSeries = [], game.playerSeries = [];
  game.computersTurn = true;
  computerStep();
}

function displayRounds() {
  document.getElementById('rounds').innerHTML = game.correctSeries.length + 1;
}
// displayRounds();
// ===================================
// Utility Functions, not Game related
// ===================================

function compareArrays(a, b) {
  for (var i = 0, l = a.length; i < l; i++) {
    var v = a[i];
    if (b[i] !== v) {
      return false;
    }
  }
  return true;
}

function getAttributeVal(element, attributeName) {
  attrVal = element.getAttribute(attributeName);
  return attrVal;
}

function addEL(elementsArray, eventType, action) {
  for (var i = 0, l = elementsArray.length; i < l; i++) {
    var element = elementsArray[i];
    element.addEventListener(eventType, function(e) {
      action(this, 'data-value');
    })
  }
}

function arrOfDomElements(arrOfIds) {
  var elements = [];
  for (var i = 0, l = arrOfIds.length; i < l; i++) {
    var v = arrOfIds[i];
    elements.push(document.getElementById(v));
  }
  return elements;
}

function randomNumBetween(lowerBoundary, upperBoundary) {
  lowerBoundary = Math.ceil(lowerBoundary);
  upperBoundary = Math.floor(upperBoundary);
  return Math.floor(Math.random() * (upperBoundary - lowerBoundary + 1) + lowerBoundary);
}

function pickRandomField() {
  return randomNumBetween(1,4);
}
