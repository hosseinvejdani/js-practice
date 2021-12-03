// primitivs vs reference types

/*
In JavaScript, a variable may store two types of values: primitive and reference.

JavaScript provides six primitive types as undefined, null, boolean, 
number, string, and symbol , and a reference type object.

The size of a primitive value is fixed, therefore, JavaScript stores 
the primitive value on the stack.

On the other hand, the size of a reference value is dynamic so JavaScript 
stores the reference value on the heap.

When you assign a value to a variable, the JavaScript engine will determine
whether the value is a primitive or reference value.

If the value is a primitive value, when you access the variable, you manipulate 
the actual value stored in that variable. In other words, the variable that stores
 a primitive value is accessed by value.

Unlike a primitive value, when you manipulate an object, you work on the 
reference of that object, rather than the actual object. It means a variable 
that stores an object is accessed by reference.

*/

// primitives are copied by thier value
// objects are copied by thier reference


// example 1 :

// in the case of primitives:
let x = 10;
let y = x;

x = 5;

console.log(x,y); // return 5  10

// but in the case of objects:
let obj1 = {
  value:10
};

let obj2 = obj1;

obj1.value = 5;

console.log(obj1,obj2) // -> { value: 5 } { value: 5 }

// primitives are copied by thier value
// objects are copied by thier reference


// example 2 :

// in the case of primitives the value copied in argument:

x = 10;

function increment(num){
  return num++;
}

increment(x)

console.log(x); // -> 10


// but in the case of objects the reference of obj are copied in argument
// so, if we manipulate values of object in functions you should know that 
// the original obj will be changed.
x = {value : 10};

function incrementObjectValue(obj){
  return obj.value++;
}

incrementObjectValue(x)
console.log(x); // -> { value: 11 }