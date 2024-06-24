// IIFE = Immediately invoked function expressions
 /*global scope ke pollution se problem occur hota hai many times
   so uske variable ya pollution ko hatane k liye humlog iffi ka use krte h*/

   (function one(){
    console.log(`DB CONNECTED`)
   })();

   ((name)=>{
    console.log(`DB CONNECTED TWO ${name}`)
   })("Arnav")
