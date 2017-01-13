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
function randomNumBetween(lowerBoundary, upperBoundary) {
  lowerBoundary = Math.ceil(lowerBoundary);
  upperBoundary = Math.floor(upperBoundary);
  return Math.floor(Math.random() * (upperBoundary - lowerBoundary + 1) + lowerBoundary);
}

function pickRandomField() {
  return randomNumBetween(1,4);
}

function computerStep() {
  if (game.computersTurn) {
    var field = pickRandomField();
    console.log('Comp picks:', field);
    game.computersTurn = false;
    return game.correctSeries.push(field); 
  }
}
function playerStep(fieldElement, fieldNumber) {
  if (!game.computersTurn) {
    var field = getAttributeVal(fieldElement, fieldNumber);
    game.playerSeries.push(Number(attrVal));
    game.computersTurn = true;
    nextRound();
  }
  console.log("Player picks", field);
}

function nextRound() {
  checkGameState();
  game.computersTurn ? computerStep() : null;
}

function checkGameState() {
  var toBeChecked = game.playerSeries[game.playerSeries.length - 1],
      checkAgainst = game.correctSeries[game.correctSeries.length - 1];
  if (toBeChecked === checkAgainst) {
    console.log('game is running');
  }
}
function getAttributeVal(element, attributeName, resultArray) {
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

function arrOfDomElements(ArrOfIds) {
  var elements = [];
  for (var i = 0, l = ArrOfIds.length; i < l; i++) {
    var v = ArrOfIds[i];
    elements.push(document.getElementById(v));
  }
  return elements;
}
