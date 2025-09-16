'use strict';

    // Scope and scope chain

function calcAge(birthYear){ // Global scope as it is a top level code.

    const age = 2025 - birthYear // local to calcAge
    console.log(firstName) // firstName not in this calcAge's scope. But it is a global variable so on looking up the scope chain it finds it in global scope
    
    function printAge(){ // Can access parent scope and global scope
        let output = `${firstName}, you are ${age}, born in ${birthYear}` // age and birthYear accessed from parent calcAge's scope and firstName from global scope
        console.log(output)

        if(birthYear >= 1981 && birthYear <= 1996){ // this is a block scope
            var millenial = true

            // Creating a new variable with same name as outer scope's variable.
            // const firstName = 'Olivia' // If firstName in current scope itself no variable look up , js use this variable.
            
            // Reassinging outer scope variable 'output'
            output = 'New Output!' // Reassigning

            
            const str = `Oh, You  are a millenial, ${firstName}` // firstName from global scope
            console.log(str)

            function add(a, b){
                return a+b
            }


        } // millennial => born between 1981 and 1996
        
        // console.log(str) // Reference error : let and const are block scoped so cannot access outside block
        console.log(millenial) // var cannot be block scoped. It will be scoped to the nearest fn. Here var is in printAge's scope
        // console.log(add(2,3)) // Reference Error : fns are block scoped in strict mode. so add is also block scoped 
        console.log(output)

    } // printAge can access output (its own scope), age and birthYear from calcAge scope, firstName from global scope
    printAge()

    
    return age
}

const firstName = 'Milan' // global variable
console.log(calcAge(1991))


    // Hoisting with Variables

console.log(me) // undefined // var is hoisted to an initial value of 'undefined'
// console.log(job) // ReferenceError : cannot access before initialization // hoisted but job is at TDZ here.
// console.log(birthYear)  // same error as above // hoisted but birthYear is also in TDZ

var me = 'Milan'
let job = 'teacher'
const birthYear = 2003

// Hoisting with Functions

console.log(addDecl(2,3))
// console.log(addExp(2,3)) // ReferenceError : Cannot access addExp before initialization
// console.log(addArr(2,3)) // ReferenceError : Cannot access addArr before initialization
// console.log(addVar(2,3)) // Uncaught TypeError : addVar is not a function // because var allows hoisting initialized as undefined so we actually calls undefined which is not a fn

function addDecl(a,b){
    return a+b
}

const addExp = function(a,b){ // Its const variable so in TDZ
    return a+b
}

const addArr = (a,b)=> a+b
var addVar = (a,b) => a+b

// Example

if(!numProducts) deleteShoppingCart() // we get all products deleted even if numProducts has 10. because it is hoisted with undefined (falsy value)

var numProducts = 10

function deleteShoppingCart(){
    console.log('All products deleted')
}
// So don't use var . Use let, const instead. And always declare all your fns first and use them only after declaration

var x = 1
let y = 2
const z = 3

console.log(x === window.x)
console.log(y === window.y)
console.log(z === window.z)
// Check window obj in console. Window is the global obj of js in browser. Variables created by let and const do not create properties on window obj. But var does.

/*
    This keyword

    Special variable that is created for every execution context (every fn). The this keyword will always take the value of the owner of the 
    fn in which the this keyword is used. ie it points to owner of the fn.

    this is not static (not always same). It depends on how the fn is called and its value is only assigned when the fn is actually called.

    fn calling ways ::
    
    1. fn as method : The this keyword inside method point to the object on which the method is called 
    2. Simple fn call : this keyword is undefined in strict mode. Otherwise 'this' points to global object (window obj in case of browser). Always use strict mode.  
    3. Arrow fns : this keyword will simply be the this keyword of surrounding fn ( ie parent fn). It is called lexical this keyword . Arrow fns do not have their own this.
    4. fn called as eventListener : this points to the DOM element that the handler fn is attached to.
    5. new (points to new obj created), 
       call (points to first argument of call), 
       apply (points to first arg , but arg passed as array),
       bind (points permanently to the obj passed as arg): 

    this keyword will not point to the function itself and not to its variable env of the fn.
*/

console.log('from outside fn :',this) // this outside fn points to window obj

const calcAge1 = function(birthYear){ // this inside regular fn(means fn without obj attached) points to undefined as we are in strict mode. Otherwise points to global obj.
    console.log(2025-birthYear)
    console.log('from reg fn : ',this)
}
calcAge1(1970)
 
const calcAgeArr = birthYear => {
    console.log(2025 - birthYear)
    console.log('from arrow fn :',this) // this points to parent fn's this. Here parent fn is global scope that points to window. so arrow fn also points to window.
}
calcAgeArr(1971)

const heaven = {
  
    year : 2011,
    calcAge2 : function(){
        console.log('from method : ',this) // this point to heaven obj because method calcAge() is called on heaven obj. this => heaven, this.year => heaven.year, etc
        console.log(2025 - this.year)
    }
}
heaven.calcAge2()

const helan = {
    year : 2005
}
helan.calcAge3 = heaven.calcAge2 // method borrowing // copying method from heaven obj to helan obj 
console.log(helan)
helan.calcAge3() // this points to obj helan as method is called from helan object (even though method is written in heaven object).

const fn = heaven.calcAge2
// fn() // this will be undefined because fn is a regular fn. year is not defined so returns year