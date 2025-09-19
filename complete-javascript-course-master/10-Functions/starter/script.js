'use strict';
    // Default parameters
/*
const bookings = []
const tax = 0.1

const createBooking = function(flightNum = 'EW213', numPassengers, price = 100 + 100 * tax){ // Modern js set default parameters like this. Default values can have expressions like we did for numPassengers
    // ES5
    numPassengers = numPassengers || 10 // Before ES6 default parameters were set like this 

    const booking = {
        flightNum : flightNum, // instead use object literal syntax
        numPassengers,
        price
    }
    console.log(booking)
    bookings.push(booking)
}

createBooking('LH212')
createBooking()
createBooking(undefined, undefined, 200) // We can't just skip first two arguments and set the third one. To do so set them as undefined
*/

    // Passing arguments : Value vs Reference
/*
const flight = 'LH234' // This one here is primitive (just a string) and is stored in exec ctxt itself
const milan = { // object stored in heap
    name : 'Milan Lophy',
    passport : 234432543
}

const checkIn = function(flightNum, passenger){ // Let number of flight has changed 
    flightNum = 'LH123' // Not good practise
    passenger.name = 'Ms. ' + passenger.name 

    if(passenger.passport === 234432543){
        alert('Checked in')
    }else{
        alert('Wrong passport!')
    }
}
// passing flight, copies flight to flightNum, org value flight itself. So changing flightNum won't affect flight.
// checkIn(flight, milan)// passing milan, copies the ref of milan obj in heap to passenger. Now milan and passenger has same ref within it. Changing passenger.name affect org obj in heap so both are affected.

console.log(flight)
console.log(milan)

// be careful of this behaviour of obj // Another scenario 
const newPassport = function(person){ // Change the person's passport number
    person.passport = Math.trunc(Math.random() * 10000000) // This will create a random number between 0 (inclusive) and 10000000 (exclusive)
    return person
}
console.log(newPassport(milan)) // Same happens here. Passing milan copies the ref of milan into person. So changing password of person changes org milan obj.
// checkIn(flight, milan)

// Js doesn't have passing by reference it only have passing by value even though it looks like it's passing by reference. 
// In other languages, we could pass a ref instead of that value. This works even with primitves ie we could pass a ref to the value of five instead of passing five and then the org value outside fn also changes.
// But in js no pass by reference. We do actually pass reference, ie memory address of obj as above but that ref itself is still a value 
*/

    // First class & higher order fns

/* 
    First class fns or first citizens implies fns are simply values. This is because fns are just another type of obj in js. Since obj are values fns are values too. So we can store them in variables, obj properties, ...
    We can also pass fns as arg to other fns. And also return a fn from another fn. Objects have methods too. Like arrays (a type of obj) have array methods. Likewise fns have fn methods. eg: bind(). 
    
    First class fn in js makes it possible for us to use and write higher order fns. Higher order fn is either a fn that receives another fn as arg or a fn that returns a new fn. 
    
    Eg: addEventListener(event, eventHandlerFn) receive another fn as input. So addEventListener is the higher order fn and we usually say that the fn that is passed in is a callback fn. Because callback 
    fn will be called later by the higher order fn. Here addEventListener will call eventHandler callback fn when event occurs. 

    function x(){ 
    ...
        return fn y(){
        ...
        }
    }

    x is a higher order fn that returns fn y.
*/

    // Functions accepting callback fns

const oneWord = function(str){ // Fn to replace space in a word.
    return str.replace(/ /g, '').toLowerCase() // To select all spaces we use G flag and then replace them with an empty string
}

const upperFirstWord = function(str){ // Transform first word to upper case
    const [first, ...others] = str.split(' ') // split the string wherever space occurs into an array of words. "hello world JS" => ["hello", "world", "JS"] 
    // split(' ') split wherever a space is there. "hello w".split('') split every character=> ['h','e','l','o',' ','w'], "hello world".split() => if nothing passed it will return whole string in an array ["hello world"]
    return [first.toUpperCase(), ...others].join(' ') // join(' ') joins the array elemnets back to string
}

// Higher order fn
const transformer = function(str, fn){ // Creating a higher order fn that take a string and a higher order fn
    console.log(`Original string : ${str}`)
    console.log(`Transformed string : ${fn(str)}`)

    console.log(`Transformed by : ${fn.name}`) // Fns can have properties besides methods. eg: name property
}
transformer('JavaScript is the best!', upperFirstWord)
transformer('Hello worldJS', oneWord)

// Js using callbacks // helps to split up code into more reusable and interconnected parts. It allow us to create abstraction. Abstraction means we hide the detail of some code. Above transformer fn does not care about how string is transformed.
const high5 = function(){
    console.log('Hi')
}
document.body.addEventListener('click', high5);

['Jonas','Martha'].forEach(high5)

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
/*
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
*/