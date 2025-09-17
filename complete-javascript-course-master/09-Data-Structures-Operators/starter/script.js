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

// 1. Destructuring

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

// NOTE : spread operator is used where we would write values separated by comma
// rest operator is used where we would write variable names separated by comma