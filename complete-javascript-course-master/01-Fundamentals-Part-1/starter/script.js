

// Intro

/*

let js = 'amazing';
console.log(40+8+23-10)

// Values and variables

console.log("Milan")// value is basically a piece of data. It is the most fundamental unit of information we have in programming. We can store values into variables and reuse them over and over. Eg: Milan

let firstName = "Lophy" // value stored in variable (daclaring a variable). //  Variables act like box. Box can hold objects (eg: book). We can write a label on box to describe what's in it. We can find the object later using the label.
 // Here into the box 'firstName' we put the value of 'Jonas'. If we want to use this value later just use this label (variable name).  

console.log(firstName) // Variables let us update value easily. Otherwise we need to have change the value separately at each place used. variable name usually written in camelCase.
// variable names cannot start with a number. It can only contain numbers, letters, underscore, dollar sign. Can't use reserved words as variable name. Don't use uppercase in first letter for variable name. 
// It is used for special usecase in object oriented programming. Also all letters uppercase is reserved for naming constants that won't change the value. Variable name should be descriptive. Its name should specify what value it holds.  

*/
    // Variable name conventions

/*

let jonas_matilda = 'JM'
let $function = 27

let person = "Milan"
let PI = 3.1415

let myFirstJob = 'Coder'
let myCurrentJob = 'Teacher'

let job1 = 'Coder'
let job2 = 'Teacher'

*/

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
  
/*

let jsIsFun = true
console.log(jsIsFun) // typeof is an operator that used to show the type of a value. 

console.log(typeof jsIsFun)
console.log(typeof 33)
console.log(typeof "Milan")

jsIsFun = 'Yes!' // Assigning a new value to a variable.
console.log(typeof jsIsFun)

let year // An empty varibale declared hold undefined as its value.
console.log(year)
console.log(typeof year)

year = 1919 // dynamic typing. data type as number determined automatically
console.log(typeof year)

console.log(typeof null) // returns object . It is a historical error in JS which is not corrected because doing so would break existing code that relied on this behaviour. Properly checked using === rather than using typeof

let value = null
console.log(value === null)

*/

    // Different ways of declaring variables : let, const, var 

    /*

// let and const were introduced in ES6, so they are modern javascript. var keyword is the old way of declaring variables. We use let keyword to declare variables that can change later during execution. And also for declaring empty variables. 
let age = 30
age = 31 // reassigning a new value or mutating the age variable

const birthYear = 2003// we use const variables to declare variables that are not supposed to change. So value in a const variable cannot be changed. const variables are immutable also means that we cannot declare empty const variables.
// birthYear = 2000 // Return TypeError: Assignment to constant variable.
// const job; // Return Syntax error: Missing initializer in const declaration.

// It is recommended to use const by default and let only when you are really sure that the variable needs to change. Because it is good practice to have little variable mutations and or variable changes as possible. As changing variables may cause bugs.

var job = 'Programmer'// Avoid declaring variables using var as far as possible.
job = 'teacher' // var and let are pretty similar but below the surface they are actually different. let is block scoped and var is function scoped.

lastName = 'Lophy' // We actually don't even have to declare variables at all. This is actually a terrible idea as it doesn't create a variable in current scope. Instead JS will create a property on the global object.
console.log(lastName)

*/

    // Basic operators
