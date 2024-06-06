/*function addtwonumber(number1,number2){
    //let result = number1+number2; // instead of using this we will directly return num1 nd num 2 also
    //return result;
    return number1+number2;
}
const result = addtwonumber(2,7)
console.log("Result", result);*/

// another way to draw a function

function loginusermessage(username){
 if(username=== undefined){   // here if loop is used because in some case id username is undefined then 
                              // it will go in if loop.
    console.log("please enter a user name");
    return;
 }
    return `${username} just logged in`;
} 
console.log(loginusermessage("Arnav"));


function claculatecartprice(... num1){  //...num is rest operator
   return num1;
}
console.log(claculatecartprice(200,400,500,600))