// factory function
// this is factory function 

// the name of construture function set based on camel notation

function createPerson(firstName, lastName) {
   return {
       firstName: firstName,
       lastName: lastName,
       getFullName() {
           return firstName + ' ' + lastName;
       }
   }
}

let john = createPerson('John', 'Doe');

console.log(john.getFullName());

/*
With the constructor function, you create any number of the person objects
you want without duplicating code.
*/
// the name of constructor function set based on pascal notation
function Person(firstName, lastName) {
   this.firstName = firstName;
   this.lastName = lastName;
   this.fullName = function() {
     return this.firstName + " " + this.lastName;
   };
 }

 let jack = new Person('jack', 'Doe');

 console.log(jack.fullName());
