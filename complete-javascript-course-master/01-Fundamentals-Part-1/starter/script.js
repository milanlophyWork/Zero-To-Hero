

// Intro

let js = 'amazing';
console.log(40+8+23-10)

// Values and variables

console.log("Milan")// value is basically a piece of data. It is the most fundamental unit of information we have in programming. We can store values into variables and reuse them over and over. Eg: Milan

let firstName = "Lophy" /* value stored in variable (daclaring a variable). //  Variables act like box. Box can hold objects (eg: book). We can write a label on box to describe what's in it. We can find the object later using the label.
 Here into the box 'firstName' we put the value of 'Jonas'. If we want to use this value later just use this label (variable name).  */

console.log(firstName) /* Variables let us update value easily. Otherwise we need to have change the value separately at each place used. variable name usually written in camelCase.
variable names cannot start with a number. It can only contain numbers, letters, underscore, dollar sign. Can't use reserved words as variable name. Don't use uppercase in first letter for variable name. 
It is used for special usecase in object oriented programming. Also all letters uppercase is reserved for naming constants that won't change the value. Variable name should be descriptive. Its name should specify what value it holds.  */

    // Variable name conventions

let jonas_matilda = 'JM'
let $function = 27

let person = "Milan"
let PI = 3.1415

let myFirstJob = 'Coder'
let myCurrentJob = 'Teacher'

let job1 = 'Coder'
let job2 = 'Teacher'

// Datatypes

/* Values can have different types depending on the type of data that we want them to hold. Every value in Js is either an object or a primitive value. Let us focus on primitive datatypes. There are 7 primitive datatypes. // Number, string, boolean, undefined, null, symbol and big int.

    Numbers are always so-called floating point numbers which means that they always have decimals even if we don't see them or don't define them. Eg: 23 is exactly 23.0
    Strings are simply sequence of characters. Always put htem in quotes.
    Boolean datatype is a logical type that can only be true or false. Used for taking decisions.
    Undefined is the value taken by a variable that is not yet defined (empty value). [Variables that ara not assigned a value hold undefined (m/y creation phase)]
    Null also means empty value.
    Symbol introduced in ES2015 version. Value that is unique and cannot be changed [Not useful for now]
    BigInt introduced in ES2020. Hold larger integers than the Number type can hold.

    Js has a feature called dynamic typing. ie we do not have to manually define the data type of the value stored in a variable. Instead data types are determined automatically.

    Note value is having different types in Js not the variable. Variables simply store values that have a type. Dynamic typing also let us assign a new value with a different data type to the same variable without a problem.

In programming, we use comments to literally comment code (to describe the scenario of code written) or to deactivate code without deleting it. Js will completely ignore anything that is a comment. Single line comments- double slash (ctrl + /), multi-line-comments- /* star is called asterisk */
    
let jsIsFun = true
console.log(jsIsFun) // typeof is an operator that used to show the type of a value. 

console.log(typeof jsIsFun)
console.log(typeof 33)
console.log(typeof "Milan")

jsIsFun = 'Yes!' // Assigning a new value to a variable.
console.log(typeof jsIsFun)

let year
console.log(year)
console.log(typeof year)