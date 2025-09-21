'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

  // Three data tranformation methods : 1. Map method

/*

// Another way used to loop over array. But unlike forEach, map method will give us a brand new array with elements after applied the callback fn

const eurToUsd = 1.1 // 1 euro = 1.1 US dollar

const movementsUSD = movements.map(mov => mov * eurToUsd)
console.log(movementsUSD)

// using for of loop
const movementsForUSD = []

for(const mov of movements){
  movementsForUSD.push(mov * eurToUsd)
}
console.log(movementsForUSD)

// map also have access to index and the whole array

const movementsDesc = movements.map((mov, i, arr) =>  // forEach method create a sideEffects [elements logged one by one to console] map method won't create sideEffects [all elements into a new array then logged to console at once]
  `Movement ${i+1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`) // Math.abs() make negative values positive

console.log(movementsDesc)
*/

  //  2. Filter method

/*
const deposits = movements.filter(function (mov, i, arr){ // Also have access to index and the whole array (here movements) 
  return mov >= 0
})
console.log(movements) 
console.log(deposits) // filtering positive vlaues only from movements // using filter, allow us to chain all methods together

// Using for of
const depositsFor = []
for(const mov of movements){
  if(mov >= 0){
    depositsFor.push(mov)
  }
}
console.log(depositsFor)

const withdrawals = movements.filter(mov => mov < 0)
console.log(withdrawals)
*/

  // 3. Reduce method // Most powerful array method //reduce(fn(acc, curr, i, arr) {}, initialAcc) initial value of accumulator is zero by default
/*
console.log(movements)// Reduce method reduces all elements in an array into a single value
const balance = movements.reduce((acc, curr, i, arr) => { // accumulator = snowball. Keeps the running result  
  console.log(`Iteration ${i}: ${acc}`)
  return acc + curr
}, 0)
console.log(balance)

const numbers = [5, 12, 8, 130, 44]

const max = numbers.reduce((acc, curr)=> curr > acc ? curr : acc, numbers[0]) // always go with first value of array when trying to find max or min value
console.log(max)

const sum = numbers.reduce((acc, curr)=> acc + curr)
console.log(sum)

// using for of

let sumFor = 0
for(const mov of movements){
  sumFor += mov
}
console.log(sumFor)
*/

  // Find method : Retrieve one element of an array based on a condition 
/*
console.log(movements)

const firstWithdrawal = movements.find(mov=> mov < 0) // filter return a new array but find return the element itself
console.log(firstWithdrawal) // filter returns all elements that match the condition find only returns the first element that match the condition

console.log(accounts)
const account = accounts.find(acc => acc.owner === "Jessica Davis")
console.log(account)


// Using for
let accountFor
for(const acc of accounts){
  if(acc.owner === 'Jessica Davis') {
    accountFor = acc
    break
  }
}
console.log(accountFor)
*/

  // FindIndex method : returns the index of the first found element that match the condition and the not element itself
/*
const index = accounts.findIndex(acc => acc.pin === 1111)
accounts.splice(index, 1)// To delete an element from the array we use the splice method. Delete the element in given index. The number of elements to be removed is specified next. Here only 1
console.log(accounts) // indexOf method we can only search for a specific value that is in the array. While findIndex allows us to use a condition (callback) to return index of first match

const numbers = [34,5,20,45]
console.log(numbers.indexOf(20))
*/

  // FindLast and FindLastIndex Method : do same as find and findIndex but start searching from last to first element
/*
console.log(movements)
const lastWithdrawal = movements.findLast(mov => mov < 0)
console.log(lastWithdrawal)

const lastWithdrawalIndex = movements.findLastIndex(mov => mov < 0)
console.log(lastWithdrawalIndex)

const largeMov = movements.findLastIndex(mov => Math.abs(mov > 1000))

console.log(largeMov) // Last mov > 1000 is 1300 at 7th position. Occured time is array length - the mov's index + 1. 
console.log(largeMov + 1) // to get position when start with 1 instead of zero
console.log(`Your latest large movement was ${movements.length - (largeMov +1)} movements ago`)
*/

  // Some and every methods

