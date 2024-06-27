// In Truthy value we will assume that the value which present in string is True.
const useremail = "arn@gmail.com"
if(useremail){
    console.log("got ueser email");
}
else{
    console.log("Dont have user email");
}

// Falsy Values

 //false, 0 ,-0,NaN,BigInt 0n , "",null,undefined

 //Trutty Values

 //"0","false"," ",[],{},function(){}


 if(useremail.length===0){        // way to check array is empty or not
    console.log("Array is empty");
 }

 const emptyobj = {}
 if(Object.keys(omptyobj).length === 0){  // way to check object is empty or not
    console.log("object is empty");
 }


 // Nullish collision operator(??): null undefined

 let val1;
 val1 = 5??10,
 val1 = undefined ?? 15,
 val1 = null ?? 10 ?? 20

 //terniary operator
  condition ? True:false
  const Iceteaprice = 100
   Iceteaprice <= 80 ? console.log("less than 80"):console.log("more than 80")

