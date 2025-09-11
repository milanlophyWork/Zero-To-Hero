
    // Activating Strict Mode

/* 
   Strict mode is a special mode that can be activated in javaScript to make it easier to write secure code. To activate write this string at beginning of script. Comment above it 
   is not a problem. Strict mode can also be activated for a specific function or block, but it is recommended to always use it at the beginning of each script. 
    
Benefits : 
    helps developers avoid accidental errors by:
        - forbidding certain actions
        - Creating visible errors in situations where javaScript would otherwise fail silently
*/

/*

// 'use strict';  // **1

let hasDriversLicense = false
const passTest = true

if(passTest){
    hasDriverLicense = true // **2 introduce a bug intentially. if no strict mode, nothing is logged into console. Because the bug resulted in creating a new variable, leaving the original variable as false.
}

if(hasDriversLicense){ // When strict mode is activated a reference error is thrown that hasDriverLicense is not defined. This helps developeer to spot the missing 's' and correct the variable name.
     console.log('I can drive')
}

// const interface = 'audio' // **3 Strict mode introduces a short list of variable names reserved for features that might be added to the language later. For example, defining a variable called interface, private, if, etc results in an error
// const private = 123 // **4 Check by uncommenting starred portions according to number. On uncommenting 3 first correct mistake in 2. After checking, reset everything back.

*/

    // Functions

/* The fundamental building block of real-world JavaScript applications is functions. A function is a piece of code that we can reuse repeatedly in our code. It is like a varible but instead of holding a
   single value a fn holds one or more complete lines of code. We declare a function with function keyword followed by a fn name with parenthesis. Then use curly braces to create fn body. To call a fn we
   write fn name with parenthesis. 
   
   Functions can accept data through parameters and return data back to the caller. Assume fns as machines that takes something proccess it and return a result.
   
   Fns allows us to write more maintainable code by creating reusable chunks instead of repeating code. This follows the important programming principle called 'Don't Repeat Yourself' (DRY). Built 
   in fns like console.log() and Number() work similarly to user-defined fns, accepting arguments and returning values. 
*/

/*
function logger(){
    console.log('My name is Milan Lophy.')
} // This fn doesn't return anything. Not all functions accept parameters and return something

logger() //calling, running or invoking fn
logger() // We can repeat this code as many times we want by just calling the fn instead of rewriting the code. 

function fruitProcessor(fruitName, fruitNos){ // parameters are like variables that are specific only to this function. These parameters get defined once the fn is called and they represent the input data.
    console.log(fruitName, fruitNos)

    const juice = `Juice with ${fruitNos} ${fruitNos > 1 ? fruitName + 's' : fruitName}.`
    return juice // We can return any value from the function
}

const appleJuice = fruitProcessor('apple',5) // Actual values of parameter are called arguments (here 3, 0). // The value returned (ie juice) is what we got now. So store this value in avariable and log it.
console.log(appleJuice)

console.log(fruitProcessor('chikku', 3), Number('17')) // console.log(), Number(), etc are built in functions.
*/

    // function Declarations Vs Expressions

/*

// There are different ways of writing functions. 

function calcAge1(birthYear){ // Fn declaration as we use 'function' keyword to declare just like declaring a variable.
    return 2037 - birthYear
}

const age1 = calcAge1(2003)

const calcAge2 = function(birthYear){// Fn expression : Instead of naming the function, we write an anonymous fn and assign it to a variable // Anonymous fn => fn without a name
    return 2037 - birthYear
} // This fn here is an expression and expression produce value. It is stored in calcAge2

const age2 = calcAge2(2000)
console.log(age1, age2)

// In js, fns are values just like numbers, strings, or booleans. They are not a separate type but can be stored in variables. ie, fn expression is an expression that produces a value, which we assign to a variable.

// The main practical difference between function declarations and expressions is hoisting. Fn declarations can be called before they are defined in the code because they are hoisted.

console.log(calcAge3(2004))

function calcAge3(birthYear){
    return 2037 - birthYear
}

// console.log(calcAge4(2003)) // fn exp cannot be called before definition. It gives Error : Cannot access 'calcAge4' before initialization 
const calcAge4 = function(birthYear){
    return 2037 - birthYear
}
    */

    // Arrow Functions
