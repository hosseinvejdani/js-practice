/*
OR(||) short circuit: In case of OR, the expression is evaluated 
until we get one true result because the result will 
always be true, independent of the further conditions. 
If there is an expression with ||(logical OR), and the 
first operand itself is true, then a short circuit occurs, 
evaluation stops, and false is returned.
*/



// First operand is true and operator is ||, 
// evaluation stops and true is returned.
console.log(true || false || false)
  
// Evaluation stops at the second operand(true).
console.log(false || true || true || false)