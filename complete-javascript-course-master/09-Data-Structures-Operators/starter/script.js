'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex, mainIndex){ // accept 2 parameters one index for starter menu and one index for main menu. 
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]] 
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderPizza : function(mainIngredient, ...otherIng){
    console.log(mainIngredient)
    console.log(otherIng)
  }
};

    // Destructuring Arrays : Way of unpacking values from an array or an object into separate variables. It is to 
    // break a complex data structure down into a smaller data structure like a variable.
/*

const arr = [2, 3, 4]
const x = arr[0]
const y = arr[1]
const z = arr[2]

const [a,b,c] = arr // Array destructuring instead of above method
console.log(a, b, c)

let [first, , third] = restaurant.categories; // skipping second element in category
console.log(first, third);

// Switching required temp variable earlier but with destructuring it made simple. // Semi colon important


// const temp = first;
// first = third;
// third = temp;
// console.log(first, third);


[first, third] = [third, first];
console.log(first, third);

console.log(restaurant.order(2,0)) // return starterMenu[2] and mainMenu[0]

// Receive 2 return values from a function
const [food1, food2] = restaurant.order(2,0)// destructuring
console.log(food1, food2)

// Nested destructuring
const nested = [2, 4, [5, 6]]
const [val1, ,val2] = nested
console.log(val1, val2) // taking values 2 and array out

const [i, , [j, k]] = nested // taking values 2, and 5,6 (ie values inside array) out // destructuring inside of destructuring to get values of nested array
console.log(i,j,k)

// Default Values // setting default values for variables when we are extracting them . Useful in case if we don't know the actual length of array
const [p=1, q=1, r=1] = [8,9]
console.log(p, q, r) // If no default values are given then r returns undefined
*/

    // Rest pattern and parameters

/* Rest pattern has same syntax as spread operator (...) but it does the opposite of spread operator.

    Use cases of spread operator :
    
      1. To build new arrays
        const a = [1,2] , const b = [...a, 3,4]
      2. To pass multiple values to a fn. 
        For eg : Let  fn be function orderFd(a,,b,c){...} and dishes = ['dish1', 'dish2', 'dish3'] then fn  can be called as orderFd(...dishes)
      

    rest pattern uses the same syntax to collect multiple elements and condense them into an array. spread operator is to unpack an array while
    rest is to pack elements into an array.

    With spread we expand array and with rest we compress into array 

*/

    // Rest Pattern in :  1. Destructuring
/*
// Spread operator because ... on right side of =
const arr = [1,2, ...[3,4]]
console.log(arr) // 3,4 to individual elements (not inside array)

// Rest operator :: We can use ... on left side of = along with destructuring
const [a,b, ...others] = [1,2,3,4,5]
console.log(others) // 3,4,5 into an array

const [ pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ... restaurant.starterMenu] // spread operator here , rest operator in other food
console.log(pizza, risotto, otherFood) // Destructuring first and third element of mainMenu and rest of food in starterMenu to otherFood. Other food include rest of elements not the skipped elements
// So rest element must be the last element

// Within Objects // Remaining elements will be collected into a new object not array

const {sat, ...weekdays} = restaurant.openingHours
console.log(sat, weekdays)

// 2. Functions

const add = function(...numbers){ // cld as Rest parameter : Takes multiple values then pack them into an array
  console.log(numbers)
  let sum = 0
  for(let i=0 ; i<numbers.length; i++){ // numbers will be a array as rest operator compress values into an array 
    sum += numbers[i]
  }
  console.log(sum)
}

add(2,3)
add(5,3,7,2) // cld rest arguments

const x = [23, 5, 7] // To find sum of these use spread operator . We are spreading these numbers of array 
add(...x) // This is spread operator as we split array elements (expanded 1 array to 3 values) // Then rest operator compress 3 values to 1 array & calculate sum

// rest arguments in restaurant object:
restaurant.orderPizza('mushrooms','onion','olives', 'spinach')
restaurant.orderPizza('mushrooms')

// NOTE : spread operator is used where we would write values separated by comma // rest operator is used where we would write variable names separated by comma
*/

    // Short circuiting(&& and ||)

