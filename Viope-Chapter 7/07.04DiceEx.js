function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //Math.random() returns a random number between 0 and 1 (not include 1).
}

function rollTheDice() {
  var diceValue = getRandomInteger(1, 6);
  document.getElementById("dice").innerText = diceValue;
}
