'use strict';
 
/* DOM Manipulation Intro

console.log(document.querySelector('.message').textContent)

 DOM manipulation => making js interact with the webpage. DOM stands for document object model. It is basically a structured representation of html documents. DOM allows javascript to access html elements and styles in order to manipulate them.
   ie we will be able to change text, html attributes and even css styles from our javascript. DOM is basically a connection point between html documents and js code. DOM is automatically created by the browser when html loads. And it is stored
   in a tree like structure. In this tree each html element is one object. 
   
   DOM always start with the document object. A document is a special object that is the entry point to the DOM. Because we need it to select elements Eg: document.querySelector(). First child element of document object is html. It has two 
   child elements head, body.  DOM !== Js. Js is just a dialect of ECMAScript specification. DOM and DOM methods are part of web API's not in JS. Web APIs are libraries that browsers implement and that we can access from our javaScript code. API
   stands for Application Programming Interface. Besides DOM, timers fetch API are some other web APIs.  


document.querySelector('.message').textContent = 'Correct Number!'
console.log(document.querySelector('.message').textContent)

document.querySelector('.number').textContent = 13
document.querySelector('.score').textContent = 10

document.querySelector('.guess').value = 17  For input elements content we type is stored in the value property not in DOM's textContent. For other elements, content between opening and closing tags is stored as text accessible via textContent or innerText. 

An event is something that happens on the page. Eg: mouse click, mouse moving, key press , etc. With event Listener we wait for an event to occur and then react to it. 
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1 // Math.random() * 20 => gives a number between 0 and Math.trunc removes decimal part, + 1  gives a number from 1 to 20

let score = 20
let highScore = 0

const displayMsg = function(msg){ // Refactoring with fns
   document.querySelector('.message').textContent = msg
}

document.querySelector('.check').addEventListener('click',()=>{
   const guess = Number(document.querySelector('.guess').value )// Whenever we get something from a user interface for example from an input field, usually it will be a string.

   // When there is no input
   if(!guess){ // First scenario to be implemented is always the 'no input' condition.
      // document.querySelector('.message').textContent = 'No Number!'
      displayMsg('No Number!')

      // When player wins
   }else if(guess === secretNumber){
      displayMsg('Correct Number!') // document.querySelector('.message').textContent = 'Correct Number!'
      document.querySelector('.number').textContent = secretNumber

      document.querySelector('body').style.backgroundColor = '#60b347' // This is inline style ie style that is applied directly
      document.querySelector('.number').style.width = '30rem' // Whenever manipulating style we always need to specify a string

      if(score > highScore){
         highScore = score
      }
      document.querySelector('.highscore').textContent = highScore

   // When guess is wrong
   }else if(guess !== secretNumber){ // Refactoring our code : 1) guess high and low changed to guess wrong. 2) DRY(don't repeat yourself) principle. We can also refactor the same code into a function.
      if(score > 1){
         displayMsg(guess > secretNumber ? 'Too high!' : 'Too low!')// document.querySelector('.message').textContent = 
         // guess > secretNumber ? 'Too high!' : 'Too low!'   
         score--
         document.querySelector('.score').textContent = score
         
      }else{
         displayMsg('You lost the game!!')// document.querySelector('.message').textContent = 'You lose the game!!'
         document.querySelector('.score').textContent = 0
      }

   } // We can refactor functionality that we use over and over again into their own functions in order to make the code more dry.

   /*     // When guess is too high
   }else if(guess > secretNumber){
      if(score > 1){
         document.querySelector('.message').textContent = 'Too high!'
         score--
         document.querySelector('.score').textContent = score
      }else{
         document.querySelector('.message').textContent = 'You lose the game!!'
         document.querySelector('.score').textContent = 0
      }
      
      // When guess is too low
   }else{
      if(score > 1){
         document.querySelector('.message').textContent = 'Too low!'
         score--
         document.querySelector('.score').textContent = score
      }else{
         document.querySelector('.message').textContent = 'You lose the game!!'
         document.querySelector('.score').textContent = 0
      }
      
   }*/
}) // addEventListener(type, event handler) event handler is a function that is executed when the event occurs.

document.querySelector('.again').addEventListener('click', ()=> {
   score = 20
   secretNumber = Math.trunc(Math.random()* 20) +1

   document.querySelector('.score').textContent = score
   document.querySelector('.number').textContent = '?'
   displayMsg('Start guessing..') // document.querySelector('.message').textContent = 'Start guessing...'
   document.querySelector('.guess').value = ''

   document.querySelector('body').style.backgroundColor = '#222'
   document.querySelector('.number').style.width = '15rem'
})