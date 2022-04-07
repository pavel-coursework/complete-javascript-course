"use strict";

// Selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let scores, currentScore, activePlayer;

// Starting conditions
function initial() {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");

  btnRoll.disabled = false;
  btnHold.disabled = false;
}

initial();

// Rolling dice functionality
btnRoll.addEventListener("click", () => {
  // 1. Generate a random dice roll
  let dice = Math.ceil(Math.random() * 6);

  // 2. Display dice
  diceEl.classList.remove("hidden");
  diceEl.src = `./images/dice-${dice}.png`;

  // 3. Check for rolled 1
  if (dice === 1) {

  } else {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  }
});

// Start new game functionality
btnNew.addEventListener("click", initial);
