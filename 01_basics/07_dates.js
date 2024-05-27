// dates

//let myDate = new Date();
//console.log(myDate)
//console.log(myDate.toString())
//console.log(typeof myDate)

//let mycreateddates = new Date(27,0,2024)
//let mycreateddates = new Date("2024-06-27")
let mycreateddates = new Date("06-28-23")
//console.log(mycreateddates.toLocaleString())
let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(mycreateddates.getTime());
console.log(Math.floor(Date.now()/1000))

let newdate = new Date()
console.log(newdate)
console.log(newdate.getMonth()+1);
console.log(newdate.getDay());

newdate.toLocaleString('default',{
  weekday: "long" 
})