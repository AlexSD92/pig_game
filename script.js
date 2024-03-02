const diceImage = document.querySelector("#dice");
const playerBoard1 = document.querySelector("#player-board1");
const playerBoard2 = document.querySelector("#player-board2");
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
const scoreBoard = document.getElementsByClassName("score-board");
const controls = document.getElementsByClassName("controls");
let activePlayer = 1;
const information = document.querySelector(".information");

function checkActivePlayer() {
  if (playerBoard1.classList.contains("active")) {
    activePlayer = 1;
  } else {
    activePlayer = 2;
  }
}

function toggleActivePlayer() {
  if (activePlayer === 1) {
    activePlayer = 2;
    playerBoard1.classList.remove("active");
    playerBoard2.classList.add("active");
  } else {
    activePlayer = 1;
    playerBoard1.classList.add("active");
    playerBoard2.classList.remove("active");
  }
}

function resetGame() {
  for (let i = 0; i < scoreBoard.length; i++) {
    scoreBoard[i].textContent = 0;
  }
  information.textContent = `Player ${activePlayer} has reset the game`;
  controls[0].disabled = false;
  controls[1].disabled = false;
  toggleActivePlayer();
}

function endTurn() {
  if (activePlayer === 1) {
    currentTotalScore = Number(playerBoard1TotalScore.textContent);
    pointsToAdd = Number(playerBoard1RoundScore.textContent);
    newTotalScore = currentTotalScore + pointsToAdd;
    playerBoard1RoundScore.textContent = 0;
    if (newTotalScore >= 100) {
      newTotalScore = 100;
      playerBoard1TotalScore.textContent = newTotalScore;
      information.textContent = `Player ${activePlayer} has won! Reset the game if you want to play again`;
      controls[0].disabled = true;
      controls[1].disabled = true;
    } else {
      playerBoard1TotalScore.textContent = newTotalScore;
      information.textContent = `Player ${activePlayer} has ended their turn with ${pointsToAdd} points`;
      toggleActivePlayer();
      information.textContent += `, it's player ${activePlayer}'s turn`;
    }
  } else {
    currentTotalScore = Number(playerBoard2TotalScore.textContent);
    pointsToAdd = Number(playerBoard2RoundScore.textContent);
    newTotalScore = currentTotalScore + pointsToAdd;
    playerBoard2RoundScore.textContent = 0;
    if (newTotalScore >= 100) {
      newTotalScore = 100;
      playerBoard2TotalScore.textContent = newTotalScore;
      information.textContent = `Player ${activePlayer} has won! Reset the game if you want to play again`;
      controls[0].disabled = true;
      controls[1].disabled = true;
    } else {
      playerBoard2TotalScore.textContent = newTotalScore;
      information.textContent = `Player ${activePlayer} has ended their turn with ${pointsToAdd} points`;
      toggleActivePlayer();
      information.textContent += `, it's player ${activePlayer}'s turn`;
    }
  }
}

function addScore(score) {
  let newScore;
  if (activePlayer === 1) {
    currentScore = Number(playerBoard1RoundScore.textContent);
    newScore = currentScore + score;
    playerBoard1RoundScore.textContent = newScore;
  } else {
    currentScore = Number(playerBoard2RoundScore.textContent);
    newScore = currentScore + score;
    playerBoard2RoundScore.textContent = newScore;
  }
}

function rollTheDice() {
  let dice = Math.floor(Math.random() * 6) + 1;
  console.log(dice);
  diceImage.src = `assets/dice${dice}.png`;
  information.textContent = `Player ${activePlayer} rolled a ${dice}`;
  if (dice === 1) {
    playerBoard1RoundScore.textContent = 0;
    playerBoard2RoundScore.textContent = 0;
    information.textContent = `Player ${activePlayer} rolled a ${dice}`;
    toggleActivePlayer();
    information.textContent += `, it's player ${activePlayer}'s turn`;
    dice = 0;
  } else {
    addScore(dice);
  }
}

function toggleRoll() {
  diceImage.classList.add("roll");
  setTimeout(() => {
    diceImage.classList.remove("roll");
  }, 500);
}
