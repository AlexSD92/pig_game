let diceImage = document.querySelector("#dice");

function rollTheDice() {
  let dice = Math.floor(Math.random() * 6) + 1;
  console.log(dice);
  diceImage.src = `assets/dice${dice}.png`;
}