/*

// Math operators: - , + , * , / , **

const now = 2037// An operator basically allows us to transform values or combine multiple values. Eg : Mathematical operators, comparison operators, logical operators, assignment operators, etc
const ageMilan = now - 2003
const ageHelan = now - 2005 // year 2037 is repeating which is not a good practise as if we need to change the year we need to change in both. Hence we have concept of variables.
console.log(ageMilan, ageHelan)

console.log(ageMilan * 2, ageMilan / 10, 2**3) // **  => exponentiation operator. Here 2 to the power of three

const firstName = 'Milan'
const lastName = 'Lophy'
console.log(firstName + ' ' + lastName) // plus operator can be used to add numbers and also to concatenate (join) strings. typeof operator give the type of value.

// Assignment operator:  =, +=, -=, *=, /=, **=

let x = 10 + 5 // 15 
x += 10 // x = x + 10 = 25
x *= 4 // x = x * 4 = 100
x++ // x = x + 1 = 101
x-- // x = x - 1 = 100
x **= .5 // x = x ** 0.5 = 10 ie square root of 100 

console.log(x)

// Comparison operators : >, <, <=, >=, !=, ==, ===, !== // basically we use comparison operators to produce boolean values.

console.log(ageMilan > ageHelan) 
console.log(ageHelan >= 18)

const isFullAge = ageHelan <= 30 // Storing the result in variable.
console.log(isFullAge)

console.log(now - 2037 === now - 2005)// Comparing without using the variables. How JS knows which one to do first , Mathematical operator or comparison operator ? Operator precedence

*/

    // Operator Precedence : Order in which operators are executed. // Precedence table - search mdn (mozilla developer network) operator precedence in google.

/*
const now = 2037    
const ageMilan = now - 2003
const ageHeaven = now - 2011
console.log(now - 2003 <= now - 2011) // This works because mathematical oprators have high precedence than comparison operators. So first both subtractions are done and then compared

console.log(25 - 10 - 5) // mathematical operators - left to right. Assignment operators are right ot left

let x, y; // Defining 2 variables at the same time.

x = y = 25 - 10 - 5 // first js checks all operators present and notice that mathematical operators have high precedence than assignment operators. So first 10 (25- 10 done first then - 5 as left to right) is calculated. Then assign it to y then to x

console.log (x, y) // precedence : () ->  x.y ->  unary operators ++, --, !, ~, typeof > ** > *, /, % > +, - -> <<, >>, >>>  -> <, <=, >, >=, in, instanceof -> ==, !=, ===, !== -> .....

console.log(`Average of ${ageMilan} and ${ageHeaven} = ${(ageMilan + ageHeaven) / 2}`)

*/

    // Strings

/*
const firstName = 'Milan'
const job = 'teacher'
const birthYear = 2003
const year = 2037

const milan = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!'  // type coercion - js automatically changes number to string to make it join with other strings.
console.log(milan)

// Template literals : An easy way to build strings. We can insert variables directly into the string. A template literal assembles multiple pieces into one final string. We use backticks to write a template literal.
const milanNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`
console.log(milanNew)

console.log('String with \n\
multiple lines \n\
before template literals.')// it also helps us to create multiline strings. Before template strings, writing multiline strings was done using newline character (\n) and concatenate strings across lines (by using backslashes to continue string on next line).

console.log(`Multiple lines with 
template literals.`)
*/

    // Taking decisions : If else statements

/*
const age = 19

if(age >= 18){ // This structure of if is called the control structure because it allows us to control the execution of our code.
    console.log('Eligible for driving license ')
}else{
    const yearsLeft = 18 - age
    console.log(`You are too young. Wait another ${yearsLeft} years :)`)
}

const birthYear = 20003
let century
if(birthYear <= 2000){
    century = 20
}else{
    century = 21
}

console.log(century)
*/

    // Type Conversion and coercion

    // Type conversion

/*
const inputYear = '1991'// Type conversion is when we manually convert from one type to another. JS can convert only to a three types. Can convert to a number, to a string, to a boolean. Can't convert to undefined or null.
console.log(inputYear + 18) // 199118 // perform string concatenation. We need to fix it by changing the string to a number by using built-in Number fn.
console.log(Number(inputYear), inputYear) // 1991 '1991'

console.log(Number(inputYear) + 18) // 2009

// Trying to convert something to a number that is impossible to convert. Eg: converting string 'Milan' to a number.
console.log(Number('Milan'))  // NaN => Not a number . Js gives us this value whenever an operation that involves numbers fails to produce a new number.
console.log(typeof NaN)// (typeof NaN gives number => NaN is actually an invalid number)

console.log(String(2003)) // Converting numbers to string
// We rarely does type conversion because javascript automatically does type coercion automatically

*/
    // Type coercion
