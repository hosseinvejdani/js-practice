// Logical Operators with non-boolean 
// Falsy and truthy

// AND -> &&
console.log('&& : ',true && true)

// OR -> ||
console.log('|| : ',true || true)

// NOT -> !
console.log('! : ',true || !true)

// *** Falsy values in js are:
   // undefined
   // null
   // 0 and -0
   // 0n
   // "", '', ``
   // false
   // NaN

//In JavaScript, a truthy value is a value that is considered true when encountered 
//in a Boolean context. All values are truthy unless they are 
// defined as falsy (i.e., except for false, 0, -0, 0n, "", null, undefined, and NaN).
   // any string except ''
   // any number
   // any object
   // any array
   // any function



// Examples of truthy values in JavaScript 
//(which will be coerced to true in boolean
//  contexts, and thus execute the if block):
   // if (true)
   // if ({})
   // if ([])
   // if (42)
   // if ("0")
   // if ("false")
   // if (new Date())
   // if (-42)
   // if (12n)
   // if (3.14)
   // if (-3.14)
   // if (Infinity)
   // if (-Infinity)


// The logical AND operator, &&
// If the first object is truthy, the logical AND operator returns the second operand:
console.log(true && "dog")
// ↪ "dog"

console.log([] && "dog")
// ↪ "dog"


// Examples of falsy values in JavaScript (which are coerced 
//to false in Boolean contexts, and thus bypass the if block):
   // if (false)
   // if (null)
   // if (undefined)
   // if (0)
   // if (-0)
   // if (0n)
   // if (NaN)
   // if ("")

// The logical AND operator, &&
// If the first object is falsy, it returns that object
console.log(false && "dog")
// ↪ false

console.log(0 && "dog")
// ↪ 0
