'use strict';
    // Call and apply methods

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

lufthansa.book(227, 'Milan Lophy') // this keyword points to lufthansa obj as it is the obj on which the method book is called
lufthansa.book(635, 'John Smith')

const eurowings = {// let lufthansa group created a new airline
    airline : 'Eurowings',
    iataCode : 'EW',
    bookings : [],   
}

const book = lufthansa.book // It's not a method anymore it's now a function.
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