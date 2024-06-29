const mynums = [1,2,3,4,5,6,7,8,9,10]
//const newnums = mynums.filter((nums)=> nums>4) // Array printing using filter method
//console.log(newnums)

// Array printing using foreach loop
 
const newNums=[]
mynums.forEach( (nums)=>{
    if(nums>4)
        newNums.push(nums)
})
console.log(newNums);

 