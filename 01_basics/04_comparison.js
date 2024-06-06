console.log("2">1);
console.log(null==0);
console.log(null>0);
console.log(null>=0);
/* The reason is that a equality checker == and comparison >,<,>=,<= work differently
Comparison convert null to a number treating it as a 0
thats why (null>=0) is true and rest of two is false.*/

// === (strict check)
console.log("2"===2)