// for of
 const arr = [1,2,3,4,5]
 for(const num of arr){
    //console.log(num);
 }

 const greetings = "Hello world"
 for(const greet of greetings){
    //console.log(`Each char is ${greet}`)
 }
// Maps

const map = new Map()
map.set ("In","INDIA")
map.set ("USA","United State of America")
map.set ("FR","FRANCE")
//console.log(map);
for(const[key,values]of map){
    console.log(key,":-",values)
}