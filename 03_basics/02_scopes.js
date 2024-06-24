/*Scope determines the accessibility of variables, objects, 
and functions from different parts of the code.*/


let a = 300   // values which are written outside the curluy bracess is said as global scope

if(true){       // values writte inside curly bracess is known as block scope
let a = 10
const b = 20
console.log("INNER:",a);
  //var c = 30;
}
 console.log(a);
 //console.log(b);
 //console.log(c);