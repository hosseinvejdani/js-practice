/* 
**Operator precedence:
Operator precedence determines the order in which operators are evaluated.
Operators with higher precedence are evaluated first.

**Associativity : 
Associativity determines the order in which operators of the same
precedence are processed. For example, consider an expression:

a OP b OP c

Left-associativity (left-to-right) means that it is processed as (a OP b) OP c,
while right-associativity (right-to-left) means it is interpreted as a OP (b OP c). 

src:
http://www-lia.deis.unibo.it/materiale/JS/developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence.html

in the case of logical operators :
Precedence        type           Associativity	   operators
6	               Logical AND	   left-to-right	   … && …
5	               Logical OR	   left-to-right	   … || …

*/

// so the some example is here:
a = b = 5; // same as writing a = (b = 5);
true || true && true && false // -> true

/*
Looking at the code snippets above, 6 / 3 / 2 is the 
same as (6 / 3) / 2 because division is left-associative.
Exponentiation, on the other hand, is right-associative, so
2 ** 3 ** 2 is the same as 2 ** (3 ** 2).



*/