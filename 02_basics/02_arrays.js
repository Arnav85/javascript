const marvels_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]
//const allheros = marvels_heros.concat(dc_heros)
const allheros = [...marvels_heros,...dc_heros]
console.log(allheros);

console.log(Array.isArray("arnav"))
console.log(Array.from("Arnav"))
console.log(Array.from({name: "Arnav"})) /*here we have to give key i.e. which value we 
                                           want to change*/
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))                                    
