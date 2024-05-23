const accountId = 12435
let email = "singh@gmail.com"
var password =987469; /* prefer not to use var because of issue
                         in block scope and functional scope*/ 
accountcity = "patna"
// accountId = 2// changing constant is not allowed
 console.log(accountId)
 email = "opentowork@gmail.com"
 password = "dontknow"
 accountcity = "Banglore"
 console.table([accountId,email,password,accountcity])
 