// Logical operators can use any datatype, return any datatype, they do short-circuiting or short circuit evaluation

console.log('------OR------')

/*
console.log(3 || 'Jonas') // Result of OR operator doesn't always have to be a boolean 
// For or operators short circuiting means that if first value is a truthy value it won't evaluate other but return the first value as OR needs atleast one value true to return true
console.log('' || 'Jonas') // '' is a falsy value so jonas displayed
console.log(true || 0) // true 
console.log(undefined || null) // return null // undefined is a falsy value and also null If all are falsy it return last value

console.log(undefined || 0 || '' || 'Hello' || 23 || null) // shortcircuit the evaluation and return Hello as it is the first truthy value appeared.
console.log(false || undefined || null || '' || 0 || NaN) // All falsy so return last value

// restaurant.numGuests = 23 // If set to zero it won't work but return 10 because 0 is a falsy value
const guests1 = restaurant.numGuests ?  restaurant.numGuests : 10// We want to define a variable based on number of guests. And we want to set a default value if it doesn't exist
console.log(guests1)

const guests2 = restaurant.numGuests || 10// instead ternary we can use OR
console.log(guests2)
*/
console.log('------AND------') // Short-circuit works opposite of OR operator
/*
console.log(0 && 'Jonas')  // return 0 // AND return true if both are true, It return first falsy value it encounters. If first operand is falsy it doesn't even check the second one.
console.log(7 && 'Jonas')  // return Jonas // If both truthy return last value
console.log('Hello' && 23 && null && 'Jonas' ) // null

if(restaurant.orderPizza){
  restaurant.orderPizza('mushrooms', 'spinach')
}

// instead of if use AND

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach') // It checks if restaurant.orderPizza exists, if yes evaluate restaurant.orderPizza('mushrooms', 'spinach'). If false nothing happens.

// For practical applications, OR can be used to set default values and AND operator to execute code the second operand if first one is true
*/

    // Nullish Coalescing Operator (??) // introduced in ES2020
/*
restaurant.numGuests = 0 // OR operator considers this as false as zero (falsy value) is assigned and return 10. Use ?? to solve this
const guests = restaurant.numGuests || 10
console.log(guests)

// Nullish values : null , undefined 
const guestCorrect = restaurant.numGuests ?? 10 // First non-nullish value is returned.
console.log(guestCorrect) // Return 0 the correct num of guests // Nullish coalescing operator work with concept of nullish values instead of falsy values. [So zero, empty string won't affect only null and undefined gives default value 10] 
*/

    // Optional Chaining

/*
// Suppose we don't know if the restaurant has opening hours and if is open in monday or not 
if(restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open) // if monday opens return the opening hours

if(restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open) // If friday opens return the openingHour

// With optional chaining [?.] if a certain property does not exist then undefined is returned immediately.
console.log(restaurant.openingHours.mon ?. open) // If property before ? exists (based on nullish property) then only property after ? is checked. Here only if monday exists it checks if it is open.
// Mon not exists so undefined is returned 

console.log(restaurant.openingHours?.mon?.open)// Can have multiple optional chaining // Check if openingHours exist , if yes then check if monday exists if yes, then open

  // Example

const days = ['mon', 'tue','wed','thu','fri','sat','sun']
for(const day of days){ // Directly gives the value not the index, If need index also for(const [index,day] of days.entries()){console.log(index, day)}
 // const open =  restaurant.openingHours[day]?.open || 'closed' // Using or consider 0 as falsy so we get closed at saturday solve using ?? 
 const open = restaurant.openingHours[day]?.open ?? 'closed' // .day is not used because its not aproperty name of restaurant. To use variable name as property name use bracket notation
 console.log(`On ${day}, we open at ${open}`)
}
for(const index in days){
  // console.log(index)
}

for(const [day,index] of days.entries()){
  // console.log(day, index)
}

  // Optional Chaining on Methods : WE can check a method actually exists before we call it

console.log(restaurant.order ?. (0,1) ?? 'Method does not exist') // Checking if method order exist if do call its 0th and 1st value ow return the string

  // Optional Chaining on Arrays

const users = [
  {name : 'Jonas', email : 'hello@jonas.io'}
]

console.log(users[0]?.name ?? 'User array empty') // zero'th value of users if exists return its name , if no name is defined return the string
console.log(users[1]?.name ?? 'User array empty')// ?. prevents runtime errors when accessing nested properties. ?? ensures default value only when the left side is null or undefined.
*/

    // Looping Objects : Object keys, values and entries

