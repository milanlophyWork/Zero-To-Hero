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

  //  2. Filter method

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

  // 3. Reduce method