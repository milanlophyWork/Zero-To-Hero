'use strict';
    // Call and apply methods : Allow us to manually set the this keyword for any fn call

const lufthansa = { // Suppose we are in airline. Lufthansa is the biggest European airline group
    airline : 'Lufthansa',
    iataCode : 'LH',
    bookings : [],
    // book : function(){}
    book(flightNum, name){ // Object literal syntax: short hand
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`)
        this.bookings.push({flight : `${this.iataCode}${flightNum}`, name})
    }
}

const eurowings = {// let lufthansa group created a new airline
    airline : 'Eurowings',
    iataCode : 'EW',
    bookings : [],   
}
/*
lufthansa.book(227, 'Milan Lophy') // this keyword points to lufthansa obj as it is the obj on which the method book is called
lufthansa.book(635, 'John Smith')


const book = lufthansa.book // This book is not a method. it's now a regular function.
// book(23, 'Sara Williams') // Regular fn so undefined in strict mode // We want this keyword to point to corresponding obj as called. And we have 3 fn methods to do this. call, apply and bind

    // Call method
book.call(eurowings, 213, 'Sarah Williams') // first arg is what we want the this keyword to point to, other arg are arg of original fn.
console.log(eurowings) // with call method we set this keyword to eurowings.

book.call(lufthansa, 32, 'Mary Cooper') 
console.log(lufthansa)

const swiss = {
    airline : 'Swiss',
    iataCode : 'LX',
    bookings : [],
    seats : 120
}
book.call(swiss, 72, 'Maria Martin')// call method work for all obj that have the required arguments of fn 

    // Apply method : Difference from call method is that it does not receive a list of arguments but takes an array of arguments

const flightData = [583, 'Joseph Cooper']
book.apply(eurowings, flightData) // First arg is the this keyword , Other arguments are passed as an array This method not used anymore as we have a better way to do the same thing.

book.call(swiss, ...flightData) // Instead of apply use call and then use spread operator to take data out of the array.
*/

    // Bind Method : Also allow us to manually set the this keyword for any fn call

const book = lufthansa.book // Difference is that bind does not immediately call the fn. Instead it returns a new fn where this keyword is bound. So it is set to whatever value was pass into bind.

const bookEW = book.bind(eurowings) // bind create a new fn with this keyword set to eurowings. It will not call book fn instead return a new fn where this always set to eurowings.
bookEW(23, 'Joseph Cooper')

const bookLH = book.bind(lufthansa) // this always set to lufthansa
bookLH(43, 'Steven Homes') // Instead of using call all the time we can just bind once and always use these fns. 

// book.call(eurowings, 213, 'Sarah Williams')// In call method we can pass multiple arguments besides the this keyword. Same can be done in bind method too.
const bookEW213 = book.bind(eurowings, 213) // Creating function using bind for EW with flight no. 213 // Fixing up certain arguments beforehand . This is called partial application
bookEW213('Christopher') // Flightnum is already set only name required as arg
bookEW213('Sarah Williams') // Partial application => a part of arguments of orginal fn are already applied.

    // Using object together with event listeners 
lufthansa.planes = 300 // This company has 300 planes // planes number and buyPlane method to lufthansa obj

lufthansa.buyPlane = function(){
    this.planes++ 
    console.log(this) // this points to button element. Because in event handler fn this keyword always points to element on which handler is attached to. 
    console.log(this.planes) // Return NaN as this refers to button element. It has no plane variable so this.planes is undefined on adding undefined we get NaN
}

//document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane) // We need to manually define the this keyword. Here we need to pass a fn and not to call it So use bind
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa)) // we want this to point to lufthansa so bind with lufthansa 
// lufthansa.buyPlane() // return 301 as this points to lufthansa obj

// Partial Application => We can preset parameters. We partially set the parameters actually

const addTax = (rate, value)=> value + value * rate // General fn for creating tax.
console.log(addTax(0.1, 200))

// Suppose there is one tax that we will use all the time. Let Value added tax (VAT) is 23%
const addVAT = addTax.bind(null, 0.23) // Here we don't ue this keyword in our addTax fn so just use null. Now fix the rate as 0.23. Can be used for any value. 
console.log(addVAT(100)) // The value we want to preset should be the first parameter of the fn. ie order of parameters matters

// Challenge

function addTaxRate(rate){

    return function (value){ // Fn returning another fn for calculating tax
        return value + value *rate
    }
}
const addVAT2 = addTaxRate(0.23)
console.log(addVAT2(100))