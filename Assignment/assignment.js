    // JS fundamentals Part 1 // Values and Variables
/*
// Declare variables called country, continent and population and assign their values according to your own country(population in millions)
let country = 'India'
let continent = 'Asia'
let populationInMillion = '1451'

// Log their values to the console.
console.log(country)
console.log(continent)
console.log(populationInMillion)

//  Calculate BMIs (Body Mass Index) of Mark and John and check which one has higher BMI [BMI = mass / (height * height)] // mass in Kg and height in meter

let massJohn = 92
let heightJohn = 1.95

let massMark = 78
let heightMark = 1.69

let johnBMI = massJohn/heightJohn ** 2
let markBMI = massMark/heightMark ** 2

let isHigherBMI = johnBMI >= markBMI

console.log(johnBMI, markBMI, isHigherBMI)

massJohn = 85
heightJohn = 1.76

massMark = 95
heightMark = 1.88

johnBMI = massJohn/heightJohn ** 2
markBMI = massMark/heightMark ** 2 
isHigherBMI = johnBMI >= markBMI


console.log(johnBMI)
console.log(markBMI)
console.log(isHigherBMI)
*/

// Print a nice output to the console, telling the user who has higher BMI. Modify the ouputs to use template literals to include BMI values.

/*
const massJohn = 92
const heightJohn = 1.95

const massMark = 78
const heightMark = 1.69

const markBMI = massMark / heightMark ** 2
const johnBMI = massJohn / heightJohn ** 2

console.log(markBMI, johnBMI)

if(markBMI > johnBMI){
    // console.log("Mark's BMI is higher than John's.")
    console.log(`Mark's BMI(${markBMI}) is higher than John's (${johnBMI})!`)
}else{
    console.log(`John's BMI (${johnBMI})is higher than Mark's (${markBMI})`)
}
    */

/*

// Dolphins scored 96, 108 and 89. Koalas scored 88, 91 and 110. Calculate the average score for dolphins and koalas and find the winner.

const scoreDolphins = (96 + 108 + 89) / 3
const scoreKoalas = (88 + 91 + 110) / 3

if(scoreDolphins > scoreKoalas){
    console.log('Dolphins win the trophy')
}else if(scoreDolphins < scoreKoalas){
    console.log('Koalas win the trophy')
}else{
    console.log('Both win the trophy')
}

*/

// Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team and the same time a score of atleast 100 points.

/*
const scoreDolphin = (97 + 112 + 101) / 3
// const scoreKoalas = (109 + 95 + 123) / 3
const scoreKoalas = (109 + 95 + 106) / 3


if(scoreDolphin > scoreKoalas && scoreDolphin >= 100){
    console.log('Dolphins win the trophy',)
}else if(scoreKoalas > scoreDolphin && scoreKoalas >= 100){
    console.log('Koalas win the trophy')
}else if(scoreKoalas === scoreDolphin && scoreKoalas >= 100 && scoreDolphin >= 100){
    console.log('Both win the trophy')
}else{
    console.log('No one wins the trophy')
}
*/

// Steven needs a simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different the tip is 20%.
// Calculate tip using template literals. Print a string with bill value, tip and final value.

/*

let bill = 275
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2


console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}.`)
*/