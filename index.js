// Object basics in js

// example 1 
const car = {type:"Fiat", model:"500", color:"white"};

console.log(car.type)
console.log(car.color)
// or
console.log(car['model'])
console.log(car['color'])

// example 2 (A method is a function stored as a property.)
const person = {
   firstName: "John",
   lastName : "Doe",
   id       : 5566,
   fullName : function() {
     return this.firstName + " " + this.lastName;
   }
};

fullName = person.fullName() // calling method
console.log(fullName)

/*
The <this> Keyword
In a function definition, this refers to the "owner" of the function.

In the example above, this is the person object that "owns" the fullName function.

In other words, this.firstName means the firstName property of this object.
*/