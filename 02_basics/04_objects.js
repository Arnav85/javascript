//const linkedin = new Object() // this is singleton object
const linkedin = {} // and this is non singleton object
console.log(linkedin);
linkedin.username = "abcd"
linkedin.name = "arnav"
linkedin.lastloggedin = ("04-06-2024")
console.log(linkedin);
 
const regularuser = {           // here we use nested object i.e object within object
    email:"arnav@gmail.com",
    fullname:{
       userfullname:{ 
       firstname:"arnav",
       lastname: "kumar"
       }
    }
}
console.log(regularuser.fullname.userfullname); // nested object me se kisi ek specific value ko print krwata hai

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a", 4:"b"}
//const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}   // way to print two or more object in a single one 
console.log(obj3);

const users = [
      
    {
        id:1,
        email:"a@gmail.com"
    },
      
    {
        id:1,
        email:"a@gmail.com"
    },
    
    {
        id:1,
        email:"a@gmail.com"
    },
]
users[1].email    // by using this we can fetch data from nested object
console.log(linkedin)
console.log(Object.keys(linkedin));
console.log(Object.values(linkedin));
console.log(Object.entries(linkedin)); 


const course = {
     coursename : "js in hindi",
     price : "999",
     courseInstructor : "Hitesh",
}
const{courseInstructor} = course  // this syntax is used for destructuring
console.log(courseInstructor)

[
    {},
    {},
    {}
]