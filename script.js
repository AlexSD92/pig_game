const diceImage = document.querySelector("#dice");
const playerBoard1TotalScore = document.querySelector(
  "#player-board1-total-score"
);
const playerBoard2TotalScore = document.querySelector(
  "#player-board2-total-score"
);
const playerBoard1RoundScore = document.querySelector(
  "#player-board1-round-score"
);
const playerBoard2RoundScore = document.querySelector(
  "#player-board2-round-score"
);

function endTurn() {
  currentTotalScore = Number(playerBoard1TotalScore.textContent);
  pointsToAdd = Number(playerBoard1RoundScore.textContent);
  newTotalScore = currentTotalScore + pointsToAdd;
  playerBoard1RoundScore.textContent = 0;
  if (newTotalScore >= 100) {
    newTotalScore = 100;
    playerBoard1TotalScore.textContent = newTotalScore;
  } else {
    playerBoard1TotalScore.textContent = newTotalScore;
  }
}

function addScore(score) {
  currentScore = Number(playerBoard1RoundScore.textContent);
  newScore = currentScore + score;
  playerBoard1RoundScore.textContent = newScore;
}

function rollTheDice() {
  let dice = Math.floor(Math.random() * 6) + 1;
  console.log(dice);
  diceImage.src = `assets/dice${dice}.png`;
  if (dice === 1) {
    playerBoard1RoundScore.textContent = 0;
  } else {
    addScore(dice);
  }
}
