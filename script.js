var settings = {
  gameRunning: false,
  gameOver: false,
  strictMode: false,
  computersTurn: false
};
var series = [];
function randomNumBetween(lowerBoundary, upperBoundary) {
  lowerBoundary = Math.ceil(lowerBoundary);
  upperBoundary = Math.floor(upperBoundary);
  return Math.floor(Math.random() * (upperBoundary - lowerBoundary + 1) + lowerBoundary);
}

function pickRandomField() {
  return randomNumBetween(1,4);
}

function nextComputerStep() {
  return series.push(pickRandomField()); 
}
// document.addEventListener('click', function(event) {
//   nextComputerStep();
// });