/*

// Besides fn declarations and expressions there is a third type of fn that was added to js in ES6 that is the arrow fn. An arrow fn is simply a special form of fn expression that is shorter and therefore, faster to write.

const calcAge1 = birthYear => 2025 - birthYear // No curly braces if only one code , no paranthesis if only one parameter and no return keyword as return happens implicitly. No need to explicitly write return keyword
const age1 = calcAge1(2003) // this is the shortest form of arrow fn.
console.log(age1)

const yearsForRetirement = (birthyear, firstName) => { // multiple parameters so paranthesis is required
    const age = calcAge1(birthyear)
    const retirement = 65 - age
    //return retirement // multiple lines of code so curly braces and return keyword is required
    return `${firstName} has ${retirement} years left for retirement.`
}

console.log(yearsForRetirement(2003, 'Milan')) // Unlike fn declarations and fn expressions, arrow fns do not have their own this keyword.
    */

    // Functions calling other fns
/*
function cutFruit(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){ // Consider fruit processor can only make juice with smaller fruit pieces. So want another machine (fn) that cuts fruits we give it.
    const appleCut = cutFruit(apples)
    const orangeCut = cutFruit(oranges) // Calling cutFruit fn from fruitProcessor fn instead of multiplying apples with 4 and oranges with 4. If a separate fn is there we can easily update 4 to more pieces. 
    const juice = `Juice with ${apples} apples cut into ${appleCut} pieces and ${oranges} oranges cut into ${orangeCut} pieces`
    return juice
}

console.log(fruitProcessor(2,3))
*/

    // Reviewing fns
/*
const calcAge = function(birthYear){
    return 2025 - birthYear
}

const yearsForRetirement = function (birthYear, firstName){
    const age = calcAge(birthYear)
    const retirement = 65 - age

    if(retirement >= 0){
        return retirement
    }else{
        console.log(`${firstName} has already retired`) 
        return -1 // -1 is like a std number in programming. We usually return a number when we receive a number as input
    } // return statement immediately exits or immediately returns the function. Anything written after return is ignored.
}

console.log(yearsForRetirement(2003, 'Milan'))
console.log(yearsForRetirement(1955, 'Jonas')) // short cut : alt + up/down to move a line up or down [Selector option shows such shortcuts]

*/

    // Introduction to Arrays
/*

// Data structures bundle all values together into some bigger container. Array is one such data structure. Other one is objects.

const family = ['Lophy', 'Sini','Helan','Heaven']
console.log(family)

const years = new Array(1970, 1971, 2002, 2005, 2011) // Another way of creating an array
console.log(years)
console.log(family[0], years[0]) // Square brackets for retrieving elements. // Arrays are zero based ie first element is the element number zero. Second element is element number one, ...
console.log(family.length) // To get actual number of elements in array
console.log(family[family.length-1]) // To get last element in array // this means we can put an expression inside these brackets. Expression gives a value

years[2] = 2003  // Square brackets for adding elements to the array
console.log(years) // variables with const cannot be changed but here we change value in years. Because years just store a reference only. Actual array is stored somewhere else in memory.
// Only primitive values are immutable. But array is not a primitive value.

// family = ['Tiya', 'Ziya']// We cannot replace an array entirely

const firstName = 'Milan'
const milan = [firstName, 'Lophy', 2025-2003, 'student', family]// Arrays can hold values with different types all at the same time // Each position can have an expression , variable name , arrays, objects, strings, etc
console.log(milan, milan.length)

    // Exercise with arrays

const calcAge = function (birthYear){
    return 2025 - birthYear
}

console.log(calcAge(years[years.length-1]))

const age = years.map(year=> calcAge(year)) // calculating the age of into a new array
console.log(age)  // forEach used to perform an action to each item map is used to transform each item and create a new array from the results
*/

    // Basic array operations (Methods)
