"use strict";

const scorePlayer1 = document.querySelector("#score--0");
const scorePlayer2 = document.getElementById("score--1");
const diceDiplay = document.querySelector(".dice");
const btnNewGame = document.querySelector(".btn--new");
const btnRollDice = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
let currentScore = 0;

let currentScorePlayer1 = document.getElementById("current--0");
let currentScorePlayer2 = document.getElementById("current--1");

scorePlayer1.textContent = 0;
scorePlayer2.textContent = 0;
diceDiplay.classList.add("hidden");

btnRollDice.addEventListener("click", function () {
  const dice = Number(Math.trunc(Math.random() * 6) + 1);
  diceDiplay.classList.remove("hidden");
  diceDiplay.src = `dice-${dice}.png`;
  console.log(dice);

  if (dice !== 1) {
    currentScore += dice;
    currentScorePlayer1.textContent = currentScore;
  } else {
  }
});
