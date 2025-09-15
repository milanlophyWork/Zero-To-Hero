'use strict';

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnShowModal = document.querySelectorAll('.show-modal')

/* Only the first btn is selected if querySelector is used. Limitation of querySelector is that it only selects the first matched class among number of matching classes. So use querySelectorAll in such cases
// console.log(btnShowModal) // returns a nodelist that behaves somewhat like an array. So to select each btn just loop through the nodelist. */

const openModal = function(){
    modal.classList.remove('hidden') // dot is only for  selector. Here we are not selecting anything we are just passing in the name of the cls.
    overlay.classList.remove('hidden') // to make the black shade in the background visible.
}

const closeModal = function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

for(let i = 0 ; i < btnShowModal.length; i++){
    // console.log(btnShowModal[i].textContent)  
    
    btnShowModal[i].addEventListener('click', ()=> {
        // console.log('btn', i+1)
        openModal()
    })

    btnCloseModal.addEventListener('click',  closeModal) // not calling closeModal just passing the fn reference. Because if writes like this closeModal(), js immediately calls it when this line is executed. but we want it to be executed after clicking the button
    overlay.addEventListener('click',()=> closeModal()) // Or we can pass it as a call back fn. Use this syntax when there are arguments and multiple lines of code.
    
    document.addEventListener('keydown', (event)=> { // keyboard events are called global events. They do not happen on one specific element. there are 3 types of events for keyboard. keyup, keydown, keypress
        if(event.key === 'Escape' && !modal.classList.contains('hidden')){ // If esc is key pressed and if modal is not hidden close the modal
            // console.log(event.key)
            closeModal()
        }        
    })
}
