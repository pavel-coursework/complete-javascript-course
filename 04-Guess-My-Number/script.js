"use strict";

const correctNumber = document.querySelector(".number");
const messageOutput = document.querySelector(".message");
const guessInput = document.querySelector(".guess");
const labelScore = document.querySelector(".label-score");
const labelHighScore = document.querySelector(".label-highscore");

const btnAgain = document.querySelector(".btn.again");
const btnCheck = document.querySelector(".btn.check");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

btnCheck.addEventListener("click", () => {
  const guessValue = Number(guessInput.value);

  if (!guessValue || guessValue < 0) {
    messageOutput.textContent = "🔴 Input value must be between 1-20!";
    return;
  }

  if (score <= 1) {
    messageOutput.textContent = "🙁 You lost!";
    labelScore.textContent = `💯 Score: 0`;
    return;
  }

  if (guessValue === secretNumber) {
    highScore = score > highScore ? score : highScore;

    labelHighScore.textContent = `🥇 Highscore: ${highScore}`;
    correctNumber.textContent = guessValue;
    messageOutput.textContent = "Correct number!";

    correctNumber.style.width = "25rem";
    document.body.style.backgroundColor = "#60b347";
    return;
  }

  score--;
  labelScore.textContent = `💯 Score: ${score}`;

  messageOutput.textContent =
    guessValue > secretNumber ? "Too high!" : "Too low!";
});

btnAgain.addEventListener("click", () => {
  secretNumber = Math.floor(Math.random() * 20);
  score = 20;

  messageOutput.textContent = "Start guessing...";
  labelScore.textContent = `💯 Score: ${score}`;
  correctNumber.textContent = "?";
  guessInput.value = "";

  correctNumber.style.width = "15rem";
  document.body.style.backgroundColor = "#222";
});