/*
// Type coercion is when javaScript automatically converts types behind the scenes for us. It happens whenever an operator is dealing with two values of different types.

console.log('I am ' + 21 + ' years old') // For eg: when using plus operator with a string and number, the number will be converted to a string.

console.log('I am ' + String(23) + ' years old.') // If javascript did not have automatic type coercion, we would have to manually convert the number to a string.

console.log('23' - '10' - 3) // Not all operators do type coercion to string. Minus operator triggers the opposite conversion. strings are converted to numbers.
console.log('23' + '10' + 3) // If we use plus operator, the three is converted to a string and the strings are concatenated.
console.log('23' * '2') 
console.log('23'/'2')// The same is true for multiplication and division. The values are converted to numbers before operation.

    // Guess the output
 
let n = '1' + 1 // '11' // plus concatenate
n = n - 1 // 11 - 1 = 10 // minus convert string to number and perform the operation
console.log(n)

console.log(2 + 3 + 4 + '5') // '95' // perform left to right ie 2+3+4 = 9 then 9 + '5' => '95'
console.log('10' - '4' - '3' - 2 + '5') // '15'

// Type coercion can introduce many unexpected bugs into our program. It happens when we don't know about what we are doing.
//  Actually it is a great mechanism that allows us to write a lot less code and also to write more readable code.

*/

    // Truthy and falsy values

/*

Falsy values are values that are not exactly false, but will become false when connverted to a boolean. In JavaScript, there are only five falsy values.

 ~ 0,
 ~ empty string '',
 ~ undefined,
 ~ null,
 ~ NaN
 
False itself is already false, so it does not need to be included in the list. All of these five values will be converted to
false when coerced to a boolean. They are not exactly false initially, but they become false when converted to a boolean.

    Everything else is considered a truthy value. Truthy values are values that will be converted to true. For eg: any number that is not zero
or any string that is not an empty string will be converted to true when coerced to a boolean.

 */

/*
console.log(Boolean(0), Boolean('')) // Just like numbers and strings, we can use Boolean function to convert values to booleans
console.log(Boolean(undefined))
console.log(Boolean('Milan'),  Boolean({})) // Empty object is a truthy value.

// In practise, the conversion to boolean is always implicit, not explicit. In other words, it is type coercion that javascript does automatically behind the scenes.
// JavaScript does type coercion to booleans in two scenarios ~ When using logical operators ~ in a logical context, such as condition of an if-else statement.

const money = 0 // Money is set to zero. In the logical context of an if-else statement, Js try to corce any value to boolean. If condition is not a boolean Js convert it to boolean using truthy and falsy values.

if(money){ // Checking if the person currently have money or not.
    console.log('Do not spend too much !')
}else{
    console.log('You need a job immediately.')  // Zero is a falsy valuehence else block is executed. If money changed to another number then if block is executed. 
}

// Another use case for truthy and falsy values is to check if a variable is actually defined or not.

let height 

if(height){
   console.log('Yay ! Height is defined.') // if block is executed on assigning a value to height other than 0.
}else{
    console.log('Height is not defined.') // else block is executed because height is not assigned any value hence it is undefined in this moment. undefined is a falsy value.
}

// Assigning zero to height also executes else block as zero is also a falsy value. It is a bug actually. This illustrates that there can be problems using this approach. However, this can be fixed using logical operators. 
*/

    // Equality Operators == Vs ===

    // The differences between strict (===) and loose (==) equality operators.