/*
// JavaScript has some built in fns that can be applied directly on the arrays. These are called methods. We can consider methods as array operations.

const fruits = ['Grape', 'Water melon', 'Apple']

    // Adding Elements
fruits.push('Orange') // push method adds element to the end of an array // It mutates the original array
console.log(fruits) 

const newLength = fruits.push('Banana')// since push is a fn it can return a value, pass arguments to it. // Here the value it returns is the length of the new array
console.log(newLength)

fruits.unshift('Guava')// unshift method adds element to the beginning of array. Unshift method also returns a value ie length of new array as push
console.log(fruits)

    // Remove elements
const popped = fruits.pop() // opposite of push method , removes last element from array // no argument needed // pop method also returns a value. pop return the removed element (not the length)
console.log(popped)
console.log(fruits)

fruits.shift()// removing the first element from an array // no argument needed // Return the removed element as value
console.log(fruits)

console.log(fruits.indexOf('Apple'))// Method that tells us which position a certain element is in the array
console.log(fruits.indexOf('Banana')) // return -1 if element not present in the array

console.log(fruits.includes('Water melon')) // includes is an ES6 method similar to indexOf but more useful // Return true if element is in the array and false if not in the array
console.log(fruits.includes('Banana')) 

fruits.push(23)// includes use strict equality for this check. ie doesn't perform type coercion
console.log(fruits)
console.log('String 23 :', fruits.includes('23'), 'Number 23 :',fruits.includes(23))
console.log('String 23 :', fruits.indexOf('23'),'Number 23 :', fruits.indexOf(23))

if(fruits.includes('Mango')){// We can use include method to write conditionals
    console.log('Mango is already included ')
}else{
    console.log("Can't find Mango")
}

*/

    // Intro to Objects
/*
const milanArr = [
    'Milan',
    'Lophy',
    2025 - 2003,
    'Software Engineer',
    ['Lophy', 'Sini',' Helan', 'Heaven']
] // Here in arrays order of values matter while retrieving them. We retrieve them using order number. In objects order of values is not a matter at all.

const milanObj = { // In objects, we actually define key-value pairs. So we can give each of the values a name. In arrays we can't give them a name.
    firstName : 'Milan', // key (or property) => variable name, value can be of any type we want here.   
    lastName : 'Lophy',
    age : 2025 - 2003, // value can be an expression too.
    job : 'Software Engineer',
    family : ['Lophy', 'Sini','Helan', 'Heaven']
} // This way of creating object is called object literal syntax because we are literally writing down the entire object content

// Use arrays for order data and objects for unstructured data
*/

    // Dot vs Bracket notation 
/*
const milan = {
    firstName: 'Milan',
    lastName: 'Lophy',
    age: 2025 - 2003,
    job: 'Software Engineer',
    family: ['Lophy', 'Sini', 'Helan', 'Heaven']
}

// retrieving data from objects
console.log(milan)  
console.log(milan.lastName) // Using dot notation. dot is actually an operator which will go to this object and then retrieve the property with the name we specified here.
console.log(milan['family']) // Using bracket notation 

const nameKey = 'Name'
console.log(milan['first' + nameKey], milan['last' + nameKey])// In bracket notation we can put any expression we like. This won't work in dot notation.

// Suppose we don't know which property to be showed. We get this info from user interface. Using a prompt to get user choice. Prompt will return a string. It is stored in a variable so we can use.
const input = 
    prompt('What do you want to know about Milan? Choose from firstName, lastName, age, job, family')
 
if(milan[input]){
    console.log(milan[input])
}else{
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends')
}

// adding new properties to the object
milan.location = 'Kerala'
milan['bloodGroup'] = 'O+'
console.log(milan) // dot notation (cld as member access) has high precedence and bracket notation cld as [computed member access as we can compute property names we want to access] next high precedence

// Challenge

console.log(`${milan.firstName} has ${milan.family.length} friends and her best friend is ${milan.family[1]}`)
*/

    // Object Methods
