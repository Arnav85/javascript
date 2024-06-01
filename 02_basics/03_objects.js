// contructor

//object Literals

const mysym = Symbol("key1")
const jsUsers={
    name: "Arnav",
    "full name" : "Arnav Singh",
    [mysym]:"mykey1",
    age:22,
    email:"singh@gmail.com",
    isLoggedin:true,
    lastLoginDays:["Monday","Saturday"]
}
console.log(jsUsers.email)
console.log(jsUsers["email"]) // the 2nd one is new way to access objects
console.log(jsUsers["full name"])
console.log(typeof(mysym))
console.log(jsUsers["lastLoginDays"])
//Object.freeze(jsUsers);
jsUsers.lastLoginDays = ["tuesday","sunday"]
jsUsers.greeting = function(){
    console.log("Hello js users");
}
jsUsers.greetingTwo = function(){
    console.log(`Hello js users,${this.name}`); /*this function is used to refer the object or
                                                 to getting properties of that object*/
}
console.log(jsUsers.greeting());
console.log(jsUsers.greetingTwo());