/*
// We can also loop over objects which are not iterable. But in an indirect way

// Property Names [keys]
const {openingHours} = restaurant // destructuring // same as direct assingning => const openingHours = restaurant.openingHours

const properties = Object.keys(openingHours) // Object.keys returns an array with keys of openingHours as its values. This array is looped. ie indirect looping of objects after making it an array
console.log(properties)

let openStr = `We are open on ${properties.length} days: `

for(const day of properties){
  openStr += `${day}, `
}
console.log(openStr)
// Property Values
const values = Object.values(openingHours)
console.log(values) // Can loop over it as shown above

// Looping over entire object // ie both key and value together
const entries = Object.entries(openingHours)// To loop over the entire object we need the entries [entries => names + values together ie index and element for array key and value for object ]

// for(const [key, value] of entries){
//   console.log(key)
//   console.log(value) // value is an obj so can be destructured there itself as below
// }

for(const [day , {open, close}] of entries){ // day => key , value obj => {open, close}
  console.log(`On ${day}, we open at ${open} and close at ${close}`)
}
*/

    // Sets : In sets order of values doesn't matter
  
const ordersSet = new Set(['Pasta', 'Pizza', 'Pasta','Risotto', 'Pizza'])// Set is basically a collection of unique values. ie it can never have any duplicates.
console.log(ordersSet) // Sets are iterable like arrays // Methods used : add(), has(), delete(), clear()

console.log(new Set('Milan'))
console.log(ordersSet.size) // size of set using size property // size is similar to length in arrays

const arr = [1,2,2,3,4,5,4]
const uniqueArr = new Set(arr)
console.log(uniqueArr)

console.log(ordersSet.has('Pizza')) // to check if a certain element is in a set
console.log(ordersSet.has('Bread')) // has method is similar to includes method in arrays

ordersSet.add('Garlic bread') // Add new element to set
ordersSet.add('Garlic bread')

ordersSet.delete('Risotto') // Deleting elements // Similar to splice method in arrays
// ordersSet.clear() // To delete all elements from set

console.log(ordersSet) // One of them is added as no duplicates

// Retrieving values from set // In sets there are no indexes like arrays. So no way of getting values. Well, if 
// sets has no duplicate elements and order of elements doesn't matter then there is no point of getting values from a set

for(const order of ordersSet){// sets are iterable so we can loop over them
  console.log(order)
}

// Example // Usecase of sets : To remove duplicate values of arrays

const staff = ['Waiter', 'Chef', 'Waiter','Manager', 'Chef','Cashier', 'Waiter'] // Instead of staff we just wanna know the positions available in restaurant. Just make set of the array

const positions = new Set(staff)
console.log(positions) 

const position = [...new Set(staff)]// But we want this to be an array so use spread Operator. As ... works on all iterables.
console.log(position) 
// ... expands elements , [] collect them into an array. ... can only be used in 3 places : inside array literals const a = [...arr,4,5] and inside fn calls fnName(...arr), object literals const a = {...obj, age : 21}
// Rest in array destructuring const [a, ...other] = [1, 2, 3], obj destructuring const {a, ...rest} = {name : 'Mil', age : 21}, fn parameters fn print(first, ...others){....}

console.log(new Set(['Milan', 'Helan','Heaven', 'Milan', 'Helan']).size) // If we only wanna know number of unique positions [no unique elements creation required]
console.log(new Set("Milan").size) // To count how many letters in a string // Because string is also an iterable