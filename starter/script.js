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

let scores = [0, 0];
let activePlayer = 0;

const activePlayer1 = document.querySelector(".player--0");
const activePlayer2 = document.querySelector(".player--1");

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  activePlayer1.classList.toggle("player--active");
  activePlayer2.classList.toggle("player--active");
};

let playing = true;

btnRollDice.addEventListener("click", function () {
  if (playing) {
    const dice = Number(Math.trunc(Math.random() * 6) + 1);
    diceDiplay.classList.remove("hidden");
    diceDiplay.src = `dice-${dice}.png`;
    console.log(dice);

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      //currentScorePlayer1.textContent = currentScore;
    } else {
      //switch to the next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    //add current sscore to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      //finish the game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.toggle("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.toggle("player--active");
    }

    //switch to the next player
    switchPlayer();
  }
});

//Resseting the game

btnNewGame.addEventListener("click", function () {
  scorePlayer1.textContent = 0;
  scorePlayer2.textContent = 0;

  currentScorePlayer1.textContent = 0;
  currentScorePlayer2.textContent = 0;

  activePlayer1.classList.remove("player--winner");
  activePlayer2.classList.remove("player--winner");

  activePlayer1.classList.remove("player--activee");
  activePlayer2.classList.remove("player--active");
  activePlayer1.classList.add("player--active");

  diceDiplay.classList.add("hidden");

  playing = true;
  scores = [0, 0];
  activePlayer = 0;
  currentScore = 0;
});
