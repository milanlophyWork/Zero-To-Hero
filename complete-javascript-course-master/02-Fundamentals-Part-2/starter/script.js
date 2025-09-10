    
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

function cutFruit(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){ // Consider fruit processor can only make juice with smaller fruit pieces. So want another machine (fn) that cuts fruits we give it.
    const appleCut = cutFruit(apples)
    const orangeCut = cutFruit(oranges) // Calling cutFruit fn from fruitProcessor fn
    const juice = `Juice with ${apples} apples cut into ${appleCut} pieces and ${oranges} oranges cut into ${orangeCut} pieces`
    return juice
}

console.log(fruitProcessor(2,3))