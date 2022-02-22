'use strict';

//selecting elements//
const player0El = document.querySelector(`.player--0`)
const player1El = document.querySelector(`.player--1`)
const score0El = document.querySelector(`#score--0`)
const score1El = document.querySelector(`#score--1`)
const diceEl = document.querySelector(`.dice`)
const btnNew = document.querySelector(`.btn--new`)
const btnRoll = document.querySelector(`.btn--roll`)
const btnHold = document.querySelector(`.btn--hold`)
const current0El = document.getElementById(`current--0`)
const current1El = document.getElementById(`current--1`)


//starting conditions//
score0El.textContent = 0
score1El.textContent = 0
diceEl.classList.add(`hidden`);

let activePlayer = 0
let currentScore = 0
const scores = [0, 0]
let playing = true
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle()('player--active');
  player1El.classList.toggle()('player--active');
}

// Rolling the dice functionality

btnRoll.addEventListener(`click`, function () {
  if(playing) {
  //generate random dice number
  const dice = Math.trunc(Math.random() * 6) + 1
  console.log(dice);
  //display dice
  diceEl.classList.remove('hidden')
  diceEl.src = `dice-${dice}.png`

  //if 1 is rolled switch to next player
  if (dice !== 1) {
    //add dice to current score
    currentScore += dice
    document.getElementById(`current--${activePlayer}`).textContent = currentScore
  }
  else {
    //switch to next player
    switchPlayer()
  }
} 
});

btnHold.addEventListener(`click`, function () {
  if (playing)
  {//add current score to the active player score
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
  //check if player score >100
    if (scores[activePlayer] >= 10) {
      playing = false
      diceEl.classList.add('hidden')
  //finish game
    document
      .querySelector(`.player--${activePlayer}`).classList.add('player--winner')
    document
      .querySelector(`.player--${activePlayer}`).classList.remove('player--active')
  }
  else
    {
      switchPlayer()
    }
  }
})


document.querySelector(`.btn--new`).addEventListener(`click`, function () {
  
  score0El.textContent = 0
  score1El.textContent = 0
  diceEl.classList.add(`hidden`);
  
  let activePlayer = 0
  let currentScore = 0
  const scores = [0, 0]
  let playing = true
  const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle()('player--active');
    player1El.classList.toggle()('player--active');
  }


})