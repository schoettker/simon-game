var settings = {
  strictMode: false
};
var game = {
  gameRunning: false,
  gameOver: false,
  computersTurn: false,
  fields: ['top-left', 'top-right', 'bot-left', 'bot-right'],
  series: []
};

function initGame() {
  addEL(arrOfDomElements(game.fields), 'click', getAttributeVal);
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

function nextComputerStep() {
  var field = pickRandomField();
  return game.series.push(field); 
}

function getAttributeVal(element, attributeName) {
  console.log(element.getAttribute(attributeName));
  attrVal = element.getAttribute(attributeName);
  game.series.push(attrVal);
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