// Some
/*
console.log(movements)

// checks equality
console.log(movements.includes(-130)) // includes test equality. It tests if any value in array is exactly equal to -130. To test a condition we use the some method. 

// checks condition
const anyDeposits = movements.some(mov=> mov > 0)// We want to know if there is any deposits (+ve movs) in this array.
console.log(anyDeposits) // return true as we have deposits here (atleast one should be there to return true)

const anyDep5000 = movements.some(mov => mov > 5000)
console.log(anyDep5000) // return false as no deposits > 5000

// Banks grant loan if there is atleast one deposit with atleast 10% of the requested loan amount
const amount  = 20000
if(amount > 0 && movements.some(mov => mov >= amount * 0.1)){
  console.log('grant loan')

  movements.push(amount) // granting the loan amount to the account
  console.log(movements)
}

// console.log(amount*0.1) // 10 % of requested amount
*/

// Every
/*
console.log(movements)
console.log(accounts)

console.log(movements.every(mov => mov > 0))// Return true if all of the elements in the array satisfy the condition. ie if every elements passes the test in our callback 
console.log(movements.every(mov => mov < 5000)) // Every movement is less than 5000
console.log(account4.movements.every(mov => mov > 0)) // Every movement inside account4 is > 0

// separating callback
const deposit = mov => mov > 0 // Implementing DRY principle

console.log(movements.some(deposit)) // return true as some of the mov's are > 0
console.log(movements.every(deposit)) // return false as not every mov's > 0 
console.log(movements.filter(deposit)) // filter out mov's > 0 only
*/

  // Flat and Flat Map method // introduced in ES2019
/*
const arr = [[1,2,3], [4,5,6], 7,8] // suppose we want to take all these elements separated and put together in one big array
console.log(arr.flat()) // flat removes the nested arrays and flattens the array

const arrDeep = [[[1,2],3], [4, [5,6]], 7,8]
// console.log(arrDeep.flat()) // But flat method only goes one level deep. This is two level deep. Can be fixed by depth arg
console.log(arrDeep.flat(2)) // specifying depth to be flattened. By default it is 1 hence always flattening one level

// consider bank want to calculate the overall balance of all the movements of all the accounts

// const accMovements = accounts.map(acc => acc.movements) // We have movements inside each obj of accounts array. So first take all movements to a new array. Use map
// console.log(accMovements)
// const allMov = accMovements.flat() // Now flatten these nestings using flat() method
// console.log(allMov)
// const overallBalance = allMov.reduce((acc, curr)=> acc + curr) // now add all the mov together
// console.log(overallBalance)

// Using flat
const overallBalance = accounts.map(acc => acc.movements).flat().reduce((acc, curr)=> acc + curr, 0) // performing all at once
console.log(overallBalance) // It had become a pretty common operation to use map first then flattening the result. To solve this flatMap was introduced.

// Using flatMap

const overallBalance2 = accounts.flatMap(acc => acc.movements).reduce((acc, curr)=> acc + curr)
console.log(overallBalance2) // flat map only goes one level deep if you need to go deeper than one level use flat method.
*/

  // Sorting Arrays : sort method

// sorting with strings 
const owners = ['Jonas', 'Zach','Adam', 'Martha']

console.log('Before owners :', owners)

console.log(owners.sort()) // It also mutates the orginal array
console.log('After owners :',owners)

// sorting with numbers
const numbers = [3,5,2,5,3]
console.log(numbers.sort())

console.log(movements)
console.log(movements.sort()) // Not sorted because sort() method does sorting based on strings not numbers. So each array element is conveerted to a string.

const arr = [200, 450, -400, 70]
console.log(arr.sort()) // First convert 200 to "200", 450 to "450", -400 to "-400", 70 to "70". Then sort it alphabetically, - comes first always. "200" comes before "70" as "2" less than "7"


movements.sort((a,b)=> { // We can fix this by passing in a compare callback fn into sort() method || return < 0 => A then B // return > 0 => B then A
  
  if(a > b) return 1//Ascending order : small to larger
  if(b > a) return -1
}) // if callback return -ve value then a will be sorted before b, if it return +ve then b will be placed before a. 
console.log(movements)