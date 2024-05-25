/*There are twotype of datatypes
1) primitive :- 7 types
   string,number,boolean, null,undefined,symbol,BigInt*/
const outsideTemp = null;
let userEmail;
const id = Symbol('123')    
const anotherId = Symbol('123')
console.log(id === anotherId);
//const bignumber = 123242762n(eg of BigInt)


/*2) non-primitive (Reference)
   Arays,Objects, Functions*/

   let names = ["Arnav","shishir","Raja"] // Arrays
   let obj= {
      name: "Arnav",
      age:22,
   }// object

   const  myfunction = function(){
    console.log("Hello duniya");
   }

   //*************************************** */
   // memory type
   //stack(pimitive)isme original value ka copy mile ga 
   //heap(non-primitive) isme original value ka reference mile ga