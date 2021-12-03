// for in loop
/*
The for...of statement creates a loop iterating over iterable objects, 
including: built-in String, Array, array-like objects (e.g., arguments
or NodeList), TypedArray, Map, Set, and user-defined iterables.

syntax is here

for (variable of iterable) {
  statement
}

*/
//============================================
//Iterating over an Array
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

// expected output: "a"
// expected output: "b"
// expected output: "c"

//============================================
//Iterating over a String
const iterable = 'boo';

for (const value of iterable) {
  console.log(value);
}
// "b"
// "o"
// "o"


//============================================
// Iterating over a Map
const iterable = new Map([['a', 1], ['b', 2], ['c', 3]]);

for (const entry of iterable) {
  console.log(entry);
}
// ['a', 1]
// ['b', 2]
// ['c', 3]

for (const [key, value] of iterable) {
  console.log(value);
}
// 1
// 2
// 3


//============================================
//Iterating over a Set
const iterable = new Set([1, 1, 2, 2, 3, 3]);

for (const value of iterable) {
  console.log(value);
}
// 1
// 2
// 3


//============================================
// Iterating over the arguments object
// You can iterate over the arguments object to 
// examine all of the parameters passed into a JavaScript function:
(function() {
   for (const argument of arguments) {
     console.log(argument);
   }
 })(1, 2, 3);
 
 // 1
 // 2
 // 3

 /*
 Difference between for...of and for...in
Both for...in and for...of statements iterate over something.
The main difference between them is in what they iterate over.

The for...in statement iterates over the enumerable properties of an object.

The for...of statement iterates over values that the iterable object defines to be iterated over.
 */