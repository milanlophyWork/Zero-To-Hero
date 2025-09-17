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
};

// Destructuring Arrays : Way of unpacking values from an array or an object into separate variables. It is to 
// break a complex data structure down into a smaller data structure like a variable.

const arr = [2, 3, 4]
const x = arr[0]
const y = arr[1]
const z = arr[2]

const [a,b,c] = arr // Array destructuring instead of above method
console.log(a, b, c)

let [first, , third] = restaurant.categories; // skipping second element in category
console.log(first, third);

// Switching required temp variable earlier but with destructuring it made simple. // Semi colon important

/*
const temp = first;
first = third;
third = temp;
console.log(first, third);
*/

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