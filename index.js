/*
AND(&&) short circuit:
In case of AND, the expression is evaluated until we get one 
false result because the result will always be false,
independent of the further conditions. If there is 
an expression with &&(logical AND), and the first operand 
itself is false, then a short circuit occurs,
the further expression is not evaluated and false is returned.
*/


// example 
false && true && true && false && true // -> false (short circuit occurs)

// but if we add atleast of || operand between operands:
false && true && true && false && true || true // -> true (short circuit break!!)


