'use strict';

// diagrams.net for designing flowcharts

// selecting elements
const score0El = document.querySelector('#score--0') // Instead of cls use the unique id because both elements has same cls name
const score1El = document.getElementById('score--1') // getElementById is supposed to be a little bit faster than querySelector
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')

const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')


// Starting conditions
score0El.textContent = 0 // Setting the initialScore to zero
score1El.textContent = 0
diceEl.classList.add('hidden')


let currentScore = 0 // Should not be inside fn if it does, then each time we roll a dice current score would be resetted


// Rolling dice functionality
btnRoll.addEventListener('click',()=>{
    // 1. Generating a random dice roll
    const diceValue = Math.trunc(Math.random() * 6) + 1 

    // 2. Display the dice
    diceEl.classList.remove('hidden')
    diceEl.src = `dice-${diceValue}.png`    

    // 3. Check if rolled 1:
    if(diceValue !== 1){
        // Add diceValue to current score
        currentScore += diceValue
        current0El.textContent = currentScore
    }else{
        // switch to next player
    }
})