/*
const age = 18

if(age === 18) // Checking if age is exactly 18. // No curly braces required if only one line.
    console.log('You just became an adult :)') // triple equal returns true only if both sides are exactly the same including the type. It is strict because it does not perform type coercion.

console.log(18 == '18')    // double equals is the loose equality operator and does perform type coercion. Loose equality operator convert the string '18' to number 18 before comparison. So returned true
console.log(18 === '18') // Strict equality operator does not perform this conversion so returned false.

// As a general rule for clean code, avoid the loose equality operator as much as possible. Always us === when comparing values. If type conversion is needed, convert manually before comparison.

const num = prompt("What's your favourite number from == ?") // prompt function a simple way to get a value from the user. The value returned by prompt is always a string.
console.log(num, typeof num)

if(num == 17){ // '17' == 17
    console.log('Cool. 17 is an amazing number.[from ==]')
} // work because == convert string to a number.

if(num === 17){ // '17' !== 17
    console.log('Cool, 17 is an amazing number.')
}else{
    console.log("'17' != 17")
} // Doesn't work unless the type is converted.

const fvt = Number(prompt('What is your favourite number from === ?'))// To use strict equality, convert input to a number using Number function. 
if(fvt === 17){
    console.log('Cool, 17 is an amazing number.[from ===].')
}
    */

    // You can add more conditions to an if-else statement using if-else blocks

/*
let num = 17
if(num === 17){ 
    console.log('Cool, 17 is an amazing number')
}else if(num === 7){
    console.log('Cool, 7 is also a cool number')
}else{
    console.log('Number is not 17 or 7')
} // this allows you to check multiple conditions in sequence before reaching the final else block.

if(num !== 7){ // There is also an operator for checking if values are different. The strict inequality operator is !== and the loose version is !=. Always use strict version.
    console.log('Why not 7 ?')
}

*/

    // Boolean Logic

/* Boolean logic is a branch of computer science that uses true and false values to solve complex logical problems. To solve this it uses several logical
   operators to combine true and false values. Like we use arithmetic operators to combine numeric values. Consider 2 boolean variables :

   A : Sarah has a driving license
   B : Sarah has good vision

   A and B are boolean variables that can be true or false. 

   Result of operation (with AND, OR, NOT,...) is determined using a Truth table which shows all possible combinations of A and B. 
   
   // AND Operator

   Expressed as A AND B returns true only if both are true. ie Sarah has driving licence and good vision. This logic extends to more than 2 operands. No matter how many variables.

   Truth Table : A|B|A AND B || T|T|T || T|F|F || F|T|F || F|F|F

   // OR Operator

   Expressed as A OR B returns true if atleast one of the variables is true. ie, Sarah has a driving licence or good vision. This logic also extends to more than 2 operands.

   Truth Table : A|B|A OR B || T|T|T || T|F|T || F|T|T || F|F|F

   // NOT Operator

   It acts only on one boolean value and inverts it. ie If A is true then NOT A is false, if A is False then NOT A is true. This operator does not 
   combine multiple values but simply negates a single boolean value.

   Eg: 

   const age = 16

 Boolean variables , A : Age is greater or equal 20 (false) , B : Age is less than 30 (true)

 !A => true
 A && B => false
 A || B => true
 !A AND B => true
 A OR NOT B => false

 Note that the NOT operator has precedence over AND and OR, so values are inverted first before being combined. 

*/

    // Logical Operators continued
/*
const hasDrivingLicense = true
const hasGoodVision = true

console.log(hasDrivingLicense && hasGoodVision)
console.log(hasDrivingLicense || hasGoodVision)
console.log(!hasGoodVision)
console.log(hasDrivingLicense && !hasGoodVision)
console.log(!hasDrivingLicense || !hasGoodVision)
console.log(hasDrivingLicense || !hasGoodVision)

// decision making with boolean variables

if(hasDrivingLicense && hasGoodVision){
    console.log('Sarah is able to drive')
}else{
    console.log('Someone else should drive')
}

const isTired = true

const shouldDrive = hasDrivingLicense && hasGoodVision && !isTired

if(shouldDrive){
    console.log('Sarah is able to  drive.')
}else{
    console.log('Someone else should drive')
}

*/

