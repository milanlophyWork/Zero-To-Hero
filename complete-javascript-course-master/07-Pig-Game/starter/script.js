'use strict';

// const dice = Math.trunc(Math.random() * 6) + 1 // diagrams.net for designing flowcharts

// selecting elements
const score0El = document.querySelector('#score--0') // Instead of cls use the unique id because both elements has same cls name
const score1El = document.getElementById('score--1') // getElementById is supposed to be a little bit faster than querySelector
const diceEl = document.querySelector('.dice')

// Starting conditions
score0El.textContent = 0 // Setting the initialScore to zero
score1El.textContent = 0

diceEl.classList.add('hidden')