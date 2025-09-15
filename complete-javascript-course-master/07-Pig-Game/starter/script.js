'use strict';

// diagrams.net for designing flowcharts

// selecting elements
const player0El = document.querySelector('.player--0')
const player1El  =document.querySelector('.player--1')

const score0El = document.querySelector('#score--0') // Instead of cls use the unique id because both elements has same cls name
const score1El = document.getElementById('score--1') // getElementById is supposed to be a little bit faster than querySelector
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')

const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')


// Starting conditions

let scores, currentScore, activePlayer, playing  

const init = function(){
    scores = [0,0]
    currentScore = 0  // Should not be inside fn in btnRoll.addEventListener. if it does, then each time we roll a dice current score would be resetted
    activePlayer = 0
    playing = true

    score0El.textContent = 0 // Setting the initialScore to zero
    score1El.textContent = 0
    current0El.textContent = 0
    current1El.textContent = 0

    diceEl.classList.add('hidden')
    player0El.classList.remove('player--winner')
    player1El.classList.remove('player--winner')
    player0El.classList.add('player--active') // As we want the player 1 to be active for the new game
    player1El.classList.remove('player--active')
}
init()


const switchPlayer = function(){ // refactoring switching player : Usually when we refactor something there maybe something changes in the code. In such cases it's useful to have a parameter.
    document.getElementById(`current--${activePlayer}`).textContent = 0
    currentScore = 0
    activePlayer = activePlayer === 0 ? 1 : 0
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')
}

// Rolling dice functionality
btnRoll.addEventListener('click',()=>{
    if(playing){

        // 1. Generating a random dice roll
        const diceValue = Math.trunc(Math.random() * 6) + 1 

        // 2. Display the dice
        diceEl.classList.remove('hidden')
        diceEl.src = `dice-${diceValue}.png`    

        // 3. Check if rolled 1:
        if(diceValue !== 1){
            // Add diceValue to current score
            currentScore += diceValue
            document.getElementById(`current--${activePlayer}`).textContent = currentScore

            // current0El.textContent = currentScore // current score for player 0 only
        }else{
            // switch to next player
            
            /*if(activePlayer === 0){
                current0El.textContent = 0
                currentScore = 0
                activePlayer = 1
            } else{
                current1El.textContent = 0
                currentScore = 0
                activePlayer = 0
            } */ // Instead of if-else use ternary operator

            switchPlayer()
        }
    }

})


btnHold.addEventListener('click',()=>{ // hold shouldn't work if score is zero 
    if(playing){
        // 1. Add current score to the score of active player
    
        scores[activePlayer] += currentScore // activePlayer = 0 => scores[0] First value in scores array // if 1 then scores[1] = scores[1] + currentScore
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]

        // 2. Check if player's score is >= 100
    
        if(scores[activePlayer] >= 100){
            // if true then Finish the game

            playing = false
            diceEl.classList.add('hidden')

            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner') // adding winner class and also remove active player class
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
        }else{
            // else Switch to the next player
            switchPlayer()
        }
    }
})

btnNew.addEventListener('click', init)