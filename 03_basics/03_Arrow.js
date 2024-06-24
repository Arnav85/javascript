// /*Arrow function {()=>} is concise way of writing JavaScript functions in shorter way.*/

const user = {
    username : "Arnav",
    price : 999,
    welcomemessage:function(){
        console.log(`${this.username},welcome to my website`);
    }
}
user.welcomemessage();

const  chai = function() {      // this is normal function
    let username = "Arnav"
    console.log(this);
}

const  one = ()=> {         // this is arrao function 
    let username = "Arnav"
    console.log(this);
}

/*const arrowfunct = (num1,num2) => { this is normal arrow function or explicit return arrow funct
    return num1+ num2;
}*/

const arrowfunct = (num1,num2) => num1+ num2 // this is implicit return arrow function

console.log(arrowfunct(3,4));