/*
const milan = {// Fns are values. It means we can create a key-value pair with fn as a value in object.
    firstName : 'Milan',
    lastName : 'Lophy',
    birthYear : 2003,
    job : 'SoftwareEngineer',
    family : ['Lophy', 'Sini', 'Helan', 'Heaven'],
    hasDriversLicense : false,

    //calcAge : function(birthYear){ // Any function that is attached to a object is called a method.
    //   return 2025 - birthYear
    // } // Here we need fn exp. Fn declaration won't works here

    //calcAge : function(){ 
        // console.log(this) // this keyword points to milan object
    //    return 2025 - this.birthYear
    // },// birthYear accessed directly from object using a special variable called 'this' (provided by javascript for every method) instead of passing it as commented below

    calcAge : function() {
        this.age = 2025 - this.birthYear
        return this.age
    },

    getSummary : function(){
        this.summary = `${this.firstName} is a ${this.calcAge()} year old software engineer. She has ${this.hasDriversLicense ? 'a' : 'no'} driving license.`
        return this.summary // calcAge is calling better in above string because age will be undefined if calcAge is not called atleast once. So age will be undefined.
    }
}

//console.log(milan.calcAge(milan.birthYear)) 
//console.log(milan['calcAge'](milan.birthYear)) // calcAge is the property so inside bracket. Fn call after bracket.

console.log(milan.calcAge()) // Suppose we want to access age multiple times. If not stored to new variable age, each time fn is runned and age is calculated. 
// console.log(milan['calcAge']())

console.log(milan.age) // Now just call the age 
console.log(milan.age)
console.log(milan.age)

// Challenge : Create a getSummary method

// milan.getSummary = `${milan.firstName} is a ${milan.age} year old ${milan.job}. She doesn't have a driving license.`
console.log(milan.getSummary()) // In arrays we called methods like pop, shift, etc. These methods are built in methods. This means that arrays are a special kind of object.
*/

    // Iteration: The for loop
/*
// if-else statement is a control structure. Loop is one such control structure. Loops allow us to automate repetitive tasks.

for(let i = 0 ; i< 10; i++){
    console.log('Lifting weights repetition ', i+1)
}
    */

    // Looping arrays: breaking and continuing
/*
// One of the most used application of for loop is to loop through arrays.

const milan = [
    'Milan',
    'Lophy',
    2025-2003,
    'Software Engineer',
    ['Lophy','Sini','Helan','Heaven'] // Array is a special type of object
]

const types = [] // Creating a new array with type of all these elements

for(let i = 0; i< milan.length; i++){
    // reading from jonas array
    console.log(milan[i], typeof milan[i])

    // filling types array
    // types[i] = typeof milan[i] 
    types.push(typeof milan[i])
}
console.log(types)

const years = [1991, 2007, 1969, 2020]
const ages = []

for(let i = 0; i< years.length; i++){
    ages.push(2025- years[i])
}
console.log(ages)

// Continue and break statement

// Array must have only strings. use continue

console.log('----ONLY STRINGS-----')
for(let i= 0 ; i< milan.length; i++){
    if(typeof milan[i] !==  'string') continue // continue is used to exit the current iteration of the loop and continue to the next one.
    console.log(milan[i])
}
// break is used to completely terminate the whole loop

// Log no elements if found a number. use break

console.log('----BREAK WITH A NUMBER----')
for(let i=0; i< milan.length; i++){
    if(typeof milan[i] === 'number') break
    console.log(milan[i])
}
    */

    // Looping backwards and loops in loops
/*
const milan = [
    'Milan',
    'Lophy',
    2025-2003,
    'Software Engineer',
    ['Lophy','Sini','Helan','Heaven']
]

for(let i = milan.length-1; i >= 0; i--){ // Looping backwards
    console.log(i,milan[i])
}

for(let exercise = 1; exercise < 4; exercise ++){ // Loops in loops
    console.log('-----Starting Exercise----- ', exercise) // We have 3 different exercises and we want to repeat each of them five times

    for(let rep = 1; rep < 6; rep ++){
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`)
    }
}
    */

    // While loop

