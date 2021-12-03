// factory function
/*
A factory function is a function that returns a new object.
The following creates a person object named john:
*/

let john = {
   firstName: 'John',
   lastName: 'Doe',
   getFullName() {
       return this.firstName + ' ' + this.lastName;
   }
};

console.log(john.getFullName());

// Suppose that you need to create another similar object called jane, 
// you can duplicate the code as follows:
let jane = {
   firstName: 'Jane',
   lastName: 'Doe',
   getFullName() {
       return this.firstName + ' ' + this.lastName;
   }
};

console.log(jane.getFullName());

/*
The more object you want to create, the more duplicate code you need to copy.

To avoid copying the same code all over again and again, you can develop a
 function that creates the person object:
*/

function createPerson(firstName, lastName) {
   return {
       firstName: firstName,
       lastName: lastName,
       getFullName() {
           return firstName + ' ' + lastName;
       }
   }
}

let john = createPerson('John', 'Doe'),
    jane = createPerson('Jane', 'Doe');

console.log(john.getFullName());
console.log(jane.getFullName());

/*
With the factory function, you create any number of the person objects
you want without duplicating code.
*/

